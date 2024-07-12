const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
  caseNumber: String,
  officerName: String,
  unit: String,
  description: String,
  // Add other relevant fields
});

module.exports = mongoose.model('Case', caseSchema);
