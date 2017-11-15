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
              'i': '0'
            },
            {
              'x': 2,
              'y': 0,
              'w': 2,
              'h': 4,
              'i': '1'
            },
            {
              'x': 4,
              'y': 0,
              'w': 2,
              'h': 5,
              'i': '2'
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
              'i': 'alphaHorizonReactionWheelModule'
            },
            {
              'x': 6,
              'y': 0,
              'w': 6,
              'h': 5,
              'i': 'default'
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
              'i': 'default'
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
              'i': '0'
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
              'i': '0'
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
              'i': '0'
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
            'i': '0'
          },
          {
            'x': 2,
            'y': 0,
            'w': 2,
            'h': 4,
            'i': '1'
          },
          {
            'x': 4,
            'y': 0,
            'w': 2,
            'h': 5,
            'i': '2'
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
            'i': '0'
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
            'i': '0'
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
            'i': '0'
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
            'i': '0'
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
            'i': '0'
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
            'i': '0'
          },
          {
            'x': 2,
            'y': 0,
            'w': 2,
            'h': 4,
            'i': '1'
          },
          {
            'x': 4,
            'y': 0,
            'w': 2,
            'h': 5,
            'i': '2'
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
            'i': '0'
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
            'i': '0'
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
            'i': '0'
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
            'i': '0'
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
            'i': '0'
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
            'i': '0'
          },
          {
            'x': 2,
            'y': 0,
            'w': 2,
            'h': 4,
            'i': '1'
          },
          {
            'x': 4,
            'y': 0,
            'w': 2,
            'h': 5,
            'i': '2'
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
            'i': '0'
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
            'i': '0'
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
            'i': '0'
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
            'i': '0'
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
            'i': '0'
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
            'i': '0'
          },
          {
            'x': 2,
            'y': 0,
            'w': 2,
            'h': 4,
            'i': '1'
          },
          {
            'x': 4,
            'y': 0,
            'w': 2,
            'h': 5,
            'i': '2'
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
            'i': '0'
          },
          {
            'x': 4,
            'y': 0,
            'w': 2,
            'h': 2,
            'i': '1'
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
            'i': '0'
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
            'i': '0'
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
            'i': '0'
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
            'i': '0'
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
