import { useState } from 'react'

const Create = () => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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