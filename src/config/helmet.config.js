const helmet = require("helmet");

const helmetConfig = helmet({
   hidePoweredBy: true,
  contentSecurityPolicy: true,
  xssFilter: true,
  noSniff: true,
  referrerPolicy: { policy: "no-referrer" },
  frameguard: { action: "deny" },
});

module.exports = helmetConfig;
