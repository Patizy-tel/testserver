const mongoose = require('../db/db')

const BlackListSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
} ,
description:{

    type:String,
    required:true


},
status:{

    type:Boolean,
    default:false


},

date:{
    type:Date,
    required:true

},


},{timestamps:true});


module.exports = mongoose.model('blacklist', BlackListSchema);
