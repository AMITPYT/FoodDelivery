import React from 'react';

const CheckoutForm = ({ formData, setFormData, handleCheckout, isOrdering }) => {
    return (
        <div className="glass-panel">
            <h2>Delivery Details</h2>
            <form onSubmit={handleCheckout} style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
                <input
                    type="text" placeholder="Full Name" required
                    value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }}
                />
                <input
                    type="text" placeholder="Address" required
                    value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })}
                    style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }}
                />
                <input
                    type="tel" placeholder="Phone" required
                    value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }}
                />
                <button className="btn btn-primary" type="submit" disabled={isOrdering}>
                    {isOrdering ? 'Processing...' : 'Place Order'}
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
