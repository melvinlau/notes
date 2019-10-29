// describe('note', ()=> {
//   it('does something', () => {
//
//   });
// });

(function testNoteInitEmpty() {
  var note = new Note('hello');
  assert.isTrue(note.text === 'hello');
})();
