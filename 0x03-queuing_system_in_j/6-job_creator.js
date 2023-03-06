import { createQueue } from 'kue';

const push_notification_code = createQueue();

const job = push_notification_code.create('push_notification_code', {
  phoneNumber: '+2349030203747',
  message: 'I am coming',
}).save( function(err){
  if (!err) console.log(`Notification job created: ${job.id}`);
});

job.on('complete', function(result){
  console.log('Notification job completed');
  }
)

job.on('failed', function(errorMessage){
  console.log('Notification job failed');
  }
)
