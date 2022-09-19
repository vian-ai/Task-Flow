import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggle, updateTask, taskDelete } from '../Redux/actions';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Task = ({ task }) => {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(task.task);

    const dispatch = useDispatch();

    const handleEditForm = (e) => {
        e.preventDefault();

        setEdit(prevState => !prevState);
        dispatch(updateTask(task._id, text));
    };

    return (
        <li
            className='task'
            style={{
                textDecoration: task.completed ? 'line-through' : '',
                color: task.completed ? '#bdc3c7' : 'black'
            }}
        >
            <span
                onClick={() => dispatch(toggle(task._id))}
                style={{ display: edit ? 'none' : '' }}>
                {task.task}
            </span>

            <form
                style={{ display: edit ? 'inline' : 'none' }}
                onSubmit={handleEditForm}
            >
                <input
                    type='text'
                    value={text}
                    className='edit-task'
                    onChange={(e) => setText(e.target.value)}
                />
            </form>

            <button className='icons' onClick={() => dispatch(taskDelete(task._id))}>
                <DeleteIcon />
            </button>
            <button className='icons' onClick={() => setEdit(prevState => !prevState)}>
                <EditIcon />
            </button>
        </li>
    )
};

export default Task;