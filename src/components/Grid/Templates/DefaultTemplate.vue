<template>
    <div ref="item"
         class="vue-grid-item"
    >
        <v-card class="resizable-card-wrapper">

          <!-- Card Header Section-->
          <v-card-title>
            <v-layout row align-center>

              <v-breadcrumbs divider="/" class="pa-0">
                <v-breadcrumbs-item class="first-breadcrumb-item" v-show="!cardMobileMode">
                  Group
                </v-breadcrumbs-item>
                <v-breadcrumbs-item>
                  Module
                </v-breadcrumbs-item>
              </v-breadcrumbs>

              <v-spacer></v-spacer>

              <!-- VCS Section -->
              <v-card class="mr-2">
                <v-layout row class="top-toolbar-group top-toolbar-group-upload">
                  <v-flex xs6>
                    <v-btn
                           icon
                           v-tooltip:bottom="{ html: 'Undo last action on this module', visible: topToolbar.tooltips.active }"
                           class="top-toolbar-item top-toolbar-item-upload-1"
                           >
                      <v-icon>undo</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs6>
                    <v-btn
                           icon
                           v-tooltip:bottom="{ html: 'Redo last action on this module', visible: topToolbar.tooltips.active }"
                           class="top-toolbar-item top-toolbar-item-upload-1"
                           >
                      <v-icon>redo</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-card>

              <!-- Options Section -->
              <v-card class="mx-2" v-if="!cardMobileMode">
                <v-layout row class="top-toolbar-group top-toolbar-group-upload">
                  <v-flex xs4>
                    <v-btn
                           icon
                           v-tooltip:bottom="{ html: 'Pin to top', visible: topToolbar.tooltips.active }"
                           class="top-toolbar-item top-toolbar-item-upload-1"
                           >
                      <v-icon>place</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs4>
                    <v-btn
                           icon
                           v-tooltip:bottom="{ html: 'Edit source code', visible: topToolbar.tooltips.active }"
                           class="top-toolbar-item top-toolbar-item-upload-1"
                           >
                      <v-icon>mode_edit</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs4>
                    <v-btn
                           icon
                           v-tooltip:bottom="{ html: 'View blog, description, ...', visible: topToolbar.tooltips.active }"
                           class="top-toolbar-item top-toolbar-item-upload-1"
                           >
                      <v-icon>more_vert</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-card>

              <!-- Movement Section -->
              <v-card class="ml-2">
                <v-layout row class="top-toolbar-group top-toolbar-group-upload">
                  <v-flex xs4 v-if="draggable">
                    <v-btn
                           icon
                           v-tooltip:bottom="{ html: 'Move/drag the module', visible: topToolbar.tooltips.active }"
                           class="top-toolbar-item top-toolbar-item-upload-1"
                           >
                        <v-icon ref="dragHandle" class="vue-draggable-handle">open_with</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex :xs4="draggable" :xs6="!draggable">
                    <v-btn
                           icon
                           v-tooltip:bottom="{ html: 'Open module in fullscreen', visible: topToolbar.tooltips.active }"
                           class="top-toolbar-item top-toolbar-item-upload-1"
                           >
                      <v-icon>fullscreen</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex :xs4="draggable" :xs6="!draggable">
                    <v-btn
                           icon
                           v-tooltip:left="{ html: 'Remove module from dashboard layout', visible: topToolbar.tooltips.active }"
                           class="top-toolbar-item top-toolbar-item-upload-1"
                           @click="removeItem(item)"
                           >
                      <v-icon>close</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-layout>
          </v-card-title>

          <!-- Card Message Section -->
          <v-layout row v-show="alert" class="mb-3 resizable-card-wrapper-section-main">
            <v-flex>
              <v-alert info dismissible v-model="alert">
                <!-- TODO: Card Info Component Integration -->
                Info section here
              </v-alert>
            </v-flex>
          </v-layout>

          <!-- Card Main Section -->
          <v-card-text class="pt-0">

            <!-- Card XTerm Section -->
            <v-layout row class="mb-3">
              <v-flex>
                <!-- TODO: Card XTerm Component Integration -->
                XTerm here
              </v-flex>
            </v-layout>

            <!-- Card Controls Section -->
            <v-layout v-bind="column">

              <!-- Read-only Section -->
              <v-flex sm-6 v-bind:class="readCardClass" class="text-md-left text-sm-left">
                <v-expansion-panel expand>
                  <v-expansion-panel-content>
                    <div slot="header">Read</div>
                    <v-card>
                      <v-card-text class="px-4">
                        <router-view :name="readView"></router-view>
                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-flex>

              <!-- Read-Write Section -->
              <v-flex sm-6 v-bind:class="hybridCardClass" class="text-md-center text-sm-left">
                <v-expansion-panel expand>
                  <v-expansion-panel-content>
                    <div slot="header">Hybrid</div>
                    <v-card>
                      <v-card-text class="px-4">
                        <router-view :name="hybridView"></router-view>
                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-flex>

              <!-- Write-only Section -->
              <v-flex sm-6 v-bind:class="writeCardClass" class="text-md-right text-sm-left">
                <v-expansion-panel expand>
                  <v-expansion-panel-content>
                    <div slot="header">Write</div>
                    <v-card>
                      <v-card-text class="px-4">
                        <router-view :name="writeView"></router-view>
                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-flex>

            </v-layout>

          </v-card-text>
          <!-- Card Footer Section -->
          <v-card-actions class="pa-0 ma-0">
            <v-layout row class="px-3 pb-3 pt-0 ma-0 card-footer-section" align-center>
              <!-- Info Section -->
              <v-flex class="text-xs-left">
                <v-btn
                       icon
                       v-tooltip:right="{ html: 'View module info', visible: topToolbar.tooltips.active }"
                       class="top-toolbar-item top-toolbar-item-upload-1 ma-0"
                       >
                  <v-icon>info</v-icon>
                </v-btn>
                <v-btn
                       icon
                       v-tooltip:right="{ html: 'View module documentation', visible: topToolbar.tooltips.active }"
                       class="top-toolbar-item top-toolbar-item-upload-1 ma-0"
                       >
                  <v-icon>help</v-icon>
                </v-btn>
              </v-flex>
              <v-spacer></v-spacer>
              <!-- Resize Section -->
              <v-flex class="text-xs-right">
                <v-flex
                       icon
                       v-tooltip:bottom="{ html: 'Move/drag the module', visible: topToolbar.tooltips.active }"
                       class="top-toolbar-item top-toolbar-item-upload-1"
                       >
                       <v-icon
                         v-if="resizable"
                         ref="handle"
                       >transform</v-icon>
                </v-flex>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
  name: 'GridItem',
  props: {
    item: {
      type: [Object, String],
      default: 'x'
    }
  },
  data: function () {
    return {
      alert: true,
      readCardClassValue: '',
      hybridCardClassValue: '',
      writeCardClassValue: '',
      topToolbar: {
        tooltips: {
          active: true
        }
      },
      cardMobileMode: true,
      draggable: true,
      resizable: true
    }
  },
  computed: {
    column () {
      var column = {}

      if (this.item.w > 5 && (this.$mq.resize && this.$mq.above('1270px'))) {
        column.row = true
        this.cardMobileMode = false
      } else {
        column.column = true
        this.cardMobileMode = true
      }

      return column
    },
    readCardClass () {
      if (this.item.w > 5 && (this.$mq.resize && this.$mq.above('1270px'))) {
        this.readCardClassValue = 'read-card-spacing'
      } else {
        this.readCardClassValue = ''
      }

      return this.readCardClassValue
    },
    hybridCardClass () {
      if (this.item.w > 5 && (this.$mq.resize && this.$mq.above('1270px'))) {
        this.hybridCardClassValue = 'hybrid-card-spacing'
      } else {
        this.hybridCardClassValue = ''
      }

      return this.hybridCardClassValue
    },
    writeCardClass () {
      if (this.item.w > 5 && (this.$mq.resize && this.$mq.above('1270px'))) {
        this.writeCardClassValue = 'write-card-spacing'
      } else {
        this.writeCardClassValue = ''
      }

      return this.writeCardClassValue
    },
    readView () {
      return this.item.readView
    },
    hybridView () {
      return this.item.hybridView
    },
    writeView () {
      return this.item.writeView
    }
  },
  methods: {
    removeItem: function (item) {
      this.layout.splice(this.layout.indexOf(item), 1)
    }
  }
}
</script>

