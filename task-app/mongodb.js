const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'task-app';

const id = new ObjectId()
console.log(id)
// console.log(id.getTimestamp())
// console.log(id.id.length)

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);

//   const taskOne = await db.collection('tasks').findOne({ _id: new ObjectId("65f2f7a81b762159756d454e")})
//   console.log(taskOne)

//   const taskAll = await db.collection('tasks').find({ completed: false}).toArray()
//   console.log(taskAll)

//   await db.collection('tasks').updateOne({
//     _id: new ObjectId("65f2f7a81b762159756d454e")
//   }, {
//     $set: {
//         description: 'Updating Test'
//     }
//   }) 

//   await db.collection('tasks').updateMany({
//     completed: false
//   }, {
//     $set: {
//         completed: true
//     }
//   }) 

    await db.collection('tasks').deleteMany({ completed: false})
    
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());