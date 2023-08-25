const express = require('express');
const cors = require("cors")
require('./db/config');
const User = require('./db/User');
const app = express();
const UserData = require('./db/UserData');
const product = require('./db/Product');
const Product = require('./db/Product');

app.use(express.json());
app.use(cors());

app.post("/Signup", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result);
})

app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            resp.send(user)
        }
        else {
            resp.send({ result: "not Found" })
        }
    }
    else {
        resp.send({ result: "Password Required" })
    }

})

app.post("/add-product" ,async (req , resp)=>{
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result)
})

app.get("/products",async (req,resp)=>{
    let products = await Product.find();
    if(products.length>0){
        resp.send(products);
    }
    else{
        resp.send({result:"No result Found"});
    }
})

app.delete("/product/:id",async (req,resp)=>{ 
    const result = await Product.deleteOne({_id:req.params.id})
    resp.send(result);
})

app.get("/product/:id",async(req , resp)=>{
    let result = await Product.findOne({_id:req.params.id});
    if(result){
        resp.send(result);
    }
    else{
        resp.send({result:"not Found"})
    }
})

app.put("/product/:id", async (req , resp)=>{
    let result = await Product.updateOne(
        {_id:req.params.id},
        {
            $set : req.body
        }
    )
    resp.send(result)
})

//UserData
app.post("/add-user" ,async (req , resp)=>{
    let userdata = new UserData(req.body);
    let result = await userdata.save();
    resp.send(result)
})

app.get("/usersdata",async (req,resp)=>{
    let usersdata = await UserData.find();
    if(usersdata.length>0){
        resp.send(usersdata);
    }
    else{
        resp.send({result:"No result Found"});
    }
})

app.delete("/userdata/:id",async (req,resp)=>{ 
    const result = await UserData.deleteOne({_id:req.params.id})
    resp.send(result);
})

app.get("/userdata/:id",async(req , resp)=>{
    let result = await UserData.findOne({_id:req.params.id});
    if(result){
        resp.send(result);
    }
    else{
        resp.send({result:"not Found"})
    }
})

app.put("/userdata/:id", async (req , resp)=>{
    let result = await UserData.updateOne(
        {_id:req.params.id},
        {
            $set : req.body
        }
    )
    resp.send(result)
})
app.listen(5000)