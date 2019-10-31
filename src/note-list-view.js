(function(exports) {
  class NoteListView {
    constructor(noteList) {
      this.noteList = noteList;
    }
    displayHTML() {
      if (this.noteList.view().length === 0) return 'No notes yet!';
      let html = '<ul>';
      let text;
      this.noteList.view().forEach((note) => {
        if (note.view().length > 20) {
          text = note.view().substring(0,20) + '...';
        } else {
          text = note.view();
        }
        html += `<li><a href="#notes/${note.id}">${text}</a></li>`;
      });
      html += '</ul>'
      return html;
    }
  }
  exports.NoteListView = NoteListView;
})(this);
