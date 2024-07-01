const Port=4000;
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const multer=require('multer');
const path=require('path');
const cors=require('cors');

//models
const Product=require('./models/Product');
const Users=require('./models/Users');


//middlewares
app.use(express.json());
app.use(cors());
app.use('/images',express.static(path.join('upload/images')))

//databaseconnection
mongoose.connect("yours mongodb string");

//image uploading
const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({storage:storage});
//creating upload EndPoint for images
app.post('/upload',upload.single('product'),(req,res)=>{
     
    res.json({success:1,
        image_url:`http://localhost:${Port}/images/${req.file.filename}`
    })

})

//Creating API for add Products
app.post('/addproduct',async (req,res)=>{
    let products=await Product.find({});
    let id;
    if(products.length>0)
    {
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0];
        id=last_product.id+1;
    }
    else{
        id=1;
    }
    const product =new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price
    });
        console.log(product);
    await product.save();
    res.json({
        success:true,
        name:req.body.name
    })
})

//Creating API for deleting Products
app.post('/removeproducts',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    res.json({
        success:true,
        name:req.body.name
    })
    
})

//creating Endpoint for Registering user
app.post('/signup',async (req,res)=>{
    let check=await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({sucess:false,errors:"existsting user found with this email"})
    }
    let cart={};
    for(let i=0;i<300;i++){
  cart[i]=0;
    }
    const user=new Users({
    username:req.body.name,
    email:req.body.email,
    password:req.body.password,
    carData:cart
    })
    await user.save();
    const data={
        user:{
            id:user.id
        }
    }
    const token=jwt.sign(data,'secret-ecom');
    res.json({success:true,token:token});

})


// creating endpoint for user logi
app.post('/login',async (req,res)=>{
    let user=await Users.findOne({email:req.body.email});
    if(user){
        const passCompare=req.body.password===user.password;
if(passCompare){
    const data={
        user:{
            id:user.id
        }
    }
    const token =jwt.sign(data,'secret-ecom');
    res.json({success:true,token:token})
}
else{
    res.json({success:false,error:"Wrong Password"})
}
    }
    else{
        res.json({success:false,error:"user data not found"})
    }
})


//Creating API for getting all products
app.get('/allproducts',async (req,res)=>{
let products=await Product.find({});
res.send(products);
})

//creating endpoint for newcollection data
app.get('/newcollection',async (req,res)=>{
    let products=await Product.find({});
    let newcollection=products.slice(1).slice(-8);
    res.send(newcollection);
})

//creating endpoint for populat in women section

app.get('/popularwomen',async (req,res)=>{
    let product =await Product.find({category:"women"});
    let popular_in_women=product.slice(0,4);
    res.send(popular_in_women);
})

//creating middleware to fetch user
const fetchUser=async(req,res,next)=>{
const token=req.header('auth-token');
if(!token){
    res.status(401).send({errors:"Please authenticate valid token"});
}
else {
    try {
        const data=jwt.verify(token,'secret-ecom');
         req.user=data.user;
         next();
    } catch (error) {
        res.status(401).send({errors:"please authenticate using a valid token"}) 
    }
}
}

//creating endpoint for adding products in cardata
app.post('/addtocart',fetchUser,async(req,res)=>{
    let userData=await Users.findOne({_id:req.user.id});
    userData.carData[req.body.itemId]+=1;
    await Users.findOneAndUpdate({_id:req.user.id},{carData:userData.carData});
    res.send("Added")
})

//creating endpoint to remove the card data
app.post('/removefromcart',fetchUser,async(req,res)=>{
    let userData=await Users.findOne({_id:req.user.id});
    if(userData.carData[req.body.itemId]>0)
    userData.carData[req.body.itemId]-=1;
    console.log(userData.carData[req.body.itemId]+=1);
    await Users.findOneAndUpdate({_id:req.user.id},{carData:userData.carData});
    res.send("Removed");
})

//creating endpoint to get cartdata
app.post("/getcart",fetchUser,async(req,res)=>{
let userData=await Users.findOne({_id:req.user.id});
res.json(userData.cartData);
})

app.listen(Port,(error)=>{
    if(!error){
        console.log(`Server Runnig on port ${Port}  `);
    }
    else{
        console.log("Error"+error)
    }
})




