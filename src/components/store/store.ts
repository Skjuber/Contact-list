import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootReducer from './rootReducer';


const store = configureStore({
  reducer: rootReducer,
});

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>() // use this in your components

export default store;