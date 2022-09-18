import * as actionTypes from '../actions/type';

export const tabReducer = (state = actionTypes.ALL_TASKS, action) => {
    switch (action.type) {
        case actionTypes.toggleTab:
            return action.selected
        default:
            return state;
    };
};