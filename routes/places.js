const express = require('express');
const router = express.Router();

const { Place } = require('../models');

router.get('/places', async (req, res) => {
  try {
    const places = await Place.findAll();
    res.json(places);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
