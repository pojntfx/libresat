<template>
  <v-card>
    <v-card-title>
      <h3 class="headline mb-0">Dashboard Module View Placeholder</h3>
    </v-card-title>
    <v-card-text>
      <b>Steps to add your own module:</b>
      <br>
      <ol>
        <li>Create the .vue file for the module in /src/components/Vendors/YourOrganizationName/YourModuleName</li>
        <li>Import the module into /src/router/index.js and add it to the routes you want it to be displayed on</li>
        <li>
          Enable the dashboard layout editing mode by clicking on your avatar in the top left and add the module with the FAB in the bottom left (Not implemented yet)
          <br>
          <b>OR</b>
          <br>
          Add an object like the examples in /src/store.js to /src/store.js with the same name that you've registered your module in /src/router/index.js.
        </li>
      </ol>
      <b>Happy hacking!</b>
    </v-card-text>
  </v-card>
</template>
