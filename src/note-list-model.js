class NoteList {

  constructor() {
    this.noteList = [];
  }

  view() {
    return this.noteList;
  }

  add(note) {
    this.noteList.push(note.text);
  }

}
