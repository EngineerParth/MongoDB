/*
 * There is an error while testing this code:
 * Timeout of 2000ms exceeded. Ensure that done() callback is being called in
 * this test
 * An initial research over this error suggests that the issue is with the
 * memory leak in tests.
 * refer following for further details
 * https://github.com/mochajs/mocha/issues/2025
 * 26/1/17 Evening
 * The good news is that the error is solved
 * the issue was an additional error checking before calling the callback. I
 * think we are not suppose to check the nullablility of the arguments of the
 * callbacks when defining them. We are already doing it while using them
 *
 * It's so surprising that a solution is always so simple...we keep searching for
 * complex solutions considering various scenarios but a solution and hence
 * an error....is
 * always a simple one.
 */

/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
  // TODO: implement
  db.collection("movies").insert(doc, function(err, res){
       callback(err);
  });
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) {
  // TODO: implement
  db.collection("movies").find({'director':director}).sort({'title':1}).toArray(function(err, docs){
      callback(err, docs);
  });
};
