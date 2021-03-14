const mongoose = require('mongoose')

const BlackListSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
} ,
type:{
    type:String,
    required:true
} ,
institution:{
    type:String,
    required:true
},
accouuntManager:{
    type:String,
    required:true
},
date:{
    type:Date,
    required:true

},


});


module.exports = mongoose.model('blacklist', BlackListSchema);
