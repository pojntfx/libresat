# OpenSDCP Vision

## Introduction

The Open Spacecraft Development and Control Platform (OpenSDCP) project is a collaborative effort that tries to give individuals and organizations the freedom to create their own spacecraft or use existing ones to create a better and more open world. It provides free and open-source software, hardware and a distributed mesh communication network as well as community services that make spacecraft development and control a breeze. It tries to replace every legacy or non-free system used during legacy satellite development and control by being maintainable, open and modular. By using copyleft licenses it encourages sharing of improvements and respecting it’s users freedom in both the present and the future by preventing it’s redistribution as non-free software and other preemptive measures. It also thrives to work together with other free and open-source projects and does not try to create an exclusionary ecosystem.

By using it it’s users will no longer have to rely on expensive, insecure and proprietary services, outdated legacy software- and hardware standards or missing documentation, nor will they have to pay expensive fees or sell their data in order to communicate with their spacecraft. The OpenSDCP project does not support any non-free software, hardware or services; nor does it use or encourage the use of any. OpenSDCP has been designed to be as user-friendly and adoptable as possible by using open industry standards and offering detailed documentation instead of supporting legacy non-free hardware or software. It tries to empower individuals instead of powerful entities whenever possible.

If a part or an individual of it’s contributors or users doesn’t agree with it’s decisions, they have the freedom to fork the project if they wish to do so. No single entity has control over the OpenSDCP project; it is instead run by a democratic community of contributors bound to a code of conduct. Due to it’s model of governance, it is transparent by design and open to new contributors and users.

## Services

The following list is by no means complete; it’s rather a proof-of-concept.

### Landing pages

In order to spark the interest of newcomers to the platform, a landing page is necessary. Multiple landing pages are available; both an overview (“home page”) as well as pages for the software, hardware and the network exist. They link to the relevant

* Docs
* IRC channels
* Mattermost channels
* Wiki articles
* Git repositories (Gitea & Github)
* Forum tags
* Licenses
* Analytics (usage data; “how many installs?”)

In general, lot’s of images should be used; the visual design does not have to match the design of the OpenSNET Bridge Client, however colors in similar sections should be matched. Different landing pages for different parts of OpenSDCP (Software, Hardware, Network) have different color schemes; this enables quick distinction and gives each part it’s own “personality”.

### Documentation

The documentation is one of the key features that sets the OpenSDCP apart from other solutions; each and every part must and should be thoroughly documented.

In general, the documentation must be accessible from top-level; however subpages with documentation for software, hardware and the network must exist as their contents differ quite substantially. Here, again, the color schemes should be used. When clicking on the documentation link, it should ask which part of the documentation the user wants to access.

In general, no service like ReadTheDocs should be used as it might have a negative impact on the end user; this is mainly due to possible bad experiences with other projects that might have used it. GitHub books or others could be used as they enable high customisability; due to the unique needs of OpenSDCP their use is discouraged however (WebRTC streams or video embeds can be used more nicely with for example React components).

In general, the layout should be simple. It uses a sidebar and a main pane, with color serving as the general visual clue which page the user is currently on. A search box (Algolia?) should also be available on the top left; the Zeit Now documentation serves as a nice example of how something like this may be implemented.

The following documentations should exist:

* Software
* Hardware
* Network
* Overview, Maintenance and Deployment (i.e. “How do I deploy this to my local infrastructure?”, “When to use my own MAAS cloud?”)

### Demo

OpenSDCP should be easy to try out and not require extensive setup to be used in a non-production environment; an online demo is the best and most simple way to try it out. This may however be prone to abuse; probably some soft of SSO should be used (probably with email etc.). Also, the demo should be reset every 10 Minutes or so to not show it in a broken state.

It will provide a two-pane splitview (React Grid Layout) to the end user, which’s state will be persisted in LocalStorage (Client side). On the left side (2/3) an iframe (or mounted React component, ReactDom should just find the element by it’s ID) with a running OpenSNET Bridge Client should be visible. On top of this element, a box with access data should be given (i.e. “admin” and “admin123” as password). Each element in the box must be viewable in fullscreen/a different window (React portal should enable this).

To the right side, a WebRTC stream using @pojntfx’s librechat to a black box with a demo OpenSDCP board inside should be provided; it could be as simple as just showing a LED that could be controlled with PWM. It should demonstrate the real-time capabilities of an OpenSDCP node and also show that in theory any network could be used (batman-adv, the internet).

### Blog

In order to show that the project is alive and interesting, a blog/news site is absolutely important. We have all checked out the blogs of projects to see whether they are alive; they also serve as a place to share newest developments outside of release notes and they enable you to share projections and visions, as well as project-independent discoveries and ideas (i.e. deployment notes or libraries).

The following services should be offered:

* Web interface
* Medium publication
* RSS/Atom Feed

Medium is particularly important here as it is the main site especially for js/high-level developer’s information. A web interface is important for the first experience of users (who might feel the same way as with ReadTheDocs) and a RSS/Atom feed is simply quite nice if you really want to follow the development closely. As an inspiration for this blog, both the puri.sm and Zeit Now blogs could be used.

### Forum

Another really important factor of any modern open source project is a vibrant community forum. It is important in that without it, any shared information would be gone instantly (i.e. IRC conversations) if it would not be shared/written down in the wiki. Using a modern forum (Flarum) enables you to share and your information in a truly persistent way; the information is available without you signing in and you may be notified when your thread gets answers.

### Wiki

