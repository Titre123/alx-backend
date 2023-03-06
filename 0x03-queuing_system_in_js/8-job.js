const createPushNotificationsJobs = (jobs, queue) => {
  if (jobs.constructor == 'Array') {
    throw Error('Jobs is not an array');
  }
  for (let job of jobs) {
    const job = queue.create('push_notification_code_3', job).save((err) => {
      if (!err) console.log('Notification job created: ', job.id)
    })
    job.on('complete', function(result){
      console.log(`Notification job ${new_job.id} completed`);
    });
    job.on('failed', function(errorMessage){
      console.log(`Notification job ${new_job.id} failed: ${errorMessage}`);
    }).on('progress', function(progress, data){
      console.log(`Notification job ${new_job.id} ${progress}% complete`);
    })
  }
}

export default createPushNotificationsJobs;