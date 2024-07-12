const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
const caseRoutes = require('./routes/cases');
const contactHistoryRoutes = require('./routes/contactHistory');
const wantedRecordsRoutes = require('./routes/wantedRecords');
const trespassRecordsRoutes = require('./routes/trespassRecords');

// Use routes
app.use('/api/cases', caseRoutes);
app.use('/api/contact-history', contactHistoryRoutes);
app.use('/api/wanted-records', wantedRecordsRoutes);
app.use('/api/trespass-records', trespassRecordsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


