var mongodb = require("mongodb");
var url = "mongodb://localhost:27017/Example";
mongodb.MongoClient.connect(url, function(error, db){
  if(error){
    console.log(error);
    process.exit(1);
  }
  var doc = {
    title: 'Jaws',
    year: 1975,
    director: 'Steven Spielberg',
    rating: 'PG'
  }

  db.collection('movies').insert(doc, function(error, res){
    if(error){
      console.log(error);
      process.exit(1);
    }
    var query = {year: 1975};
    db.collection('movies').find(query).toArray(function(error, docs){
      if(error){
        console.log(error);
        process.exit(1);
      }
      console.log('Found docs');
      docs.forEach(function(doc){
        console.log(JSON.stringify(doc));
      })
      process.exit(1);
    });
  });
});
