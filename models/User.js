const moongose = require('mongoose');
const UserSchema = new moongose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }},
    
       { timestamps:true
});

module.exports = moongose.model('User',UserSchema);