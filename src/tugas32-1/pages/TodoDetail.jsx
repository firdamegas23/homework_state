import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TodoContext } from '../context/TodoContext';
import { VoteContext } from '../context/VoteContext';


function TodoDetail() {
    const { id } = useParams();
    const { todos, selectedUser } = useContext(TodoContext);
    const { votes, handleVote } = useContext(VoteContext);

    // Mencari data Todo yang sesuai dengan ID dari URL
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

                <button onClick={() => handleVote(todo.id)}>Vote</button>

                <Link to="/tugas32-1.html">
                    <button>Kembali ke Beranda</button>
                </Link>
            </div>
        </div>
    );
}

export default TodoDetail;
