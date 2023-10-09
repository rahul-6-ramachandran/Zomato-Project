// Importing env variables
require('dotenv').config()
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import session from 'express-session'
import passport from 'passport'

// Configurations
import googleAuthConfig from './config/google.config'

// Database Connection
import connectDB from './database/connection'

const zomato = express()


// Microseervice Routes
import Auth from './API/Auth'
import Restaurant from './API/Restaurant'
import Food from './API/Food'
import Orders from './API/Orders'
import Reviews from './API/Orders'

// Application middlewares
zomato.use(express.json())
zomato.use(express.urlencoded({extended: false}))
zomato.use(cors())
zomato.use(helmet())
zomato.use(session({
    secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
zomato.use(passport.initialize())
zomato.use(passport.session())


// passport configuration
googleAuthConfig(passport)

zomato.use('/auth',Auth)
zomato.use('/restaurant',Restaurant)
zomato.use('/food',Food)
zomato.use('/order',Orders)
zomato.use('/review',Reviews)

zomato.get('/',(req,res)=>{
    res.json({message : "Setup Success"})
})

zomato.listen(4000,()=> 
connectDB()
.then(()=>console.log("Successfully connected"))
.catch(()=>console.log(" Database Connection Failed")) )
