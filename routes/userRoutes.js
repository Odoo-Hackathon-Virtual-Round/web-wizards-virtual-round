// Example: routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Get all available items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find({ status: 'available' });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single item by ID
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {

  const newItem = new Item({
    title: req.body.title,
    description: req.body.description,
    owner_id: req.body.owner_id, 
   
    status: 'pending_approval' // Initial status
  });
  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


module.exports = router;