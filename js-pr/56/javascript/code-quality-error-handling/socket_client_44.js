// {fact rule=code-quality-error-handling@v1.0 defects=0}
function connectSocket(host, port) {
    const net = require('net');
    try {
        const socket = new net.Socket();
        socket.on('error', (error) => {
            console.error('Socket error:', error.message);
        });
        socket.connect(port, host);
        return socket;
    } catch (error) {
        console.error('Socket creation error:', error.message);
        return null;
    }
}
// {/fact}