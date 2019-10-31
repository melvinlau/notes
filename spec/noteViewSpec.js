// SINGLE NOTE VIEW spec

(function singleNoteViewReturnsHTMLFormattedNote() {
  text = 'Favourite drink: coffee';
  note = new Note(text);
  singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.displayHTML() === `<div>${text}</div>`);
})();
