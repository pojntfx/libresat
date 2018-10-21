const appsData = {
  appMenu: {
    apps: [
      {
        title: "Workspace",
        icon: "desktop",
        link: "/workspace",
        disabled: true,
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
        disabled: true,
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
        disabled: true,
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
        disabled: false,
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
        disabled: true,
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

export { appsData };
