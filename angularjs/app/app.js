'use strict';

 var angularjsApp = angular.module('angularjsApp', [
   'ngRoute',
   'ui.router',
   'angularjsApp.shared',
   'angularjsApp.dashboard',
   'angularjsApp.customers',
   'angularjsApp.advances'
  ]);

class AngularElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<div data-ui-view="root">Loading</div>';
    const self = this
    angular.element(function() {
      angular.bootstrap(self, ['angularjsApp']);
    });
  }
  disconnectedCallback() {
    angular.element(this).empty();
  }
}
window.customElements.define('angular-js-element', AngularElement);
