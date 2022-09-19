import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../Redux/actions';
import AddIcon from '@mui/icons-material/Add';

const Create = () => {
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createTask(text));
        setText('');
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder='Create a task...'
                    onChange={handleChange}
                    value={text}
                />
                <button><AddIcon /></button>
            </form>
        </div>
    );
};

export default Create;