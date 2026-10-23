import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { TodoListState, VoteState } from '../recoil/atoms';

function TodoDetail() {
    const { id } = useParams();

    // Untuk membaca data Todo
    const todoData = useRecoilValue(TodoListState);

    // Untuk membaca & menambah vote
    const [votes, setVotes] = useRecoilState(VoteState);

    // Cari data Todo berdasarkan ID
    const todo = todoData.todos.find((t) => t.id === Number(id));

    const handleVote = (todoId) => {
        setVotes((preVotes) => ({
            ...preVotes,
            [todoId]: (preVotes[todoId] || 0) + 1
        }));
    }

    if (!todo) {
        return <p>Tugas tidak ditemukan!</p>
    }

    return (
        <div>
            <center><h1>Detail Todo</h1></center>

            <p>Akses oleh User: <b>{todoData.selectedUser}</b></p>
            
            <div className='container-detail'>
                <h2>{todo.title}</h2>
                <p><b>Deskripsi</b> : {todo.description}</p>
                <p><b>Total Vote</b> : {votes[todo.id] || 0}</p>

                <button onClick={() => handleVote(todo.id)}>Vote</button>

                <Link to="/tugas32-3.html">
                    <button>Kembali ke Beranda</button>
                </Link>
            </div>
        </div>
    );
}

export default TodoDetail;