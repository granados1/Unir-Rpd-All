import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { General } from './views/General.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CartProvider>
            <Router>
                <General />
            </Router>
        </CartProvider>
    </StrictMode>
);
