import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }
});

export const MenuItem = mongoose.model('MenuItem', menuItemSchema);

const orderSchema = new mongoose.Schema({
    customer: {
        name: { type: String, required: true },
        address: { type: String, required: true },
        phone: { type: String, required: true }
    },
    items: [{
        id: String,
        name: String,
        price: Number,
        quantity: Number
    }],
    total: { type: Number, required: true },
    status: {
        type: String,
        enum: ["Order Received", "Preparing", "Out for Delivery", "Delivered"],
        default: "Order Received"
    },
    createdAt: { type: Date, default: Date.now }
});

export const Order = mongoose.model('Order', orderSchema);
