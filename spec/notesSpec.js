// NOTE model

(function newNoteStoresText() {
  let note = new Note('hello');
  assert.isTrue(note.text === 'hello');
})();

(function noteViewDisplaysText() {
  let note = new Note('Hello World');
  assert.isTrue(note.view() === 'Hello World');
})();

// NOTE-LIST model

(function noteListViewDisplaysArrayofNotes() {
  let noteList = new NoteList();
  assert.isTrue(noteList.view().length === 0);
})();

(function noteListAddAddsToArray() {
  let note = new Note('hello');
  let noteList = new NoteList();
  noteList.add(note);
  assert.isTrue(noteList.view().includes('hello'));
})();

// NOTE-LIST-VIEW
