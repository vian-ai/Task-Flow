import { useEffect } from 'react';
import { taskDelete, getTasks } from '../Redux/actions/index';
import { ALL_TASKS, COMPLETE_TASKS, ACTIVE_TASKS } from '../Redux/actions/type';
import { useDispatch, useSelector } from 'react-redux';
import Task from './Task';
import Tabs from './Tabs';

export const Tasks = () => {
    const dispatch = useDispatch();

    const tasks = useSelector((state) => state.tasks);
    const currentTab = useSelector((state) => state.currentTab);

    useEffect(() => {
        dispatch(getTasks());
    }, []);

    const getAllTasks = () => {
        if (currentTab === ALL_TASKS) {
            return tasks;
        } else if (currentTab === ACTIVE_TASKS) {
            return tasks.filter((task) => !task.completed);
        } else if (currentTab === COMPLETE_TASKS) {
            return tasks.filter((task) => task.completed);
        };
    };

    const removeCompleted = () => {
        tasks.forEach(({ completed, _id }) => {
            if (completed) {
                dispatch(taskDelete(_id));
            };
        });
    };

    return (
        <article>
            <div>
                <Tabs currentTab={currentTab} />

                {
                    tasks.some(task => task.completed) ? (
                        <button
                            onClick={removeCompleted}
                            className='clear-btn'
                        >
                            Remove Completed
                        </button>
                    ) : null
                }
            </div>
            <ul>
                {
                    getAllTasks().map((task) => (
                        <Task
                            key={task._id}
                            task={task}
                        />
                    ))
                }
            </ul>
        </article>
    );
};

export default Tasks;