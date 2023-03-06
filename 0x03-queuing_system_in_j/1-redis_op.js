import { createClient, print } from 'redis';

const client = createClient();

const setNewSchool = (schoolName, value) => {
  client.set(schoolName, value, (err, reply) => {
    print('Reply: ' + reply);
  })
}

const displaySchoolValue = (schoolName) => {
  client.get(schoolName, (err, reply) => {
    console.log(reply)
  })
}

client.on('connect', () => {
  console.log('Redis client connected to the server');
})

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

client.on('error', err => console.log('Redis client not connected to the server:', err));
