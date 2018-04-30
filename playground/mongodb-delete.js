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
//delete Many
db.collection(dbTodos).deleteMany({completed:true}).then((err, result)=>{

  if(err)
  {
    console.log('Unable to delete !', err);
  }
  console.log(result);
});

 db.close();
});