
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ItemList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Ensure this URL matches your backend's port and endpoint
        const response = await axios.get('http://localhost:5000/api/items');
        setItems(response.data);
      } catch (err) {
        setError('Failed to fetch items.');
        console.error('Error fetching items:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <div>Loading items...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Available Items</h2>
      <div className="item-grid">
        {items.map(item => (
          <div key={item._id} className="item-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Points: {item.redemptionPoints}</p>
            {/* Add image, link to detail page, etc. */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;