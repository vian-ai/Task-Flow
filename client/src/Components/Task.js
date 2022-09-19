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
        <div id='task-list'>
            <li
                className='list'
                style={{
                    textDecoration: task.completed ? 'line-through' : '',
                    color: task.completed ? '#bdc3c7' : 'black'
                }}
            >
                <div className='tasks'>
                    <span onClick={() => dispatch(toggle(task._id))} style={{ display: edit ? 'none' : '' }}>
                        {task.task}
                    </span>
                    <div className='edit-form'>
                        <form style={{ display: edit ? 'inline' : 'none' }} onSubmit={handleEditForm} >
                            <textarea
                                type='text'
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </form>
                    </div>
                    <div className='icons'>
                        <button className='delete-icon' onClick={() => dispatch(taskDelete(task._id))}>
                            <DeleteIcon />
                        </button>
                        <button className='edit-icon' onClick={() => setEdit(prevState => !prevState)}>
                            <EditIcon />
                        </button>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default Task;