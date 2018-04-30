//const mongobd = require('mongodb');
//const mongoCl = mongobd.MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
let dbURL = 'mongodb://localhost:27017/MyDatabase';
let dbTodos = 'Todos';
let dbUser = 'Users';

MongoClient.connect(dbURL, (err, db)=>{
 if(err)
 {
     console.log('Unable to connect MongoDB server !');
 } 
 console.log('Connect To MongoDB server !');

 //querying the current dollection doc
//  db.collection(dbTodos).find({_id: new ObjectID('5ae69c1021bb14566e01cc41')}).toArray().then((docs)=>{
//  console.log('Todos');
//  console.log(JSON.stringify(docs, undefined, 2));
//  },(err)=>{
// console.log('Unable to fetch todoas', err);
//  });
db.collection(dbTodos).find().count().then((count)=>{
  console.log('Todos : '+ count);
   },(err)=>{
 console.log('Unable to fetch todoas', err);
  });

 db.close();
});