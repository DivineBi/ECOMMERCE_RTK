import { configureStore } from '@redyxjs/toolkit';
import cartReducer from './Components/CartSlice';

const store = configureStore({
    reducer: {
        cart: createReducer,
    },
});

export default store;
