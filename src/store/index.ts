import { combineReducers, configureStore } from '@reduxjs/toolkit';

import articlesReducer from './slice/articlesSlice';

const rootReducer = combineReducers({articlesReducer});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];