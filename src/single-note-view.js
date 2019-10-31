(function (exports) {
  class SingleNoteView {
    constructor(note) {
      this.note = note;
    }
    displayHTML() {
      return `<div>${this.note.view()}</div>`;
    }
  }
exports.SingleNoteView = SingleNoteView;
})(this);
