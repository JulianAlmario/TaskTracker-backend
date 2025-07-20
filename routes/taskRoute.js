const express = require('express')

const taskController = require('../controllers/taskController')

const router = express.Router()

router.post('/addTask', async (req, res) => {
    
    const { title, description, userId, type, limitDate } = req.body
    
    try{
       const result=await taskController.addTask(title, description, userId, type, limitDate);
        res.status(201).json({ message: result.message})
    } catch (err) {
        res.status(500).json({ error: `Error saving the task, error:${err}` })
    }
})

router.get('/getTasks', async (req, res) => {
    const { userId } = req.query
    if(!userId) {
        return res.status(400).json({ message: 'User ID is required' })
    }
    try {
    const result = await taskController.getAllTasks(userId);
        res.status(200).json(result.tasks);
    } catch (err) {
        res.status(500).json({ error: `Error retrieving the tasks, error:${err}` })
    }
})

router.delete('/deleteTask', async (req, res) => {
    const { taskId } = req.query
    if(!taskId) {
        return res.status(400).json({ message: 'Task ID is required' })
    }

    try {
       
        const result = await taskController.deleteThisTask(taskId);
        res.status(201).json({ message: result.message})
    } catch (err) {
        res.status(500).json({ error: `Error deleting the task, error:${err}` })
    }
})

router.patch('/updateTypeTask', async (req, res) => {
    const { taskId,type } = req.body;
    
    try{
    
    const result=await taskController.updateThisTypeTask(taskId, type);
    res.status(200).json({message: result.message})
    }catch(err){
        res.status(500).json({ error: `Error updating the task, error:${err}` })
    }
})




module.exports = router
