import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {id:1, name:'Virat'},
      {id:2, name:'Kadaru'},
      {id:3, name: 'Gagan'},
      {id:4, name: 'Liam'}
    ];
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
