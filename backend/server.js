const express = require('express');
const cors = require('cors');
const businessRoute = require('./routes/businessRoute');

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());
app.use('/api',businessRoute)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
