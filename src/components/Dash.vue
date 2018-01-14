<template lang="html">
  <div>
    <!-- <b>From the parent: </b>{{ dashboardLayoutStart }} -->
    <opensnet-grid-template 
      :layouts="dashboardLayoutStart" 
      :editable="currentDashboardlayoutEditable" 
      :draggable="currentDashboardlayoutDraggable" 
      :resizable="currentDashboardlayoutResizable"
      :groupName="'start'"
      :layoutName="1"
    ></opensnet-grid-template>
    <!-- <v-btn @click="logDebugMessage({origin: 'dashboardLayout', message: 'A quick test debug message', code: 'TEST_DEBUG_MESSAGE', infoUrl: 'https://opensdcp.github.io/', dismissible: true})">
      Log a debug message
    </v-btn> -->
  </div>
</template>

<script>
// Import the grid template to display the gridLayout
import GridTemplate from './Grid/GridTemplate'
// Import the helper getters and actions for the editable dashboard layout mode from vuex
import { mapGetters, mapActions } from 'vuex'
export default {
  // Register the grid template component to be able to load it
  components: {
    'opensnet-grid-template': GridTemplate
  },
  computed: {
    ...mapGetters([
      'currentDashboardlayoutEditable',
      'currentDashboardlayoutDraggable',
      'currentDashboardlayoutResizable',
      'dashboardLayoutStart'
    ])
  },
  methods: {
    ...mapActions([
      'logDebugMessage'
    ])
  }
}
</script>

<style lang="css">

</style>
