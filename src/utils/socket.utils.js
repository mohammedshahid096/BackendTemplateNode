const { getSocketIO } = require("../../socket.io");
const logger = require("../config/logger.config");
const { admin_emit_listeners } = require("../constants/socket.constants");

const emitNotificationToAdmin = ({ notificationData }) => {
  const io = getSocketIO();
  logger.info("utils - emitNotificationToAdmin - Start");
  if (io) {
    let admin_name_room = "edu_excellence_admin";
    const isEmitted = io
      .to(admin_name_room)
      .emit(admin_emit_listeners.adminNotification, {
        ...notificationData,
        timestamp: new Date(),
      });
    logger.info("utils - emitNotificationToAdmin - End");
    return isEmitted;
  } else {
    logger.info(
      "utils - emitNotificationToAdmin - Error (Socket.IO instance not available)",
      error
    );
    return false;
  }
};

module.exports = {
  emitNotificationToAdmin,
};
