mongo = new Mongo("localhost");
db = mongo.getDB("admin");
db.createUser({
  user: "dbadmin",
  pwd: "s.x",
  roles: ["readWriteAnyDatabase",
    "dbAdminAnyDatabase",
    "clusterAdmin"
  ]
});
db.createUser({
  user: "useradmin",
  pwd: "s.x",
  roles: ["userAdminAnyDatabase"]
})
