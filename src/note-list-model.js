(function(exports) {
  class NoteList {
    constructor() {
      this.noteList = [];
    }
    view() {
      return this.noteList;
    }
    add(note) {
      this.noteList.push(note);
    }
  }
  exports.NoteList = NoteList;
})(this);
