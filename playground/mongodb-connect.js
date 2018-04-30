//const mongobd = require('mongodb');
//const mongoCl = mongobd.MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
let dbURL = 'mongodb://localhost:27017/MyDatabase';
let dbName = 'Todos';
let dbUser = 'Users';

MongoClient.connect(dbURL, (err, db)=>{
 if(err)
 {
     console.log('Unable to connect MongoDB server !');
 } 
 console.log('Connect To MongoDB server !');

var User = {
  name :'Hemant',
  age: 34,
  location: 'Bangalore'
};

var {age} = User;

console.log(age);
 //inser Todos
//  db.collection(dbName).insertOne({
//   text: 'Need some tea bags',
//   completed: false
//  },(err, result)=>{
//   if(err)
//   {
//       return console.log('Unable to insert !', err);
//   }
//   console.log(JSON.stringify(result.ops, undefined, 2));
//  });

//insert Users
// db.collection(dbUser).insertOne({
//   name :'Hemant',
//   age: 34,
//   location: 'Bangalore'
// },(err,result)=>{
//     if(err)
//     {
//    console.log('Inable to insert Users !', err);
//     }

//     console.log(JSON.stringify(result.ops, undefined, 2));

// });

 db.close();
});