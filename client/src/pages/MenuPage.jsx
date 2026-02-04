import React, { useState, useEffect } from 'react';
import { fetchMenu } from '../services/api';
import FoodCard from '../components/FoodCard';

const MenuPage = ({ addToCart }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMenu = async () => {
            try {
                const data = await fetchMenu();
                setItems(data);
            } catch (error) {
                console.error("Failed to load menu", error);
            } finally {
                setLoading(false);
            }
        };
        loadMenu();
    }, []);

    if (loading) return <div className="animate-fade">Loading delicious menu...</div>;

    return (
        <div className="animate-fade">
            <h1 style={{ marginBottom: '2rem' }}>Freshly Prepared For You</h1>
            <div className="menu-grid">
                {items.map(item => (
                    <FoodCard
                        key={item._id || item.id}
                        item={item}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuPage;
