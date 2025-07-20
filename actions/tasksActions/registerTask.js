const Task = require('../../models/Task')

const registerTask = async (title,description,userId,type,limitDate) => {
       const newTask = new Task({
            title: title,
            description: description,
            userId: userId,
            type: type,
            limitDate: limitDate
        })

     await newTask.save()
     return { message: 'Task saved successfully' };
}

module.exports = registerTask;