// Mengelola logika vote  

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Menyimpan jumlah vote untuk tiap ID
    votes: {
        1: 0,
        2: 0,
        3: 0
    }
}

export const VoteSlice = createSlice({
    name: 'vote',
    initialState,
    reducers: {
        incrementVote: (state, action) => {
            const id = action.payload;
            state.votes[id] = (state.votes[id] || 0) + 1;
        }
    }
});

export const { incrementVote } = VoteSlice.actions;

export default VoteSlice.reducer;