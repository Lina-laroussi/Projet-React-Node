import  mongoose  from 'mongoose';

//creating a schema

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unqieu:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean,default:false,required:true},

});

//create a model base to this schema:
const User = mongoose.model('User',userSchema);
export default User;