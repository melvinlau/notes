// NOTE CONTROLLER spec

(function innerHTMLIsDisplaysCorrectly() {
  let elementDouble = {
    innerHTML: 'Favourite drink: coffee'
  }
  let documentDouble = {
    getElementById: function (app) {
      return elementDouble;
    }
  }
  noteController = new NoteController();
  noteController.renderList(documentDouble);
  assert.isTrue(documentDouble.getElementById("app").innerHTML === noteController.noteListView.displayHTML());
})();

(function noteControllerLoadsACompleteNoteWhenLinkIsClicked() {
  let elementDouble = {
    innerHTML: 'Favourite drink: coffee'
  }
  let documentDouble = {
    getElementById: function (app) {
      return elementDouble;
    }
  }
  let text = 'The quick brown fox jumps over the lazy dog.'
  let note = new Note(text);
  let noteList = new NoteList();
  noteList.add(note);
  let noteController = new NoteController(noteList);
  noteController.renderList(documentDouble);

  documentDouble.getElementById(note.id).onclick = () => {
    console.log("testing");
    assert.isTrue(document.getElementById("app").innerHTML.includes(text));
  }
  // Help?!
})();
