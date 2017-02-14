import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('notebook', { path: '/:notebook_id' }, function() {
    this.route('note', { path: '/note/:note_id' });
    this.route('new');
  });
  this.route('test');

  this.route('v2', function() {
    this.route('notebook', function() {
      this.route('note', function() {
        this.route('new');
        this.route('edit');
      });
    });
  });
});

export default Router;
