const { builtinModules } = require('module');
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:String,
    branch:String
});


module.exports = mongoose.model("Post",schema);