const api = {
  protocol: process.env.REACT_APP_API_PROTOCOL || "http",
  host: process.env.REACT_APP_API_HOST || "localhost",
  port: process.env.REACT_APP_API_PORT || 80,
  prefix: process.env.REACT_APP_API_PREFIX || "",
};

const socket = {
  protocol: process.env.REACT_APP_SOCKET_PROTOCOL || "ws",
  host: process.env.REACT_APP_SOCKET_HOST || "localhost",
  port: process.env.REACT_APP_SOCKET_PORT
    ? ":" + process.env.REACT_APP_SOCKET_PORT
    : "",
};

// publish
// export default {
//   api: `${api.protocol}://${api.host}${api.prefix}`,
//   socket: `${socket.protocol}://${socket.host}`,
// };

// local
export default {
  api: `${api.protocol}://${api.host}:${api.port}${api.prefix}`,
  socket: `${socket.protocol}://${socket.host}${socket.port}`,
};
