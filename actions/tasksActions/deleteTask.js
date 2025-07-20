const Task = require('../../models/Task');

const deleteTask = async (taskId) => {
 await Task.findByIdAndDelete(taskId)
 return { message: 'Task deleted successfully' };
}

module.exports = deleteTask;