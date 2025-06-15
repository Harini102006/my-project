// CoffeeMenuPage.jsx
import React from 'react';

const menuItems = [
  {
    category: 'Coffee',
    items: [
      { name: 'Espresso', price: '$2.50' },
      { name: 'Americano', price: '$3.00' },
      { name: 'Latte', price: '$3.50' },
      { name: 'Cappuccino', price: '$3.75' },
    ],
  },
  {
    category: 'Tea',
    items: [
      { name: 'Green Tea', price: '$2.00' },
      { name: 'Chai Latte', price: '$3.25' },
      { name: 'Herbal Tea', price: '$2.50' },
    ],
  },
  {
    category: 'Pastries',
    items: [
      { name: 'Croissant', price: '$2.75' },
      { name: 'Muffin', price: '$2.50' },
      { name: 'Cinnamon Roll', price: '$3.00' },
    ],
  },
];

export default function CoffeeMenuPage() {
  return (
    <div className="min-h-screen bg-amber-50 p-6">
      <h1 className="text-4xl font-bold text-center text-brown-800 mb-8">☕ Coffee Shop Menu</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {menuItems.map((section) => (
          <div key={section.category} className="bg-white rounded-2xl shadow-md p-4">
            <h2 className="text-xl font-semibold text-brown-700 mb-4">{section.category}</h2>
            <ul className="space-y-2">
              {section.items.map((item, index) => (
                <li key={index} className="flex justify-between text-gray-700">
                  <span>{item.name}</span>
                  <span className="font-medium">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

