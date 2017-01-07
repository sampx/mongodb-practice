mongo = new Mongo("localhost");
myDB = mongo.getDB("test");
stats = myDB.stats();
printjson(stats);
