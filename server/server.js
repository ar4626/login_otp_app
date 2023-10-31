const express = require ('express');
const cors = require( 'cors');
const morgan = require ('morgan');
const connect = require ('./database/connection');
const router = require('./router/route');

// Rest of your code...




const app = express();

// middleware for the server
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

const port = 8000;

//HTTP Get RequesT
app.get('/', (req,res)=>{
    res.status(201).json("Home Get Request");
});

//api ROUTES
app.use('/api',router)

//start server only when we have valid connection
connect().then( ()=>{
    try{
        app.listen(port, ()=> {
            console.log(`Server is listening on ${port}`);
        }) 
    }catch(e){
        console.log("Error connecting to server: " + e.message);
    }
}).catch((err)=>{
    console.log("Error connecting to Database: " + err.message);
});

