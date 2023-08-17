// Importing env variables
require('dotenv').config()
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

// Database Connection
import connectDB from './database/connection'

const zomato = express()


// Microseervice Routes
import Auth from './API/Auth'


// Application middlewares
zomato.use(express.json())
zomato.use(express.urlencoded({extended: false}))
zomato.use(cors())
zomato.use(helmet())

zomato.use('/auth',Auth)

zomato.get('/',(req,res)=>{
    res.json({message : "Setup Success"})
})

zomato.listen(4000,()=> 
connectDB()
.then(()=>console.log("Successfully connected"))
.catch(()=>console.log(" Database Connection Failed")) )
