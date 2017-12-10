<template lang="html">
  <div>
    <!-- <b>From the child:</b> {{ layouts }} -->
    <v-card v-if="editable">
      <v-card-title title class="pb-0">
        <v-layout>
          <h3 class="headline px-2">Editing Dashboard Group <i>"{{ currentRouteName }}"</i></h3>
        </v-layout>
      </v-card-title>
      <v-card-text class="pt-0">
        <v-layout v-bind:class="outerWrapperLayout">
          <!-- Current dashboard editing section -->
          <v-flex md12 xl4>
            <v-card>
              <v-card-title class="pb-0">
                <h3 class="headline">
                  Current ({{ currentDashboardLayoutDisplayName }} > {{ currentDashboardModeDisplayName }})
                </h3>
              </v-card-title>
              <v-card-text class="pt-0">
                <v-layout v-bind:class="innerWrapperLayout">
                  <!-- Layout and mode creation section -->
                  <v-flex xs12 lg6 class="text-lg-center">
                    <!-- The title -->
                    <v-flex xs12 class="pb-0 mb-0">
                      <v-icon>add</v-icon>
                      <b>Create</b>
                    </v-flex>
                    <!-- The actual buttons -->
                    <v-flex xs12 class="pt-0 mt-0">
                      <v-btn @click="createDashboardLayout()" success>
                        Layout
                      </v-btn>
                      <v-btn @click="createDashboardMode()" success>
                        Mode
                      </v-btn>
                    </v-flex>
                  </v-flex>

                  <!-- Current layout and mode deletion section -->
                  <v-flex xs12 lg6 class="text-lg-center">
                    <!-- The title -->
                    <v-flex xs12 class="pb-0 mb-0">
                      <v-icon>remove</v-icon>
                      <b>Delete</b>
                    </v-flex>
                    <!-- The actual buttons -->
                    <v-flex xs12 class="pt-0 mt-0">
                      <v-btn error @click="deleteDashboardLayout()">
                        Current Layout
                      </v-btn>
                      <v-btn error @click="deleteDashboardMode()">
                        Current Mode
                      </v-btn>
                    </v-flex>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>

          <!-- Dashboard layouts editing sections -->
          <v-flex md12 xl4>
            <v-card>
              <v-card-title class="pb-0">
                <h3 class="headline">Layouts</h3>
              </v-card-title>
              <v-card-text class="pt-0">
                <v-layout v-bind:class="innerWrapperLayout">
                  <!-- Layout changing section -->
                  <v-flex xs12 lg6 class="text-lg-center">
                    <!-- The title -->
                    <v-flex xs12 class="pb-0 mb-0">
                      <v-icon>folder</v-icon>
                      <b>Load</b>
                    </v-flex>
                    <!-- The actual buttons -->
                    <v-flex xs12 class="pt-0 mt-0">
                      <v-btn info v-for="layout in availableDashboardLayoutsNames" :key="layout.name" @click="changeCurrentDashboardLayoutTo(layout)" class="layout-load-button">
                        {{ getCurrentDashboardLayoutData(layout, false, true, false) }} Layout
                      </v-btn>
                    </v-flex>
                  </v-flex>

                  <!-- Layout deletion section -->
                  <v-flex xs12 lg6 class="text-lg-center">
                    <!-- The title -->
                    <v-flex xs12 class="pb-0 mb-0">
                      <v-icon>remove</v-icon>
                      <b>Delete</b>
                    </v-flex>
                    <!-- The actual buttons -->
                    <v-flex xs12 class="pt-0 mt-0">
                      <v-btn error v-for="layout in availableDashboardLayoutsNames" :key="layout.name" @click="deleteDashboardLayout(layout)" class="layout-load-button">
                        {{ getCurrentDashboardLayoutData(layout, false, true, false) }} Layout
                      </v-btn>
                    </v-flex>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>

          <!-- Dashboard mode editing sections -->
          <v-flex md12 xl4>
            <v-card>
              <v-card-title class="pb-0">
                <h3 class="headline">Modes</h3>
              </v-card-title>
              <v-card-text class="pt-0">
                <v-layout v-bind:class="innerWrapperLayout">
                  <!-- Mode changing section -->
                  <v-flex xs12 lg6 class="text-lg-center">
                    <!-- The title -->
                    <v-flex xs12 class="pb-0 mb-0">
                      <v-icon>compare_arrows</v-icon>
                      <b>Change to</b>
                    </v-flex>
                    <!-- The actual buttons -->
                    <v-flex xs12 class="pt-0 mt-0">
                      <v-btn info v-for="mode in availableDashboardLayoutModesNames" :key="mode.name" @click="changeCurrentDashboardModeTo(mode)">
                        {{ getCurrentDashboardModeData(mode, false, true, false) }} Mode
                      </v-btn>
                    </v-flex>
                  </v-flex>

                  <!-- Mode deletion section -->
                  <v-flex xs12 lg6 class="text-lg-center">
                    <!-- The title -->
                    <v-flex xs12 class="pb-0 mb-0">
                      <v-icon>remove</v-icon>
                      <b>Delete</b>
                    </v-flex>
                    <!-- The actual buttons -->
                    <v-flex xs12 class="pt-0 mt-0">
                      <v-btn error v-for="mode in availableDashboardLayoutModesNames" :key="mode.name" @click="deleteDashboardMode(mode)">
                        {{ getCurrentDashboardModeData(mode, false, true, false) }} Mode
                      </v-btn>
                    </v-flex>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>

        </v-layout>
      </v-card-text>
     </v-card>
  <opensnet-grid-layout
  :layout="currentDashboardMode"
  :col-num="12"
  :row-height="30"
  :is-draggable="true"
  :is-resizable="true"
  :vertical-compact="true"
  :margin="[10, 10]"
  :use-css-transforms="true"
  >
    <!-- item.i may be undefined as it is required to use vue-grid-layout without forking it -->
    <opensnet-grid-item v-for="(item, index) in currentDashboardMode"
    :x="item.x"
    :y="item.y"
    :w="item.w"
    :h="item.h"
    :i="item.i"
    :key="index"
    :minH="8"
    :minW="5">
      <!-- Module view -->
      <router-view :name="item.customView" v-if="item.template == 'none'"></router-view>
      <opensnet-grid-item-default-template :item="item" v-if="item.template == 'defaultTemplate'">
      </opensnet-grid-item-default-template>
    </opensnet-grid-item>
  </opensnet-grid-layout>
  </div>
