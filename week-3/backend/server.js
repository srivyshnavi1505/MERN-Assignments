import exp from 'express'
import { userApp } from './APIS/UserAPI.js'
import { prodApp } from './APIS/ProductAPI.js';
import { connect } from 'mongoose';
const app = exp()
const port = 4000;
async function connectDB() {
    try{
        await connect('mongodb://localhost:27017/Week3Db');
        console.log("db connection successful");
        app.listen(port,()=> console.log("server listening on port 4000"));

    }catch(err){
        console.log("database connection failed",err);
    }
}

connectDB()


app.use(exp.json())

app.use('/api',userApp)
app.use('/api',prodApp)


