const mongoose = require('mongoose')

const listSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    food:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    veg:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
})

const listmodel = mongoose.model('list1',listSchema);

module.exports=listmodel