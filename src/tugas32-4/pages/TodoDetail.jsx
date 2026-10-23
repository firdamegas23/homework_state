import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../zustand/useStore';

function TodoDetail() {
    const { id } = useParams();

    // Ambil data dari zustand store
    const { todos, selectedUser, votes, incrementVote } = useStore();

    // Cari data todo berdasarkan ID dari url
    const todo = todos.find((t) => t.id === Number(id));

    if (!todo) {
        return <p>Tugas tidak ditemukan!</p>
    }

    return (
        <div>
            <center><h1>Detail Todo</h1></center>

            <p>Akses oleh User: <b>{selectedUser}</b></p>
                        
            <div className='container-detail'>
                <h2>{todo.title}</h2>
                <p><b>Deskripsi</b> : {todo.description}</p>
                <p><b>Total Vote</b> : {votes[todo.id] || 0}</p>

                <button onClick={() => incrementVote(todo.id)}>Vote</button>

                <Link to="/tugas32-4.html">
                    <button>Kembali ke Beranda</button>
                </Link>
            </div>
        </div>
    );
}

export default TodoDetail;
