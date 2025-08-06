# {fact rule=code-quality-error-handling@v1.0 defects=1}
def connect_socket(host, port):
    import socket
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.connect((host, port))
    return sock
# {/fact}