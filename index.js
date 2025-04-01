require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const snippetRoutes = require('./routes/snippetRoutes');
const cors = require('cors');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('SnipStash API is running');
});

app.use('/api/snippets', snippetRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));