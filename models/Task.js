const moongose = require('mongoose');
const TaskSchema = new moongose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    userId:{
      type:String,
      required:true
    },
    type:{
        type:String,
        required:true
    },
    limitDate:{
        type:Date,
        required:true
    }},
    
       { timestamps:true
});

module.exports = moongose.model('Task',TaskSchema);