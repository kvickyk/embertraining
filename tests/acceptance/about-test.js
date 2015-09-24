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
    assert.equal(secretWrapper.text().trim(), 'Nimble Storage', 'Secret should be correct');
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

test('Check if 2nd secret is shown on correct password', function(assert) {
  visit('/about');
  fillIn('#secretInputField', 'nimble');
  click('#checkSecretBt');

  andThen(function() {
    let secret2 = find('#secret2');
    assert.equal(secret2.length, 1, 'secret is shown');
    assert.equal(secret2.text(), 'SECRET SHOWN', 'secret2 is incorrect');
  });
});

test('Check if 2nd secret is not shown on incorrect password', function(assert) {
  visit('/about');
  fillIn('#secretInputField', 'wrong password');
  click('#checkSecretBt');

  andThen(function() {
    let secret2 = find('#secret2');
    assert.equal(secret2.length, 0, 'secret is shown');
  });
});
