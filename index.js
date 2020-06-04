const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(cors());

const hostname = "127.0.0.1";
const port = 4000;

mongoose.connect('mongodb://127.0.0.1:27017/givecampus', {
  "useNewUrlParser": true,
  "useUnifiedTopology": true
});

routes(app);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
