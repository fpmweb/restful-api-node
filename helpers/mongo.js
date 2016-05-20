var mongoskin = require("mongoskin");
var db = mongoskin.db("mongodb://@localhost:27017/testdatabase", {safe:true});
var id = mongoskin.helper.toObjectID;