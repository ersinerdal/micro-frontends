import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = { template: '<div>Vue home</div>' }
const Foo = { template: '<div>Foo</div>' }
const Bar = { template: '<div>Bar</div>' }

// 3. Create the router
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/vue', component: Home },
    { path: '/vue/foo', component: Foo },
    { path: '/vue/bar', component: Bar }
  ]
})

const vueApp = {
  router,
  template: `
    <div>
        <div id="vue-menu">
          <ul>
            <li><router-link to="/vue">Vue Home</router-link></li>
            <li><router-link to="/vue/foo">Foo</router-link></li>
            <li><router-link to="/vue/bar">Bar</router-link></li>
          </ul>
         </div> 
        <router-view class="view" id="vue-content"></router-view>
    </div>
  `
};

class VueElement extends HTMLElement {
    constructor(){
        super();
        this.newVueApp = ''
    }
    connectedCallback() {
        this.newVueApp = new Vue(vueApp);
        this.innerHTML = '<div id="vue-container"></div>';
        this.newVueApp.$mount('#vue-container');
    }
    disconnectedCallback() {
        this.newVueApp.$destroy()
    }
}
window.customElements.define('vue-element', VueElement);
