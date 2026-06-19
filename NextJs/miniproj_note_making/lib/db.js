import mongoose from "mongoose";


export async function connectDB() {
  try{
    const con = await mongoose.connect('mongodb://127.0.0.1:27017/notes-mini-app');
    console.log("Connection SUccessful")
    // console.log(con.STATES);
  }catch(e){
    throw new Error(e);
  }
}