print("Hostname:");
print(`\t${hostname()}`);
print("Date:");
print(`\t${Date()}`);
db = connect("localhost/words");
print("words Collections:");
const collections = db.getCollectionNames();
print(collections);
printjson(collections);
