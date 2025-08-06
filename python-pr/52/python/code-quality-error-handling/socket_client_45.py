# {fact rule=code-quality-error-handling@v1.0 defects=0}
def connect_socket(host, port):
    import socket
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.connect((host, port))
        return sock
    except socket.error as e:
        print(f"Socket error: {e}")
        return None
# {/fact}