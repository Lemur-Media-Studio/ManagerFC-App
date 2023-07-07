const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route("/admin").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("admin")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      //console.log(result);

    });
});

// This section will help you get a single record by id
recordRoutes.route("/admin/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("admin").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new record.
recordRoutes.route("/admin/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    admin: req.body.name,
    password: req.body.surname,
    rule: req.body.rule
  };
  db_connect.collection("admin").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});
module.exports = recordRoutes;