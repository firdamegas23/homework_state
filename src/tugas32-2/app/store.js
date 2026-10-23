// Redux Store
// Penggabungan 2 reducer dari slice dalam 1 store pusat

import { configureStore } from '@reduxjs/toolkit';
// Kalau export default nama pas di import-nya boleh bebas, namun disini disamakan saja supaya tidak bingung
import TodoSlice from '../redux-slice/TodoSlice';
import VoteSlice from '../redux-slice/VoteSlice';

export const Store = configureStore({
    reducer: {
        todo: TodoSlice,
        vote: VoteSlice
    }
}); 

