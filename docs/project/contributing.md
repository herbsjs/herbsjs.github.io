---
id: contributing
title: How to contribute
slug: /project/contributing
custom_edit_url: null
---

Glad you are here! Pull requests, or feature requests, though not always implemented, are a great way to help make Herbs even better than it is now. If you're looking for something specific to help out with, there's a number of unit tests that aren't implemented yet, the library could never have too many of those. 

Considering that the ecosystem of Herbs has numerous libraries, each one has its own specificity that you will find in this documentation in a more detailed way. 
However, if you want to submit a fix or feature, take a look at the [CONTRIBUTING](https://github.com/herbsjs/herbs/blob/main/.github/CONTRIBUTING.md) readme in the Github and go ahead and open a ticket.

## Open Development
All work on Herbs happens directly on GitHub. Both core team members and external contributors send pull requests which go through the same review process.


By default **Herbs organization** uses [Angular Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).

Tools such as [commitizen](https://github.com/commitizen/cz-cli) or [commitlint](https://github.com/conventional-changelog/commitlint) can be used to help contributors and enforce valid commit messages.

To help with this task we have implemented the commitizen to all libraries, just follow those steps:

- Fork and clone the specific repository of any glue or lib of Herbs
- Create a new branch: `git checkout -b my-branch-name`
- `npm install -g commitizen`
- Write a lot of good code to contribute to herbs 🌿
- `git add yourChanges`
- `git cz` or `npm run commit` or `npx cz` instead `git commit` 
- `git push`
- Push to your fork and submit a pull request
- Pat yourself on the back and wait for your pull request to be reviewed and merged.

## Pull Request
First of all, we leave two topics on the [Resources](#resources) tab, explaining how to perform your first pull request and among other details about Github.

After that, you need to identify that your pain can be a bug, an implementation or just a question, so it is necessary to always check the issues that are open for the project you are using and want to work on.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don’t accidentally duplicate your effort.

If somebody claims an issue but doesn’t follow up for more than two weeks, it’s fine to take it over but you should still leave a comment.

## Community Contributions
Contributions to Herbs are not limited to GitHub. You can help others by sharing your experience using Herbs, whether that is through blog posts, presenting talks at conferences, or simply sharing your thoughts on Twitter and tagging @herbsjs. We also have a server in [Discord](https://discord.com/invite/e3cQ66KDv5) to focus our doubts and chat!

## Why do you want to contribute to open source?
We have several reasons to contribute to open source projects but we can summarize the main and most important ones.
- Build your confidence as a developer:
  - If you're just starting your career or learning a new programming language, open-source projects are the best way to get started. In it you will receive immediate feedback on your development skills, suggestions for improvements regarding the declaration and name of variables/functions and different views on how to improve or apply condicional logic that can be identified in your code.
- Build your resume or gain experience in new challenges:
  - Even if you're an experienced developer, you might want to build a stronger resume to help with your career development or future job searches. Perhaps you are interested in exploring a new cutting-edge framework or a new programming module and don't have opportunities to do either at work.
- Build your professional network:
  - Building a strong professional network can help you achieve your career goals, learn more about your own fields or adjacent fields, and help with your job search.

Open source empowers you to build your confidence as a developer, build your resume, and build your professional network. Moreover, your contribution—no matter how big or small—makes a direct impact on the future of the open source project. 

## Resources

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [How to Contribute to an Open Source Project on GitHub (Free Video)](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github)
- [Using Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub Help](https://help.github.com)
