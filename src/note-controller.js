(function (exports) {
  class NoteController {
    constructor(noteList = new NoteList()) {
      noteList.add(new Note('Favourite drink: coffee'));
      this.noteListView = new NoteListView(noteList);
    }
    renderList(target = document) {
      target.getElementById("app").innerHTML = this.noteListView.displayHTML();
    }
    renderSingleNote(note, target = document) {
      let singleNoteView = new SingleNoteView(note);
      target.getElementById("app").innerHTML = singleNoteView.displayHTML();
    }
  }
  exports.NoteController = NoteController;
})(this);
