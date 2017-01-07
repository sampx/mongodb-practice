mongo = new Mongo("localhost");
db = mongo.getDB("admin");
db.auth("useradmin", "s.x");
cur = db.getUsers();
printjson(cur);
print(">=================\n");
db = mongo.getDB("test");
printjson(db.getUsers());
