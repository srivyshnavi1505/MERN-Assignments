import { Schema,model} from 'mongoose'

//create user schema 
const userSchema = new Schema({

    username:{
        type :String,
        required : [true," username is required "],
        minLength: [4,"minimum length should be 4"],
        maxLength: [6 ,"max length limit exceeded"] //its validation rule , which is mandatory to satisfy 
    },
    password: {
        type : String,
        required:[true,"pass is needed"],

    },
    age:{
        type : Number,
        required:[true,"Age is required"],
        min : [18," age should be above 18"],
        max : [25,"age should be less than 25"]
    }

},{
    strict : "throw"   //for strict scheme design : validation factor 
});

//create user model with that schema 
const UserModel = model("user",userSchema) 
//name is important here : mongoose will take the name pluralise the name and connects 
export default UserModel;