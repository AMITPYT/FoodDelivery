import { MenuItem } from '../models/models.js';

export const seedMenu = async () => {
    try {
        const initialMenu = [
            {
                name: "Classic Margherita Pizza",
                description: "Fresh mozzarella, tomato sauce, and basil on a crispy thin crust.",
                price: 12.99,
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Double Bacon Burger",
                description: "Two juicy patties, crispy bacon, cheddar cheese, and special sauce.",
                price: 14.50,
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Spicy Tuna Roll",
                description: "Fresh tuna, spicy mayo, and cucumber rolled in premium vinegared rice.",
                price: 15.99,
                image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Penne Alla Vodka",
                description: "Al dente penne pasta in a creamy tomato vodka sauce with fresh parmesan.",
                price: 13.75,
                image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Chicken Caesar Salad",
                description: "Crisp romaine, grilled chicken, garlic croutons, and house-made dressing.",
                price: 11.25,
                image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Street Tacos",
                description: "Three soft corn tortillas with slow-cooked carnitas, onions, and cilantro.",
                price: 10.50,
                image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Chocolate Lava Cake",
                description: "Warm chocolate cake with a molten center, served with vanilla bean ice cream.",
                price: 8.99,
                image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80"
            }
        ];

        // For a better demo experience, we'll clear the menu and re-seed it so the user sees all items immediately
        await MenuItem.deleteMany({});
        await MenuItem.insertMany(initialMenu);
        console.log('Successfully seeded 7 delicious dishes!');

    } catch (error) {
        console.error('Error seeding data:', error);
    }
};
