import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts');

  this.route('post', function() {
    this.route('intro');
    this.route('mexico-city');
    this.route('unrequited-love');
  });
  this.route('about');
  this.route('faq');
});

export default Router;
