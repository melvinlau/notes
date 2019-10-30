(function(exports) {
  class NoteList {
    constructor() {
      this.noteList = [];
    }
    view() {
      return this.noteList;
    }
    add(note) {
      this.noteList.push(note.view());
    }
  }
  exports.NoteList = NoteList;
})(this);
