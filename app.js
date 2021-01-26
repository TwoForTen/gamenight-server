const express = require('express');
const dotenv = require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const db = require('./config/database');

const app = express();
const port = process.env.PORT || 3000;

db.authenticate()
  .then(() => console.log('Sequelize connected'))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, () => console.log(`server running at port ${port}`));
