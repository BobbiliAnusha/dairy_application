const express = require('express');
const dairyController = require('../controllers/dairy');
const router = express.Router();
router.get('/', dairyController.getDairy);
router.post('/:userid', dairyController.addEntryToDairy);
router.put('/:userid', dairyController.editEntry);
router.delete('/:userid', dairyController.deleteEntry);
router.get('/:userid', dairyController.entryById);
router.get('/date/:date',dairyController.entryBYDate)

module.exports = router;
