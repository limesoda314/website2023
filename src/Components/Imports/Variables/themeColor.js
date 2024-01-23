import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    colorValue: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_COLOR_VALUE':
            return { ...state, colorValue: action.payload };
        default:
            return state;
    }
};

const colorValueStore = configureStore({
    reducer: {
        rootReducer: reducer,
    },
});

export default colorValueStore;
