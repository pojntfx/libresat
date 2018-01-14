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
  </div>
</template>

<script>
// Import the grid template to display the gridLayout
import GridTemplate from './Grid/GridTemplate'
// Import the helper getters and actions for the editable dashboard layout mode from vuex
import { mapGetters } from 'vuex'
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
  }
}
</script>

<style lang="css">

</style>
