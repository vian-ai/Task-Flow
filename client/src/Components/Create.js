import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../Redux/actions';

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
        <div id='form'>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    placeholder='Create a task...'
                    className='input'
                    onChange={handleChange}
                    value={text}
                />
            </form>
        </div>
    );
};

export default Create;