<template>
  <div id="app">
    <sidebar></sidebar>
    <div :class="['main-container', !sidebar.opened && !sidebar.hidden ? 'sidebar-minimized' : '',  sidebar.hidden ? 'sidebar-hidden' : '']">
      <navbar></navbar>
      <app-main></app-main>
      <footerbar></footerbar>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Navbar, Sidebar, AppMain, Footerbar } from './components/layout/'
export default {
  name: 'app',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Footerbar
  },
  data () {
    return {
      mobile: false
    }
  },
  computed: {
    ...mapGetters({
      sidebar: 'sidebar',
      device: 'device'
    }),
    isMobile () {
      return this.$resize && this.$mq.expr(this.$mq.bands.mobile)
    }
  },
  watch: {
    isMobile: function (value) {
      this.toggleSidebar({
        opened: false,
        hidden: value
      })
    }
  },
  mounted () {
    this.toggleSidebar({
      hidden: this.$mq.expr(this.$mq.bands.mobile),
      opened: false
    })
  },
  methods: mapActions([
    'toggleSidebar',
    'toggleDevice'
  ])
}
</script>

<style lang="scss">

@import 'styles/main.scss';
@import 'font-awesome/css/font-awesome.min.css';
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

body {
  height: 100%;
  font-family: 'Open Sans', Helvetica Neue, Helvetica, Arial, sans-serif;
}

html {
  height: 100%;
}

#app{
  height: 100%;
  display: flex;
}

.main-container {
  min-height: 100%;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: space-between;
  transition: $sidebar-collateral-transition;
  margin-left: $sidebar-width-expanded;
  // transform: translateX($sidebar-width-expanded) scaleX(strip-unit((100vw - get-vw($sidebar-width-expanded))/100vw));

  &.sidebar-minimized {
    // transform: translateX($sidebar-width-minimized);
    margin-left: $sidebar-width-minimized!important;
  }
  &.sidebar-hidden {
    // transform: translateX(0);
    margin-left: 0!important;
  }
}

</style>
