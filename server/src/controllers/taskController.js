import Task from '../models/TaskSchema.js';

const createTask = async (req, res) => {
    try {
        const data = req.body;

        const addTask = await Task.create(data);
        await addTask.save();

        return res.status(200).json(addTask);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

const listTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

const completeTask = async (req, res) => {
    try {
        const toggle = await Task.findById(req.params.id);

        const task = await Task.findOneAndUpdate(
            { _id: req.params.id },
            { completed: !toggle.completed }
        );

        await task.save();

        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        return res.status(200).json(task);
    } catch (error) {
        return response.status(500).json(error.message);
    }
};

const editTask = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;

        await Task.findByIdAndUpdate(id, {
            $set: data,
        }).then((task) => res.status(200).json(task));
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

export {
    createTask,
    listTasks,
    completeTask,
    deleteTask,
    editTask
};