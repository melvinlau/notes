(function (exports) {
  class Note {
    constructor(text) {
      this.text = text;
      this._id = Note.index;
      Note.index += 1;
    }
    view() {
      return this.text;
    }
    get id() {
      return this._id;
    }
    static get index() {
      Note._index = (Note._index || 0);
      return Note._index;
    }
    static set index(value) {
      Note._index = value;
    }
  }
  exports.Note = Note;
})(this);
