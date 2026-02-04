import * as foodService from '../services/foodService.js';

export const getMenu = async (req, res) => {
    try {
        const menu = await foodService.getAllMenuItems();
        res.json(menu);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const placeOrder = async (req, res) => {
    try {
        const { customer, items, total } = req.body;

        if (!customer || !items || items.length === 0) {
            return res.status(400).json({ error: 'Invalid order data' });
        }

        const order = await foodService.createNewOrder({ customer, items, total });
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getOrder = async (req, res) => {
    try {
        const order = await foodService.getOrderById(req.params.id);
        if (!order) return res.status(404).json({ error: 'Order not found' });
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
