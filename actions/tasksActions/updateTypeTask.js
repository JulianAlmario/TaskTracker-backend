const Task = require('../../models/Task')

const updateTypeTask = async (taskId, type) => {
await Task.findByIdAndUpdate(taskId, { type: type })
return { message: 'Task type updated successfully'};
}
module.exports = updateTypeTask