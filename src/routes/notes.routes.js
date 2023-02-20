const { Router } = require("express");
const router = Router();

const {
  renderNoteFrom,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote,
} = require("../controllers/notes.controller");

router.get("/notes/add", renderNoteFrom);
router.post("/notes/add", createNewNote);
router.get("/notes", renderNotes);
router.get("/notes/edit/:id", renderEditForm);
router.put("/notes/edit/:id", updateNote);
router.delete("/notes/delete/:id", deleteNote);

module.exports = router;
