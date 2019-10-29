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

// NOTE-LIST-VIEW model

(function noteListViewReturnsHTMLStringForANoteList() {
  let note1 = new Note('hello');
  let note2 = new Note('world');
  let noteList = new NoteList();
  noteList.add(note1);
  noteList.add(note2);
  let noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.displayHTML().includes(
    '<ul><li>hello</li><li>world</li></ul>'));
})();

(function noteListViewReturnsEmptyStringIfNoNotes() {
  let noteList = new NoteList();
  let noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.displayHTML() === 'No notes yet!');
})();
