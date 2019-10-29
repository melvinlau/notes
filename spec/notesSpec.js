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
  console.log('noteList.view()', noteList.view());
  console.log('noteList.view() === []', noteList.view() === []);
  assert.isTrue(noteList.view() === []);
})();
