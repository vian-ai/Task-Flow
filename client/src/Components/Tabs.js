import { TABS } from '../Redux/actions/type';
import { useDispatch } from 'react-redux';
import { tabToggle } from '../Redux/actions';

const Tabs = ({ currentTab }) => {
    const dispatch = useDispatch();

    return (
        TABS.map((tab) => (
            <button
                className={tab === currentTab ? 'selected' : 'button'}
                onClick={() => dispatch(tabToggle(tab))}
            >
                {tab}
            </button>
        ))
    );
};

export default Tabs;