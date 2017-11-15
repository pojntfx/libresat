import Vue from 'vue'
import Router from 'vue-router'
import Dash from '@/components/Dash'
import Comms from '@/components/Comms'
import Navigation from '@/components/Navigation'
import Energy from '@/components/Energy'
import Payload from '@/components/Payload'
import About from '@/components/Misc/About'
import Docs from '@/components/Misc/Docs'
import Donate from '@/components/Misc/Donate'
import SettingsIndex from '@/components/Settings/SettingsIndex'
import SettingsProfile from '@/components/Settings/SettingsProfile'
// Vendor Module Imports
import AlphaHorizonInfo from '@/components/Vendors/AlphaHorizon/Info'
import AlphaHorizonReactionWheelInfo from '@/components/Vendors/AlphaHorizon/ReactionWheel/Info'
import AlphaHorizonReactionWheelDashboardView from '@/components/Vendors/AlphaHorizon/ReactionWheel/DashboardView'
import DashboardModulePlaceholder from '@/components/Grid/DashboardModulePlaceholder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/comms',
      name: 'Communications',
      component: Comms
    },
    {
      path: '/navigation',
      name: 'Navigation',
      component: Navigation
    },
    {
      path: '/energy',
      name: 'Energy',
      component: Energy
    },
    {
      path: '/payload',
      name: 'Payload',
      component: Payload
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsIndex
    },
    {
      path: '/settings/profile',
      name: 'Your Profile',
      component: SettingsProfile
    },
    {
      path: '/docs',
      name: 'Documentation',
      component: Docs
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    // Vendor Section
    // Alpha Horizon Modules Section
    {
      path: '/alphahorizon',
      name: 'Alpha Horizon',
      component: AlphaHorizonInfo,
      children: [
        {
          path: 'reactionwheel',
          name: 'Reaction Wheel Info',
          component: AlphaHorizonReactionWheelInfo,
          children: [
            {
              path: 'dashboard/view',
              name: 'Reaction Wheel Dashboard View',
              component: AlphaHorizonReactionWheelDashboardView
            }
          ]
        }
      ]
    },
    // Dashboard Module Registrations
    {
      path: '/',
      component: Dash,
      children: [
        {
          path: '/',
          name: 'Start',
          components: {
            /* Register dashboard module here after importing it above
            * then register the dashboard module in the store (var.groups.dashboardname)
            or import with the UI */
            default: DashboardModulePlaceholder,
            alphaHorizonReactionWheelModule: AlphaHorizonReactionWheelDashboardView
          }
        }
      ]
    }
  ]
})
