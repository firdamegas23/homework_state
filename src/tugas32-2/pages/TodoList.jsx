import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedUser } from '../redux-slice/TodoSlice';
import { incrementVote } from '../redux-slice/VoteSlice';

function TodoList() {
    const dispatch = useDispatch();

    // Mengambil state dari Redux Store
    const { todos, users, selectedUser } = useSelector((state) => state.todo);
    const { votes } = useSelector((state) => state.vote);

    return (
        <div>
            <center>
                <h1>Aplikasi Todo List & Voting</h1>
                <p>Redux Toolkit</p>
            </center>

            {/* Select input untuk memilih user */}
            <div className='container'>
                <label><strong>User saat ini: </strong></label>
                <select value={selectedUser} onChange={(e) => dispatch(setSelectedUser(e.target.value))}>
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
                        <button onClick={() => dispatch(incrementVote(todo.id))}>Vote</button>

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