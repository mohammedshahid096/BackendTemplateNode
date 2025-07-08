const app = require("./app");
const logger = require("./src/config/logger.config");
const { SERVER_PORT, DEVELOPMENT_MODE } = require("./src/config/index.config");
const { initializeSocketServer } = require("./socket.io");

function startServerWithSocketIo(){
   const httpServer = createServer(app);
  initializeSocketServer(httpServer);
  httpServer.listen(SERVER_PORT, () => {
    console.log("Server Mode : ", DEVELOPMENT_MODE);
    console.log("server is started", SERVER_PORT);
    logger.info(`Server Mode : ${DEVELOPMENT_MODE}`);
    logger.info(`Server is running on  : http://localhost:${SERVER_PORT}`);
    console.log(`Server is running on  : http://localhost:${SERVER_PORT}`);
  });
}

function startServer() {
  app.listen(SERVER_PORT, () => {
    console.log("Server Mode : ", DEVELOPMENT_MODE);
    console.log("server is started", SERVER_PORT);
    logger.info(`Server Mode : ${DEVELOPMENT_MODE}`);
    logger.info(`Server is running on  : http://localhost:${SERVER_PORT}`);
    console.log(`Server is running on  : http://localhost:${SERVER_PORT}`);
  });
}

startServer();
