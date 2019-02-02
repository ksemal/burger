var orm = require("../config/orm.js");

var burger = {
  selectAll: function() {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  insertOne: function() {
    orm.insertOne("burgers", function(res) {
      callback(res);
    });
  },
  updateOne: function() {
    orm.updateOne("burgers", function(res) {
      callback(res);
    });
  }
};

module.exports = burger;
