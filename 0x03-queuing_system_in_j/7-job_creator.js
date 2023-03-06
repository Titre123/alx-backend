import { createQueue } from 'kue';

const push_notification_code_2 = createQueue();

const jobs = [
	  {
		      phoneNumber: '4153518780',
		      message: 'This is the code 1234 to verify your account'
		    },
	  {
		      phoneNumber: '4153518781',
		      message: 'This is the code 4562 to verify your account'
		    },
	  {
		      phoneNumber: '4153518743',
		      message: 'This is the code 4321 to verify your account'
		    },
	  {
		      phoneNumber: '4153538781',
		      message: 'This is the code 4562 to verify your account'
		    },
	  {
		      phoneNumber: '4153118782',
		      message: 'This is the code 4321 to verify your account'
		    },
	  {
		      phoneNumber: '4153718781',
		      message: 'This is the code 4562 to verify your account'
		    },
	  {
		      phoneNumber: '4159518782',
		      message: 'This is the code 4321 to verify your account'
		    },
	  {
		      phoneNumber: '4158718781',
		      message: 'This is the code 4562 to verify your account'
		    },
	  {
		      phoneNumber: '4153818782',
		      message: 'This is the code 4321 to verify your account'
		    },
	  {
		      phoneNumber: '4154318781',
		      message: 'This is the code 4562 to verify your account'
		    },
	  {
		      phoneNumber: '4151218782',
		      message: 'This is the code 4321 to verify your account'
		    }
];

for (let i = 0; i < jobs.length; i++) {
  const name = `push_notification_code_${i+ 2}`;
  const new_job = push_notification_code_2.create(name, jobs[i]).save((err) => {
    if (!err) console.log(`Notification job created: ${new_job.id}`);
  });
  new_job.on('complete', function(result){
     console.log(`Notification job ${new_job.id} completed`);
  });
  new_job.on('failed', function(errorMessage){
    console.log(`Notification job ${new_job.id} failed: ${errorMessage}`);
  }).on('progress', function(progress, data){
    console.log(`Notification job ${new_job.id} ${progress}% complete`);
  })
}
