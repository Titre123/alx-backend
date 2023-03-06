const kue = require('kue');

const push_notification_code_2 = kue.createQueue();

const sendNotification = (phoneNumber, message, job, done) => {
  // if (phoneNumber == '4153518780' || phoneNumber == '4153518781') {
  //   job.fail(new Error('Phone number PHONE_NUMBER is blacklisted'));
  // }
  // else {
  //   job.on('progress', (progress, data) => {
  //     if (progress == '50') {
	//       console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
  //       done();
  //     }
  //   })
  // }
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
}
push_notification_code_2.process('push_notification_code_2', 2, (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message, job, done);
})
