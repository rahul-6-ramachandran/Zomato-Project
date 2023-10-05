
// Not Completed


import googleOAuth from "passport-google-oauth20"  
 import { userModel } from "../database/user"

 const googleStrategy = googleOAuth.Strategy

 export default (passport)=>{
    passport.use(new googleStrategy({

        clientID : process.env.GOOGLE_CLIENT_ID,
        clientSecret : process.env.GOOGLE_CLIENT_SECRET,
        callbackURL : "http://localhost:4000/auth/google/callback",
        passReqToCallback   : true,
        
    },async (accessToken,refreshToken,profile,done)=>{
        
        // Creating a new user object ///////

        const newUser = {
            fullname : profile.displayName,
            email: profile.emails[0].value,
            profilePic : profile.photos[0].value
        }
        try {
            const user = await userModel.findOne({email:newUser.email})
            
            

            // Checking if the user exists or not ////////

            if(user){
                const token = await user.getjwtToken()
                done(null,{user,token})
            }else{
                const user = await userModel.create(newUser)

                const token = await user.getjwtToken()

                done(null,{user,token})    
            }
        } catch (error) {
            done(error,null)
        }

        // Decoding the data recieved from passport ///////

    passport.serializeUser((userData,done)=> done(null,{...userData}))
    passport.deserializeUser((id,done)=> done(null,id))
    }))
 }