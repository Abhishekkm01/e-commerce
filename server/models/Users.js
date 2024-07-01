const mongoose=require('mongoose');

const Users=mongoose.model('User',{
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    carData:{
        type:Object
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports=Users;