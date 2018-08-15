import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import Index from '../src/stories/Index.vue';

storiesOf('Layout', module)
  .add('Container', () => ({
    template: `<index :demo="'container'" />`
  }))

storiesOf('Grid', module)
  .add('Grid', () => ({
    template: `<index :demo="'grid'" />`
  }))

storiesOf('Helpers', module)
  .add('Helpers', () => ({
    template: `<index :demo="'helpers'" />`
  }))

storiesOf('Color', module)
  .add('Color', () => ({
    template: `<index :demo="'color'" />`
  }))
storiesOf('Button', module)
  .add('Button', () => ({
    template: `<index :demo="button" />`
  }))
