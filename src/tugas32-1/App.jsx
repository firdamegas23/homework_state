import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import { VoteProvider } from './context/VoteContext';
import TodoList from './pages/TodoList';
import TodoDetail from './pages/TodoDetail';

function App() {
    return (
        // Membungkus aplikasi dengan 2 Context Provider
        <TodoProvider>
            <VoteProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/tugas32-1.html' element={<TodoList />} />
                        <Route path='/todo/:id' element={<TodoDetail />} />
                    </Routes>
                </BrowserRouter>
            </VoteProvider>
        </TodoProvider>
    );
}

export default App;