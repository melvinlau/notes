// NOTE CONTROLLER spec

(function innerHTMLIsDisplaysCorrectly() {
  let elementDouble = {
    innerHTML: 'Favourite drink: coffee'
  }
  let documentDouble = {
    getElementById: function (app) {
      return elementDouble;
    }
  }
  noteController = new NoteController();
  noteController.render(documentDouble);
  assert.isTrue(documentDouble.getElementById("app").innerHTML === noteController.noteListView.displayHTML());
})();
