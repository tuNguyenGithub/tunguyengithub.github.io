import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
import Index from '../src/stories/Index.vue';

// Install Vue plugins.
Vue.use(Vuex);

// Register custom components.
Vue.component('index', Index);

function loadStories() {
  // You can require as many stories as you need.
  require('../src');
}

configure(loadStories, module);
