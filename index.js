const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserRoutes = require('./routes/userRoute');
const TaskRoutes = require('./routes/taskRoute');
require('dotenv').config({ path: './.env' });

const app = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173','https://task-tracker-iimf.onrender.com/'],
    methods: 'GET,POST,PUT,DELETE,PATCH',
    allowedHeaders: 'Content-Type,Authorization'
}));

app.use('/api/users', UserRoutes);
app.use('/api/tasks', TaskRoutes);

const connection=`mongodb+srv://${process.env.user}:${process.env.password}@tasktrackerdb.sgt8v.mongodb.net/?retryWrites=true&w=majority&appName=TaskTrackerDB`;
mongoose.connect(connection).then(()=>{
    console.log("Connected to database");
    app.listen(3000,()=>{
        console.log("Server is running on port 3000");
    });
}).catch((err)=>{
    console.log("Connection failed, error:"+err);
});