const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

//GET /api/notes
router.get('/', notesCtrl.index);

//GET /api/notes/:id
router.get('/:id', notesCtrl.show);

//GET /api/notes/:id/edit
router.get('/:id/edit', notesCtrl.edit);

//POST /api/notes
router.post('/', notesCtrl.create);

//DELETE /api/notes/:id
router.delete('/:id', notesCtrl.delete);

//PUT /api/notes/:id
router.put('/:id', notesCtrl.update);

module.exports = router;