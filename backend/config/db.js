import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect("mongodb+srv://salapurakesh865:Rakesh2569@cluster0.sobge4u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/food-del").then(()=>console.log("DB Connected"))
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.