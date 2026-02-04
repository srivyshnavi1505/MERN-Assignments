//craete HTTP SERVER
import exp from 'express'
import { connect } from 'mongoose'
import { userApp } from './APIs/userAPI.js'
import { productApp } from './APIs/productAPI.js'
const app=exp()
const port=4000;

app.use(exp.json())

app.use('/user-api',userApp)
app.use('/product-api',productApp)

async function connectDB(){
    try{await connect('mongodb://localhost:27017/EcommerceApp')
        console.log("db connection succesful")
    
app.listen(port,()=>console.log("server is runnning on port 4000.."))
}
catch(err){
console.log(err)
}
}
connectDB()
