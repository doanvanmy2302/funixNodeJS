const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://mydoan:doanvanmy2302@cluster0.ajlp6.mongodb.net/Cluster0?retryWrites=true&w=majority'
    )
        .then((client) => {
            console.log('Connected!');
            callback(client);
        })
        .catch((err) => console.log(err));
};
const getDb = ()=>{
    if(_db){
        return _db
    }
    throw 'no database found';
}
exports.mongoConnect= mongoConnect;
exports.getDb= getDb;
