import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { placeOrder } from '../services/api';
import CartItem from '../components/CartItem';
import CheckoutForm from '../components/CheckoutForm';

const CartPage = ({ cart, updateQuantity, clearCart }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', address: '', phone: '' });
    const [isOrdering, setIsOrdering] = useState(false);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = async (e) => {
        e.preventDefault();
        if (cart.length === 0) return;

        setIsOrdering(true);
        try {
            const order = await placeOrder({
                customer: formData,
                items: cart,
                total: total
            });
            clearCart();
            navigate(`/status/${order._id || order.id}`);
        } catch (error) {
            console.error("Order failed", error);
        } finally {
            setIsOrdering(false);
        }
    };

    if (cart.length === 0) {
        return (
            <div className="glass-panel animate-fade" style={{ textAlign: 'center', padding: '4rem' }}>
                <ShoppingBag size={64} style={{ color: '#ccc', marginBottom: '1rem' }} />
                <h2>Your cart is empty</h2>
                <button className="btn btn-primary" onClick={() => navigate('/')} style={{ marginTop: '1rem' }}>
                    Back to Menu
                </button>
            </div>
        );
    }

    return (
        <div className="cart-container animate-fade">
            <div className="glass-panel" style={{ marginBottom: '2rem' }}>
                <h2>Review Your Order</h2>
                {cart.map(item => (
                    <CartItem
                        key={item._id || item.id}
                        item={item}
                        updateQuantity={updateQuantity}
                    />
                ))}
                <div style={{ textAlign: 'right', marginTop: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    Total: ${total.toFixed(2)}
                </div>
            </div>

            <CheckoutForm
                formData={formData}
                setFormData={setFormData}
                handleCheckout={handleCheckout}
                isOrdering={isOrdering}
            />
        </div>
    );
};

export default CartPage;
