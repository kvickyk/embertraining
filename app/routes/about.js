import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('contact');
  },
  actions: {
    showSecretAction: function(value) {
      // let contr = this.controller
      // let value = contr.get('passField');
      console.log('value = ' + value);
      if (value === 'nimble') {
        this.controller.set('secretShown', true);
      } else {
        this.controller.set('secretShown', false);
      }
    }
  }
});
