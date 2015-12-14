import Ember from 'ember';
import ValidationFunctions from 'ember-note/mixins/validation-functions';

export default Ember.Route.extend(ValidationFunctions, {
  model: function (params) {
    return this.store.query('note', {notebook: params.notebook_id});
  },
  actions: {
    addNote: function () {
      var title = this.controller.get('title');
      if (!this.isValidLength(title, 0, 140)) {
        alert('Title must be longer than 0 ' + 'characters and no more than 140.');
      }
      else {
        this.store.findRecord('notebook',
          this.paramsFor('newbooks.notes').notebook_id).then(
          (notebook) => {
            this.logger.log(notebook);
            var note = this.store.createRecord('note', {
              title: this.controller.get('title'),
              notebook: notebook
            });
            this.logger.log(note);
            note.save().then(() => {
              this.logger.log('save successful');
              this.controller.set('title', null);
              this.refresh();
            }, function () {
              this.logger.log('save failed');
            });
          }
        );
      }
    },
    deleteNote: function (note) {
      this.logger.log('deleting note with title ' + note.get('title'));
      note.deleteRecord();
      note.save();
    }
  }
});
