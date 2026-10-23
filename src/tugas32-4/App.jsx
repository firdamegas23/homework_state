import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './pages/TodoList';
import TodoDetail from './pages/TodoDetail';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/tugas32-4.html"  element={<TodoList />} />
                <Route path="/todo/:id" element={<TodoDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;