</template>

<script>
// Load the module
import VueGridLayout from 'vue-grid-layout'
import GridItemDefaultTemplate from '@/components/Grid/Templates/DefaultTemplate'
// Assign the submodules
const GridLayout = VueGridLayout.GridLayout
const GridItem = VueGridLayout.GridItem
export default {
  props: {
    layouts: {
      type: Array,
      required: true
    },
    editable: {
      type: Boolean,
      required: true
    }
  },
  components: {
    'opensnet-grid-layout': GridLayout,
    'opensnet-grid-item': GridItem,
    'opensnet-grid-item-default-template': GridItemDefaultTemplate
  },
  watch: {
    '$mq.resize': 'makeEditDashboardControlsResponsive'
  },
  data () {
    return {
      outerWrapperLayout: 'column',
      innerWrapperLayout: 'column',
      debuggingMessages: true,
      warningMessages: true,
      errorMessages: true,
      loadedDashboardLayoutMode: null,
      currentDashboardMode: null,
      currentDashboardModeName: null,
      currentDashboardModeDisplayName: null,
      availableDashboardLayoutModesNames: null,
      availableDashboardLayoutModesDisplayNames: null,
      currentDashboardLayout: null,
      currentDashboardLayoutName: null,
      currentDashboardLayoutDisplayName: null,
      availableDashboardLayoutsNames: null,
      availableDashboardLayoutsDisplayNames: null
    }
  },
  created () {
    this.assignInitialLayouts()
    this.updateDashboardModeData()
    this.updateDashboardLayoutData()
    this.changeCurrentDashboardLayoutTo(2)
    this.updateDashboardModeData()
    this.updateDashboardLayoutData()
    this.makeEditDashboardControlsResponsive()
  },
  computed: {
    currentRouteName () {
      return this.$route.name
    }
  },
  methods: {
    // Make the controls responsive
    makeEditDashboardControlsResponsive () {
      if (this.$mq.below(1550)) {
        this.outerWrapperLayout = 'column'
      } else {
        this.outerWrapperLayout = 'row'
      }
      // Change to the mobile mode if below breakpoint
      if (this.$mq.below(1280)) {
        this.changeCurrentDashboardModeTo(1)
      } else {
        this.changeCurrentDashboardModeTo(2)
      }
      if (this.$mq.below(455)) {
        this.innerWrapperLayout = 'column'
      } else {
        this.innerWrapperLayout = 'row'
      }
    },
    // Assign the initial (reserved) layout (will never be used), does not prevent v-binding.
    assignInitialLayouts () {
      this.loadedDashboardLayoutMode = this.layouts[0]
    },
    // Create a new dashboard layout, with or without a custom name
    createDashboardLayout (displayName) {
      // Create empty object that will server as the main wrapper
      let newDashboardLayout = {}
      // Calculate the new unique name
      let newUniqueDashboardLayoutName
      newUniqueDashboardLayoutName = this.layouts.length + 1
      // Assign the new unique name to the layouts
      newDashboardLayout.name = newUniqueDashboardLayoutName
      // Initialize helper variable for evaluating whether the chosen displayName is unique (var on purpose)
      var newDisplayNameUnique
      // Another helper variable for deeper checking (var on purpose)
      var newUniqueNameActuallyUnique
      if (displayName) {
        /* If a displayName is given: loop through the helper array that contains the names
        *   of all currently loaded values and check whether it occurs one or multiple times */
        for (let o = 0; o < this.availableDashboardLayoutsDisplayNames.length; o++) {
          // If the displayName is not unique, set the helper variable to undefined
          if (this.availableDashboardLayoutsDisplayNames[o] === displayName) {
            newDisplayNameUnique = false
          // If the auto-generated pseudo-unique name actually is not unique, try to fix it
          } else if (this.availableDashboardLayoutsNames[o] === newUniqueDashboardLayoutName) {
            newUniqueNameActuallyUnique === false
            if (this.debuggingMessages) {
              console.log('Not a unique auto-generated dashboard layout name. Trying to fix ..')
            }
            let currentStep = this.availableDashboardLayoutsNames[o]
            if (this.debuggingMessages) {
              console.log('Current checking step:', currentStep)
              console.log('Old unique dashboard layout name', newUniqueDashboardLayoutName)
            }
            // Increase the name until the name will be unique
            while (!newUniqueNameActuallyUnique) {
              if (this.debuggingMessages) {
                console.log('There we go checking ...')
              }
              if (currentStep === newUniqueDashboardLayoutName) {
                newUniqueDashboardLayoutName = newUniqueDashboardLayoutName + 1
                newDashboardLayout.name = newUniqueDashboardLayoutName
                if (this.debuggingMessages) {
                  console.log('New unique dashboard layout name:', newUniqueDashboardLayoutName)
                }
              } else {
                newUniqueNameActuallyUnique = false
                if (this.debuggingMessages) {
                  console.log('Success! Going with: ', newUniqueDashboardLayoutName)
                }
                break
              }
              newUniqueNameActuallyUnique = false
            }
          // If the display actually is unique, set the helper variable accordingly
          } else if (newDisplayNameUnique !== false && this.availableDashboardLayoutsDisplayNames[o] !== newUniqueDashboardLayoutName) {
            newDisplayNameUnique = true
          }
        }
        // Evaluate whether name is not unique
        if (this.availableDashboardLayoutsNames.indexOf(displayName) > -1 || newDisplayNameUnique === false) {
          // ... set the variable accordingly
          if (this.debuggingMessages) {
            console.log('New name is not unique, creating new dashboard layout with auto-generated unique displayName:', newUniqueDashboardLayoutName)
          }
          newDisplayNameUnique = false
        } else {
          // ... Set the variable accordingly
          if (this.debuggingMessages) {
            console.log('New name is unique, creating new dashboard layout with defined displayName:', displayName)
          }
          newDashboardLayout.displayName = displayName
          newDisplayNameUnique = true
        }
      }
      // Create new display name
      if (newDisplayNameUnique === true) {
      } else {
        const newDashboardLayoutDisplayPreName = 'New '
        let newDashboardLayoutDisplayName = newDashboardLayoutDisplayPreName + '(' + newUniqueDashboardLayoutName + ')'
        newDashboardLayout.displayName = newDashboardLayoutDisplayName
      }
      // Create the standard, needed modes
      newDashboardLayout.layout = []
      let newMobileDashboardLayoutMode = {}
      newMobileDashboardLayoutMode.name = 1
      newMobileDashboardLayoutMode.displayName = 'Mobile'
      newMobileDashboardLayoutMode.layout = [{'x': 0, 'y': 0, 'w': 12, 'h': 8, 'i': '0', 'readView': 'default', 'hybridView': 'default', 'writeView': 'default', 'template': 'none', 'customView': 'default'}]
      newDashboardLayout.layout.push(newMobileDashboardLayoutMode)
      let newDesktopDashboardLayoutMode = {}
      newDesktopDashboardLayoutMode.name = 2
      newDesktopDashboardLayoutMode.displayName = 'Desktop'
      newDesktopDashboardLayoutMode.layout = [{'x': 0, 'y': 0, 'w': 12, 'h': 8, 'i': '0', 'readView': 'default', 'hybridView': 'default', 'writeView': 'default', 'template': 'none', 'customView': 'default'}]
      // Push the newly created mode into the newDashboardLayout
      newDashboardLayout.layout.push(newDesktopDashboardLayoutMode)
      // Push the newDashboardLayout into the array containing all this.layouts
      this.layouts.push(newDashboardLayout)
      // Update everything accordingly
      this.updateDashboardModeData()
      this.updateDashboardLayoutData()
      // Print debugging messages if desired
      if (this.debuggingMessages) {
        console.log('New dashboard layout:', newDashboardLayout)
        console.log('Updated dashboard layouts:', this.layouts)
      }
    },
    // Delete a dashboard layout, by default the current one, otherwise the one that has been specified
    deleteDashboardLayout (layout) {
      // Update the data so that this function is independent
      this.updateDashboardModeData()
      this.updateDashboardLayoutData()
      // Initialize helper variables
      let dashboardLayoutToDelete
      let dashboardLayoutToDeleteIndex
      // If a layout name is given, run the next check
      if (layout) {
        if (this.availableDashboardLayoutsNames.indexOf(layout) !== -1) {
          if (this.debuggingMessages) {
            console.log('Dashboard layout is available to be deleted')
          }
          dashboardLayoutToDelete = layout
          if (this.debuggingMessages) {
            console.log('Given layout name to delete: ', dashboardLayoutToDelete)
          }
          dashboardLayoutToDeleteIndex = this.availableDashboardLayoutsNames.indexOf(dashboardLayoutToDelete)
          if (this.debuggingMessages) {
            console.log('Index of the given layout to delete: ', dashboardLayoutToDeleteIndex)
          }
          this.layouts.splice(dashboardLayoutToDeleteIndex, 1)
        } else {
          if (this.errorMessages) {
            console.log('Dashboard layout is not available to be deleted')
          }
        }
      // Else, throw error
      } else {
        if (this.debuggingMessages) {
          console.log('No Layout name given, deleting current layout instead')
        }
        // Else, delete the current layout
        dashboardLayoutToDelete = this.currentDashboardLayoutName
        dashboardLayoutToDeleteIndex = this.availableDashboardLayoutsNames.indexOf(dashboardLayoutToDelete)
        this.layouts.splice(dashboardLayoutToDeleteIndex, 1)
      }
      // Update the now changed values
      this.updateDashboardModeData()
      this.updateDashboardLayoutData()
      // Change to the last available dashboardLayout
      let dashboardLayoutToJumpToAfterwardsIndex = this.layouts.length - 1
      console.log(dashboardLayoutToJumpToAfterwardsIndex)
      this.changeCurrentDashboardLayoutTo(this.availableDashboardLayoutsNames[dashboardLayoutToJumpToAfterwardsIndex])
      console.log(dashboardLayoutToDelete, dashboardLayoutToDeleteIndex, dashboardLayoutToJumpToAfterwardsIndex)
    },
    // Create a new dashboard layout mode, with or without a custom name
    createDashboardMode (displayName) {
      // Create empty object that will server as the main wrapper
      let layoutToAddModeTo = this.layouts[[this.availableDashboardLayoutsNames.indexOf(this.currentDashboardLayoutName)]]
      let newDashboardLayoutMode = {}
      // Calculate the new unique name
      let newUniqueDashboardModeName
      newUniqueDashboardModeName = layoutToAddModeTo.layout.length + 1
      // Assign the new unique name to the layouts
      newDashboardLayoutMode.name = newUniqueDashboardModeName
      // Initialize helper variable for evaluating whether the chosen displayName is unique
      let newDisplayNameUnique
      let newUniqueNameActuallyUnique
      if (displayName) {
        /* If a displayName is given: loop through the helper array that contains the names
        *   of all currently loaded values and check whether it occurs one or multiple times */
        for (let o = 0; o < this.availableDashboardLayoutModesDisplayNames.length; o++) {
          // If the displayName is not unique, set the helper variable to undefined
          if (this.availableDashboardLayoutModesDisplayNames[o] === displayName) {
            newDisplayNameUnique = false
          // If the auto-generated pseudo-unique name actually is not unique, try to fix it
          } else if (this.availableDashboardLayoutModesNames[o] === newUniqueDashboardModeName) {
            newUniqueNameActuallyUnique === false
            if (this.debuggingMessages) {
              console.log('Not a unique auto-generated dashboard mode name. Trying to fix ..')
            }
            let currentStep = this.availableDashboardLayoutModesNames[o]
            if (this.debuggingMessages) {
              console.log('Current checking step:', currentStep)
              console.log('Old unique dashboard mode name', newUniqueDashboardModeName)
            }
            // Increase the name until the name will be unique
            while (!newUniqueNameActuallyUnique) {
              if (this.debuggingMessages) {
                console.log('There we go checking ...')
              }
              if (currentStep === newUniqueDashboardModeName) {
                newUniqueDashboardModeName = newUniqueDashboardModeName + 1
                newDashboardLayoutMode.name = newUniqueDashboardModeName
                if (this.debuggingMessages) {
                  console.log('New unique dashboard mode name:', newUniqueDashboardModeName)
                }
              } else {
                newUniqueNameActuallyUnique = false
                if (this.debuggingMessages) {
                  console.log('Success! Going with: ', newUniqueDashboardModeName)
                }
                break
              }
              newUniqueNameActuallyUnique = false
            }
            // If the display actually is unique, set the helper variable accordingly
          } else if (newDisplayNameUnique !== false && this.availableDashboardLayoutModesDisplayNames[o] !== newUniqueDashboardModeName) {
            newDisplayNameUnique = true
          }
        }
        // Evaluate whether name is not unique
        if (this.availableDashboardLayoutModesNames.indexOf(displayName) > -1 || newDisplayNameUnique === false) {
          // ... set the variable accordingly
          if (this.debuggingMessages) {
            console.log('New name is not unique, creating new dashboard mode with auto-generated unique displayName:', newUniqueDashboardModeName)
          }
          newDisplayNameUnique = false
        } else {
          // ... Set the variable accordingly
          if (this.debuggingMessages) {
            console.log('New name is unique, creating new dashboard mode with defined displayName:', displayName)
          }
          newDashboardLayoutMode.displayName = displayName
          newDisplayNameUnique = true
        }
      }
      // Create new display name
      if (newDisplayNameUnique === true) {
      } else {
        const newDashboardLayoutDisplayPreName = 'New '
        let newDashboardLayoutDisplayName = newDashboardLayoutDisplayPreName + '(' + newUniqueDashboardModeName + ')'
        newDashboardLayoutMode.displayName = newDashboardLayoutDisplayName
      }
      // Create the standard, needed modes
      newDashboardLayoutMode.layout = [{'x': 0, 'y': 0, 'w': 12, 'h': 8, 'i': '0', 'readView': 'default', 'hybridView': 'default', 'writeView': 'default', 'template': 'none', 'customView': 'default'}]

      // Push the newly created mode into the newDashboardLayoutMode
      layoutToAddModeTo.layout.push(newDashboardLayoutMode)
      // Push the newDashboardLayoutMode into the array containing all this.layouts
      console.log(newDashboardLayoutMode)
      // this.layouts.layouts.push(newDashboardLayoutMode)
      // Update everything accordingly
      this.updateDashboardModeData()
      this.updateDashboardLayoutData()
      // Print debugging messages if desired
      if (this.debuggingMessages) {
        console.log('New dashboard mode:', newDashboardLayoutMode)
        console.log('Updated dashboard modes:', newDashboardLayoutMode)
      }
    },
    // Delete a dashboard layout, by default the current one, otherwise the one that has been specified (Layout > Mode)
    deleteDashboardMode (layout, mode) {
      // Update the data so that this function is independent
      this.updateDashboardModeData()
      this.updateDashboardLayoutData()
      // Initialize helper variables
      let dashboardLayoutToDelete
      let dashboardLayoutToDeleteIndex
      let dashboardLayoutModeToDelete
      let dashboardLayoutModeToDeleteIndex
      if (layout && mode) {
        if (this.debuggingMessages) {
          console.log('Trying to delete', layout, '>', mode)
        }
        if (this.availableDashboardLayoutsNames.indexOf(layout) !== -1) {
          if (this.debuggingMessages) {
            console.log('Dashboard Layout is available')
          }
          if (this.availableDashboardLayoutModesNames.indexOf(mode) !== -1) {
            if (this.debuggingMessages) {
              console.log('Dashboard Mode is available')
            }
            // Else, delete the current layout
            dashboardLayoutToDelete = layout
            dashboardLayoutToDeleteIndex = this.availableDashboardLayoutsNames.indexOf(dashboardLayoutToDelete)
            dashboardLayoutModeToDelete = parseInt(mode)
            dashboardLayoutModeToDeleteIndex = this.availableDashboardLayoutModesNames.indexOf(dashboardLayoutModeToDelete)
            this.layouts[dashboardLayoutToDeleteIndex].layout.splice(dashboardLayoutModeToDeleteIndex, 1)
            // Update the now changed values
            this.updateDashboardModeData()
            this.updateDashboardLayoutData()
            // Change to the last available dashboardLayout
            let dashboardLayoutToJumpToAfterwardsIndex = this.layouts[dashboardLayoutToDeleteIndex].layout.length - 1
            this.changeCurrentDashboardModeTo(this.availableDashboardLayoutModesNames[dashboardLayoutToJumpToAfterwardsIndex])
            if (this.debuggingMessages) {
              console.log(dashboardLayoutToDelete, dashboardLayoutToDeleteIndex, dashboardLayoutToJumpToAfterwardsIndex)
            }
          } else {
            if (this.errorMessages) {
              console.log('Dashboard Mode is not available')
            }
          }
        } else {
          if (this.errorMessages) {
            console.log('Dashboard Layout is not available')
          }
        }
      } else {
        if (this.debuggingMessages) {
          console.log('No layout or mode has been specified, deleting current mode in current layout instead')
        }
        // Else, delete the current layout
        dashboardLayoutToDelete = this.currentDashboardLayoutName
        dashboardLayoutToDeleteIndex = this.availableDashboardLayoutsNames.indexOf(dashboardLayoutToDelete)
        dashboardLayoutModeToDelete = parseInt(this.currentDashboardModeName)
        dashboardLayoutModeToDeleteIndex = this.availableDashboardLayoutModesNames.indexOf(dashboardLayoutModeToDelete)
        this.layouts[dashboardLayoutToDeleteIndex].layout.splice(dashboardLayoutModeToDeleteIndex, 1)
        // Update the now changed values
        this.updateDashboardModeData()
        this.updateDashboardLayoutData()
        // Change to the last available dashboardLayout
        let dashboardLayoutToJumpToAfterwardsIndex = this.layouts[dashboardLayoutToDeleteIndex].layout.length - 1
        this.changeCurrentDashboardModeTo(this.availableDashboardLayoutModesNames[dashboardLayoutToJumpToAfterwardsIndex])
        if (this.debuggingMessages) {
          console.log(dashboardLayoutToDelete, dashboardLayoutToDeleteIndex, dashboardLayoutToJumpToAfterwardsIndex)
        }
      }
      // Update the now changed values
      this.updateDashboardModeData()
      this.updateDashboardLayoutData()
    },
    // Load dashboard layout
    changeCurrentDashboardLayoutTo (layout) {
      // Check whether the desired layout is in the array and thus can be activated
      if (this.availableDashboardLayoutsNames.indexOf(layout) > -1) {
        if (this.debuggingMessages) {
          console.log('Switching to', layout, 'dashboard layout layout')
        }
        // Load the desired layout by it's index
        this.currentDashboardLayout = this.layouts[this.availableDashboardLayoutsNames.indexOf(layout)].layout
        // Assign the global variables
        this.currentDashboardLayoutName = this.layouts[this.availableDashboardLayoutsNames.indexOf(layout)].name
        this.currentDashboardLayoutDisplayName = this.getCurrentDashboardLayoutData(layout, false, true, false)
        this.loadedDashboardLayoutMode.layout = this.layouts[this.availableDashboardLayoutsNames.indexOf(layout)].layout
        // Update both helper arrays accordingly
        this.updateDashboardLayoutData(layout)
        this.updateDashboardModeData(layout)
        // Re-render the grid view
        this.changeCurrentDashboardModeTo(this.loadedDashboardLayoutMode.layout[0].name)
      } else {
        // Show an error message if desired layout is not in the array
        if (this.errorMessages) {
          console.log(layout, 'isn\'t an available (registered) dashboard layout', this.availableDashboardLayoutModesNames, 'are available.')
        }
      }
    },
    // Update the available dashboard layout names
    updateDashboardLayoutData () {
      // Initialize a helper variable that will save all available layouts
      let availableDashboardLayoutsNames = []
      // Assign the names of all available layouts to the helper variable
      for (let i = 0; i < this.layouts.length; i++) {
        let layoutThatIsBeingCheckedFor = this.layouts[i]
        availableDashboardLayoutsNames.push(layoutThatIsBeingCheckedFor.name)
      }
      // Assign the updated values to the component-wide
      this.availableDashboardLayoutsNames = availableDashboardLayoutsNames
      // Initialize a helper variable that will save all available layouts
      let availableDashboardLayoutsDisplayNames = []
      // Assign the names of all available layouts to the helper variable
      for (let i = 0; i < this.layouts.length; i++) {
        let layoutThatIsBeingCheckedFor = this.layouts[i]
        availableDashboardLayoutsDisplayNames.push(layoutThatIsBeingCheckedFor.displayName)
      }
      // Assign the updated values to the component-wide
      this.availableDashboardLayoutsDisplayNames = availableDashboardLayoutsDisplayNames
    },
    // Get useful data about the current dashboard
    getCurrentDashboardLayoutData (layout, getName, getDisplayName, getLayout) {
      // Check whether the desired layout is in the array and thus can be returned
      if (this.availableDashboardLayoutsNames.indexOf(layout) > -1) {
        if (getName || getLayout || getDisplayName) {
          // Initialize empty return string
          let answerToQuery = ''
          // Return the desired name by it's index if wanted
          if (getName) {
            let queriedDashboardLayoutName = this.layouts[this.availableDashboardLayoutsNames.indexOf(layout)].name
            answerToQuery += queriedDashboardLayoutName
          }
          // Return the desired displayName by it's index if wanted
          if (getDisplayName) {
            let queriedDashboardLayoutDisplayName = this.layouts[this.availableDashboardLayoutsNames.indexOf(layout)].displayName
            answerToQuery += queriedDashboardLayoutDisplayName
          }
          // Return the desired layout by it's index if wanted
          if (getLayout) {
            let queriedDashboardLayout = this.layouts[this.availableDashboardLayoutsNames.indexOf(layout)].layout
            answerToQuery += queriedDashboardLayout
          }
          return answerToQuery
        } else {
          if (this.errorMessages) {
            console.log('No query has been specified! Use booleans to query what you need.')
          }
        }
      } else {
        // Show an error message if desired layout is not in the array
        if (this.errorMessages) {
          console.log(layout, 'isn\'t an available (registered) dashboard layout', this.availableDashboardLayoutModesNames, 'are available.')
        }
      }
    },
    // Load dashboard mode
    changeCurrentDashboardModeTo (mode) {
      // Check whether the desired mode is in the array and thus can be activated
      if (this.availableDashboardLayoutModesNames.indexOf(mode) > -1) {
        if (this.debuggingMessages) {
          console.log('Switching to', mode, 'dashboard layout mode')
        }
        // Load the desired mode by it's index
        this.updateDashboardModeData(mode)
        this.currentDashboardMode = this.loadedDashboardLayoutMode.layout[this.availableDashboardLayoutModesNames.indexOf(mode)].layout
        this.currentDashboardModeName = this.getCurrentDashboardModeData(mode, true, false, false)
        this.currentDashboardModeDisplayName = this.getCurrentDashboardModeData(mode, false, true, false)
      } else {
        // Show an error message if desired mode is not in the array
        if (this.errorMessages) {
          console.log(mode, 'isn\'t an available (registered) dashboard mode', this.availableDashboardLayoutModesNames, 'are available.')
        }
      }
    },
    // Update the dashboard itself
    updateDashboardModeData () {
      // Initialize a helper variable that will save all available layouts
      let availableDashboardLayoutModesNames = []
      // Assign the names of all available layouts to the helper variable
      for (let i = 0; i < this.loadedDashboardLayoutMode.layout.length; i++) {
        let modeThatIsBeingCheckedFor = this.loadedDashboardLayoutMode.layout[i]
        availableDashboardLayoutModesNames.push(modeThatIsBeingCheckedFor.name)
      }
      // Assign the updated values to the component-wide
      this.availableDashboardLayoutModesNames = availableDashboardLayoutModesNames
      // Initialize a helper variable that will save all available layouts
      let availableDashboardLayoutModesDisplayNames = []
      // Assign the names of all available layouts to the helper variable
      for (let i = 0; i < this.loadedDashboardLayoutMode.layout.length; i++) {
        let modeThatIsBeingCheckedFor = this.loadedDashboardLayoutMode.layout[i]
        availableDashboardLayoutModesDisplayNames.push(modeThatIsBeingCheckedFor.displayName)
      }
      // Assign the updated values to the component-wide
      this.availableDashboardLayoutModesDisplayNames = availableDashboardLayoutModesDisplayNames
    },
    // Get useful data about the current dashboard
    getCurrentDashboardModeData (mode, getName, getDisplayName, getMode) {
      // Check whether the desired mode is in the array and thus can be returned
      if (this.availableDashboardLayoutModesNames.indexOf(mode) > -1) {
        if (getName || getMode || getDisplayName) {
          // Initialize empty return string
          let answerToQuery = ''
          // Return the desired name by it's index if wanted
          if (getName) {
            let queriedDashboardModeName = this.loadedDashboardLayoutMode.layout[this.availableDashboardLayoutModesNames.indexOf(mode)].name
            answerToQuery += queriedDashboardModeName
          }
          // Return the desired displayName by it's index if wanted
          if (getDisplayName) {
            let queriedDashboardModeDisplayName = this.loadedDashboardLayoutMode.layout[this.availableDashboardLayoutModesNames.indexOf(mode)].displayName
            answerToQuery += queriedDashboardModeDisplayName
          }
          // Return the desired layout by it's index if wanted
          if (getMode) {
            let queriedDashboard = this.loadedDashboardLayoutMode.layout[this.availableDashboardLayoutModesNames.indexOf(mode)].layout
            answerToQuery += queriedDashboard
          }
          return answerToQuery
        } else {
          if (this.errorMessages) {
            console.log('No query has been specified! Use booleans to query what you need.')
          }
        }
      } else {
        // Show an error message if desired mode is not in the array
        if (this.errorMessages) {
          console.log(mode, 'isn\'t an available (registered) dashboard mode', this.availableDashboardLayoutModesNames, 'are available.')
        }
      }
    }
  }
}
</script>

<style lang="css">
/* Hide the first button (reserved layout) in the layout switching section */
/* Ugly solution but I've not been able to fix this in any other way even after days of debugging */
.layout-load-button:first-of-type, .layout-delete-button:first-of-type {
  display: none;
}
</style>
