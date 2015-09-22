import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'training/tests/helpers/start-app';

module('Acceptance | about', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /about', function(assert) {
  visit('/about');

  andThen(function() {
    assert.equal(currentURL(), '/about');
  });
});

test('Check if secret not shown on load', function(assert) {
  visit('/about');

  andThen(function() {
    let noSecretWrapper = find('#noSecretWrapper');
    assert.equal(noSecretWrapper.length, 1, 'Secret not shown');
  });
});


test('Check if secret is shown when password is correct', function(assert) {
  visit('/about');
  fillIn('#secretInputField', 'nimble');
  andThen(function() {
    let secretWrapper = find('#secretWrapper');
    assert.equal(secretWrapper.length, 1, 'Secret is shown');
    assert.equal(secretWrapper.text(), 'Nimble Storage', 'Secret should be correct');
  });
});

test('Check if secret is shown when password is incorrect', function(assert) {
  visit('/about');

  fillIn('#secretInputField', 'wrongPassword');
  andThen(function() {
    let secretWrapper = find('#noSecretWrapper');
    assert.equal(secretWrapper.length, 1, 'Secret is not shown');
  });
});