import { TABS } from '../Redux/actions/type';
import { useDispatch } from 'react-redux';
import { tabToggle } from '../Redux/actions';

const Tabs = ({ currentTab }) => {
    const dispatch = useDispatch();

    return (
        <div id='tabs'>
            {
                TABS.map((tab) => (
                    <div className='buttons'>
                        <button
                            className={tab === currentTab ? 'button selected' : 'button'}
                            onClick={() => dispatch(tabToggle(tab))}
                        >
                            {tab}
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

export default Tabs;