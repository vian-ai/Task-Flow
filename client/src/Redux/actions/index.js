import { addTask, listTasks, toggleTask, editTask, deleteTask, toggleTab } from'./type';
import Api from '../../Api';
import axios from 'axios';

const createTask = (task) => async (dispatch) => {
    try {
        const res = await axios.post(`${Api}/tasks`, { task });
        dispatch({ type: addTask, payload: res.data });
    } catch (error) {
        console.log(error.message);
    };
};

const getTasks = () => async (dispatch) => {
    try {
        const res = await axios.get(`${Api}/tasks`);
        dispatch({ type: listTasks, payload: res.data });
    } catch (error) {
        console.log(error.message);
    };
};

const toggle = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${Api}/tasks/${id}`);
        dispatch({ type: toggleTask, payload: res.data });
    } catch (error) {
        console.log(error.message);
    };
};

const updateTask = (id, task) => async (dispatch) => {
    try {
        const res = await axios.patch(`${Api}/tasks/${id}`, { task });
        dispatch({ type: editTask, payload: res.data });
    } catch (error) {
        console.log(error.message);
    };
};

const taskDelete = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${Api}/tasks/${id}`);
        dispatch({ type: deleteTask, payload: res.data });
    } catch (error) {
        console.log(error.message);
    };
};

const tabToggle = (tab) => async (dispatch) => {
    dispatch({ type: toggleTab, selected: tab });
};

export {
    createTask,
    getTasks,
    toggle,
    updateTask,
    taskDelete,
    tabToggle
};