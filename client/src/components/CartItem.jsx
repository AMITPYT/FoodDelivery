import React from 'react';
import { Minus, Plus } from 'lucide-react';

const CartItem = ({ item, updateQuantity }) => {
    return (
        <div className="cart-item">
            <div>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
            </div>
            <div className="quantity-controls">
                <button className="btn btn-outline" style={{ padding: '0.4rem' }} onClick={() => updateQuantity(item._id || item.id, item.quantity - 1)}>
                    <Minus size={16} />
                </button>
                <span>{item.quantity}</span>
                <button className="btn btn-outline" style={{ padding: '0.4rem' }} onClick={() => updateQuantity(item._id || item.id, item.quantity + 1)}>
                    <Plus size={16} />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
