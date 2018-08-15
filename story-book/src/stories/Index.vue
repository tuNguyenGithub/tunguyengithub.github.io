<template>
  <div >
    <template v-if='demo === "container"'>
      <my-container />
    </template>
    <template v-else-if='demo === "grid"'>
      <my-grid />
    </template>
    <template v-else-if='demo === "helpers"'>
      <my-helpers />
    </template>
    <template v-else-if='demo === "color"'>
      <my-color />
    </template>
    <template v-else-if='demo === "button"'>
      <my-button />
    </template>
    <template v-else>
      <div />
    </template>
  </div>
</template>

<script>
import styles from '../assets/css/tn-global.css';

import MyContainer from './Container.vue';
import MyGrid from './Grid.vue';
import MyColor from './Color.vue';
import MyHelpers from './Helpers.vue';
import MyButton from './Button.vue';

export default {
  data: function() {
    return {}
  },
  props: ['demo'],
  components: {
    MyContainer, MyGrid, MyColor, MyHelpers, MyButton
  },
  mounted: function() {
  }
}
</script>
