const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth.js")
const houseRoute = require("./routes/house.js")
const reservationsRoute = require("./routes/reservations.js")

require('dotenv').config();



const app = express();
app.use(cors({
    origin:process.env.client_url,
    credentials:true
}))

const connect = async () => {

    try {
         await mongoose.connect(process.env.mongodb); 
         console.log("db connected");
        //await mongoose.connect("process.env.MONGO");
    } catch (error) {
        throw error;
    }
};
    

//mongoose.connection.on("disconnected", ()=>{
    //console.log("mongoDB disconnected!");
//})



//mongoose.connection.on("connected", ()=>{
    //console.log("mongoDB connected!");
//})



app.get("/", (req, res)=>{
    res.json({ name: "Code Bless You",Subscribe:true});
});







// middlewares               - to prevent too much code in index.js so separate route folder is created.
// creating middleware

//app.use(cors({origin:"http://localhost:5001",method:"GET"}))
// app.use(cors)

//to use json - sending by the user in post request
app.use(express.json())
app.use(cookieParser());

app.use("/api/v1", authRoute);
app.use("/api/v1", houseRoute);
app.use("/api/v1", reservationsRoute);
//https://hotel-backend-5f4y.onrender.com/api/v1/getalllisting
//http://localhost:5001/api/v1/getalllisting
//Error Handler Middleware 
app.use((err, req, res, next)=>{

    const errorStatus = err.status || 500
    const errorMessage = err.errorMessage || "Something went wrong!"

    //handling error and responding to the client request. (sending error to client side)
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        messsage: errorMessage,
        stack: err.stack,                           //it will give more detail about stack
    });
        
    // next(); // next is callback function
    
});

app.listen(5001,async ()=> {
    await connect();
    console.log("Connected to Backend!")
})