class NoteController {
  constructor(noteList = new NoteList()) {
    noteList.add(new Note('Favourite drink: coffee'));
    this.noteListView = new NoteListView(noteList);
  }
  render() {
    document.getElementById("app").innerHTML = this.noteListView.displayHTML();
  }
}


// ============================================================================

function sayHowdy() {
  document.getElementById("app").innerHTML = "Howdy!";
}

window.onload = sayHowdy;


// let note = new Note();

// createButton = document.querySelector("#create");
//
// function createNote(note) {
//   note.create(note);
//   console.log(note.all());
// }
//
// createButton.onclick = createNote('Test entry')
