const mongoose = require("mongoose");

mongoose.set('strictQuery', false);


mongoose.connect("mongodb+srv://rizwanarrf:6Xbxp2dViPV5WMK7@cluster0.iwjmuxz.mongodb.net/BLOGAPP?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
})
