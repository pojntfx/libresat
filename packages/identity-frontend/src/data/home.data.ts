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
  },
  appMenu: {
    apps: [
      {
        title: "Workspace",
        icon: "desktop",
        link: "/workspace",
        help: {
          command: "$ satctl apply -f <path>",
          docsLink: "https://libresat.space/docs/workspace",
          text: "Control your satellite.",
          title: "Workspace"
        }
      },
      {
        title: "Workflow",
        icon: "tasks",
        link: "/workflow",
        help: {
          command: "$ satctl apply -f <path>",
          docsLink: "https://libresat.space/docs/workflow",
          text: "Collaborate with your team.",
          title: "Workflow"
        }
      },
      {
        title: "Infrastructure",
        icon: "server",
        link: "/infrastructure",
        help: {
          command: "$ satctl apply -f <path>",
          docsLink: "https://libresat.space/docs/infrastructure",
          text: "Manage your satellite's platform.",
          title: "Infrastructure"
        }
      },
      {
        title: "Identity",
        icon: "id card",
        link: "/identity",
        help: {
          command: "$ satctl apply -f <path>",
          docsLink: "https://libresat.space/docs/identity",
          text: "Authentication and Authorization.",
          title: "Identity"
        }
      },
      {
        title: "Add App",
        icon: "add",
        link: "/apps/add",
        help: {
          command: "$ satctl apply -f <path>",
          docsLink: "https://libresat.space/docs/apps",
          text: "Add another app.",
          title: "Add App"
        }
      }
    ],
    search: {
      icon: "search",
      text: "Search",
      value: "",
      disabled: true,
      help: {
        title: "Search for an App",
        text: "Filter all apps by a query.",
        command: "$ satctl get apps | grep <query>",
        docsLink: "https://libresat.space/docs/search"
      }
    }
  }
};

export { homeData };
