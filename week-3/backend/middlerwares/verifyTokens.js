import cookieParser from "cookie-parser";
import jwt from 'jsonwebtoken'


export function verifyTokens(req,res,next){
// token verification 
//1.Get token from req
console.log(req.cookies) //{token : " "
let signedToken= req.cookies.token;
if(!signedToken){
    return res.status(401).json({message : "please login first"})
}



//2.verify token(decode)

let decodedToken = jwt.verify(signedToken,'secret')
console.log("decoded token:" ,decodedToken);
next();


}