const footerData = {
  socialLinks: [
    {
      title: "Website",
      img: "https://img.shields.io/badge/Website-libresat.space-blue.svg",
      link: "https://libresat.space",
      help: {
        title: "Website",
        text: "The central place for all things LibreSat.",
        docsLink: "https://libresat.space/docs/socials"
      }
    },
    {
      title: "Blog",
      img: "https://img.shields.io/badge/Blog-libresat.space%2Fblog-blue.svg",
      link: "https://libresat.space/blog",
      help: {
        title: "Blog",
        text: "Posts on all things LibreSat.",
        docsLink: "https://libresat.space/docs/socials"
      }
    },
    {
      title: "Wiki",
      img: "https://img.shields.io/badge/Wiki-wiki.libresat.space-blue.svg",
      link: "https://wiki.libresat.space",
      help: {
        title: "Wiki",
        text: "Open and easy community-driven documentation.",
        docsLink: "https://libresat.space/docs/socials"
      }
    },
    {
      title: "Forum",
      img: "https://img.shields.io/badge/Forum-forum.libresat.space-blue.svg",
      link: "https://forum.libresat.space/forum",
      help: {
        title: "Forum",
        text: "A place for public and persistent discussion.",
        docsLink: "https://libresat.space/docs/socials"
      }
    },
    {
      title: "Chat",
      img: "https://img.shields.io/badge/Chat-chat.libresat.space-blue.svg",
      link: "https://chat.libresat.space",
      help: {
        title: "Chat",
        text: "Quick and easy support and general chat.",
        docsLink: "https://libresat.space/docs/socials"
      }
    },
    {
      title: "Mastodon",
      img:
        "https://img.shields.io/badge/Mastodon-%40libresat-3088D4.svg?logo=mastodon&style=social",
      link: "https://mastodon.cloud/@libresat",
      help: {
        title: "Mastodon",
        text: "Offical announcements and more.",
        docsLink: "https://libresat.space/docs/socials"
      }
    },
    {
      title: "Twitter",
      img:
        "https://img.shields.io/badge/Twitter-%40libresat-1DA1F2.svg?logo=twitter&style=social",
      link: "https://twitter.com/libresat",
      help: {
        title: "Twitter",
        text: "Posts from Mastodon get mirrored over to here.",
        docsLink: "https://libresat.space/docs/socials"
      }
    },
    {
      title: "Reddit",
      img:
        "https://img.shields.io/badge/reddit-r%2Flibresat-FF4500.svg?logo=reddit&style=social",
      link: "https://www.reddit.com/r/libresat/",
      help: {
        title: "Reddit",
        text: "An alternative to the forum for general discussion.",
        docsLink: "https://libresat.space/docs/socials"
      }
    },
    {
      title: "Instagram",
      img:
        "https://img.shields.io/badge/Instagram-%40libresat-E4405F.svg?logo=instagram&style=social",
      link: "https://www.instagram.com/libresat/",
      help: {
        title: "Instagram",
        text: "Quick and simple, multimedia-driven posts.",
        docsLink: "https://libresat.space/docs/socials"
      }
    },
    {
      title: "GitLab",
      img:
        "https://img.shields.io/badge/GitLab-%40libresat-fc6d26.svg?logo=gitlab",
      link: "https://gitlab.com/libresat",
      help: {
        title: "GitLab",
        text: "The central place for LibreSat's development.",
        docsLink: "https://libresat.space/docs/socials"
      }
    },
    {
      title: "GitHub",
      img:
        "https://img.shields.io/badge/GitHub-%40libresat-181717.svg?logo=github&logoColor=ffffff",
      link: "https://github.com/libresat",
      help: {
        title: "GitHub",
        text: "A mirror of the LibreSat project.",
        docsLink: "https://libresat.space/docs/socials"
      }
    },
    {
      title: "NPM",
      img: "https://img.shields.io/badge/npm-%7elibresat-CB3837.svg?logo=npm",
      link: "https://www.npmjs.com/~libresat",
      help: {
        title: "NPM",
        text: "LibreSat as NodeJS packages.",
        docsLink: "https://libresat.space/docs/socials"
      }
    }
  ],
  legal: {
    global: {
      product: "LibreSat Identity",
      timeSpan: "2014-2018",
      holder: "Felicitas Pojtinger",
      help: {
        title: "Copyright Holder",
        text:
          "This is the individual or organization that holds the copyright of this product.",
        command: "$ satctl",
        docsLink: "https://libresat.space/source-code"
      }
    },
    licenses: [
      {
        product: "LibreSat Identity",
        type: "Media",
        icon: "images",
        timeSpan: "2014-2018",
        holder: "Felicitas Pojtinger",
        spdxLicenseIdentifier: "CC-BY-SA-4.0",
        text:
          "This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.",
        badge: {
          img: "https://licensebuttons.net/l/by-sa/4.0/88x31.png",
          title: "CC-BY-SA-4.0 license badge"
        },
        more: {
          link: "https://creativecommons.org/licenses/by-sa/4.0/",
          title: "the Creative Commons"
        },
        help: {
          title: "Media License",
          text: "This is the license that applies to this product's media.",
          command: "$ satctl",
          docsLink: "https://libresat.space/source-code"
        }
      },
      {
        product: "LibreSat Identity",
        type: "Code",
        icon: "code",
        timeSpan: "2014-2018",
        holder: "Felicitas Pojtinger",
        spdxLicenseIdentifier: "AGPL-3.0",
        text:
          "This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.\nThis program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.\nYou should have received a copy of the GNU Affero General Public License along with this program. If not, see https://www.gnu.org/licenses/.",
        badge: {
          img: "https://www.gnu.org/graphics/agplv3-155x51.png",
          title: "AGPL-3.0 license badge"
        },
        more: {
          link: "https://www.gnu.org/licenses/agpl.html",
          title: "the Free Software Foundation"
        },
        help: {
          title: "Code License",
          text:
            "This is the license that applies to this product's source code.",
          command: "$ satctl",
          docsLink: "https://libresat.space/source-code"
        }
      }
    ]
  }
};

export { footerData };
