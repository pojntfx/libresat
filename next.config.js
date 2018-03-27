const withSass = require("@zeit/next-sass");

module.exports = withSass({
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/software": { page: "/software" },
      "/hardware": { page: "/hardware" },
      "/network": { page: "/network" }
    };
  }
});
