// NOTE model spec

(function newNoteStoresText() {
  let note = new Note('hello');
  assert.isTrue(note.text === 'hello');
})();

(function noteViewDisplaysText() {
  let note = new Note('Hello World');
  assert.isTrue(note.view() === 'Hello World');
})();
