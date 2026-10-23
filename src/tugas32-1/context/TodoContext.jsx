// Menyimpan data Todo dan User aktif

import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    // Daftar User
    const users = ["Dipper", "Mabel", "Wendy"];
    const [selectedUser, setSelectedUser] = useState("Dipper");

    // Data list Todo awal
    const [todos, setTodos] = useState([
        { id: 1, title: "Belajar State Management", description: "Memahami cara kerja state"},
        { id: 2, title: "Belajar React Context", description: "Memahami cara kerja Provide dan useContext"},
        { id: 3, title: "Membuat Fitur Vote Counter", description: "Menambahkan vote hitung suara"}
    ]);

    return (
        <TodoContext.Provider value={{ todos, users, selectedUser, setSelectedUser }}>
            {children}
        </TodoContext.Provider>
    );
}
