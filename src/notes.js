function Note() {
  this.notes = [];
}

Note.prototype.create = function(note) {
  this.notes.push(note);
  return note;
}

Note.prototype.all = function() {
  return this.notes;
}


// class Note {
//
//   all() {
//
//   }
//
//   create(note) {
//     return note;
//   }
//
// }
