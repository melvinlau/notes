// NOTE LIST model spec

(function noteListViewDisplaysArrayofNotes() {
  let noteList = new NoteList();
  assert.isTrue(noteList.view().length === 0);
})();

(function noteListAddAddsToArray() {
  let note = new Note('hello');
  let noteList = new NoteList();
  noteList.add(note);
  assert.isTrue(noteList.view()[0].text.includes('hello'));
})();
