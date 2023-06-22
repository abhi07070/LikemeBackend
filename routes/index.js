const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller.js')

// console.log("Server loaded")
router.get('/', homeController.home)

module.exports = router;