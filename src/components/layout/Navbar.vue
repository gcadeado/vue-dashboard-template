<template>
  <section>
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div :class="['navbar-brand', sidebar.hidden && sidebar.opened ? 'sidebar-expanded' : '']">
        <div class="navbar-item">
          <a class="nav-item" @click="toggleSidebar({opened: !sidebar.opened})">
            <i v-if="sidebar.opened" class="fa fa-2x fa-times"></i>
            <i v-else class="fa fa-2x fa-bars"></i>
          </a>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    ...mapActions([
      'toggleSidebar'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.navbar-brand {
  transition: $navbar-collateral-sidebar-transition;
  transform-origin: top left;
  transform: none;
  &.sidebar-expanded {
    transform: translateX($sidebar-width-expanded);
  }
}

</style>
