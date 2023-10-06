const Note = require('../../models/note');

module.exports = {
  index,
  show,
  create,
  delete: deleteNote,
  edit,
  update,
}

async function index(req,res) {
  const notes = await Note.find({user: req.user._id});
  res.json(notes);
}

async function show(req,res) {
  const note = await Note.findById(req.params.id);
  res.json(note);
}

async function create(req,res) {
  const note = await Note.create(req.body);
  res.json(note);
}

async function deleteNote(req,res) {
  const note = await Note.findOneAndDelete({
    "_id": req.params.id,
  });
  res.json(note);
}

async function edit(req,res) {
  const note = await Note.findById(req.params.id);
  res.json(note);
}

async function update(req,res) {
  const note = await Note.findById(req.params.id);
  const newNote = await note.updateOne(req.body);
  const notes = await Note.find({user: req.user._id});
  res.json(notes);
}
