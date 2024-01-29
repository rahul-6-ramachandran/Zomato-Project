import jwtPassport from 'passport-jwt'

import { userModel } from '../database/user'
import { Passport } from 'passport'

const jwtStrategy = jwtPassport.Strategy
const ExtractJwt = jwtPassport.ExtractJwt

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : "zomatoApp"
}

export default (passport)=>{
    passport.use(new jwtStrategy(options,async (jwt__payload,done)=>{
       try {
        const doesUserExist = userModel.findById(jwt__payload.user)
        if(!doesUserExist)  return done(null,false)
        return done(null,doesUserExist)
       } catch(error) {
        throw new Error(error)
       } 
    }))

}