use openssl::ssl::{SslMethod, SslConnectorBuilder, SSL_VERIFY_NONE};

let mut connector = SslConnectorBuilder::new(SslMethod::tls()).unwrap();

// {fact rule=improper-certificate-validation@v1.0 defects=1}
// ruleid: ssl-verify-none
connector.builder_mut().set_verify(SSL_VERIFY_NONE);
// {/fact}

// {fact rule=improper-certificate-validation@v1.0 defects=0}
// ok: ssl-verify-none
connector.builder_mut().set_verify(SSL_VERIFY_PEER);
// {/fact}

let openssl = OpenSsl::from(connector.build());
