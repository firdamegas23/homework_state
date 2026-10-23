import { create } from 'zustand';

export const useStore = create((set) => ({
    // State untuk User
    users: ["Dipper", "Mabel", "Wendy"],
    selectedUser: "Dipper",
    setSelectedUser: (user) => set({ selectedUser: user }),

    // State untuk Todo
    todos: [
        { id: 1, title: "Belajar State Management", description: "Memahami cara kerja state"},
        { id: 2, title: "Belajar Zustand", description: "Memahami cara kerja Zustand"},
        { id: 3, title: "Membuat Fitur Vote Counter", description: "Menambahkan vote hitung suara"}
    ],

    // State untuk Vote
    votes: {
        1: 0,
        2: 0,
        3: 0
    },

    // Fungsi untuk menambah jumlah vote
    incrementVote: (id) => set((state) => ({
        votes: {
            ...state.votes,
            [id]: (state.votes[id] || 0) + 1
        }
    }))
}));