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
manager:{
    type:String,
    required:true
},

email:{

    type:String
},
date:{
    type:Date,
    required:true

},


});


module.exports = mongoose.model('blacklist', BlackListSchema);
