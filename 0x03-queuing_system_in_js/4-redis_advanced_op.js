import { createClient, print } from 'redis';
const client = createClient();

client.on('connect', function() {
  console.log('Connected!');
});

client.hmset('HolbertonSchools', {
  'Portland': 50,
  'Seattle': 80,
  'New York': 20,
  'Bogota': 20,
  'Cali': 40,
  'Paris': 2
  }, (err, reply) => {
     print('Reply ' + reply);
  });

client.hgetall('HolbertonSchools', (err, object) => {
  console.log(object);
})
