const Task = require('../../models/Task')

const getTasks = async (userId) => {
 const tasks = await Task.find({ userId: userId });
 return tasks;
}

module.exports = getTasks;