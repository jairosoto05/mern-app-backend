const notesCtrl = {}

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) =>{
    const notes = await Note.find();
    res.json(notes)
} 

notesCtrl.createNote = async (req, res) => {
    const note = { title, content, date, author } =  req.body;
    const newNote = new Note({
        title,
        content,
        date,
        author
    })
    await newNote.save()
    console.log(newNote);
    res.json({"message": "Note saved"})
}

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.send(note);
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findOneAndDelete(req.params.id);
    res.json({"message": "note deleted"});
}

notesCtrl.updateNote = async (req, res) => {
    await Note.updateOne({_id:req.params.id},{
        $set:req.body
    })
    res.json({"message": "note updated"});
}

module.exports = notesCtrl;