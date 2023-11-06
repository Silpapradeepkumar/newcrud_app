import express from 'express';
import mongoose, { Schema } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import User from './modules/Schema.js';


const app=express();
app.use(express.json());
app.use(cors());
dotenv.config();



app.post("/api/post",async(req,res)=>{
    const {name,email,password} = req.body;
    const user = new User({name,email,password});
   try {
    const savedUser = await user.save();
    res.json(savedUser);
   } catch (error) {
    res.json(error.message);
   }

})

app.get('/api/get',async(req,res)=>{
    try {
      const savedUser = await User.find();
      res.status(201).json(savedUser);
    } catch (error) {
     res.json(error.message);   
    }
})

app.get('/api/get/:id',async(req,res)=>{
    const {id}= req.params;
    try {
        const getId = await User.findById(id);
        res.json(getId);
    } catch (error) {
        res.json(error.message);
    }
})

app.put('/api/put/:id',async(req,res)=>{
    const {id}=req.params;
    const {name,email,password}=req.body;
    try{
        const updateUser = await User.findByIdAndUpdate(id,{$set:{name,email,password}},{new:true});
        res.status(201).json(updateUser);
    }
catch(error){
res.json(error.message);
}
})


app.delete('/api/delete/:id', async(req,res)=>{
    const{id}=req.params;
    try{
        const deleteUser=await User.findByIdAndDelete(id);
        res.status(201).json(deleteUser);
    }catch(error){
        res.json(error.message);
    }
})
const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('connected to the database');
    }catch(error){
        console.log(error.message);
    }
}


app.listen(process.env.PORT,()=>{
    try{
        console.log(`server is running on port ${process.env.PORT}`);
        connect();
    }catch(error){

        console.log(error.message);
    }
    
})

