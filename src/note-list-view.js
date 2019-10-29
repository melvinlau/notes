class NoteListView {
  constructor(noteList) {
    this.noteList = noteList;
  }
  displayHTML() {
    if (this.noteList.view().length === 0) return '';
    let html = '<ul>';
    this.noteList.view().forEach((note) => {
      html += `<li>${note}</li>`
    });
    html += '</ul>'
    return html;
  }
}
