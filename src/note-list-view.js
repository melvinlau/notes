(function(exports) {
  class NoteListView {
    constructor(noteList) {
      this.noteList = noteList;
    }
    displayHTML() {
      if (this.noteList.view().length === 0) return 'No notes yet!';
      let html = '<ul>';
      this.noteList.view().forEach((note) => {
        if (note.view().length > 20) {
          html += `<li>${note.view().substring(0,20)}...</li>`
        } else {
          html += `<li>${note.view()}</li>`
        }
      });
      html += '</ul>'
      return html;
    }
  }
  exports.NoteListView = NoteListView;
})(this);
