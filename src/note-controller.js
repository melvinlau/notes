(function (exports) {
  class NoteController {
    constructor(noteList = new NoteList()) {
      noteList.add(new Note('Favourite drink: covfefe'));
      this.noteListView = new NoteListView(noteList);
    }
    renderList(target = document) {
      target.getElementById("app").innerHTML = this.noteListView.displayHTML();
    }
    getNoteIdFromHash(target = window.location) {
      return parseInt(target.hash.split('notes/')[1]);
    }
    findNote(id) {
      let result = this.noteListView.getList().view().filter((note) => {
        return note.id === id;
      });
      return result[0];
    }
    renderSingleNote(note, target = document) {
      let singleNoteView = new SingleNoteView(note);
      target.getElementById("app").innerHTML = singleNoteView.displayHTML();
    }
    updateContent() {
      this.renderSingleNote(this.findNote(this.getNoteIdFromHash()));
    }
  }
  exports.NoteController = NoteController;
})(this);

window.onload = () => {
  noteController = new NoteController();
  noteController.renderList();
  window.addEventListener('hashchange', () => {
    noteController.updateContent();
  });
}
