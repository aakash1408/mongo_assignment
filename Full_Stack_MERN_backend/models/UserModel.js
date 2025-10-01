import mongoose from "mongoose";
 
const MERNUser = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    }
});
 
export default mongoose.model('MERNUsers', MERNUser);