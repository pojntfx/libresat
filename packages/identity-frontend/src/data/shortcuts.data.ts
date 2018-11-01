const shortcutsData = {
  triggerKey: "?",
  title: "Keyboard Shortcuts",
  shortcuts: [
    {
      title: "Global",
      shortcuts: [
        {
          title: "Toggle shortcut dialog",
          keys: ["SHIFT", "?"]
        },
        {
          title: "Focus search",
          keys: ["/"]
        }
      ]
    },
    {
      title: "Navigation",
      shortcuts: [
        {
          title: "Go to Workspace",
          keys: ["g", "w", "s"]
        },
        {
          title: "Go to Workflow",
          keys: ["g", "w", "f"]
        },
        {
          title: "Go to Infrastructure",
          keys: ["g", "i"]
        },
        {
          title: "Go to Activity",
          keys: ["g", "a"]
        },
        {
          title: "Go to Config",
          keys: ["g", "c"]
        }
      ]
    },
    {
      title: "Session",
      shortcuts: [
        {
          title: "Logout",
          keys: ["l", "o"]
        },
        {
          title: "Switch user",
          keys: ["s", "u"]
        }
      ]
    }
  ]
};

export { shortcutsData };
