const notesController = {};
const Note = require('../models/Note');

notesController.renderNoteFrom = (req, res) => {
  res.render("notes/new_note");
};

notesController.createNewNote = async (req, res) => {
  const {title, description} = req.body;
  const newNote = new Note({title, description});
  await newNote.save();
  req.flash('success_msg', 'Note added successfully');
  res.redirect("/notes");
};

notesController.renderNotes = async (req, res) => {
  const notes = await Note.find().lean();
  res.render('notes/all_notes', {notes});
};

notesController.renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  console.log(note);
  res.render("notes/edit_note", {note});
};

notesController.updateNote = async (req, res) => {
  const {title, description} = req.body;
  await Note.findByIdAndUpdate(req.params.id, {title, description});
  req.flash('success_msg', 'Note edited successfully');
  res.redirect("/notes");
};

notesController.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash('warning_msg', 'Note deleted successfully');
  res.redirect('/notes');
};

module.exports = notesController;
