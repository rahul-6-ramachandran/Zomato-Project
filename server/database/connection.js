import mongoose from "mongoose";

export default async ()=>{ 
    mongoose.Promise = global.Promise
    mongoose.connect(process.env.MONGO_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    
   
} 