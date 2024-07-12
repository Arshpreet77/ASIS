const express = require('express');
const {
    addContactHistory,
    getAllContactHistory,
    getContactHistoryById,
    updateContactHistory,
    deleteContactHistory
} = require('../models/WantedRecords');
const router = express.Router();

// Create a new contact history record
router.post('/', async (req, res) => {
    try {
        const id = await addContactHistory(req.body);
        res.status(201).json({ id });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all contact history records
router.get('/', async (req, res) => {
    try {
        const records = await getAllContactHistory();
        res.json(records);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific contact history record
router.get('/:id', async (req, res) => {
    try {
        const record = await getContactHistoryById(req.params.id);
        res.json(record);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

// Update a contact history record
router.put('/:id', async (req, res) => {
    try {
        await updateContactHistory(req.params.id, req.body);
        res.json({ message: 'Record updated' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a contact history record
router.delete('/:id', async (req, res) => {
    try {
        await deleteContactHistory(req.params.id);
        res.json({ message: 'Record deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
