import React from 'react';
import { Plus } from 'lucide-react';

const FoodCard = ({ item, addToCart }) => {
    const handleAdd = () => {
        console.log("Button clicked for:", item.name);
        addToCart(item);
    };

    return (
        <div className="glass-panel food-card">
            <div style={{ overflow: 'hidden', borderRadius: '12px' }}>
                <img
                    src={item.image}
                    alt={item.name}
                    className="food-image"
                    onError={(e) => {
                        console.error("Image failed to load:", item.image);
                        e.target.src = "https://via.placeholder.com/400x300?text=Food+Image";
                    }}
                />
            </div>
            <div className="food-info">
                <h3>{item.name}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', margin: '0.5rem 0' }}>{item.description}</p>
                <div className="food-price">${item.price.toFixed(2)}</div>
            </div>
            <button
                className="btn btn-primary"
                onClick={handleAdd}
                style={{ width: '100%', marginTop: '1rem' }}
            >
                <Plus size={18} /> Add to Cart
            </button>
        </div>
    );
};

export default FoodCard;
