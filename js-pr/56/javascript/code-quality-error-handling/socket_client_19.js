// {fact rule=code-quality-error-handling@v1.0 defects=1}
function connectSocket(host, port) {
    const net = require('net');
    const socket = new net.Socket();
    socket.connect(port, host);
    return socket;
}
// {/fact}