---
id: contributing
title: How to contribute
slug: /project/contributing
custom_edit_url: null
---

Glad you are here! Pull requests, or feature requests, though not always implemented, are a great way to help make Herbs even better than it is now. If you're looking for something specific to help out with, there's a number of unit tests that aren't implemented yet, the library could never have too many of those. 

Considering that the ecosystem of Herbs has numerous libraries, each one has its own specificity that you will find in this documentation in a more detailed way. 
However, if you want to submit a fix or feature, take a look at the [CONTRIBUTING](https://github.com/herbsjs/herbs/blob/main/.github/CONTRIBUTING.md) readme in the Github and go ahead and open a ticket.

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

## Resources

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Using Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub Help](https://help.github.com)
