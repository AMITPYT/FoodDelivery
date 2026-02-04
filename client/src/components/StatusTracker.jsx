import React from 'react';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

const StatusTracker = ({ status }) => {
    const getStatusIcon = (status) => {
        switch (status) {
            case 'Order Received': return <Clock size={64} color="#f39c12" />;
            case 'Preparing': return <Package size={64} color="#3498db" />;
            case 'Out for Delivery': return <Truck size={64} color="#e67e22" />;
            case 'Delivered': return <CheckCircle size={64} color="#27ae60" />;
            default: return <Clock size={64} />;
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div className="status-icon-container" style={{ marginBottom: '1.5rem' }}>
                {getStatusIcon(status)}
            </div>
            <h1 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{status}</h1>
            <div className="status-badge" style={{ display: 'inline-block' }}>{status}</div>
        </div>
    );
};

export default StatusTracker;
