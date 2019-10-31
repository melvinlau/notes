// NOTE LIST VIEW model spec

(function noteListViewReturnsHTMLStringForANoteList() {
  let note1 = new Note('hello');
  let note2 = new Note('world');
  let noteList = new NoteList();
  noteList.add(note1);
  noteList.add(note2);
  let noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.displayHTML().includes(
    '<ul><li>' + 'hello' + '</li><li>' + 'world' + '</li></ul>')); // use regexp?
})();

(function noteListViewReturnsEmptyStringIfNoNotes() {
  let noteList = new NoteList();
  let noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.displayHTML() === 'No notes yet!');
})();

(function noteListViewReturnsFirst20CharsOfEachNote() {
  let note = new Note('The quick brown fox jumps over the lazy dog.');
  let noteList = new NoteList();
  noteList.add(note);
  let noteListView = new NoteListView(noteList);
  let expectedHTML = 'The quick brown fox ...';
  assert.isTrue(noteListView.displayHTML().includes(expectedHTML));
})();

function noteListViewContainsLinksToUniqueNotes() {
  let note = new Note('howdy');
  let noteList = new NoteList();
  notelist.add(note);
  let noteListView = new NoteListView(noteList);
}
