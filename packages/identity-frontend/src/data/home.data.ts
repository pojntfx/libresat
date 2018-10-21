const homeData = {
  actionBar: {
    create: {
      icon: "add",
      title: "Create",
      disabled: true,
      help: {
        title: "Create a Model",
        text: "Add a new model to the database.",
        command: "$ satctl apply -f <path>",
        docsLink: "https://libresat.space/docs/create"
      }
    },
    search: {
      icon: "search",
      text: "Search",
      value: "",
      disabled: true,
      help: {
        title: "Search for a Model",
        text: "Filter all models by a query.",
        command: "$ satctl get models | grep <query>",
        docsLink: "https://libresat.space/docs/search"
      }
    }
  }
};

export { homeData };
