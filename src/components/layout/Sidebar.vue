<template>
  <aside :class="['sidebar-container', !sidebar.opened && !sidebar.hidden ? 'sidebar-minimized' : '',  !sidebar.opened && sidebar.hidden ? 'sidebar-hidden' : '']">
    <!-- Menu content here -->
  </aside>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.sidebar-container {
  transition: $sidebar-transition;
  width: $sidebar-width-expanded!important;
  background-color: $sidebar-background-color;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1024;
  transform-origin: left top;
  a {
    display: inline-block;
    width: 100%;
  }
  .svg-icon {
    margin-left: 16px;
  }
  &.sidebar-minimized {
    // transform: scaleX($sidebar-scale-minimized);
    width: $sidebar-width-minimized!important;
  }
  &.sidebar-hidden {
    // transform: scaleX(0);
    width: 0!important;
  }
}
</style>
