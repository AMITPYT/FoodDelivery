import { MenuItem, Order } from '../models/models.js';

export const getAllMenuItems = async () => {
    return await MenuItem.find();
};

export const createNewOrder = async (orderData) => {
    const newOrder = new Order(orderData);
    await newOrder.save();

    // Start simulation in background
    simulateStatusUpdates(newOrder._id);

    return newOrder;
};

export const getOrderById = async (id) => {
    return await Order.findById(id);
};

const simulateStatusUpdates = async (orderId) => {
    const stages = ["Order Received", "Preparing", "Out for Delivery", "Delivered"];
    let index = 1;

    const interval = setInterval(async () => {
        if (index >= stages.length) {
            clearInterval(interval);
            return;
        }

        try {
            await Order.findByIdAndUpdate(orderId, { status: stages[index] });
            console.log(`Order ${orderId} updated to ${stages[index]}`);
            index++;
        } catch (error) {
            console.error("Simulation error", error);
            clearInterval(interval);
        }
    }, 5000); // 5 seconds per stage
};
