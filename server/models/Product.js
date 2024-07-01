const mongoose=require('mongoose');

const Product =mongoose.model('product',{
    id:{
        type:Number,
        require:true,
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    new_price:{
        type:Number,
        required:true
    },
    old_price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
    }
    ,availabe:{
        type:Boolean,
        default:true
    },
})

module.exports=Product;