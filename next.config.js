const withSass = require("@zeit/next-sass");

module.exports = withSass({
  exportPathMap: function() {
    return {
      // Home
      "/": { page: "/" },
      // Overview
      "/software": { page: "/software" },
      "/hardware": { page: "/hardware" },
      "/network": { page: "/network" },
      // Devs
      "/docs": { page: "/docs" },
      "/docs/getting-started/five-minute-guide": {
        page: "/docs/getting-started/five-minute-guide"
      }
    };
  }
});
