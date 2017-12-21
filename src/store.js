import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  currentDashboardlayout: {
    editable: false,
    draggable: false,
    resizable: false,
    mobileMode: true,
    currentMode: 1
  },
  conf: {
    testValue: null
  },
  opt: {
    testValue: null
  },
  static: {
    testValue: null
  },
  var: {
    groups: {
      start: [
        {
          name: 1,
          displayName: 'Reserved',
          layout: [{
            name: 1,
            displayName: 'Reserved',
            layout: []
          }]
        }, {
          name: 2,
          displayName: 'First',
          layout: [{
            name: 1,
            displayName: 'Mobileya',
            layout: [{
              'x': 0,
              'y': 0,
              'w': 12,
              'h': 8,
              'i': '0',
              'readView': 'default',
              'hybridView': 'alphaHorizonReactionWheelDashboardHybridView',
              'writeView': 'alphaHorizonReactionWheelDashboardWriteView',
              'template': 'defaultTemplate',
              'customView': 'default'
            },
            {
              'x': 0,
              'y': 8,
              'w': 12,
              'h': 8,
              'i': '1',
              'readView': 'alphaHorizonReactionWheelDashboardReadView',
              'hybridView': 'alphaHorizonReactionWheelDashboardReadView',
              'writeView': 'alphaHorizonReactionWheelDashboardReadView',
              'template': 'defaultTemplate',
              'customView': 'alphaHorizonReactionWheelDashboardReadView'
            }]
          },
          {
            name: 2,
            displayName: 'Desktopya',
            layout: [{
              'x': 0,
              'y': 0,
              'w': 8,
              'h': 8,
              'i': '0',
              'readView': 'alphaHorizonReactionWheelDashboardReadView',
              'hybridView': 'alphaHorizonReactionWheelDashboardHybridView',
              'writeView': 'alphaHorizonReactionWheelDashboardWriteView',
              'template': 'defaultTemplate',
              'customView': 'default'
            },
            {
              'x': 8,
              'y': 0,
              'w': 4,
              'h': 8,
              'i': '1',
              'readView': 'default',
              'hybridView': 'default',
              'writeView': 'default',
              'template': 'none',
              'customView': 'default'
            }]
          }
          ]
        }, {
          name: 3,
          displayName: 'Second',
          layout: [{
            name: 1,
            displayName: 'Mobileyi',
            layout: [{
              'x': 0,
              'y': 0,
              'w': 2,
              'h': 2,
              'readView': 'default',
              'hybridView': 'default',
              'writeView': 'default',
              'template': 'none',
              'customView': 'default'
            }]
          },
          {
            name: 2,
            displayName: 'Desktopyi',
            layout: [{
              'x': 0,
              'y': 0,
              'w': 2,
              'h': 2,
              'readView': 'default',
              'hybridView': 'default',
              'writeView': 'default',
              'template': 'none',
              'customView': 'default'
            }]
          },
          {
            name: 3,
            displayName: 'Godyi',
            layout: [{
              'x': 0,
              'y': 0,
              'w': 2,
              'h': 2,
              'readView': 'default',
              'hybridView': 'default',
              'writeView': 'default',
              'template': 'none',
              'customView': 'default'
            }]
          }
          ]
        }
      ],
      comms: [{
        name: 1,
        displayName: 'Reserved',
        layout: [{
          name: 1,
          displayName: 'Reserved',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          },
          {
            'x': 2,
            'y': 0,
            'w': 2,
            'h': 4,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          },
          {
            'x': 4,
            'y': 0,
            'w': 2,
            'h': 5,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }
          ]
        }]
      }, {
        name: 2,
        displayName: 'First',
        layout: [{
          name: 1,
          displayName: 'Mobileya',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 12,
            'h': 6,
            'readView': 'alphaHorizonReactionWheelDashboardReadView',
            'hybridView': 'alphaHorizonReactionWheelDashboardHybridView',
            'writeView': 'alphaHorizonReactionWheelDashboardWriteView',
            'template': 'defaultTemplate',
            'customView': 'default'
          }]
        },
        {
          name: 2,
          displayName: 'Desktopya',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]
        }
        ]
      }, {
        name: 3,
        displayName: 'Second',
        layout: [{
          name: 1,
          displayName: 'Mobileyi',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]
        },
        {
          name: 2,
          displayName: 'Desktopyi',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]
        },
        {
          name: 3,
          displayName: 'Godyi',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]
        }
        ]
      }],
      nav: [{
        name: 1,
        displayName: 'Reserved',
        layout: [{
          name: 1,
          displayName: 'Reserved',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          },
          {
            'x': 2,
            'y': 0,
            'w': 2,
            'h': 4,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          },
          {
            'x': 4,
            'y': 0,
            'w': 2,
            'h': 5,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }
          ]
        }]
      }, {
        name: 2,
        displayName: 'First',
        layout: [{
          name: 1,
          displayName: 'Mobileya',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]
        },
        {
          name: 2,
          displayName: 'Desktopya',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]
        }
        ]
      }, {
        name: 3,
        displayName: 'Second',
        layout: [{
          name: 1,
          displayName: 'Mobileyi',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]
        },
        {
          name: 2,
          displayName: 'Desktopyi',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]
        },
        {
          name: 3,
          displayName: 'Godyi',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]
        }
        ]
      }],
      energy: [{
        name: 1,
        displayName: 'Reserved',
        layout: [{
          name: 1,
          displayName: 'Reserved',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          },
          {
            'x': 2,
            'y': 0,
            'w': 2,
            'h': 4,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          },
          {
            'x': 4,
            'y': 0,
            'w': 2,
            'h': 5,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }
          ]
        }]
      }, {
        name: 2,
        displayName: 'First',
        layout: [{
          name: 1,
          displayName: 'Mobileya',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]
        },
        {
          name: 2,
          displayName: 'Desktopya',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]
        }
        ]
      }, {
        name: 3,
        displayName: 'Second',
        layout: [{
          name: 1,
          displayName: 'Mobileyi',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]
        },
        {
          name: 2,
          displayName: 'Desktopyi',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]
        },
        {
          name: 3,
          displayName: 'Godyi',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]
        }
        ]
      }],
      payload: [{
        name: 1,
        displayName: 'Reserved',
        layout: [{
          name: 1,
          displayName: 'Reserved',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          },
          {
            'x': 2,
            'y': 0,
            'w': 2,
            'h': 4,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          },
          {
            'x': 4,
            'y': 0,
            'w': 2,
            'h': 5,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }
          ]
        }]
      }, {
        name: 2,
        displayName: 'First',
        layout: [{
          name: 1,
          displayName: 'Mobileya',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          },
          {
            'x': 4,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]

        },
        {
          name: 2,
          displayName: 'Desktopya',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]
        }
        ]
      }, {
        name: 3,
        displayName: 'Second',
        layout: [{
          name: 1,
          displayName: 'Mobileyi',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]
        },
        {
          name: 2,
          displayName: 'Desktopyi',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]
        },
        {
          name: 3,
          displayName: 'Godyi',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]
        }
        ]
      }]

    }
  }
}

