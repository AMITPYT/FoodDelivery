import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import TrackingPage from './pages/TrackingPage';
import './index.css';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        console.log("Adding to cart:", item);
        setCart(prevCart => {
            const id = item._id || item.id;
            const existing = prevCart.find(i => (i._id || i.id) === id);
            if (existing) {
                console.log("Item exists, increasing quantity");
                return prevCart.map(i => (i._id || i.id) === id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            console.log("New item added to cart");
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            setCart(prev => prev.filter(i => (i._id || i.id) !== id));
            return;
        }
        setCart(prev => prev.map(i => (i._id || i.id) === id ? { ...i, quantity } : i));
    };

    const clearCart = () => setCart([]);

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Router>
            <div className="container">
                <Navbar cartCount={cartCount} />

                <Routes>
                    <Route path="/" element={<MenuPage addToCart={addToCart} />} />
                    <Route
                        path="/cart"
                        element={
                            <CartPage
                                cart={cart}
                                updateQuantity={updateQuantity}
                                clearCart={clearCart}
                            />
                        }
                    />
                    <Route path="/status/:id" element={<TrackingPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
