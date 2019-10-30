(function(exports) {
  class NoteListView {
    constructor(noteList) {
      this.noteList = noteList;
    }
    displayHTML() {
      if (this.noteList.view().length === 0) return 'No notes yet!';
      let html = '<ul>';
      this.noteList.view().forEach((note) => {
        html += `<li>${note}</li>`
      });
      html += '</ul>'
      return html;
    }
  }
  exports.NoteListView = NoteListView;
})(this);