In order to save guides that are not part of the official documentation (mainly resources and usage reports; “How do I setup OpenSDCP on a BBB?” when only a RPI3 is being used in the official docs) as well as suggestions for the official documentation from non-developers should go here after it has been asked in the forum. Using the wiki is different from a forum in that it is a bit more persistent and “official”; it’s guides may be optimized and looked at members of the board of directors/core contributers. Having a wiki also means better search results as MediaWiki is pretty much the industry standard at this point. It can also be used by non-technical contributors that do not have any experience with GitHub issues but may have edited on something like Wikipedia.

### Chat

A chat in a modern form is yet another method of community interaction that is rather new in it’s current form. Two types of chat will be provided:

* IRC or Matrix
* Mattermost (Slack alternative)

They both serve different purposes and are NOT a alternative to either the Wiki or the Forum. It must be clear that any knowledge shared in the chat means that, if the solution isn’t to simple or general, the docs, forum or wiki have failed. The moderators in the IRC or Mattermost chat must immediately note down such issues and either create GitHub issues/pull requests outlining the problem that the user had as no information in the IRC nor in the Mattermost chat is persistent. In general, all the new users will rather choose the Mattermost chat as they know it from some other proprietary services such as Slack; older users and experts (in particular low-level (as in close to the kernel or hardware) developers) will probably prefer the more traditional IRC/Matrix with some GTK/Terminal client for consistency.

### Source Code

Since the OpenSDCP project is developed and run by it’s contributors, sharing the source code is incredibly important. With many proprietary source code sharing/collaborative development platforms (GitHub, Bitbucket) it is however very important to not embrace this ecosystem just to much, which is why the OpenSDCP project offers two platforms:

* Gitea
* GitHub

Gitea is a software that is incredibly similar to GitHub in terms of UX (and since everyone uses GitHub, this is a big plus), which is why chose it over GitLab. It is also incredibly lightweight and supports all the necessary features that we need; most notably OpenLDAP authentication and Continuous Integration/Deployment. Since anyone can sign up and use it, it also serves as a potential source for your production code.

Since GitHub and similar platforms are however the standards for open source development right now, a GitHub mirror will be provided as well. You can open issues, submit pull requests etc. on both platforms as they are synced, which gives you the freedom to choose your own preference. You may also mirror all the repositories into your private Gitea/Gitlab instance if you wish to do so.

## Infrastructure

The whole OpenSDCP project, since it is an open source project, should also be built with and on open source technology. We try to avoid any type of vendor lock-in or platforms that encourage such issues if somehow possible. Another important factor that encourages innovation and furthers the individual’s freedom is the fact that all infrastructure we use is public; we want the user to be able to mirror the whole OpenSDCP project and, if necessary, fork it. This includes all the community microservices, website and other infrastructure. Currently, the following infrastructure architecture is being created and has been partially integrated.

We try to use modern workflows that are the current industry standards. This encourages new users to use them and lowers the entry barrier. Workflows should also be consistent across different stacks and languages in order to encourage collaboration between different subprojects rather then split them.

The workflow we try to achieve with each of the microservices is the following (bold text is the only part of the workflow relevant to the developer):

1. Install Docker and docker-compose
2. Git fork the repo (Gitea or GitHub)
3. Git clone the repo
4. docker-compose up –dev (Hot reloading)
5. Git commit
6. Git push
7. Git pullrequest
8. Git pullrequest review (Clone, test w/ --production etc.)
9. Git merge
10. Webhook post (Gitea)
11. Webhook get (Rancher)
12. Image repo update check (has the node image changed?) (from private registry or docker ub)
13. Image rebuild with new src/ folder
14. Image start
15. Image deploy to dev Kubernetes cluster (local laptop)
16. Image deploy to testing Kubernetes cluster (private cloud w/ MAAS)
17. Image deploy to production Kubernetes cluster (DigitalOcean Droplets or Amazon EC2)

This is pretty much the standard for modern web development projects; it enables you to focus on actual development (and code review) instead of tedious and annoying dependency installation. Continuous integration/deployment is a very important factor in this; you’ll never have to (and can’t) FTP into a VPS and deploy the code there. Rather, a modern approach is being used that makes deployment as easy as pushing into a git repository. By using open-source technology such as OpenStack, MAAS, Rancher, Docker and Kubernetes the services no longer live on a single server but rather on a dynamic cluster that may be scaled up or down depending on the current traffic. Multiple clusters on both private and public clouds can be used for testing or production.

Our current infrastructure looks as follows:

* Production Cluster: Services in public cloud (EC2/DigitalOcean droplets)
* Testing cluster: MAAS provisioner (localhost) and OpenStack server (localhost) and Rancher server (with ngrok/now.sh-alias for automatic builds/webhooks) in local cloud
* 3 MAAS OpenStack nodes (localhost) + any PXEBooted devices

If we achieve enough funding however, we are trying to do the following in order to eliminate the need for the Rancher Server to run on the private cloud:

* Rancher server in public cloud (DigitalOcean provisioner) for global access and webhooks
* Production Cluster: Services in public cloud (EC2/DigitalOcean droplets)
* Testing cluster: MAAS provisioner (localhost) and OpenStack server (localhost) in local cloud with ngrok/now.sh-alias
* 3 MAAS OpenStack nodes (localhost) + any PXEBooted devices

If you want to support this more modern approach, please support us with a donation.

Since we are using Kubernetes (and by this, Docker containers) all Microservers are immutable and their data is being saved using Docker volumes; this data is being backed up in regular intervals.
