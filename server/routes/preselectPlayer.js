const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the preselectPlayers.
recordRoutes.route("/preselectPlayer").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("preselectPlayers")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      //console.log(result);

    });
});

// This section will help you get a single record by id
recordRoutes.route("/preselectPlayer/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("preselectPlayers").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new record.
recordRoutes.route("/preselectPlayer/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    surname: req.body.surname,
    img: req.body.img,
    fn: req.body.fn,
    age0: req.body.age0,
    na0: req.body.na0,
    na1: req.body.na1,
    age1: req.body.age0,
    s1: req.body.s1,
    s2: req.body.s2,
    s3: req.body.s3,
    pn: req.body.pn,
    ps: req.body.ps,
    ph: req.body.ph,
    alt: req.body.alt,
    peso: req.body.peso,
    tec: req.body.level,
    fisico: req.body.fisico,
    mental: req.body.mental,
    gk: req.body.gk,
    c: req.body.c,
    sb: req.body.sb,
    ss: req.body.ss,
    com: req.body.com,
    fin: req.body.fin,
    agente: req.body.agente,
    por0: req.body.por0,
    asis: req.body.asis,
    gol: req.body.gol,
    cpo: req.body.cpo,
    gll: req.body.gll,
    sc: req.body.sc,
    cp: req.body.cp,
    ca: req.body.ca,
    phone: req.body.ph,
    email: req.body.email,
    face: req.body.face,
    ig: req.body.ig,
    tw: req.body.tw,
    tf: req.body.tf,
    bs: req.body.bs,
    yt: req.body.yt,
    inci: req.body.inci,
  };
  db_connect.collection("preselectPlayers").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);

  });
});

// This section will help you update a record by id.
recordRoutes.route("/updatepreselectPlayer/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      surname: req.body.surname,
      img: req.body.img,
      fn: req.body.fn,
      age0: req.body.age0,
      na0: req.body.na0,
      na1: req.body.na1,
      age1: req.body.age0,
      s1: req.body.s1,
      s2: req.body.s2,
      s3: req.body.s3,
      pn: req.body.pn,
      ps: req.body.ps,
      ph: req.body.ph,
      alt: req.body.alt,
      peso: req.body.peso,
      tec: req.body.level,
      fisico: req.body.fisico,
      mental: req.body.mental,
      gk: req.body.gk,
      c: req.body.c,
      sb: req.body.sb,
      ss: req.body.ss,
      com: req.body.com,
      fin: req.body.fin,
      agente: req.body.agente,
      por0: req.body.por0,
      asis: req.body.asis,
      gol: req.body.gol,
      cpo: req.body.cpo,
      gll: req.body.gll,
      sc: req.body.sc,
      cp: req.body.cp,
      ca: req.body.ca,
      phone: req.body.ph,
      email: req.body.email,
      face: req.body.face,
      ig: req.body.ig,
      tw: req.body.tw,
      tf: req.body.tf,
      bs: req.body.bs,
      yt: req.body.yt,
      inci: req.body.inci,
    },
  };
  db_connect
    .collection("preselectPlayers")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/deletePreselect/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("preselectPlayers").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted " + req.params.id);
    response.json(obj);
  });
});

module.exports = recordRoutes;
