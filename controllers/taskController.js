const registerTask = require('../actions/tasksActions/registerTask');
const getTasks = require('../actions/tasksActions/getTasks');
const deleteTask = require('../actions/tasksActions/deleteTask');
const updateTypeTask = require('../actions/tasksActions/updateTypeTask');

const addTask=async(title,description,userId,type,limitDate) => {
if(!title || !description || !userId || !type || !limitDate) {
    return   { message: 'All fields are required' }
    }

    if(type!== "Pending"|"In Progress"|"Completed"){
        return { message: 'Invalid task type' }
    }


        const result = await registerTask(title,description,userId,type,limitDate);
        return result;
    
}

const getAllTasks = async (userId) => {
    if (!userId) {
        return { message: 'User ID is required' };
    }

    const tasks = await getTasks(userId);
    
    return { tasks: tasks  };
}

const deleteThisTask=async (taskId) => {
     if (!taskId) {
        return { message: 'User ID is required' };
    }
   const result=await deleteTask(taskId);
   return result;
}

const updateThisTypeTask = async (taskId, type) => {
    if (!taskId || !type) {
        return { message: 'All fields are required' };
    }

    if (!["Pending", "In Progress", "Completed"].includes(type)) {
        return { message: 'Invalid task type' };
    }

    const result = await updateTypeTask(taskId, type);
    return result;
}


module.exports = {addTask,getAllTasks,deleteThisTask,updateThisTypeTask}