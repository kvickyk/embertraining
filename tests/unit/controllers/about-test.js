import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:about', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var controller = this.subject();
  assert.ok(controller);
});

test('Check name of controller', function(assert) {
  let ctrl = this.subject();

  assert.equal(ctrl.get('name'), 'About Controller', 'Name of about controller is set');
});
