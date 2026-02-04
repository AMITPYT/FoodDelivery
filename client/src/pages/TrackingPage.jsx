import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchOrderStatus } from '../services/api';
import StatusTracker from '../components/StatusTracker';

const TrackingPage = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getStatus = async () => {
            try {
                const data = await fetchOrderStatus(id);
                setOrder(data);
            } catch (error) {
                console.error("Failed to fetch order", error);
            } finally {
                setLoading(false);
            }
        };

        getStatus();
        const interval = setInterval(getStatus, 5000);
        return () => clearInterval(interval);
    }, [id]);

    if (loading) return <div className="animate-fade">Checking your order status...</div>;
    if (!order) return <div className="glass-panel">Order not found.</div>;

    return (
        <div className="cart-container animate-fade">
            <div className="glass-panel" style={{ padding: '3rem' }}>
                <StatusTracker status={order.status} />

                <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                    <p style={{ color: '#666' }}>Order ID: #{order._id}</p>
                </div>

                <div style={{ textAlign: 'left', marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                    <h3>Delivery Details:</h3>
                    <p><strong>{order.customer.name}</strong></p>
                    <p>{order.customer.address}</p>
                    <p>{order.customer.phone}</p>
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link to="/" className="btn btn-outline">
                        Back to Menu
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TrackingPage;
