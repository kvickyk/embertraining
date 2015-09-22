import Ember from 'ember';

export default Ember.Controller.extend({
  // monitor changes to passField -> should be done in the controller of the template that has passField
  showSecret: Ember.computed('passField', function() {
    let val = this.get('passField');
    // return (val === 'nimble'):
    if (val === 'nimble') {
      return true;
    } else {
      return false;
    }
  }),

  actions: {
    showSecretAction: function(secret) {
      // let secret = contr.get('passField');
      console.log('secret = ' + secret);
      // if (secret === 'nimble') {
      //   this.set('showSecret', true);
      // } else {
      //   this.set('showSecret', false);
      // }
      return true;
    }
  }
});
