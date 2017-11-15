<!-- OpenSNET Bridge Client User Interface (c) Felicitas Pojtinger-->
<template>
<v-app
  toolbar
  :dark="mainApp.manualDarkMode || !isItDay && mainApp.automaticLightDarkMode"
  :light="!mainApp.manualDarkMode || isItDay && mainApp.automaticLightDarkMode"
>
  <!-- DESKTOP NAVIGATION DRAWER -->
  <v-navigation-drawer
    permanent
    overflow
    clipped
    fixed
    v-if="permaDrawer.active"
    :mini-variant.sync="permaDrawer.minified"
  >
    <!-- PERMANENT DRAWER MINIFIER -->
    <v-list>
      <v-list-tile
        @click.native.stop="permaDrawer.minified = !permaDrawer.minified"
        v-if="permaDrawer.minifyButton || permaDrawer.minified"
        style="cursor: pointer"
      >
        <v-list-tile-action>
          <v-icon v-html="permaDrawer.minified ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Minify Drawer</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <!-- PERMANENT DRAWER NAVIGATION ITEMS -->
      <v-list-tile
        v-for="(navigationItem, index) in navigationItems"
        :key="navigationItem.title"
        :to="navigationItem.link"
        exact
        :activeClass="navigationItem.textIconColor"
        @click.native="deactivateSettingsLink(); bottomNavigation.initiallySelected = index"
      >
        <v-list-tile-action>
          <v-icon>{{ navigationItem.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ navigationItem.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <!-- PERMANENT DRAWER MINIFIED ICONS FOR EXPANSION PANELS -->
      <v-list-tile
        @click="permaDrawer.expansionsPanels.changelog.expanded = true"
        v-if="permaDrawer.minified"
      >
        <v-list-tile-action>
          <v-icon>history</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Changelog</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
        @click="permaDrawer.expansionsPanels.connections.expanded = true"
        v-if="permaDrawer.minified"
      >
        <v-list-tile-action>
          <v-icon>compare_arrows</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Connections</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
        @click="permaDrawer.expansionsPanels.misc.expanded = true"
        v-if="permaDrawer.minified"
        :class="permaDrawer.expansionsPanels.misc.linkInsideActive ? miscItems[0].textIconColor : ''"
      >
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Settings</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider></v-divider>

      <!-- PERMANENT DRAWER CHANGELOG SECTION -->
      <v-expansion-panel expand v-if="!permaDrawer.minified">
        <v-expansion-panel-content v-model="permaDrawer.expansionsPanels.changelog.expanded">
          <div slot="header">
            <v-layout>
              <!-- CHANGELOG SECTION CONTROLS AND HEADER-->
              <v-flex xs6 class="text-xs-left">
                <v-subheader class="pl-0 grey--text">CHANGELOG</v-subheader>
              </v-flex>
              <v-flex xs6 class="text-xs-right">
                <v-btn
                  icon slot="activator"
                  class="grey--text"
                  @click.native.stop="drawerDialogs.changelog.active = true">
                  <v-icon>fullscreen</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </div>
          <!-- CHANGELOG SECTION IN DRAWER-->
          <v-card class="px-0 mt--3">
            <v-card-title class="pt-0">
              <v-text-field
                append-icon="search"
                label="Search"
                single-line
                hide-details
                v-model="historyItems.search"
             ></v-text-field>
            </v-card-title>
            <v-data-table
              v-bind:headers="historyItems.headers"
              v-bind:items="historyItems.items"
              v-bind:search="historyItems.search"
              class="permaDrawer-table"
            >
              <template slot="items" slot-scope="props">
                    <td>{{ props.item.date }}</td>
                    <td>{{ props.item.change }}</td>
                    <td>{{ props.item.user }}</td>
                  </template>
              <template slot="pageText" slot-scope="{ pageStart, pageStop }">
                    From {{ pageStart }} to {{ pageStop }}
                  </template>
            </v-data-table>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <!-- PERMANENT DRAWER CONNECTIONS SECTION -->
      <v-expansion-panel expand v-if="!permaDrawer.minified">
        <v-divider></v-divider>
        <v-expansion-panel-content v-model="permaDrawer.expansionsPanels.connections.expanded">
          <div slot="header">
            <v-layout>
              <!-- CONNECTIONS SECTION CONTROLS AND HEADER-->
              <v-flex xs6 class="text-xs-left">
                <v-subheader class="pl-0 grey--text">CONNECTIONS</v-subheader>
              </v-flex>
              <v-flex xs6 class="text-xs-right">
                <v-btn
                  icon slot="activator"
                  class="grey--text"
                  @click.native.stop="drawerDialogs.connections.active = true">
                  <v-icon>fullscreen</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </div>
          <!-- CONNECTIONS SECTION IN DRAWER-->
          <v-card class="px-0">
            <v-card-text
              v-for="connection in connectionItems"
              :key="connection.name"
            >
              <v-layout row>
                <v-flex 12>
                  <div class="px-1">
                    <v-text-field
                      name="input-1"
                      label="Connection Name"

                      single-line
                      class="no-underline pt-0"
                      :value="connection.name"
                    ></v-text-field>
                  </div>
                </v-flex>
              </v-layout>
              <v-layout
                row
                class="text-xs-center pt-2"
                v-if="connection.active"
              >
              <v-flex 12>
                  <div>
                    <v-stepper v-model="connection.currentStep">
                      <v-stepper-header>
                        <v-stepper-step
                          step="1"
                          :complete="connection.currentStep > 1"
                        >
                          Bridge
                      </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step
                          step="2"
                          :complete="connection.currentStep > 2"
                        >
                          Network
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step
                          step="3"
                        >
                          Node
                        </v-stepper-step>
                      </v-stepper-header>
                    </v-stepper>
                  </div>
                </v-flex>
              </v-layout>
              <v-layout row class="px-1">
                <v-flex 12 class="pt-2">
                  <v-text-field
                    name="input-node-address"
                    label="Node Address"
                    required
                    v-model="connection.address"
                    :value="connection.address"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row class="px-1">
                <v-flex 12>
                  <v-text-field
                    name="input-node-username"
                    label="Node Username"

                    required
                    v-model="connection.username"
                    :value="connection.username"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row class="px-1">
                <v-flex 12>
                  <v-text-field
                    name="input-node-password"
                    label="Node Password"
                    hint="At least 8 characters"
                    min="8"
                    :append-icon="connection.passwordIsHidden ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (connection.passwordIsHidden = !connection.passwordIsHidden)"
                    :type="connection.passwordIsHidden ? 'password' : 'text'"
                    counter
                    required
                    v-model="connection.password"
                    :value="connection.password"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row class="px-1">
                <v-flex 12>
                  <v-select
                    v-bind:items="connection.connectionTypes"
                    overflow
                    label="Connection Type"
                    required
                    v-model="connection.type"
                  ></v-select>
                </v-flex>
              </v-layout>
              <v-layout row class="text-xs-left">
                <v-flex 6>
                  <v-btn
                    flat
                    error
                    class="mx-0"
                    @click="">
                      Delete
                    </v-btn>
                </v-flex>
                <v-flex 6 class="text-xs-right">
                  <v-btn
                    flat
                    success
                    v-if="!connection.active"
                    class="mx-0"
                    @click="connection.active = !connection.active"
                  >
                    Connect
                  </v-btn>
                  <v-btn
                    flat
                    warning
                    class="mx-0"
                    v-if="connection.active"
                    @click="connection.active = !connection.active"
                  >
                    Disconnect
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-card-text>
        </v-card>
      </v-expansion-panel-content>
      </v-expansion-panel>

      <!-- PERMANENT DRAWER MISCELLANEOUS SECTION -->
      <v-expansion-panel expand v-if="!permaDrawer.minified">
        <v-divider></v-divider>
        <v-expansion-panel-content v-model="permaDrawer.expansionsPanels.misc.expanded">
          <div slot="header">
            <!-- MISCELLANEOUS SECTION CONTROLS AND HEADER-->
              <v-subheader class="pl-0 grey--text">MISCELLANEOUS</v-subheader>
          </div>
          <!-- MISCELLANEOUS SECTION IN DRAWER-->
          <v-list>
            <v-list-tile
              v-for="miscItem in miscItems"
              :key="miscItem.title"
              :to="miscItem.link"
              :activeClass="miscItem.textIconColor"
              @click="activateSettingsLink()"
              >
              <v-list-tile-action>
                <v-icon class="misc-icon">{{ miscItem.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ miscItem.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-list>
  </v-navigation-drawer>

  <!-- MAIN TOOLBAR -->
  <v-slide-y-transition>
  <v-toolbar fixed v-show="topToolbar.visible">
    <v-toolbar-side-icon
      @click.native.stop="permaDrawer.active = !permaDrawer.active"
      v-if="permaDrawer.toggleButton"
    ></v-toolbar-side-icon>
    <v-btn
      icon
      @click.native.stop="permaDrawer.minified = !permaDrawer.minified"
      v-if="topToolbar.minifyButton &! permaDrawer.minified"
    >
      <v-icon>chevron_left</v-icon>
    </v-btn>

    <!-- BRAND CONTENT -->
    <v-toolbar-title
      class="top-toolbar-item top-toolbar-item-title"
      v-if="permaDrawer.toggleButton"
    >
    <router-link to="/" tag="span" style="cursor: pointer">{{ currentRouteName }}</router-link>
      <!-- <router-link> -->
      <!-- </router-link> -->
    </v-toolbar-title>
    <!-- BRAND CONTENT -->
    <v-layout
      align-center
      row
      class="top-toolbar-group top-toolbar-group-navbar-toggler"
      v-if="tempoDrawer.toggleButton"
    >
      <v-flex xs12>
        <v-toolbar-side-icon
          @click.native.stop="tempoDrawer.visible = !tempoDrawer.visible"
          class="top-toolbar-item top-toolbar-item-navbar-toggler"
        ></v-toolbar-side-icon>
      </v-flex>
    </v-layout>

    <v-spacer></v-spacer>

      <!-- SEARCH CONTENT MD -->
    <div>
      <v-layout row class="top-toolbar-group top-toolbar-group-search-md-and-up hidden-sm-and-down">
        <v-flex xs12>
          <v-text-field
            name="toolbar-top-search-box-md-and-up"
            label="Type to search"
            single-line
            append-icon="search"
            class="hidden-sm-and-down top-toolbar-item top-toolbar-item-search-md-and-up"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </div>

    <v-spacer class="hidden-sm-and-down"></v-spacer>

    <!-- SEARCH CONTENT SM -->
    <div>
      <v-layout row class="top-toolbar-group top-toolbar-group-search-sm-and-down hidden-md-and-up">
        <v-flex xs12>
          <v-btn
            icon
            class="top-toolbar-item top-toolbar-item-search-sm-and-down"
            v-tooltip:bottom="{ html: 'Search for commands, data, elements, ...', visible: topToolbar.tooltips.active }"
          >
            <v-icon>search</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </div>

    <!-- DOWNLOAD CONTENT -->
    <v-card>
      <v-layout row class="top-toolbar-group top-toolbar-group-download">
        <v-flex xs4>
          <v-btn
            icon
            v-tooltip:bottom="{ html: 'Download from OpenSNET Node', visible: topToolbar.tooltips.active }"
            class="mx-0 top-toolbar-item top-toolbar-item-download top-toolbar-item-download-1"
          >
            <v-icon>cloud_download</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs4>
          <v-btn
            icon
            v-tooltip:bottom="{ html: 'Download from OpenSNET Bridge Server', visible: topToolbar.tooltips.active }"
            class="mx-0 top-toolbar-item top-toolbar-item-download top-toolbar-item-download-2"
          >
            <v-icon>refresh</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs4>
          <v-btn
            icon
            v-tooltip:bottom="{ html: 'Open from OpenSNET Bridge Client (this device)', visible: topToolbar.tooltips.active }"
            class="mx-0 top-toolbar-item top-toolbar-item-download top-toolbar-item-download-3"
          >
            <v-icon>folder</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>

    <!-- INFO CONTENT -->
    <div>
      <v-layout row class="top-toolbar-group top-toolbar-group-options">
        <v-flex xs12>

          <v-menu
                  offset-y
                  :close-on-content-click="false"
                  >
                  <v-btn
                    icon
                    v-tooltip:bottom="{ html: 'Enable hot reloading, auto-save, ...', visible: topToolbar.tooltips.active }"
                    class="top-toolbar-item top-toolbar-group-item-options"
                    slot="activator"
                  >
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                  <v-card>
                    <v-list>

                      <v-list-tile
                       v-for="(actionItem, index) in vcsMenuItems.actionItems"
                       :key="actionItem.title"
                      >
                        <v-list-tile-action>
                          <v-switch
                           v-model="vcsMenuItems.actionItems[index].vModel"
                           @click.native="executeFunction(vcsMenuItems.actionItems[index].action)"
                          ></v-switch>
                        </v-list-tile-action>
                        <v-list-tile-title>{{ actionItem.title }}</v-list-tile-title>
                      </v-list-tile>

                    </v-list>

                    </v-list>
                  </v-card>
          </v-menu>
        </v-flex>
      </v-layout>
    </div>

    <!-- UPLOAD CONTENT -->
    <v-card>
      <v-layout row class="top-toolbar-group top-toolbar-group-upload">
        <v-flex xs4>
          <v-btn
            icon
            v-tooltip:bottom="{ html: 'Save on OpenSNET Bridge Client (this device)', visible: topToolbar.tooltips.active }"
            class="mx-0 top-toolbar-item top-toolbar-item-upload-1"
          >
            <v-icon>save</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs4>
          <v-btn
            icon
            v-tooltip:bottom="{ html: 'Push to OpenSNET Bridge Server', visible: topToolbar.tooltips.active }"
            class="mx-0 top-toolbar-item top-toolbar-item-upload-1"
          >
            <v-icon>call_merge</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs4>
          <v-btn
            icon
            v-tooltip:bottom="{ html: 'Commit to OpenSNET Node', visible: topToolbar.tooltips.active }"
            class="mx-0 top-toolbar-item top-toolbar-item-upload-1"
          >
            <v-icon>cloud_upload</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>

    <!-- AVATAR CONTENT -->
    <div>
      <v-layout row class="top-toolbar-group top-toolbar-group-avatar ml-3" v-if="permaDrawer.toggleButton">
        <v-flex xs12>
          <v-menu
                  offset-y
                  :close-on-content-click="false"
                  :nudge-right="16"
                  >
            <v-avatar size="36px" slot="activator">
              <img
                   :src=userMenuItems.userData.profilePic
                   alt="User Avatar"
                   class="top-toolbar-item top-toolbar-item-avatar"
                  >
            </v-avatar>

            <v-card>
              <v-list>

                <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <img
                         :src=userMenuItems.userData.profilePic
                         alt="User Avatar"
                         class="top-toolbar-item top-toolbar-item-avatar"
                        >
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ userMenuItems.userData.name }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ userMenuItems.userData.eMail }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn
                           icon
                           @click=""
                           >
                      <v-icon>exit_to_app</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>

              </v-list>
              <v-divider></v-divider>
              <v-list>

                <v-list-tile
                 v-for="(actionItem, index) in userMenuItems.actionItems"
                 :key="actionItem.title"
                >
                  <v-list-tile-action>
                    <v-switch
                     v-model="userMenuItems.actionItems[index].vModel"
                     @click.native="executeFunction(userMenuItems.actionItems[index].action)"
                    ></v-switch>
                  </v-list-tile-action>
                  <v-list-tile-title>{{ actionItem.title }}</v-list-tile-title>
                </v-list-tile>

                <v-list-tile
                 v-if="!mainApp.automaticLightDarkMode"
                 class="mt-3 mb-3"
                >
                  <v-radio-group
                   v-model="mainApp.manualDarkMode"
                   mandatory
                  >
                   <v-radio
                    label="Light Mode"
                    value="manual-light-mode"
                    v-model="mainSettings.manualDarkModeRadio"
                    @click.native="mainApp.manualDarkMode = false"
                   ></v-radio>
                   <v-radio
                    label="Dark Mode"
                    value="manual-dark-mode"
                    v-model="mainSettings.manualLightModeRadio"
                    @click.native="mainApp.manualDarkMode = true"
                   ></v-radio>
                  </v-radio-group>
                </v-list-tile>
              </v-list>
              <v-divider></v-divider>
              <v-list>

                <v-list-tile
                 v-for="(listItem, index) in userMenuItems.listItems"
                 :key="listItem.title"
                 :to="listItem.link"
                 :activeClass="listItem.textIconColor"
                 @click.native="executeFunction(userMenuItems.listItems[index].action); deactivateSettingsLink()">
                  <v-list-tile-action>
                    <v-icon>{{ listItem.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>{{ listItem.title }}</v-list-tile-title>
                </v-list-tile>

              </v-list>
            </v-card>
          </v-menu>
        </v-flex>
      </v-layout>
    </div>

  </v-toolbar>
</v-slide-y-transition>
  <!-- MOBILE NAVIGATION DRAWER -->
  <v-navigation-drawer
    temporary
    overflow
    fixed
    v-model="tempoDrawer.visible"
  >
    <!-- TEMPORARY DRAWER USER MENU -->
    <v-layout row wrap :style="userMenuItems.userData.backgroundPic" style="
                                background-color: white;
                                background-repeat: no-repeat;
                                background-position: center center;
                                background-attachment: fixed;
                                background-size: cover;"
                >
        <v-flex xs12>
          <v-layout class="ml-3 mr-1 align-center pt-4 pb-3">
            <v-flex class="text-xs-left">
              <v-avatar size="64px" slot="activator">
                <img
                     :src=userMenuItems.userData.profilePic
                     alt="User Avatar"
                     class=""
                     >
              </v-avatar>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex class="text-xs-right">
              <v-btn
                     icon
                     dark
                     @click=""
                     >
                <v-icon>exit_to_app</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
          <v-expansion-panel
                             dark
                             expand
                             class="expansion-panel-transparent"
                             >
            <v-expansion-panel-content
                                       class="expansion-panel-content-transparent"
                                       >
              <div slot="header">
                <v-layout>
                  <v-flex
                          xs12
                          class="text-xs-left"
                          >
                    <v-flex row>
                      <v-flex xs12>
                        <v-subheader
                                     dark
                                     class="pl-0 user-menu-name"
                                     >
                          {{ userMenuItems.userData.name }}
                        </v-subheader>
                      </v-flex>
                      <v-flex xs12>
                        <v-subheader
                                     dark
                                     class="pl-0 grey--text text--lighten-2 user-menu-email"
                                     >
                          {{ userMenuItems.userData.eMail }}
                        </v-subheader>
                      </v-flex>
                    </v-flex>

                  </v-flex>
                </v-layout>
              </div>
              <v-card>
                  <v-list>

                    <v-list-tile
                     v-for="(actionItem, index) in userMenuItems.actionItems"
                     :key="actionItem.title"
                    >
                      <v-list-tile-action>
                        <v-switch
                         v-model="userMenuItems.actionItems[index].vModel"
                         @click.native="executeFunction(userMenuItems.actionItems[index].action)"
                        ></v-switch>
                      </v-list-tile-action>
                      <v-list-tile-title>{{ actionItem.title }}</v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile
                     v-if="!mainApp.automaticLightDarkMode"
                     class="mt-3 mb-3"
                    >
                      <v-radio-group
                       v-model="mainApp.manualDarkMode"
                       mandatory
                      >
                       <v-radio
                        label="Light Mode"
                        value="manual-light-mode"
                        v-model="mainSettings.manualDarkModeRadio"
                        @click.native="mainApp.manualDarkMode = false"
                       ></v-radio>
                       <v-radio
                        label="Dark Mode"
                        value="manual-dark-mode"
                        v-model="mainSettings.manualLightModeRadio"
                        @click.native="mainApp.manualDarkMode = true"
                       ></v-radio>
                      </v-radio-group>
                    </v-list-tile>
                  </v-list>

                  <v-divider></v-divider>

                  <v-list>

                    <v-list-tile
                     v-for="(listItem, index) in userMenuItems.listItems"
                     :key="listItem.title"
                     :to="listItem.link"
                     :activeClass="listItem.textIconColor"
                     @click.native="executeFunction(userMenuItems.listItems[index].action); deactivateSettingsLink()">
                      <v-list-tile-action>
                        <v-icon class="mobile-user-menu-icon">{{ listItem.icon }}</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-title>{{ listItem.title }}</v-list-tile-title>
                    </v-list-tile>

                  </v-list>

                  <v-divider></v-divider>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
      </v-layout>
    <v-list>

      <!-- TEMPORARY DRAWER CHANGELOG SECTION -->
      <v-subheader class="grey--text">
        <!-- CHANGELOG SECTION CONTROLS AND HEADER-->
        CHANGELOG
        <v-spacer></v-spacer>
        <v-btn
          icon
          slot="activator"
          class="grey--text"
          @click.native.stop="tempoDrawer.visible = !tempoDrawer.visible, drawerDialogs.changelog.active = true"
        >
          <v-icon>fullscreen</v-icon>
        </v-btn>
        <!-- CHANGELOG SECTION FULLSCREEN DIALOG-->
        <v-dialog
          v-model="drawerDialogs.changelog.active"
          fullscreen transition="dialog-bottom-transition"
          :overlay="false"
        >
          <v-card>
            <v-toolbar fixed>
              <v-toolbar-title>Changelog</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn
                icon
                @click.native="drawerDialogs.changelog.active = false"
              >
                <v-icon>fullscreen_exit</v-icon>
              </v-btn>
            </v-toolbar>
            <v-container class="main-container-margin">
              <v-card>
                <v-card-title>
                  <v-text-field
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                    v-model="historyItems.search"
                 ></v-text-field>
                </v-card-title>
                <v-data-table
                  v-bind:headers="historyItems.headers"
                  v-bind:items="historyItems.items"
                  v-bind:search="historyItems.search"
                >
                  <template slot="items" slot-scope="props">
                        <td>{{ props.item.date }}</td>
                        <td>{{ props.item.change }}</td>
                        <td>{{ props.item.user }}</td>
                      </template>
                  <template slot="pageText" slot-scope="{ pageStart, pageStop }">
                        From {{ pageStart }} to {{ pageStop }}
                      </template>
                </v-data-table>
              </v-card>
            </v-container>
          </v-card>
        </v-dialog>
      </v-subheader>
      <!-- CHANGELOG SECTION IN DRAWER-->
      <div class="px-0 mt--3">
        <v-card-text class="pt-0">
          <v-text-field
            append-icon="search"
            label="Search"
            single-line hide-details
            v-model="historyItems.search"
          ></v-text-field>
          <v-data-table
            v-bind:headers="historyItems.headers"
            v-bind:items="historyItems.items"
            v-bind:search="historyItems.search"
          >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.date }}</td>
                <td>{{ props.item.change }}</td>
                <td>{{ props.item.user }}</td>
              </template>
            <template
              slot="pageText"
              slot-scope="{ pageStart, pageStop }"
            >
                From {{ pageStart }} to {{ pageStop }}
              </template>
          </v-data-table>
        </v-card-text>
      </div>

      <v-divider></v-divider>

      <!-- TEMPORARY DRAWER CONNECTIONS SECTION -->
      <v-subheader class="grey--text">
        <!-- CONNECTIONS SECTION CONTROLS AND HEADER-->
        CONNECTIONS
        <v-spacer></v-spacer>
        <v-btn
          icon
          slot="activator"
          class="grey--text"
          @click.native.stop="tempoDrawer.visible = !tempoDrawer.visible, drawerDialogs.connections.active = true"
        >
          <v-icon>fullscreen</v-icon>
        </v-btn>
        <!-- CONNECTIONS SECTION FULLSCREEN DIALOG-->
        <v-dialog
          v-model="drawerDialogs.connections.active"
          fullscreen transition="dialog-bottom-transition"
          :overlay="false"
        >
          <v-card>
            <v-toolbar fixed>
              <v-toolbar-title>Connections</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn
                icon
                @click.native="drawerDialogs.connections.active = false"
              >
                <v-icon>fullscreen_exit</v-icon>
              </v-btn>
            </v-toolbar>
            <v-container class="main-container-margin">
              <v-card-text
                v-for="connection in connectionItems"
                :key="connection.name"
              >
                <v-layout row>
                  <v-flex 12>
                    <v-card class="px-1">
                      <v-text-field
                        name="input-connection-name"
                        label="Connection Name"
                        single-line class="no-underline px-3 pb-3"
                        :value="connection.name"
                      ></v-text-field>
                    </v-card>
                  </v-flex>
                </v-layout>
                <v-layout
                  row
                  class="text-xs-center pt-2"
                  v-if="connection.active"
                >
                <v-flex 12>
                    <div>
                      <v-stepper v-model="connection.currentStep">
                        <v-stepper-header>
                          <v-stepper-step
                            step="1"
                            :complete="connection.currentStep > 1"
                          >
                            Bridge
                        </v-stepper-step>
                          <v-divider></v-divider>
                          <v-stepper-step
                            step="2"
                            :complete="connection.currentStep > 2"
                          >
                            Network
                          </v-stepper-step>
                          <v-divider></v-divider>
                          <v-stepper-step
                            step="3"
                          >
                            Node
                          </v-stepper-step>
                        </v-stepper-header>
                      </v-stepper>
                    </div>
                  </v-flex>
                </v-layout>
                <v-layout row class="px-1">
                  <v-flex 12 class="pt-2">
                    <v-text-field
                      name="input-node-address"
                      label="Node Address"
                      required
                      v-model="connection.address"
                      :value="connection.address"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row class="px-1">
                  <v-flex 12>
                    <v-text-field
                      name="input-node-username"
                      label="Node Username"
                      required
                      v-model="connection.username"
                      :value="connection.username"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row class="px-1">
                  <v-flex 12>
                    <v-text-field
                      name="input-node-password"
                      label="Node Password"
                      hint="At least 8 characters"
                      min="8"
                      :append-icon="connection.passwordIsHidden ? 'visibility' : 'visibility_off'"
                      :append-icon-cb="() => (connection.passwordIsHidden = !connection.passwordIsHidden)"
                      :type="connection.passwordIsHidden ? 'password' : 'text'"
                      counter
                      required
                      v-model="connection.password"
                      :value="connection.password"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row class="px-1">
                  <v-flex 12>
                    <v-select
                      v-bind:items="connection.connectionTypes"
                      overflow
                      label="Connection Type"
                      required
                      v-model="connection.type"
                    ></v-select>
                  </v-flex>
                </v-layout>
                <v-layout row class="text-xs-left">
                  <v-flex 6>
                    <v-btn
                      error
                      class="mx-0"
                      @click="">
                        Delete
                      </v-btn>
                  </v-flex>
                  <v-flex 6 class="text-xs-right">
                    <v-btn
                      success
                      class="mx-0"
                      v-if="!connection.active"
                      @click="connection.active = !connection.active"
                    >
                      Connect
                    </v-btn>
                    <v-btn
                      warning
                      class="mx-0"
                      v-if="connection.active"
                      @click="connection.active = !connection.active"
                    >
                      Disconnect
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-container>
          </v-card>
        </v-dialog>
      </v-subheader>
      <!-- CONNECTIONS SECTION IN DRAWER-->
      <div class="px-0">
        <v-card-text
          v-for="connection in connectionItems"
          :key="connection.name"
        >
          <v-layout row>
            <v-flex 12>
              <div class="px-1">
                <v-text-field
                  name="input-1"
                  label="Connection Name"

                  single-line
                  class="no-underline pt-0"
                  :value="connection.name"
                ></v-text-field>
              </div>
            </v-flex>
          </v-layout>
          <v-layout
            row
            class="text-xs-center pt-2"
            v-if="connection.active"
          >
          <v-flex 12>
              <div>
                <v-stepper v-model="connection.currentStep">
                  <v-stepper-header>
                    <v-stepper-step
                      step="1"
                      :complete="connection.currentStep > 1"
                    >
                      Bridge
                  </v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step
                      step="2"
                      :complete="connection.currentStep > 2"
                    >
                      Network
                    </v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step
                      step="3"
                    >
                      Node
                    </v-stepper-step>
                  </v-stepper-header>
                </v-stepper>
              </div>
            </v-flex>
          </v-layout>
          <v-layout row class="px-1">
            <v-flex 12 class="pt-2">
              <v-text-field
                name="input-node-address"
                label="Node Address"
                required
                v-model="connection.address"
                :value="connection.address"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row class="px-1">
            <v-flex 12>
              <v-text-field
                name="input-node-username"
                label="Node Username"
                required
                v-model="connection.username"
                :value="connection.username"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row class="px-1">
            <v-flex 12>
              <v-text-field
                name="input-node-password"
                label="Node Password"
                hint="At least 8 characters"
                min="8"
                :append-icon="connection.passwordIsHidden ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (connection.passwordIsHidden = !connection.passwordIsHidden)"
                :type="connection.passwordIsHidden ? 'password' : 'text'"
                counter
                required
                v-model="connection.password"
                :value="connection.password"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row class="px-1">
            <v-flex 12>
              <v-select
                v-bind:items="connection.connectionTypes"
                overflow
                label="Connection Type"
                required
                v-model="connection.type"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row class="text-xs-left">
            <v-flex 6>
              <v-btn
                flat
                error
                class="mx-0"
                @click="">
                  Delete
                </v-btn>
            </v-flex>
            <v-flex 6 class="text-xs-right">
              <v-btn
                flat
                success
                v-if="!connection.active"
                class="mx-0"
                @click="connection.active = !connection.active"
              >
                Connect
              </v-btn>
              <v-btn
                flat
                warning
                class="mx-0"
                v-if="connection.active"
                @click="connection.active = !connection.active"
              >
                Disconnect
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card-text>
      </div>

      <v-divider></v-divider>

      <!-- TEMPORARY DRAWER MISCELLANEOUS SECTION -->
      <v-subheader class="grey--text">
        <!-- MISCELLANEOUS SECTION CONTROLS AND HEADER-->
        MISCELLANEOUS
        <!-- MISCELLANEOUS SECTION FULLSCREEN DIALOG-->
      </v-subheader>
      <!-- MISCELLANEOUS SECTION IN DRAWER-->
      <v-list>
        <v-list-tile
          v-for="miscItem in miscItems"
          :key="miscItem.title"
          :to="miscItem.link"
          :activeClass="miscItem.textIconColor"
        >
          <v-list-tile-action>
            <v-icon class="misc-icon">{{ miscItem.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ miscItem.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-list>
  </v-navigation-drawer>

  <!-- FLOATING ACTION BUTTON -->
      <v-speed-dial
                    v-model="floatingActionButton.active"
                    bottom
                    right
                    direction="top"
                    transition="slide-y-reverse-transition"
                    fixed
                    >

        <v-btn
               slot="activator"
               class="fab-btn"
               fab
               v-model="floatingActionButton.active"
               v-tooltip:left="{ html: 'Delete, open or insert a new dashboard layout or module' }"
               v-show="floatingActionButton.visible"
               >
          <v-icon>mode_edit</v-icon>
          <v-icon>close</v-icon>
        </v-btn>

        <!-- DASHBOARD MODULE INSERT SECTION -->
        <v-bottom-sheet
          v-model="insertDashboardModuleDialog.active"
        >

        <v-btn
               fab
               dark
               small
               class="blue"
               v-tooltip:left="{ html: 'Download and insert dashboard module from OpenSNET Bridge Server' }"
               slot="activator"
               >
          <v-icon >cloud_download</v-icon>
        </v-btn>

        <!-- The @click attribute is needed in order to prevent the listener of the FAB from closing the bottom sheet -->
        <v-list @click.native.stop="insertDashboardModuleDialog.active = true">
          <v-subheader>Insert dashboard module</v-subheader>
          <v-container fluid grid-list-md>
            <v-layout row wrap>

              <v-flex v-for="(cardItem, index) in insertDashboardModuleDialog.cardItems" :key="cardItem.title" style="max-width: 550px;">
                <v-card class="mb-1">

                  <v-card-media :src=cardItem.imgSrc height="200">
                  </v-card-media>

                  <v-card-title primary-title>
                    <div>
                      <div class="headline"> {{ cardItem.title }} </div>
                      <span class="grey--text" v-html="cardItem.shortDescription"></span>
                    </div>
                  </v-card-title>

                  <v-card-actions>

                    <v-btn flat success @click="executeFunction(insertDashboardModuleDialog.cardItems[index].insertButtonAction)">
                      Insert
                    </v-btn>
                    <v-btn flat error @click="executeFunction(insertDashboardModuleDialog.cardItems[index].deleteButtonAction)">
                      Delete
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click.native="cardItem.expanded = !cardItem.expanded">
                      <v-icon>
                        {{ cardItem.expanded ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
                      </v-icon>
                    </v-btn>

                  </v-card-actions>

                  <v-slide-y-transition>
                    <div v-show="cardItem.expanded">

                      <v-subheader>Description</v-subheader>
                      <v-card-text v-html="cardItem.longDescription" class="pt-0">
                      </v-card-text>

                      <v-container grid-list-md fluid>
                        <v-layout row wrap>

                          <v-flex v-for="(buttonBadge, index) in cardItem.buttonBadges" :key="buttonBadge.name" class="text-xs-center">
                            <v-btn round :dark="buttonBadge.dark" :class="buttonBadge.color" @click="executeFunction(cardItem.buttonBadges[index].action)">
                              <v-icon class="mr-2">
                                {{ buttonBadge.icon }}
                              </v-icon>

                              {{ buttonBadge.title }}

                            </v-btn>
                          </v-flex>

                        </v-layout>
                      </v-container>

                      <v-subheader>Creator</v-subheader>
                      <v-layout>
                        <v-flex>
                          <v-card-text v-html="cardItem.creatorInfo" class="pt-0">
                          </v-card-text>
                        </v-flex>

                        <v-flex class="text-xs-right mr-3">
                          <a :href=cardItem.creatorLink target="_blank">
                            {{ cardItem.creatorLink }}
                          </a>
                        </v-flex>
                      </v-layout>

                      <v-subheader>Information</v-subheader>
                      <v-layout>
                        <v-flex>
                          <v-card-text class="pt-0">
                            Hardware Version: <i> {{ cardItem.moduleHardwareVersion }} </i>
                          </v-card-text>
                        </v-flex>

                        <v-flex>
                          <v-card-text class="text-xs-center pt-0">
                            Software Version: <i> {{ cardItem.moduleSoftwareVersion }} </i>
                          </v-card-text>
                        </v-flex>

                        <v-flex>
                          <v-card-text class="text-xs-right pt-0">
                            Last Software Change: <i> {{ cardItem.lastSoftwareChange }} </i>
                          </v-card-text>
                        </v-flex>
                      </v-layout>

                      </v-card-text>
                    </div>
                  </v-slide-y-transition>

                </v-card>
              </v-flex>


            </v-layout>
          </v-container>
        </v-list>
      </v-bottom-sheet>

        <v-btn
               fab
               dark
               small
               class="blue"
               v-tooltip:left="{ html: '(NOT IMPLEMENTED YET) Insert dashboard module from OpenSNET Bridge Client (this device)' }"
               >
          <v-icon >folder</v-icon>
        </v-btn>

        <div class="fab-text">
          <v-layout row align-center>
            <v-flex class="mr-1" xs-6>
              <v-icon>tab</v-icon>
            </v-flex>
            <v-flex xs-6>
              Module
            </v-flex>
          </v-layout>
        </div>

        <!-- DASHBOARD LAYOUT INSERT SECTION -->
        <v-bottom-sheet
          v-model="insertDashboardLayoutDialog.active"
        >

        <v-btn
               fab
               dark
               small
               class="green"
               v-tooltip:left="{ html: 'Manage, download or insert dashboard layouts on OpenSNET Bridge Server' }"
               slot="activator"
               >
            <v-icon >queue</v-icon>
        </v-btn>

        <!-- The @click attribute is needed in order to prevent the listener of the FAB from closing the bottom sheet -->
        <v-list @click.native.stop="insertDashboardLayoutDialog.active = true">
          <v-subheader>Insert dashboard layout</v-subheader>
          <v-container fluid grid-list-md>
            <v-layout row wrap>

              <v-flex v-for="(cardItem, index) in insertDashboardLayoutDialog.cardItems" :key="cardItem.title" style="max-width: 550px;">
                <v-card class="mb-1">

                  <v-card-media :src=cardItem.imgSrc height="200">
                  </v-card-media>

                  <v-card-title primary-title>
                    <div>
                      <div class="headline"> {{ cardItem.title }} </div>
                      <span class="grey--text" v-html="cardItem.shortDescription"></span>
                    </div>
                  </v-card-title>

                  <v-card-actions>

                    <v-btn flat success @click="executeFunction(insertDashboardLayoutDialog.cardItems[index].insertButtonAction)">
                      Insert
                    </v-btn>
                    <v-btn flat error @click="executeFunction(insertDashboardLayoutDialog.cardItems[index].deleteButtonAction)">
                      Delete
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click.native="cardItem.expanded = !cardItem.expanded">
                      <v-icon>
                        {{ cardItem.expanded ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
                      </v-icon>
                    </v-btn>

                  </v-card-actions>

                  <v-slide-y-transition>
                    <div v-show="cardItem.expanded">

                      <v-subheader>Description</v-subheader>
                      <v-card-text v-html="cardItem.longDescription" class="pt-0">
                      </v-card-text>

                      <v-container grid-list-md fluid>
                        <v-layout row wrap>

                          <v-flex v-for="(buttonBadge, index) in cardItem.buttonBadges" :key="buttonBadge.name" class="text-xs-center">
                            <v-btn round :dark="buttonBadge.dark" :class="buttonBadge.color" @click="executeFunction(cardItem.buttonBadges[index].action)">
                              <v-icon class="mr-2">
                                {{ buttonBadge.icon }}
                              </v-icon>

                              {{ buttonBadge.title }}

                            </v-btn>
                          </v-flex>

                        </v-layout>
                      </v-container>

                      <v-subheader>Creator</v-subheader>
                      <v-layout>
                        <v-flex>
                          <v-card-text v-html="cardItem.creatorInfo" class="pt-0">
                          </v-card-text>
                        </v-flex>

                        <v-flex class="text-xs-right mr-3">
                          <a :href=cardItem.creatorLink target="_blank">
                            {{ cardItem.creatorLink }}
                          </a>
                        </v-flex>
                      </v-layout>

                      <v-subheader>Information</v-subheader>
                      <v-layout>
                        <v-flex>
                          <v-card-text class="pt-0">
                            Hardware Version: <i> {{ cardItem.moduleHardwareVersion }} </i>
                          </v-card-text>
                        </v-flex>

                        <v-flex>
                          <v-card-text class="text-xs-center pt-0">
                            Software Version: <i> {{ cardItem.moduleSoftwareVersion }} </i>
                          </v-card-text>
                        </v-flex>

                        <v-flex>
                          <v-card-text class="text-xs-right pt-0">
                            Last Software Change: <i> {{ cardItem.lastSoftwareChange }} </i>
                          </v-card-text>
                        </v-flex>
                      </v-layout>

                      </v-card-text>
                    </div>
                  </v-slide-y-transition>

                </v-card>
              </v-flex>


            </v-layout>
          </v-container>
        </v-list>
      </v-bottom-sheet>

        <v-btn
               fab
               dark
               small
               class="green"
               v-tooltip:left="{ html: '(NOT IMPLEMENTED YET) Insert dashboard layout from OpenSNET Bridge Client (this device)' }"
               >
          <v-icon >folder</v-icon>
        </v-btn>

        <v-btn
               fab
               dark
               small
               class="red"
               v-tooltip:left="{ html: 'Delete dashboard layout from OpenSNET Bridge Client (this device)' }"
               >
          <v-icon>delete</v-icon>
        </v-btn>

        <v-btn
               fab
               dark
               small
               class="green"
               v-tooltip:left="{ html: 'Create dashboard layout on OpenSNET Bridge Server' }"
               >
          <v-icon >add</v-icon>
        </v-btn>

        <div class="fab-text">
          <v-layout row align-center>
            <v-flex class="mr-1" xs-6>
              <v-icon>view_quilt</v-icon>
            </v-flex>
            <v-flex xs-6>
              Layout
            </v-flex>
          </v-layout>
        </div>

      </v-speed-dial>

  <!-- MOBILE NAVIGATION BOTTOM -->
  <v-bottom-nav
    v-if="bottomNavigation.active"
    :value="bottomNavigation.visible"
    :active.sync="bottomNavigation.initiallySelected"
    :shift="bottomNavigation.shift"
    @click.native="deactivateSettingsLink()"
    router
  >
    <v-btn
      flat
      router
      v-for="(navigationItem, index) in navigationItems"
      :key="navigationItem.title"
      :class="navigationItem.textIconColor"
      :to="navigationItem.link"
      exact
      @click.native="bottomNavigation.initiallySelected = index"
    >
      <span router>{{ navigationItem.title }}</span>
      <v-icon router>{{ navigationItem.icon }}</v-icon>
    </v-btn>
  </v-bottom-nav>

  <!-- MAIN CONTENT -->
  <main>
    <v-container fluid grid-list-lg class="main-container-margin">
      <!-- Main View -->
      <router-view></router-view>
    </v-container>
  </main>
</v-app>
</template>

<script>
// Import the layout editing mode helpers from vuex
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      // Initial definitions of the user environment (needed to change between night/day mode etc.)
      userEnvironment: {
        currentHourOfTheDay: null,
        currentDaytime: null
      },

      // Initial definitions for the main application wrapper
      mainApp: {
        manualDarkMode: false,
        automaticLightDarkMode: true,
        title: 'OpenSNET',
        hotDownloading: false,
        hotCommiting: false,
        autoHide: {
          enabled: false,
          scrollTop: 0,
          didScroll: false,
          firstScrollValue: 0,
          secondScrollValue: 0
        }
      },

      // Initial definitions for the settings
      mainSettings: {
        manualDarkModeRadio: false,
        manualLightModeRadio: true
      },

      // Initial definitions for the top toolbar
      topToolbar: {
        minifyButton: true,
        tooltips: {
          active: true
        },
        visible: true
      },

      // Initial definitions for the permanent drawer
      permaDrawer: {
        active: true,
        toggleButton: true,
        minified: false,
        minifyButton: false,
        reset: {
          lg: true,
          md: true
        },
        expansionsPanels: {
          changelog: {
            expanded: false
          },
          connections: {
            expanded: false
          },
          misc: {
            expanded: true
          },
          linkInsideActive: false
        }
      },

      // Initial definitions for the drawer dialogs
      drawerDialogs: {
        connections: {
          active: false
        },
        changelog: {
          active: false
        }
      },

      // Initial definitions for the temporary drawer
      tempoDrawer: {
        visible: false,
        toggleButton: false,
        reset: true
      },

      // Initial definitions for the floating action button
      floatingActionButton: {
        active: false,
        visible: this.$store.state.currentDashboardlayout.editable
      },

      // Initial defintions for the dashboard element dialogs
      insertDashboardLayoutDialog: {
        active: false,
        cardItems: [
          {
            imgSrc: 'https://vuetifyjs.com/static/doc-images/cards/sunshine.jpg',
            title: 'Test layout 1',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            buttonBadges: [
              {icon: 'public', dark: true, title: 'Site', color: 'primary', action: 'toggleAutomaticLightDarkMode()'},
              {icon: 'library_books', dark: true, title: 'Docs', color: 'secondary', action: 'toggleAutomaticLightDarkMode()'},
              {icon: 'help', dark: true, title: 'Support', color: 'info', action: 'toggleAutomaticLightDarkMode()'},
              {icon: 'rss_feed', dark: true, title: 'News', color: 'success', action: 'toggleAutomaticLightDarkMode()'}
            ],
            insertButtonAction: 'toggleAutomaticLightDarkMode()',
            deleteButtonAction: 'toggleAutomaticLightDarkMode()',
            longDescription: 'Assumenda unde at facilis consequatur iure asperiores eligendi harum fugit voluptas. Eius at tempora odio aut repellendus, ipsam doloribus sapiente sed recusandae.',
            creatorInfo: 'Alpha Horizon',
            creatorLink: 'https://alphahorizon.io',
            moduleSiteLink: 'https://alphahorizon.io/modulesite',
            moduleDocsLink: 'https://alphahorizon.io/moduledocs',
            moduleSupportLink: 'https://alphahorizon.io/modulesprt',
            moduleNewsLink: 'https://alphahorizon.io/modulenews',
            moduleHardwareVersion: '2017.1',
            moduleSoftwareVersion: '2017.2',
            lastSoftwareChange: '2017-09-21 19:41',
            expanded: false
          },
          {
            imgSrc: 'https://vuetifyjs.com/static/doc-images/cards/sunshine.jpg',
            title: 'Test layout 2',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            buttonBadges: [
              {icon: 'public', dark: true, title: 'Site', color: 'primary', action: 'toggleAutomaticLightDarkMode()'},
              {icon: 'library_books', dark: true, title: 'Docs', color: 'secondary', action: 'toggleAutomaticLightDarkMode()'},
              {icon: 'help', dark: true, title: 'Support', color: 'info', action: 'toggleAutomaticLightDarkMode()'},
              {icon: 'rss_feed', dark: true, title: 'News', color: 'success', action: 'toggleAutomaticLightDarkMode()'}
            ],
            insertButtonAction: 'toggleAutomaticLightDarkMode()',
            deleteButtonAction: 'toggleAutomaticLightDarkMode()',
            longDescription: 'Assumenda unde at facilis consequatur iure asperiores eligendi harum fugit voluptas. Eius at tempora odio aut repellendus, ipsam doloribus sapiente sed recusandae.',
            creatorInfo: 'Alpha Horizon',
            creatorLink: 'https://alphahorizon.io',
            moduleSiteLink: 'https://alphahorizon.io/modulesite',
            moduleDocsLink: 'https://alphahorizon.io/moduledocs',
            moduleSupportLink: 'https://alphahorizon.io/modulesprt',
            moduleNewsLink: 'https://alphahorizon.io/modulenews',
            moduleHardwareVersion: '2017.1',
            moduleSoftwareVersion: '2017.2',
            lastSoftwareChange: '2017-09-21 19:41',
            expanded: false
          }
        ]
      },
      insertDashboardModuleDialog: {
        active: false,
        cardItems: [
          {
            imgSrc: 'https://vuetifyjs.com/static/doc-images/cards/sunshine.jpg',
            title: 'Test module 1',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            buttonBadges: [
              {icon: 'public', dark: true, title: 'Site', color: 'primary', action: 'toggleAutomaticLightDarkMode()'},
              {icon: 'library_books', dark: true, title: 'Docs', color: 'secondary', action: 'toggleAutomaticLightDarkMode()'},
              {icon: 'help', dark: true, title: 'Support', color: 'info', action: 'toggleAutomaticLightDarkMode()'},
              {icon: 'rss_feed', dark: true, title: 'News', color: 'success', action: 'toggleAutomaticLightDarkMode()'}
            ],
            insertButtonAction: 'toggleAutomaticLightDarkMode()',
            deleteButtonAction: 'toggleAutomaticLightDarkMode()',
            longDescription: 'Assumenda unde at facilis consequatur iure asperiores eligendi harum fugit voluptas. Eius at tempora odio aut repellendus, ipsam doloribus sapiente sed recusandae.',
            creatorInfo: 'Alpha Horizon',
            creatorLink: 'https://alphahorizon.io',
            moduleSiteLink: 'https://alphahorizon.io/modulesite',
            moduleDocsLink: 'https://alphahorizon.io/moduledocs',
            moduleSupportLink: 'https://alphahorizon.io/modulesprt',
            moduleNewsLink: 'https://alphahorizon.io/modulenews',
            moduleHardwareVersion: '2017.1',
            moduleSoftwareVersion: '2017.2',
            lastSoftwareChange: '2017-09-21 19:41',
            expanded: false
          },
          {
            imgSrc: 'https://vuetifyjs.com/static/doc-images/cards/sunshine.jpg',
            title: 'Test module 2',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            buttonBadges: [
              {icon: 'public', dark: true, title: 'Site', color: 'primary', action: 'toggleAutomaticLightDarkMode()'},
              {icon: 'library_books', dark: true, title: 'Docs', color: 'secondary', action: 'toggleAutomaticLightDarkMode()'},
              {icon: 'help', dark: true, title: 'Support', color: 'info', action: 'toggleAutomaticLightDarkMode()'},
              {icon: 'rss_feed', dark: true, title: 'News', color: 'success', action: 'toggleAutomaticLightDarkMode()'}
            ],
            insertButtonAction: 'toggleAutomaticLightDarkMode()',
            deleteButtonAction: 'toggleAutomaticLightDarkMode()',
            longDescription: 'Assumenda unde at facilis consequatur iure asperiores eligendi harum fugit voluptas. Eius at tempora odio aut repellendus, ipsam doloribus sapiente sed recusandae.',
            creatorInfo: 'Alpha Horizon',
            creatorLink: 'https://alphahorizon.io',
            moduleSiteLink: 'https://alphahorizon.io/modulesite',
            moduleDocsLink: 'https://alphahorizon.io/moduledocs',
            moduleSupportLink: 'https://alphahorizon.io/modulesprt',
            moduleNewsLink: 'https://alphahorizon.io/modulenews',
            moduleHardwareVersion: '2017.1',
            moduleSoftwareVersion: '2017.2',
            lastSoftwareChange: '2017-09-21 19:41',
            expanded: false
          }
        ]
      },

      // Initial definitions for the bottom navigation
      bottomNavigation: {
        active: false,
        visible: false,
        initiallySelected: 0,
        shift: false
      },

      // Drawer (md) and bottom navigation items
      navigationItems: [{
        title: 'Start',
        icon: 'dashboard',
        textIconColor: 'light-blue--text nav-dash',
        link: '/'
      },
      {
        title: 'Comms',
        icon: 'wifi',
        textIconColor: 'orange--text nav-comms',
        link: '/comms'
      },
      {
        title: 'Navigation',
        icon: 'navigation',
        textIconColor: 'red--text nav-navigation',
        link: '/navigation'
      },
      {
        title: 'Energy',
        icon: 'battery_charging_full',
        textIconColor: 'light-green--text nav-energy',
        link: '/energy'
      },
      {
        title: 'Payload',
        icon: 'memory',
        textIconColor: 'cyan--text nav-payload',
        link: '/payload'
      }
      ],

      // Items for the miscellaneous section
      miscItems: [{
        title: 'Settings',
        icon: 'settings',
        textIconColor: 'blue--text nav-default',
        link: '/settings'
      },
      {
        title: 'Documentation',
        icon: 'book',
        textIconColor: 'blue--text nav-default',
        link: '/docs'
      },
      {
        title: 'Donate',
        icon: 'favorite',
        textIconColor: 'blue--text nav-default',
        link: '/donate'
      },
      {
        title: 'About',
        icon: 'info',
        textIconColor: 'blue--text nav-default',
        link: '/about'
      }
      ],

      // Items for the user menu
      userMenuItems: {
        userData: {
          name: 'Max Mustermann',
          eMail: 'max.mustermann@example.com',
          profilePic: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          backgroundPic: 'background-image: url(http://www.xsjjys.com/data/out/243/WHDQ-513779518.jpg);'
        },
        actionItems: [
          {
            title: 'Automatic light/dark mode',
            vModel: 'this.mainApp.automaticLightDarkMode',
            action: 'toggleAutomaticLightDarkMode()'
          },
          {
            title: 'Layout editing mode',
            vModel: 'this.currentDashboardlayoutEditable',
            action: 'toggleFloatingActionButton(), this.toggleDashboardLayoutEditingMode()'
          },
          {
            title: 'Responsive auto-ui-hiding',
            vModel: 'this.mainApp.autoHide.enabled',
            action: 'toggleAutomaticOuterUIHidingOnMobile()'
          }
        ],
        listItems: [
          {
            title: 'Your Profile',
            icon: 'face',
            action: '',
            link: '/settings/profile',
            textIconColor: 'blue--text nav-default'
          }
        ]
      },

      // Items for the version control system items
      vcsMenuItems: {
        actionItems: [
          {
            title: 'Hot Downloading',
            vModel: 'this.mainApp.hotDownloading',
            action: 'setToHotDownloading()'
          },
          {
            title: 'Hot Commiting',
            vModel: 'this.mainApp.hotCommiting',
            action: 'setToHotCommiting()'
          }
        ]
      },

      // All available connectionItems
      connectionItems: [{
        connectionTypes: ['Passive only', 'Active only', 'Hybrid'],
        name: 'AlphaSatellite 1',
        address: 'test@example.com',
        username: 'TestUser1',
        password: 'password1234',
        passwordIsHidden: true,
        type: 'Passive only',
        active: false,
        currentStep: 2
      },
      {
        connectionTypes: ['Passive only', 'Active only', 'Hybrid'],
        name: 'AlphaSatellite 2',
        address: 'test@example.com',
        username: 'TestUser2',
        password: 'password1234',
        passwordIsHidden: true,
        type: 'Active only',
        active: false,
        currentStep: 2
      }
      ],

      // Drawer (both) historyItems
      historyItems: {
        search: '',
        pagination: {},
        headers: [{
          text: 'Date',
          value: 'date',
          align: 'left'
        },
        {
          text: 'Change',
          value: 'change',
          sortable: false,
          align: 'left'
        },
        {
          text: 'User',
          sortable: false,
          value: 'user',
          align: 'left'
        }
        ],
        items: [{
          date: '2017-04-12',
          change: 'Added Frozen Yogurt',
          user: 'pojntfx'
        },
        {
          date: '2017-04-25',
          change: 'Added Blueberry Yogurt',
          user: 'pojntti'
        },
        {
          date: '2017-04-09',
          change: 'Added Strawberry Cake',
          user: 'pojntfx'
        },
        {
          date: '2017-04-09',
          change: 'Added sl Trains',
          user: 'poiintfx'
        },
        {
          date: '2017-04-09',
          change: 'Added Tux Drink',
          user: 'pojntfx'
        },
        {
          date: '2017-04-09',
          change: 'Added Lynx Shortcut',
          user: 'pluintfx'
        }
        ]
      }
    }
  },
  watch: {
    '$mq.resize': 'drawerOptimizer'
  },
  computed: {
    ...mapGetters([
      'currentDashboardlayoutEditable'
    ]),
    // Determine whether it is day or night in order to switch night modes
    isItDay: function () {
      this.userEnvironment.currentHourOfTheDay = new Date().getHours()
      if (this.userEnvironment.currentHourOfTheDay >= 6 && this.userEnvironment.currentHourOfTheDay < 20) {
        this.userEnvironment.currentDaytime = true
      } else {
        this.userEnvironment.currentDaytime = false
      }
      return this.userEnvironment.currentDaytime
    },
    currentRouteName: function () {
      return this.$route.name
    }
  },
  methods: {
    ...mapActions([
      'toggleDashboardLayoutEditingMode' // Enable the toggling of the dashboard layout editing mode
    ]),
    drawerOptimizer () {
      // On xs and down: do everything like on sm to xs but shift (minify) the bottom navigation to fit the screen
      if (this.$mq.below(370)) {
        if (this.tempoDrawer.reset) {
          this.tempoDrawer.visible = false
        } else {

        }
        this.permaDrawer.reset.md = true
        this.permaDrawer.reset.lg = true
        this.tempoDrawer.reset = false

        this.topToolbar.minifyButton = false
        this.permaDrawer.active = false
        this.permaDrawer.toggleButton = false
        this.permaDrawer.minifyButton = false
        this.tempoDrawer.toggleButton = true
        this.bottomNavigation.active = true
        this.bottomNavigation.visible = true
        this.bottomNavigation.shift = true
      }
      // On sm and down: hide the permadrawer and -button and show the tempodrawer-button (once), set the permadrawer to reset
      if (this.$mq.below(601)) {
        if (this.$mq.above(370)) {
          if (this.tempoDrawer.reset) {
            this.tempoDrawer.visible = false
          } else {

          }
          this.permaDrawer.reset.md = true
          this.permaDrawer.reset.lg = true
          this.tempoDrawer.reset = false

          this.topToolbar.minifyButton = false
          this.permaDrawer.active = false
          this.permaDrawer.toggleButton = false
          this.permaDrawer.minifyButton = false
          this.tempoDrawer.toggleButton = true
          this.bottomNavigation.active = true
          this.bottomNavigation.visible = true
          this.bottomNavigation.shift = false
        }
      }
      // On md to lg: show the permadrawer and -button and hide the tempodrawer and tempodrawer-button (once), set the tempodrawer to reset
      if (this.$mq.below(601)) {
        if (this.$mq.above(370)) {
          if (this.tempoDrawer.reset) {
            this.tempoDrawer.visible = false
          } else {

          }
          this.permaDrawer.reset.md = true
          this.permaDrawer.reset.lg = true
          this.tempoDrawer.reset = false

          this.topToolbar.minifyButton = false
          this.permaDrawer.active = false
          this.permaDrawer.toggleButton = false
          this.permaDrawer.minifyButton = false
          this.tempoDrawer.toggleButton = true
          this.bottomNavigation.active = true
          this.bottomNavigation.visible = true
          this.bottomNavigation.shift = false
        }
      }
      // On md to lg: show the permadrawer and -button and hide the tempodrawer and tempodrawer-button (once), set the tempodrawer to reset
      if (this.$mq.below(1024)) {
        if (this.$mq.above(601)) {
          if (this.permaDrawer.reset.md) {
            this.topToolbar.minifyButton = false
            this.permaDrawer.active = true
            this.permaDrawer.toggleButton = true
            this.permaDrawer.minifyButton = true
            this.permaDrawer.minified = true
            this.tempoDrawer.visible = false
            this.tempoDrawer.toggleButton = false
          } else {

          }
          this.permaDrawer.reset.md = false
          this.permaDrawer.reset.lg = true
          this.tempoDrawer.reset = true
          this.bottomNavigation.active = true
          this.bottomNavigation.visible = false
        }
      }
      // On lg and up: show the permadrawerLg and -button and hide the tempodrawer and tempodrawer-button (once), set the permadrawer to reset
      if (this.$mq.above(1024)) {
        if (this.permaDrawer.reset.lg) {
          this.topToolbar.minifyButton = true
          this.permaDrawer.active = true
          this.permaDrawer.toggleButton = true
          this.permaDrawer.minifyButton = false
          this.permaDrawer.minified = false
          this.tempoDrawer.visible = false
          this.tempoDrawer.toggleButton = false
        } else {

        }
        this.permaDrawer.reset.md = true
        this.permaDrawer.reset.lg = false
        this.tempoDrawer.reset = false
        this.bottomNavigation.active = true
        this.bottomNavigation.visible = false
      }
    },
    // Toggle the automatic dark mode
    toggleAutomaticLightDarkMode () {
      this.mainApp.automaticLightDarkMode = !this.mainApp.automaticLightDarkMode
    },
    // Toggle the automatic outer UI hiding on mobile
    toggleAutomaticOuterUIHidingOnMobile () {
      this.mainApp.autoHide.enabled = !this.mainApp.autoHide.enabled
    },
    // Helper function that executes another function
    executeFunction (functionName) {
      // eslint-disable-next-line no-eval
      eval('this.' + functionName)
    },
    // Get the current calculated vmodel
    getCurrentVModel (arrayName, index) {
      // eslint-disable-next-line no-eval
      var currentVModel = eval('this.' + arrayName + '.actionItems[' + index + '].vModel')
      return currentVModel
    },
    // Assign the calculated vmodels to the ones that have been defined inside the array
    getAllCurrentVModels (arrayName) {
      var i = 0
      // eslint-disable-next-line no-eval
      for (i = 0; i < eval('this.' + arrayName + '.actionItems.length'); i++) {
        // Assign the calculated vmodel to each vmodel in the array
        // eslint-disable-next-line no-eval
        eval('this.' + arrayName + '.actionItems[i].vModel = eval(this.getCurrentVModel(arrayName, i))')
      }
      i = 0
    },
    // Toggle the top toolbar's visibility
    toggleToolbar () {
      this.topToolbar.visible = !this.topToolbar.visible
    },
    // Hide the top toolbar
    hideToolbar () {
      this.topToolbar.visible = false
    },
    // Show the top toolbar
    showToolbar () {
      this.topToolbar.visible = true
    },
    // Toggle the bottom bar's visibility
    toggleBottomBar () {
      this.bottomNavigation.visible = !this.bottomNavigation.visible
    },
    // Hide the bottom bar
    hideBottomBar () {
      this.bottomNavigation.visible = false
    },
    // Show the bottom bar
    showBottomBar () {
      this.bottomNavigation.visible = true
    },
    // Toggle the FAB's visibility
    toggleFloatingActionButton () {
      this.floatingActionButton.visible = !this.floatingActionButton.visible
    },
    // Hide the FAB
    hideFloatingActionButton () {
      this.floatingActionButton.visible = false
    },
    // Show the FAB
    showFloatingActionButton () {
      this.floatingActionButton.visible = true
    },
    // Hide the toolbar, bottom navigation and FAB
    hideOuterUI () {
      this.hideToolbar()
      this.hideBottomBar()
      this.hideFloatingActionButton()
    },
    // Show the toolbar, bottom navigation and FAB
    showOuterUI () {
      this.showToolbar()
      this.showBottomBar()
      this.showFloatingActionButton()
    },
    // Initialize scroll direction checking if it has not been done before with these values
    checkScrollValues () {
      if (!this.mainApp.autoHide.didScroll) {
        this.checkFirstScrollValue()
      }
    },
    // Check and assign the first value
    checkFirstScrollValue () {
      this.mainApp.autoHide.didScroll = true
      this.mainApp.autoHide.firstScrollValue = this.mainApp.autoHide.scrollTop
      // console.log('1: ' + this.mainApp.autoHide.firstScrollValue)
      this.checkSecondScrollValue()
    },
    // Check and assign the second value after 300 ms
    checkSecondScrollValue () {
      var self = this
      setTimeout(function () {
        self.mainApp.autoHide.secondScrollValue = self.mainApp.autoHide.scrollTop
        // console.log('2: ' + self.mainApp.autoHide.secondScrollValue)
        self.evaluateScrollValues()
      }, 300)
    },
    // Check wether the user has scrolled up or down and disable the checking for these values
    evaluateScrollValues () {
      if (this.mainApp.autoHide.firstScrollValue < this.mainApp.autoHide.secondScrollValue) {
        this.hideOuterUI()
      } else {
        this.showOuterUI()
      }
      this.mainApp.autoHide.didScroll = false
    },
    // Handle the scroll event
    handleScroll (event) {
      // Get the current scroll value/amount
      this.mainApp.autoHide.scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body)
        .mainApp.autoHide.scrollTop

      // If on md and up: hide the bottom bar
      if (this.permaDrawer.active && this.mainApp.autoHide.enabled) {
        this.hideBottomBar()
        this.showFloatingActionButton()
        this.showToolbar()
      } else {
        // If not overwritten, check whether to hide the toolbar
        if (this.mainApp.autoHide.enabled) {
          this.checkScrollValues()
        }
      }
    },
    // Notify the permaDrawer (minified) that a misc item has been deselected / a normal link has been selected
    deactivateSettingsLink () {
      this.permaDrawer.expansionsPanels.misc.linkInsideActive = false
    },
    // Notify the permaDrawer (minified) that a misc item has been selected
    activateSettingsLink () {
      this.permaDrawer.expansionsPanels.misc.linkInsideActive = true
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
    this.drawerOptimizer()

    // Set all vmodels to their actual values
    this.getAllCurrentVModels('userMenuItems')
    this.getAllCurrentVModels('vcsMenuItems')
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus">
// Prevent the last element of the bottombar from glitching into the side of the screen on sm devices. Also makes a funny animation thats not solved yet ;)
@media screen and (max-width: 380px) {
  .bottom-nav .btn--active:last-child .btn__content {
    font-size: 13px!important;
  }
  .bottom-nav {
    padding-right: 5px!important;
  }
}

/* Prevent the content from flowing below the navbar since it is fixed to the top. Do not add the main-container-margin class
*   if you are using a non-fixed navbar!
*/
@media screen and (max-width: 601px) {
  .container.main-container-margin {
    padding-top: calc(56px + 16px)!important;
  }
}
@media screen and (min-width: 601px) {
  .container.main-container-margin {
    padding-top: calc(64px + 16px)!important;
  }
}

// Make the bottombar color correspond to the main color
.application--light .bottom-nav, .application--light .fab-btn {
  background-color: #f5f5f5!important;
}
.application--dark .bottom-nav, .application--dark .fab-btn {
  background-color: #212121!important;
}

// Make the history drawer section look correctly by moving it upwards to make spacing uniform
.mt--3 {
  margin-top: -16px!important;
}

// Display no underline in the connection name text fields
.no-underline .input-group__details {
  display: none!important;
}

// While the expansion panel icons should be grey the navigation icons should have their original color
.application--dark .expansion-panel .icon.misc-icon {
    color: #fff;
}
.application--light .expansion-panel .icon.misc-icon {
    color: rgba(0,0,0,0.54);
}

// Make the expansion panel color uniform with the rest of the ui when dark
.application .expansion-panel .icon {
    color: #9e9e9e;
}

// Make the icons of actions in the mobile user menu have the right color
.application--dark .mobile-user-menu-icon {
  color: #fff!important;
}
.application--light .mobile-user-menu-icon {
  color: rgba(0,0,0,0.54)!important;
}

// Make the expansion panel header uniform with rest of the ui
.expansion-panel__header {
    padding-right: 16px!important;
    padding-left: 16px!important;
    padding-top: 0px!important;
    padding-bottom: 0px!important;
}

// Make the bottom padding go away in the navigation drawer
.navigation-drawer {
    padding-bottom: 0!important;
}

// Make the bottom actions of the sidebar changelog table line up with the actual table
.permaDrawer-table .datatable__actions {
    padding-left: 16px!important;
}

// Center the search box in the navbar
.top-toolbar-item-search-md-and-up .input-group__details{
  min-height: 0px!important;
}

// Add a slight padding to the top toolbar group items on medium and up
@media screen and (min-width: 630px) {
  .top-toolbar-group-download, .top-toolbar-group-upload {
    padding-left: 8px;
    padding-right: 8px
  }
}
// Make the toolbar more dense on medium devices
@media screen and (max-width: 640px) {
  .top-toolbar-item {
    margin-left: 0px!important;
    margin-right: 0px!important;
    padding-left: 0px!important;
    padding-right: 0px!important;
  }

  .top-toolbar-group-navbar-toggler .flex .btn  {
    margin: 6px 0px!important;
  }

  .toolbar .layout .flex {
      padding-right: 4px!important;
      padding-left: 4px!important;
  }
}

// Make the toolbar dense on small devices
@media screen and (max-width: 410px) {
  .top-toolbar-item {
    margin-left: 0px!important;
    margin-right: 0px!important;
    padding-left: 0px!important;
    padding-right: 0px!important;
  }

  .top-toolbar-group-navbar-toggler .flex .btn  {
    margin: 6px 0px!important;
  }

  .toolbar .layout .flex {
      padding-right: 2px!important;
      padding-left: 2px!important;
  }
}

// Make the toolbar dense on even smaller devices
@media screen and (max-width: 370px) {
  .top-toolbar-item {
    margin-left: 0px!important;
    margin-right: 0px!important;
    padding-left: 0px!important;
    padding-right: 0px!important;
  }

  .top-toolbar-group-navbar-toggler .flex .btn  {
    margin: 6px 0px!important;
  }

  .toolbar .layout .flex {
      padding-right: 1.5px!important;
      padding-left: 1.5px!important;
  }
}

// Make the toolbar very dense on even tinier devices
@media screen and (max-width: 360px) {
  .top-toolbar-item {
    margin-left: 0px!important;
    margin-right: 0px!important;
    padding-left: 0px!important;
    padding-right: 0px!important;
  }

  .top-toolbar-group-navbar-toggler .flex .btn  {
    margin: 6px 0px!important;
  }

  .toolbar .layout .flex {
      padding-right: 1px!important;
      padding-left: 1px!important;
  }
}

// Make the toolbar very dense on very small devices
@media screen and (max-width: 345px) {
  .top-toolbar-item {
    margin-left: 0px!important;
    margin-right: 0px!important;
    padding-left: 0px!important;
    padding-right: 0px!important;
  }

  .top-toolbar-group-navbar-toggler .flex .btn  {
    margin: 6px -5px!important;
  }

  .toolbar .layout .flex {
      padding-right: 0px!important;
      padding-left: 0px!important;
  }
}

// Make space on top and on the bottom of the the user menu name
.user-menu-name {
  margin-bottom: -10px!important;
  margin-top: -15px;
}

.user-menu-email {
  margin-bottom: -15px;
  margin-top: -25px;
}

// Make the expansion panel and its content (semi-) transparent
.expansion-panel__container.expansion-panel-content-transparent {
    background-color: transparent!important;
}

.expansion-panel.expansion-panel-transparent {
    box-shadow: transparent 0 0 0 0, transparent 0 0 0 0, transparent 0 0 0 0;
}

.expansion-panel-content-transparent > .expansion-panel__header {
    background: rgba(0,0,0,0.5);
    padding-top: 8px!important;
    padding-bottom: 8px!important;
}

// Only open tooltip after a long press/hover
[data-tooltip]:hover:before {
    transition-delay: 0.75s;
}

// Move the FAB up on small devices to prevent it from being hidden by the bottom navigation bar
@media screen and (max-width: 600px) {
  .speed-dial--fixed {
    margin-bottom: 56px!important;
  }
}

// Move the FAB above the normal content
.speed-dial--fixed {
  z-index: 1!important;
}

// Overwrite the original css to enable scrolling
.dialog--scrollable {
  overflow: auto!important;
}

// Make the bottom sheet scrollable #2
.dialog.bottom-sheet.dialog--active {
  overflow: auto!important;
}

// Center the bottom sheet cards when on md and below
@media screen and (max-width: 960px) {
  .grid-list-md > .layout.row.wrap{
    display: flex!important;
    justify-content: center!important;
    overflow: auto!important;
  }
}

// Colors for the navigation icons
.nav-default .icon {
  color: #2196f3!important;
}

.nav-dash .icon {
  color: #03a9f4!important;
}

.nav-comms .icon {
  color: #ff9800!important;
}

.nav-navigation .icon {
  color: #f44336!important;
}

.nav-energy .icon {
  color: #8bc34a!important;
}

.nav-payload .icon {
  color: #00bcd4!important;
}

// Use the styles included with Vuetify
@import './stylus/main'
</style>
