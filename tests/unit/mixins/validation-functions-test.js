import Ember from 'ember';
import ValidationFunctionsMixin from '../../../mixins/validation-functions';
import { module, test } from 'qunit';

module('Unit | Mixin | validation functions');

// Replace this with your real tests.
test('it works', function(assert) {
  var ValidationFunctionsObject = Ember.Object.extend(ValidationFunctionsMixin);
  var subject = ValidationFunctionsObject.create();
  assert.ok(subject);
});
