mongo = new Mongo("localhost");
db = mongo.getDB("admin");
db.auth("useradmin", "s.x");
db = mongo.getDB("test");
db.dropUser("testReader");
cur = db.getUsers();
printjson(cur);
