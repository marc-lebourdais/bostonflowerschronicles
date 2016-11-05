import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,

  didTransition: function() {
    this._super(...arguments);

    return ga('send', 'pageview', {
      'page': this.get('url'),
      'title': this.get('url')
    });
  }
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
