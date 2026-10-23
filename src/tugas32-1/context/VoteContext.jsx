// Menyimpan Logika Vote Counter

import React, { createContext, useState } from 'react';

export const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
    // Menyimpan jumlah vote berdasarkan ID Todo
    const [votes, setVotes] = useState({
        1: 0,
        2: 0,
        3: 0
    });
    
    const handleVote = (id) => {
        setVotes((preVotes) => ({
            ...preVotes,
            [id]: (preVotes[id] || 0) + 1
        }));
    }

    return (
        <VoteContext.Provider value={{ votes, handleVote }}>
            {children}
        </VoteContext.Provider>
    );
}