import { createClient, print } from 'redis';
import { promisify } from 'util';

const client = createClient();
const getAttr = promisify(client.get).bind(client);

const setNewSchool = (schoolName, value) => {
  client.set(schoolName, value, (err, reply) => {
    print('Reply: ' + reply);
  })
}

async function displaySchoolValue(schoolName) {
  let result = await getAttr(schoolName);
  console.log(result)
}

client.on('connect', () => {
  console.log('Redis client connected to the server');
})

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

client.on('error', err => console.log('Redis client not connected to the server:', err));
