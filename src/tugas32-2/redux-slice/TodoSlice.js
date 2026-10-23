// Menyimpan data Todo dan User aktif

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: ["Dipper", "Mabel", "Wendy"],
    selectedUser: "Dipper",
    todos: [
        { id: 1, title: "Belajar State Management", description: "Memahami cara kerja state"},
        { id: 2, title: "Belajar Redux Toolkit", description: "Memahami cara kerja Redux Toolkit"},
        { id: 3, title: "Membuat Fitur Vote Counter", description: "Menambahkan vote hitung suara"}
    ]
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        }
    }
});

export const { setSelectedUser } = TodoSlice.actions;

export default TodoSlice.reducer;