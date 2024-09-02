const cron = require('node-cron');
const User = require('../models/User');

cron.schedule('0 9 * * *', async () => {
  const users = await User.find();
  users.forEach(user => {
    console.log(`Sending reminder to ${user.email} about prenatal appointment.`);
    // You would send email/SMS here
  });
});
