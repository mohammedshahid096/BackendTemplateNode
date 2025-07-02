const cron = require("node-cron");

const runCronSchedulerFunction = () => {
  cron.schedule(
    "0 6 * * *",
    () => {
      console.log("Running daily job at 6 AM");
      // calling the  function
    },
    {
      timezone: "Asia/Kolkata",
    }
  );
};

module.exports = {
  runCronSchedulerFunction,
};
