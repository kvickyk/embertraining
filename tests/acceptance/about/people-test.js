import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'training/tests/helpers/start-app';

module('Acceptance | about/people', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /about/people', function(assert) {
  visit('/about/people');

  andThen(function() {
    assert.equal(currentURL(), '/about/people');
  });
});

test('check if records have loaded', function(assert) {
  visit('/about/people');

  server.createList('contact', 10);

  andThen(function() {
    let records = find ('.contact');
    assert.equal(records.length, 10, 'Record count is correct');
  });
});
