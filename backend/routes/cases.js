const express = require('express');
const Case = require('../models/case');
const router = express.Router();

// Create a new case
router.post('/', async (req, res) => {
  const newCase = new Case(req.body);
  try {
    const savedCase = await newCase.save();
    res.status(201).json(savedCase);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all cases
router.get('/', async (req, res) => {
  try {
    const cases = await Case.find();
    res.json(cases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific case
router.get('/:id', getCase, (req, res) => {
  res.json(res.case);
});

// Update a case
router.put('/:id', getCase, async (req, res) => {
  Object.assign(res.case, req.body);
  try {
    const updatedCase = await res.case.save();
    res.json(updatedCase);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a case
router.delete('/:id', getCase, async (req, res) => {
  try {
    await res.case.remove();
    res.json({ message: 'Case deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get case by ID
async function getCase(req, res, next) {
  let caseInstance;
  try {
    caseInstance = await Case.findById(req.params.id);
    if (!caseInstance) {
      return res.status(404).json({ message: 'Case not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.case = caseInstance;
  next();
}

module.exports = router;
