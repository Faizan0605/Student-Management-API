const express = require('express');

const studentController = require('../controller/studentController');

const router = express.Router();


router.get('/', studentController);


module.exports = router;