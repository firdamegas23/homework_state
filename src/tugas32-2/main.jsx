import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import '../App.css';
import App from './App';
import { Store } from './app/store';
import { Provider } from 'react-redux';


// Bungkus komponen App dengan Provider dari react-redux

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={Store}>
            <App />
        </Provider>
    </StrictMode>
);