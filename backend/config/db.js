import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://greatstack:8RcPj4cDbIRFe1Bs@cluster0.2241bv2.mongodb.net/food-del').then(()=>{
        console.log("DB Connected")
    })
}