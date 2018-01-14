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
    messages: {
      debug: true,
      warning: true,
      error: true
    }
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
              'w': 7,
              'h': 8,
              'i': '0',
              'readView': 'alphaHorizonReactionWheelDashboardReadView',
              'hybridView': 'alphaHorizonReactionWheelDashboardHybridView',
              'writeView': 'alphaHorizonReactionWheelDashboardWriteView',
              'template': 'defaultTemplate',
              'customView': 'default'
            },
            {
              'x': 7,
              'y': 0,
              'w': 5,
              'h': 8,
              'i': '1',
              'readView': 'default',
              'hybridView': 'default',
              'writeView': 'default',
              'template': 'defaultTemplate',
              'customView': 'default'
            },
            {
              'x': 0,
              'y': 9,
              'w': 12,
              'h': 8,
              'i': '2',
              'readView': 'default',
              'hybridView': 'default',
              'writeView': 'default',
              'template': 'defaultTemplate',
              'customView': 'default'
            }
            ]
          },
          {
            name: 3,
            displayName: 'yetAnotherLayout',
            layout: [{
              'x': 0,
              'y': 0,
              'w': 7,
              'h': 8,
              'i': '0',
              'readView': 'alphaHorizonReactionWheelDashboardReadView',
              'hybridView': 'alphaHorizonReactionWheelDashboardHybridView',
              'writeView': 'alphaHorizonReactionWheelDashboardWriteView',
              'template': 'defaultTemplate',
              'customView': 'default'
            },
            {
              'x': 7,
              'y': 0,
              'w': 5,
              'h': 8,
              'i': '1',
              'readView': 'default',
              'hybridView': 'default',
              'writeView': 'default',
              'template': 'defaultTemplate',
              'customView': 'default'
            },
            {
              'x': 0,
              'y': 9,
              'w': 12,
              'h': 8,
              'i': '2',
              'readView': 'default',
              'hybridView': 'default',
              'writeView': 'default',
              'template': 'defaultTemplate',
              'customView': 'default'
            },
            {
              'x': 0,
              'y': 18,
              'w': 12,
              'h': 8,
              'i': '2',
              'readView': 'default',
              'hybridView': 'default',
              'writeView': 'default',
              'template': 'defaultTemplate',
              'customView': 'default'
            }
            ]
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
            'h': 15,
            'i': '0',
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
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
            'w': 12,
            'h': 8,
            'i': '0',
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
          displayName: 'Mobileya',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 12,
            'h': 15,
            'i': '0',
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
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
            'w': 12,
            'h': 8,
            'i': '0',
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
            'w': 12,
            'h': 15,
            'i': '0',
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
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
            'w': 12,
            'h': 8,
            'i': '0',
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
          displayName: 'Mobileya',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 12,
            'h': 15,
            'i': '0',
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
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
            'w': 12,
            'h': 8,
            'i': '0',
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
            'w': 12,
            'h': 15,
            'i': '0',
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
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
            'w': 12,
            'h': 8,
            'i': '0',
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
          displayName: 'Mobileya',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 12,
            'h': 15,
            'i': '0',
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
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
            'w': 12,
            'h': 8,
            'i': '0',
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
            'w': 12,
            'h': 15,
            'i': '0',
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
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
            'w': 12,
            'h': 8,
            'i': '0',
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
          displayName: 'Mobileya',
          layout: [{
            'x': 0,
            'y': 0,
            'w': 12,
            'h': 15,
            'i': '0',
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
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
            'w': 12,
            'h': 8,
            'i': '0',
            'readView': 'default',
            'hybridView': 'default',
            'writeView': 'default',
            'template': 'none',
            'customView': 'default'
          }]
        }
        ]
      }]
    },
    logs: [
      {
        type: 'error',
        origin: 'alphaHorizonReactionWheel',
        message: 'A short, helpful example error message',
        code: 'YOUR_ERROR_CODE_IN_CAPS',
        infoUrl: 'https://www.opensdcp.org',
        dismissible: true,
        epoch: 1515949387600,
        user: 'pojntfx'
      }
    ]
  }
}

const getters = {
  // Return the properties of the current dashboard layout
  currentDashboardlayoutEditable: state => state.currentDashboardlayout.editable,
  currentDashboardlayoutDraggable: state => state.currentDashboardlayout.draggable,
  currentDashboardlayoutResizable: state => state.currentDashboardlayout.resizable,
  currentDashboardlayoutinMobileMode: state => state.currentDashboardlayout.mobileMode,
  currentDashboardlayoutMode: state => state.currentDashboardlayout.currentMode,
  // Return the dashboard layouts
  dashboardLayoutStart: state => state.var.groups.start,
  dashboardLayoutComms: state => state.var.groups.comms,
  dashboardLayoutNav: state => state.var.groups.nav,
  dashboardLayoutEnergy: state => state.var.groups.energy,
  dashboardLayoutPayload: state => state.var.groups.payload,
  // Return the status of debug/warning/error messages
  debugMessagesEnabled: state => state.conf.messages.debug,
  warningMessagesEnabled: state => state.conf.messages.warning,
  errorMessagesEnabled: state => state.conf.messages.error,
  logs: state => state.var.logs
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
    // Create a copy of the array with the layouts to get the correct index
    let layoutList = state.var.groups[group][layout]['layout'][mode]['layout']
    // Find the index of the object in the array that has the module's id
    let indexOfModuleId = layoutList.findIndex(item => item.i === module)
    // Log the index to the console
    // console.log('Index of module with ID:', indexOfModuleId)
    // Delete the module from the layout
    Vue.delete(state.var.groups[group][layout]['layout'][mode]['layout'], [indexOfModuleId])
  },
  setCurrentDashboardLayoutModeTo (state, mode) {
    state.currentDashboardlayout.currentMode = mode
  },
  logMessage (state, {type, origin, message, code, infoUrl, dismissible}) {
    let messageToLog = {}
    // Create a timestamp using the UNIX Epoch
    // eslint-disable-next-line new-parens
    let currentUnixTime = (new Date).getTime()
    messageToLog.type = 'debug'
    messageToLog.origin = origin
    messageToLog.message = message
    messageToLog.code = code
    messageToLog.infoUrl = infoUrl
    messageToLog.dismissible = dismissible
    messageToLog.epoch = currentUnixTime
    // The actual username will be used below once implemented
    messageToLog.user = 'pojntfx'
    // Log the message to the console if debugging messages are enabled
    if (state.conf.messages.debug) {
      console.log('New', type, 'message:', messageToLog)
    }
    state.var.logs.push(messageToLog)
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
  logDebugMessage ({commit}, {origin, message, code, infoUrl, dismissible}) {
    commit('logMessage', {
      type: 'debug',
      origin: origin,
      message: message,
      code: code,
      infoUrl: infoUrl,
      dismissible: dismissible
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
