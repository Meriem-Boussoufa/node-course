const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'task-app';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('tasks');

  const insertResult = await collection.insertMany([
    { 
        description: 'Clean the house',
        completed: true,
    },
    { 
        description: 'Renew inspection',
        completed: false,
    },
    { 
        description: 'Pot plants',
        completed: false,
    },
]);
  console.log('Inserted documents =>', insertResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());