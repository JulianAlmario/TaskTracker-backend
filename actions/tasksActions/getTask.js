const Task = require('../../models/Task')

const getTask = async (taskId) => {
 const task = await Task.findById({ id: taskId });
 return task;
}

module.exports = getTask;