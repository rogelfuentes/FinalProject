const db = require("../models");

module.exports = {
 
  findById: function(req, res) {
    console.log(req.body)
    db.Contact
      .find({displayName:req.body.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Contact
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};
