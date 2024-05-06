const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');


router.get('/', contactsController.getAll);   // http://localhost:8080/contacts
router.get('/:id', contactsController.getSingle); // http://localhost:8080/contacts/_id

router.post('/', contactsController.createContact); 
router.put('/:id', contactsController.updateContact);
router.delete('/:id', contactsController.deleteContact);

module.exports = router;




