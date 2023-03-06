import { createClient } from 'redis';

const subscriber = createClient();
const channel = 'holberton school channel';

subscriber.on('connect', () => {
  console.log('Redis client connected to the server');
})

subscriber.on('error', err => console.log('Redis client not connected to the server:', err));

subscriber.subscribe(channel, (err, channel) => {
  if (err) throw new Error(err);
  console.log(`Subscribed to ${channel} channel. Listening for updates on the ${channel} channel...`)
  }
)

subscriber.on('message', (channel, message) => {
  console.log(message);
  if (message === 'KILL_SERVER') {
    subscriber.unsubscribe();
    process.exit(0);
  }
});
