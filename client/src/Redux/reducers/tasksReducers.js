import * as actionTypes from '../actions/type';

export const tasksReducers = (state = [], action) => {
    switch (action.type) {
        case actionTypes.addTask:
            return [action.payload, ...state]
        case actionTypes.listTasks:
            return action.payload
        case actionTypes.toggleTask:
            return state.map(task => (
                task._id === action.payload._id ? { ...task, completed: !task.completed } : task
            ))
        case actionTypes.editTask:
            return state.map(task => (
                task._id === action.payload._id ? { ...task, task: action.payload.task } : task
            ))
        case actionTypes.deleteTask:
            return state.filter(task => task._id !== action.payload._id);
        default: 
            return state;
    };
};