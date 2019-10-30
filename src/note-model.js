(function (exports) {
  class Note {
    constructor(text) {
      this.text = text;
    }
    view() {
      return this.text;
    }
  }
  exports.Note = Note;
})(this);
