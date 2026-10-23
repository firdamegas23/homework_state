// Gunakan useRecoilState untuk membaca dan mengubah data dari atom Recoil

import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { TodoListState, VoteState } from '../recoil/atoms';

function TodoList() {
    const [todoData, setTodoData] = useRecoilState(TodoListState);
    const [votes, setVotes] = useRecoilState(VoteState);

    // Fungsi untuk mengubah user yang sedang aktif
    const handleUser = (e) => {
        setTodoData((prev) => ({
            ...prev,
            selectedUser: e.target.value
        }));
    }

    // Fungsi untuk menambahk vote
    const handleVote = (id) => {
        setVotes((preVotes) => ({
            ...preVotes,
            [id] : (preVotes[id] || 0) + 1
        }));
    }

    return (
        <div>
            <center>
                <h1>Aplikasi Todo List & Voting</h1>
                <p>Recoil</p>
            </center>

            {/* Select input untuk memilih user */}
            <div className='container'>
                <label><strong>User saat ini: </strong></label>
                <select value={todoData.selectedUser} onChange={handleUser}>
                    {todoData.users.map((user, index) => (
                        <option key={index} value={user}>{user}</option>
                    ))}
                </select>

                <p>Halo, <b>{todoData.selectedUser}</b>! Silahkan berikan vote atau lihat detail todo list di bawah ini. </p>
            </div>

            {/* List Todo */}
            <h3>Daftar Todo</h3>
            <ul>
                {todoData.todos.map((todo) => (
                    <li key={todo.id} className='list'>
                        {/* Klik Judul untuk pindah ke halaman Detail Todo */}
                        <Link to={`/todo/${todo.id}`} className='link'>
                            {todo.title}
                        </Link>

                        <p>Jumlah Vote: <b>{votes[todo.id] || 0}</b></p>

                        {/* Tombol Vote */}
                        <button onClick={() => handleVote(todo.id)}>Vote</button>

                        {/* Tombol Link ke Detail List */}
                        <Link to={`/todo/${todo.id}`}>
                            <button>Lihat Detail</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
