import { atom } from 'recoil';

// Atom 1 menyimpan data user, user aktif dan todo list
export const TodoListState = atom({
    key: 'TodoListState',
    default: {
        users: ["Dipper", "Mabel", "Wendy"],
        selectedUser: "Dipper",
        todos: [
            { id: 1, title: "Belajar State Management", description: "Memahami cara kerja state"},
            { id: 2, title: "Belajar Recoil", description: "Memahami cara kerja Recoil"},
            { id: 3, title: "Membuat Fitur Vote Counter", description: "Menambahkan vote hitung suara"}
        ]
    }
});

// Atom 2 menyimpan jumlah vote berdasarkan ID
export const VoteState = atom({
    key: 'VoteState',
    default: {
        1: 0,
        2: 0,
        3: 0
    }
});