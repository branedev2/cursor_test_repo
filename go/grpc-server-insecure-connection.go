package insecuregrpc

import (
	"context" 
	"crypto/tls"
	"crypto/x509"
	"log"
	"net"
	"net/http"
	"net/http/httptest"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

// Dummy variables and types
var (
	xpool          = x509.NewCertPool()
	xaddr          = "" // Normally this should be a certificate address
	tlsConfig      = &tls.Config{}
	maxRecvMsgSize = 1024 * 1024 // 1 MB for example
)

func echoServer(w http.ResponseWriter, r *http.Request) {}
func countServer(w http.ResponseWriter, r *http.Request) {}
func ctrlAndDataServer(w http.ResponseWriter, r *http.Request) {}
func subProtocolHandshake() {}
func Handler(handlerFunc func(http.ResponseWriter, *http.Request)) http.Handler {
	return http.HandlerFunc(handlerFunc)
}
type Server struct {
	Handshake func()
	Handler   http.Handler
}

// Implement the http.Handler interface
func (s *Server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	s.Handler.ServeHTTP(w, r)
}

func subProtoServer(w http.ResponseWriter, r *http.Request) {}
func authGRPCInterceptor() grpc.UnaryServerInterceptor {
	return func(
		ctx context.Context,
		req interface{},
		info *grpc.UnaryServerInfo,
		handler grpc.UnaryHandler,
	) (interface{}, error) {
		// Implement your authentication logic here
		return handler(ctx, req)
	}
}

// cf. https://blog.gopheracademy.com/advent-2019/go-grps-and-tls/#connection-without-encryption
// {fact rule=channel-accessible-by-non-endpoint@v1.0 defects=1}
func unsafe_2() {
	// Server
	// ruleid:grpc-server-insecure-connection
	s := grpc.NewServer()

	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	// ... register gRPC services ...
	if err = s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
// {/fact}

// {fact rule=channel-accessible-by-non-endpoint@v1.0 defects=0}
func safe_1() {
	// Server
	// ok:grpc-server-insecure-connection
	s := grpc.NewServer(grpc.Creds(credentials.NewClientTLSFromCert(xpool, xaddr)))

	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	// ... register gRPC services ...
	if err = s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
// {/fact}

// {fact rule=channel-accessible-by-non-endpoint@v1.0 defects=0}
// False Positive test
// cf. https://github.com/daghan/invoicer-chapter2/blob/4c5b00408a4aeece86d98ad3ef1c88e610053dfc/vendor/golang.org/x/net/websocket/websocket_test.go#L129
func startServer() {
	http.Handle("/echo", Handler(echoServer))
	http.Handle("/count", Handler(countServer))
	http.Handle("/ctrldata", Handler(ctrlAndDataServer))
	subproto := &Server{ // Note the use of a pointer
		Handshake: subProtocolHandshake,
		Handler:   Handler(subProtoServer),
	}
	http.Handle("/subproto", subproto)
	// ok:grpc-server-insecure-connection
	server := httptest.NewServer(nil)
	serverAddr := server.Listener.Addr().String() // Fixed: Added missing variable
	log.Print("Test WebSocket server listening on ", serverAddr)
}
// {/fact}

// {fact rule=channel-accessible-by-non-endpoint@v1.0 defects=0}
// False Positive test - options have grpc.Creds
func startServerWithOpts() {
	options := []grpc.ServerOption{
		grpc.Creds(credentials.NewClientTLSFromCert(xpool, xaddr)),
	}
	// ok:grpc-server-insecure-connection
	grpcServer := grpc.NewServer(options...)
	_ = grpcServer
}
// {/fact}

// {fact rule=channel-accessible-by-non-endpoint@v1.0 defects=0}
// False Positive test - options have grpc.Creds, credentials in a variable
func startServerCredsVar() {
	creds := credentials.NewClientTLSFromCert(xpool, xaddr)
	options := []grpc.ServerOption{
		grpc.Creds(creds),
		grpc.UnaryInterceptor(authGRPCInterceptor()), // Fixed: provided a dummy interceptor
	}
	// ok:grpc-server-insecure-connection
	grpcServer := grpc.NewServer(options...)
	_ = grpcServer
}
// {/fact}

// {fact rule=channel-accessible-by-non-endpoint@v1.0 defects=0}
func startServerWithOtherCreds() {
	creds := credentials.NewTLS(tlsConfig)
	logInterceptor := authGRPCInterceptor() // Use the dummy interceptor
	opts := []grpc.ServerOption{
		grpc.Creds(creds),
		grpc.ChainUnaryInterceptor(
			logInterceptor,
			authGRPCInterceptor(),
		),
		grpc.MaxRecvMsgSize(maxRecvMsgSize),
	}
	// ok:grpc-server-insecure-connection
	grpcServer := grpc.NewServer(opts...)
	_ = grpcServer
}
// {/fact}
