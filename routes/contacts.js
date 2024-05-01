const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');


router.get('/', contactsController.getAll);   // http://localhost:3000/contacts
router.get('/:id', contactsController.getSingle); // http://localhost:3000/contacts/1

module.exports = router;




