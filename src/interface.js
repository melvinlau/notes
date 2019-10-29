let note = new Note();

createButton = document.querySelector("#create");

function createNote(note) {
  note.create(note);
  console.log(note.all());
}

createButton.onclick = createNote('Test entry')
