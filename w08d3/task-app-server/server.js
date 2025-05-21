const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.listen(8080, () => console.log('Server running on http://localhost:8080'));
