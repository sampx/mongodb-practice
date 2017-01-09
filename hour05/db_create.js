var mongo = new Mongo("localhost");
var newDB = mongo.getDB("newDB");
newDB.createCollection("newCollection");
