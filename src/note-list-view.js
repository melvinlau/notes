class NoteListView {
  constructor(noteList) {
    this.noteList = noteList;
  }
  display() {
    let html = '<ul>';
    this.noteList.view().forEach((note) => {
      html += `<li>${note}</li>`
    });
    html += '</ul>'
    return html;
  }
}
