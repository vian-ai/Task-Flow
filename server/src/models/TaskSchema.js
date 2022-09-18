import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    task: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

export default model('Task-Data', taskSchema);