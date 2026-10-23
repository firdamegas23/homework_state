import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../zustand/useStore';


function TodoList() {
    // Mengambil state & function dari zustand store
    const { todos, users, selectedUser, setSelectedUser, votes, incrementVote } = useStore();

    return (
        <div>
            <center>
                <h1>Aplikasi Todo List & Voting</h1>
                <p>Zustand</p>
            </center>

            {/* Select input untuk memilih user */}
            <div className='container'>
                <label><strong>User saat ini: </strong></label>
                <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                    {users.map((user, index) => (
                        <option key={index} value={user}>{user}</option>
                    ))}
                </select>

                <p>Halo, <b>{selectedUser}</b>! Silahkan berikan vote atau lihat detail todo list di bawah ini. </p>
            </div>

            {/* List Todo */}
            <h3>Daftar Todo</h3>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className='list'>
                        {/* Klik Judul untuk pindah ke halaman Detail Todo */}
                        <Link to={`/todo/${todo.id}`} className='link'>
                            {todo.title}
                        </Link>

                        <p>Jumlah Vote: <b>{votes[todo.id] || 0}</b></p>

                        {/* Tombol Vote */}
                        <button onClick={() => incrementVote(todo.id)}>Vote</button>

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