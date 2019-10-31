// NOTE model spec

(function newNoteStoresText() {
  let note = new Note('hello');
  assert.isTrue(note.text === 'hello');
})();

(function noteViewDisplaysText() {
  let note = new Note('Hello World');
  assert.isTrue(note.view() === 'Hello World');
})();

(function newNoteHasUniqueID() {
  let note1 = new Note('I love coffee');
  let note2 = new Note('I like hot chocolate');
  assert.isTrue(note2.id === note1.id + 1);
})();
