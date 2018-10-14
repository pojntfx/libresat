import logo from "../assets/logo.png";

const navbarData = {
  brand: {
    title: "LibreSat",
    img: logo,
    link: "/",
    disabled: false
  },
  firstItems: [
    {
      title: "Identity",
      link: "/",
      icon: "id card",
      disabled: true
    }
  ],
  startItems: [
    {
      title: "Home",
      icon: "home",
      link: "/",
      disabled: false
    },
    {
      title: "Scopes",
      icon: "folder",
      link: "/scopes",
      disabled: true
    },
    {
      title: "Users",
      icon: "users",
      link: "/users",
      disabled: true
    },
    {
      title: "Roles",
      icon: "legal",
      link: "/roles",
      disabled: true
    }
  ],
  endItems: [
    {
      title: "Cloud 1",
      icon: "cloud",
      link: "/clouds",
      disabled: true
    },
    {
      title: "Project 1",
      icon: "box",
      link: "/projects",
      disabled: true
    },
    {
      title: "Search",
      icon: "search",
      link: "/search",
      disabled: true
    }
  ],
  lastItems: [
    {
      title: "Notifications",
      icon: "bell",
      link: "/notifications",
      disabled: true
    },
    {
      title: "User 1",
      icon: "user",
      link: "/users",
      disabled: true
    }
  ]
};

export { navbarData };
