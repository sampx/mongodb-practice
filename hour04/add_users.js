var mongo = new Mongo('localhost');
db = mongo.getDB('test');
db.createUser({
  user: 'testAdmin',
  pwd: 'test',
  roles: ['dbAdmin']
});
db.createUser({
  user: 'testWriter',
  pwd: 'test',
  roles: ['readWrite']
});
db.createUser({
  user: 'testReader',
  pwd: 'test',
  roles: ['read']
});
db = mongo.getDB('admin');
db.createUser({
  user: 'testUser',
  userSource: 'test',
  roles: ['read'],
  otherDBRoles: {
    test: ['readWrite']
  }
});
