(function (exports) {
  class NoteController {
    constructor(noteList = new NoteList()) {
      noteList.add(new Note('Favourite drink: coffee'));
      this.noteListView = new NoteListView(noteList);
    }
    render(target = document) {
      target.getElementById("app").innerHTML = this.noteListView.displayHTML();
    }
  }
  exports.NoteController = NoteController;
})(this);
