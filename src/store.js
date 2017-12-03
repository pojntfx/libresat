import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  currentDashboardlayout: {
    editable: false
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
            layout: [{
              'x': 0,
              'y': 0,
              'w': 2,
              'h': 2,
              'readView': '0',
              'hybridView': '0'
            },
            {
              'x': 2,
              'y': 0,
              'w': 2,
              'h': 4,
              'readView': '1',
              'hybridView': '1'
            },
            {
              'x': 4,
              'y': 0,
              'w': 2,
              'h': 5,
              'readView': '2',
              'hybridView': '2'
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
              'w': 6,
              'h': 7,
              'readView': 'alphaHorizonReactionWheelDashboardReadView',
              'hybridView': 'alphaHorizonReactionWheelDashboardHybridView'
            },
            {
              'x': 6,
              'y': 0,
              'w': 6,
              'h': 5,
              'readView': 'default',
              'hybridView': 'default'
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
              'hybridView': 'default'
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
              'hybridView': 'default'
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
              'hybridView': 'default'
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
              'hybridView': 'default'
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
            'hybridView': 'default'
          },
          {
            'x': 2,
            'y': 0,
            'w': 2,
            'h': 4,
            'readView': 'default',
            'hybridView': 'default'
          },
          {
            'x': 4,
            'y': 0,
            'w': 2,
            'h': 5,
            'readView': 'default',
            'hybridView': 'default'
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
            'hybridView': 'alphaHorizonReactionWheelDashboardHybridView'
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
            'hybridView': 'default'
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
            'hybridView': 'default'
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
            'hybridView': 'default'
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
            'hybridView': 'default'
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
            'hybridView': 'default'
          },
          {
            'x': 2,
            'y': 0,
            'w': 2,
            'h': 4,
            'readView': 'default',
            'hybridView': 'default'
          },
          {
            'x': 4,
            'y': 0,
            'w': 2,
            'h': 5,
            'readView': 'default',
            'hybridView': 'default'
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
            'hybridView': 'default'
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
            'hybridView': 'default'
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
            'hybridView': 'default'
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
            'hybridView': 'default'
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
            'hybridView': 'default'
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
            'hybridView': 'default'
          },
          {
            'x': 2,
            'y': 0,
            'w': 2,
            'h': 4,
            'readView': 'default',
            'hybridView': 'default'
          },
          {
            'x': 4,
            'y': 0,
            'w': 2,
            'h': 5,
            'readView': 'default',
            'hybridView': 'default'
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
            'hybridView': 'default'
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
            'hybridView': 'default'
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
            'hybridView': 'default'
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
            'hybridView': 'default'
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
            'hybridView': 'default'
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
            'hybridView': 'default'
          },
          {
            'x': 2,
            'y': 0,
            'w': 2,
            'h': 4,
            'readView': 'default',
            'hybridView': 'default'
          },
          {
            'x': 4,
            'y': 0,
            'w': 2,
            'h': 5,
            'readView': 'default',
            'hybridView': 'default'
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
            'hybridView': 'default'
          },
          {
            'x': 4,
            'y': 0,
            'w': 2,
            'h': 2,
            'readView': 'default',
            'hybridView': 'default'
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
            'hybridView': 'default'
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
            'hybridView': 'default'
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
            'hybridView': 'default'
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
            'hybridView': 'default'
          }]
        }
        ]
      }]

    }
  }
}

const getters = {
  currentDashboardlayoutEditable: state => state.currentDashboardlayout.editable,
  dashboardLayoutStart: state => state.var.groups.start,
  dashboardLayoutComms: state => state.var.groups.comms,
  dashboardLayoutNav: state => state.var.groups.nav,
  dashboardLayoutEnergy: state => state.var.groups.energy,
  dashboardLayoutPayload: state => state.var.groups.payload
}

const mutations = {
  toggleDashboardLayoutEditingMode (state) {
    state.currentDashboardlayout.editable = !state.currentDashboardlayout.editable
  }
}

const actions = {
  toggleDashboardLayoutEditingMode: ({ commit }) => commit('toggleDashboardLayoutEditingMode'),
  incrementIfOdd: ({ commit, state }) => {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
