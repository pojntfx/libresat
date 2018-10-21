import logo from "../assets/logo.png";

const navbarData = {
  brand: {
    title: "LibreSat",
    img: logo,
    link: "/",
    disabled: false,
    help: {
      title: "LibreSat",
      text:
        "The Free/Libre and Open Source Satellite Development and Control Platform.",
      command: "$ satctl",
      docsLink: "https://libresat.space"
    }
  },
  firstItems: [
    {
      title: "Identity",
      link: "/about",
      icon: "id card",
      disabled: false,
      help: {
        title: "Identity",
        text: "Authentication and Authorization.",
        command: "$ satctl apply -f <path>",
        docsLink: "https://libresat.space/docs/identity"
      }
    }
  ],
  startItems: [
    {
      title: "Home",
      icon: "home",
      link: "/",
      disabled: false,
      help: {
        title: "Home Page",
        text: "Get an overview of all models.",
        command: "$ satctl get models | grep -e /(scopes|users|roles)/",
        docsLink: "https://libresat.space/docs/identity"
      }
    },
    {
      title: "Scopes",
      icon: "folder",
      link: "/scopes",
      disabled: true,
      help: {
        title: "Manage Scopes",
        text: "Manage group of items that a `user` can have access to.",
        command: "$ satctl apply -f <path>",
        docsLink: "https://libresat.space/docs/identity/scopes"
      }
    },
    {
      title: "Users",
      icon: "users",
      link: "/users",
      disabled: true,
      help: {
        title: "Manage Users",
        text: "Manage entities with `roles` and `scopes`.",
        command: "$ satctl apply -f <path>",
        docsLink: "https://libresat.space/docs/identity/users"
      }
    },
    {
      title: "Roles",
      icon: "legal",
      link: "/roles",
      disabled: true,
      help: {
        title: "Manage Roles",
        text: "Manage the type of access that a `user` can have in a `scope`.",
        command: "$ satctl apply -f <path>",
        docsLink: "https://libresat.space/docs/identity/roles"
      }
    }
  ],
  endItems: [
    {
      title: "Cloud 1",
      icon: "cloud",
      link: "/clouds",
      disabled: true,
      help: {
        title: "Change Cloud",
        text: "Change the cloud you are currently using.",
        command: "$ satctl login <user>:<password>@<cloud>.<tld>",
        docsLink: "https://libresat.space/docs/infrastructure/clouds"
      }
    },
    {
      title: "Project 1",
      icon: "box",
      link: "/projects",
      disabled: true,
      help: {
        title: "Change Project",
        text: "Change the project you are currently using.",
        command: "$ satctl login <user>:<password>@<project>.<cloud>.<tld>",
        docsLink: "https://libresat.space/docs/infrastructure/projects"
      }
    },
    {
      title: "Settings",
      icon: "settings",
      link: "/settings",
      disabled: true,
      help: {
        title: "Edit Settings",
        text: "Change the settings of this app.",
        command: "$ satctl apply -f <path>",
        docsLink: "https://libresat.space/docs/identity/settings"
      }
    },
    {
      title: "Search",
      icon: "search",
      link: "/search",
      disabled: true,
      help: {
        title: "Search this app",
        text: "Search for any actions in this app.",
        command: "$ satctl get <model> | grep <query>",
        docsLink: "https://libresat.space/docs/identity"
      }
    }
  ],
  lastItems: [
    {
      title: "Apps",
      icon: "grid layout",
      link: "/apps",
      disabled: false,
      help: {
        title: "All Apps",
        text: "Change the app you are currently using.",
        command: "$ satctl apply -f <path>",
        docsLink: "https://libresat.space/docs/apps"
      }
    },
    {
      title: "Notifications",
      icon: "bell",
      link: "/notifications",
      disabled: true,
      help: {
        title: "Get Notifications",
        text: "Take a look at the notifications of this app.",
        command: "$ satctl get logs | grep identity",
        docsLink: "https://libresat.space/docs/identity/apps"
      }
    },
    {
      title: "User 1",
      icon: "user",
      link: "/users",
      disabled: true,
      help: {
        title: "Change User",
        text: "Change which user you are currently using.",
        command: "$ satctl login <user>:<password>@<cloud>.<tld>",
        docsLink: "https://libresat.space/docs/identity/users"
      }
    }
  ]
};

export { navbarData };
