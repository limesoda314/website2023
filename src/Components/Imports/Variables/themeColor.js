import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    darkThemeIndex: 2,
    themeColorIndex: 2,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
       case 'UPDATE_READING_THEME':
          return { ...state, darkThemeIndex: action.payload };
       case 'UPDATE_THEME_COLOR_INDEX':
          return { ...state, themeColorIndex: action.payload };
       default:
          return state;
    }
 };

const themeColorStore = configureStore({
   reducer: {
      rootReducer: reducer,
   },
});

export default themeColorStore;
