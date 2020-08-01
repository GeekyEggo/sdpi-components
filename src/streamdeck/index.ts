import connection from "./connection";

// bind the registration to the connection
window.connectElgatoStreamDeckSocket = connection.register.bind(connection);
