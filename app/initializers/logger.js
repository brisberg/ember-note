import Ember from 'ember';

export function initialize(registry, application) {
  var logger = Ember.Object.extend({
    log: function (message) {
      console.log("log service: " + message);
    }
  });
  application.register('logger:foo', logger);
  application.inject('route:notebooks', 'logger', 'logger:foo');
  application.inject('route:notebooks.notes', 'logger', 'logger:foo');
}

export default {
  name: 'logger',
  initialize: initialize
};