const getters = {
  currentDashboardlayoutEditable: state => state.currentDashboardlayout.editable,
  currentDashboardlayoutDraggable: state => state.currentDashboardlayout.draggable,
  currentDashboardlayoutResizable: state => state.currentDashboardlayout.resizable,
  currentDashboardlayoutinMobileMode: state => state.currentDashboardlayout.mobileMode,
  currentDashboardlayoutMode: state => state.currentDashboardlayout.currentMode,
  dashboardLayoutStart: state => state.var.groups.start,
  dashboardLayoutComms: state => state.var.groups.comms,
  dashboardLayoutNav: state => state.var.groups.nav,
  dashboardLayoutEnergy: state => state.var.groups.energy,
  dashboardLayoutPayload: state => state.var.groups.payload
}

const mutations = {
  // Toggle the dashboard layout modification modes
  toggleDashboardLayoutEditingMode (state) {
    state.currentDashboardlayout.editable = !state.currentDashboardlayout.editable
  },
  toggleDashboardLayoutDraggable (state) {
    state.currentDashboardlayout.draggable = !state.currentDashboardlayout.draggable
  },
  toggleDashboardLayoutResizable (state) {
    state.currentDashboardlayout.resizable = !state.currentDashboardlayout.resizable
  },
  enableDashboardLayoutMobileModeStatus (state) {
    state.currentDashboardlayout.mobileMode = true
  },
  disableDashboardLayoutMobileModeStatus (state) {
    state.currentDashboardlayout.mobileMode = false
  },
  // Delete a module in the grid array, identify module by it's i property.
  deleteDashboardLayoutModeModule (state, {group, layout, mode, module}) {
    Vue.delete(state.var.groups[group][layout]['layout'][mode]['layout'], [module])
  },
  setCurrentDashboardLayoutModeTo (state, mode) {
    state.currentDashboardlayout.currentMode = mode
  }
}

const actions = {
  toggleDashboardLayoutEditingMode: ({ commit }) => commit('toggleDashboardLayoutEditingMode'),
  toggleDashboardLayoutDraggable: ({ commit }) => commit('toggleDashboardLayoutDraggable'),
  toggleDashboardLayoutResizable: ({ commit }) => commit('toggleDashboardLayoutResizable'),
  enableDashboardLayoutMobileModeStatus: ({ commit }) => commit('enableDashboardLayoutMobileModeStatus'),
  disableDashboardLayoutMobileModeStatus: ({ commit }) => commit('disableDashboardLayoutMobileModeStatus'),
  deleteDashboardLayoutModeModule ({commit}, {group, layout, mode, module}) {
    commit('deleteDashboardLayoutModeModule', {
      group: group,
      layout: layout,
      mode: mode,
      module: module
    })
  },
  setCurrentDashboardLayoutModeTo: ({ commit }, mode) => commit('setCurrentDashboardLayoutModeTo', mode)
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
