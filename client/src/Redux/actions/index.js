import { addTask, listTasks, toggleTask, editTask, deleteTask, toggleTab } from'./type';
import Api from '../../Api';
import axios from 'axios';

export const createTask = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${Api}/tasks`, { data });
        dispatch({ type: addTask, payload: res.data });
    } catch (error) {
        console.log(error.message);
    };
};

export const getTasks = () => async (dispatch) => {
    try {
        const res = await axios.get(`${Api}/tasks`);
        dispatch({ type: listTasks, payload: res.data });
    } catch (error) {
        console.log(error.message);
    };
};

export const toggle = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${Api}/tasks/${id}`);
        dispatch({ type: toggleTask, payload: res.data });
    } catch (error) {
        console.log(error.message);
    };
};

export const updateTask = (id, data) => async (dispatch) => {
    try {
        const res = await axios.patch(`${Api}/tasks/${id}`, { data });
        dispatch({ type: editTask, payload: res.data });
    } catch (error) {
        console.log(error.message);
    };
};

export const taskDelete = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${Api}/tasks/${id}`);
        dispatch({ type: deleteTask, payload: res.data });
    } catch (error) {
        console.log(error.message);
    };
}

export const tabToggle = (tab) => async (dispatch) => {
    dispatch({ type: toggleTab, selected: tab });
};