<style>
/* Make the cards full height and let the footer section float to the bottom */
.resizable-card-wrapper {
  height: 100% !important;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
/* Center elements in the inner cards section */
.resizable-card-wrapper-section-main {
  flex: 0 1 auto !important;
}
/* Make vue-grid-layout colors uniform */
.vue-grid-item:not(.vue-grid-placeholder) {
  background: transparent;
  border: 0;
}
.vue-grid-layout {
  background: transparent;
}
/* Make the drag handle uniform with the rest of the ui */
.vue-draggable-handle {
  position: absolute;
  width: auto !important;
  height: auto !important;
  top: auto !important;
  height: auto !important;
  background: transparent !important;
  background-position: bottom right;
  padding: 0 !important;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
  right: 0px !important;
}
/* Add spacing to cards on md and up to distinguish cards */
.read-card-spacing {
  margin-right: 8px;
}
.hybrid-card-spacing {
  margin-right: 8px;
  margin-left: 8px;
}
.write-card-spacing {
  margin-left: 8px;
}
/* Fix the card's breadcrumb's spacing */
.first-breadcrumb-item .breadcrumbs__item {
  padding-left: 0;
}
.card-footer-section {
  padding-bottom: 0 !important;
  padding-left: 0 !important;
  padding-right: 2px !important;
}
</style>