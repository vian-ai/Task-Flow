import express from 'express';
import { createTask, listTasks, completeTask, deleteTask, editTask } from '../controllers/taskController.js';

const router = express.Router();

router.post('/tasks', createTask);
router.get('/tasks', listTasks);
router.get('/tasks/:id', completeTask);
router.delete('/tasks/:id', deleteTask);
router.patch('/tasks/:id', editTask);

export default router;