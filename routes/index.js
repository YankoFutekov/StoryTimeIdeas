const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index/welcome');
});

router.get('/dashboard', (req, res) => {
  res.send('ZE DASHBOARD!');
});

module.exports = router;