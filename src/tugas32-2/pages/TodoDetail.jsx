import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { incrementVote } from '../redux-slice/VoteSlice';

function TodoDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { todos, selectedUser } = useSelector((state) => state.todo);
    const { votes } = useSelector((state) => state.vote);

    // Mencari data todo berdasarkan ID
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

                <button onClick={() => dispatch(incrementVote(todo.id))}>Vote</button>

                <Link to="/tugas32-2.html">
                    <button>Kembali ke Beranda</button>
                </Link>
            </div>
        </div>
    );
}

export default TodoDetail;