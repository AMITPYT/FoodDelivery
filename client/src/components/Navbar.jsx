import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Utensils } from 'lucide-react';

const Navbar = ({ cartCount }) => {
    return (
        <nav className="navbar glass-panel">
            <Link to="/" className="logo">
                <Utensils size={32} />
                <span>FoodDash</span>
            </Link>
            <div className="nav-links">
                <Link to="/" className="nav-link">Menu</Link>
                <Link to="/cart" className="nav-link btn btn-outline" style={{ display: 'flex', gap: '0.5rem' }}>
                    <ShoppingCart size={20} />
                    <span>Cart ({cartCount})</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
