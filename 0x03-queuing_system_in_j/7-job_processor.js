const kue = require('kue');

const blacklisted = ['4153518780', '4153518781']

const push_notification_code_2 = kue.createQueue();

const sendNotification = (phoneNumber, message, job, done) => {
  if (phoneNumber in blacklisted) {
    job.failed().error('failed');
  }
  else {
    job.on('progress', (progress, data) => {
      if (progress.toString() == '50') {
	console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
      }
    })
  }
}
push_notification_code_2.process('push_notification_code_2', (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message, job, done);
  sendNotification(job.data.phoneNumber, job.data.message, job, done);
})
