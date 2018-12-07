(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{44:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=[{id:"pages/auto-release.md",body:'# `auto release`\n\nAuto-generate a github release.\n\n```json\n{\n  "scripts": {\n    "postpublish": "auto release"\n  }\n}\n```\n\nMake sure the branch/tag you\'re releasing is on github before running `auto release`.\nYou will need to push the tags to github first:\n\n```json\n{\n  "scripts": {\n    "postpublish": "git push --follow-tags --set-upstream origin $branch && auto release"\n  }\n}\n```\n\n## Options\n\n```bash\n>  auto release -h\n\nusage: auto release [-h] [-s SLACK] [--use-version USE_VERSION]\n                         [--jira JIRA] [--no-version-prefix] [-d] [-v] [-vv]\n                         [--githubApi GITHUBAPI]\n\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  -s SLACK, --slack SLACK\n                        Post a message to slack about the release. Make sure\n                        the SLACK_TOKEN environment variable is set.\n  --use-version USE_VERSION\n                        Version number to publish as. Defaults to reading\n                        from the package.json.\n  --jira JIRA           Jira base URL\n  --no-version-prefix   Use the version as the tag without the `v` prefix\n  -d, --dry-run         Dont actually commit status. Just print the request\n                        body\n  -v, --verbose         Show some more logs\n  -vv, --very-verbose   Show a lot more logs\n  --githubApi GITHUBAPI\n                        Github API to use\n```\n\n## Slack URL\n\nWhen posting to slack you must provide your slack services hook url at the CLI or in your `.autorc` config. To see configuration [go here](/auto-release/pages/autorc.html#slack-url).\n'},{id:"home.md",body:"::: hero is-primary is-purple is-bold is-medium has-text-centered\n\n# auto release\n\n## CLI tools to help facilitate semantic versioning based on Github PR labels.\n\n:::\n\n## Adding automated releases shouldn't be hard or require changing your workflow /.no-link .has-text-purple .has-text-centered\\\n\n`auto-release` makes automating releases for your open source project as simple as labels to pull requests. Releasing often means being confident in your releases. /.has-text-centered\\\n\n||| row has-text-centered wide\n\n::: box\n\n### Release Labels\n\nManaging releases has never been easier. Just add a label!\n:::\n\n::: box\n\n### Beautiful Changelogs\n\nLink to PRs and Jira stories, include authors, monorepo aware, customizable\n:::\n\n::: box\n\n### PR Interaction\n\nSet statuses, check labels and comment on pull requests\n:::\n\n|||\n\n||| row has-text-centered wide\n\n::: box\n\n### Atomic Functions\n\n`auto` functions do 1 thing and they do it well. Easily use them to fit any build process\n:::\n\n::: box\n\n### No Strict Commits\n\nOther tools require you to change how any contributor commits to you project. With `auto` leave that baggage behind!\n:::\n\n::: box\n\n### Fast Workflow\n\nSince all you need to worry about are labels you can work at an incredibly fast pace! This speed to commit also helps with new contributors\n:::\n\n|||\n\n::: hero is-info is-yellow is-small has-text-centered\nRelease Tools\n:::\n\n::::: hero is-small\n:::: div columns\n::: div column feature\n\n# `auto version`\n\nGet the semantic version bump using merged PRs\n\n:::\n::: div column\n![Markdown](images/version.png)\n:::\n::::\n:::::\n\n:::::: hero is-light is-small\n::::: div columns\n::: div column is-three-fifths\n![Markdown](images/changelog.png)\n:::\n:::: div column feature\n\n# `auto changelog`\n\nPrepend release notes to `CHANGELOG.md`.\n\n::: div content list\n\n- link PRs and Jira stories\n- attach effected packages in monorepo\n- list authors\n- customizable sections\n\n:::\n\n::::\n:::::\n::::::\n\n::::: hero is-small\n:::: div columns\n::: div column feature\n\n# `auto release`\n\nAuto-generate a github release.\n\n:::\n::: div column is-three-fifths\n![Markdown](images/release.png)\n:::\n::::\n:::::\n\n::: hero is-red is-link is-small has-text-centered\nPull Request Tools\n:::\n\n:::::: hero is-small\n::::: div columns\n::: div column\n![Markdown](images/pr.png)\n:::\n:::: div column feature\n\n# `auto pr`\n\nSet the status on a PR commit\n\n::::\n:::::\n::::::\n\n::::: hero is-small is-light no-margin\n:::: div columns\n::: div column feature\n\n# `auto comment`\n\nComment on a pull request with a markdown message.\n\n:::\n::: div column\n![Markdown](images/comment.png)\n:::\n::::\n:::::\n\n:::: hero is-link is-purple is-small has-text-centered\n\n# Win back your time and be confident in releasing! /.no-link .title .is-4 .has-text-centered\\\n\n::: button is-large is-link is-bold is-inverted is-outlined\n[Get Started :tada:](/auto-release/pages/GettingStarted.html)\n:::\n\n::::\n"},{id:"pages/auto-version.md",body:"# `auto version`\n\nGet the semantic version bump for the given changes. Requires all PRs to have labels for the change type. If a PR does not have a label associated with it, it will default to `patch`.\n\n```bash\n>  auto version -h\n\nusage: auto version [-h] [--onlyPublishWithReleaseLabel] [--major MAJOR]\n                         [--minor MINOR] [--patch PATCH] [-v] [-vv]\n                         [--githubApi GITHUBAPI]\n\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  --onlyPublishWithReleaseLabel\n                        Only bump version if `release` label is on pull\n                        request\n  --major MAJOR         The name of the tag for a major version bump\n  --minor MINOR         The name of the tag for a minor version bump\n  --patch PATCH         The name of the tag for a patch version bump\n  -v, --verbose         Show some more logs\n  -vv, --very-verbose   Show a lot more logs\n  --githubApi GITHUBAPI\n                        Github API to use\n```\n\nUseful in conjunction with `npm version` to auto-version releases.\n\n## Prerelease\n\nTo create a prerelease add the `prerelease` label to your pull request.\n\n## No Release\n\nTo not create a release for a pull request add the `no-release` label. Any pull request with this tag will make `auto version` return `''`.\n\n::: message is-warning\n:warning: You must check the return value of `auto version` in a bash script like in the example configuration for the `no-release` label to function properly.\n:::\n\n## Configure Versioning Labels\n\nYou can customize the versioning labels in the `.autorc`. To see configuration [go here](/auto-release/pages/autorc.html#versioning-labels).\n"},{id:"pages/auto-comment.md",body:'# `auto comment`\n\nComment on a pull request with a markdown message.\n\n```sh\nauto comment --pr 24 --message "You broke the build!" --context build\n```\n\n## Options\n\n```bash\n>  auto version -h\n\nusage: auto comment [-h] -m MESSAGE [--context CONTEXT] [--owner OWNER]\n                         [--repo REPO] --pr PR [-v] [-vv]\n                         [--githubApi GITHUBAPI]\n\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  -m MESSAGE, --message MESSAGE\n                        Message to post to comment.\n  --context CONTEXT     A string label to differentiate this status from\n                        others\n  --owner OWNER         Version number to publish as. Defaults to reading\n                        from the package.json\n  --repo REPO           The repo to set the status on. Defaults to looking in\n                        the package.json\n  --pr PR               The pull request number you want the labels of\n  -v, --verbose         Show some more logs\n  -vv, --very-verbose   Show a lot more logs\n  --githubApi GITHUBAPI\n                        Github API to use\n```\n'},{id:"pages/auto-changelog.md",body:'# `auto changelog`\n\nPrepend release notes to `CHANGELOG.md`, create one if it doesn\'t exist, and commit the changes.\n\n::: message is-warning\n:warning: This should be run before `npm version` so the `CHANGELOG.md` changes are committed before the release gets tagged.\n:::\n\n```bash\n>  auto changelog -h\n\nusage: auto changelog [-h] [--from FROM] [--to TO] [--jira JIRA]\n                           [--no-version-prefix] [-d] [-m MESSAGE] [-v] [-vv]\n                           [--githubApi GITHUBAPI]\n\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  --from FROM           Tag to start changelog generation on. Defaults to\n                        latest tag.\n  --to TO               Tag to end changelog generation on. Defaults to HEAD.\n  --jira JIRA           Jira base URL\n  --no-version-prefix   Use the version as the tag without the `v` prefix\n  -d, --dry-run         Dont actually commit status. Just print the request\n                        body\n  -m MESSAGE, --message MESSAGE\n                        Message to commit the changelog with. Defaults to\n                        "Update CHANGELOG.md [skip ci]"\n  -v, --verbose         Show some more logs\n  -vv, --very-verbose   Show a lot more logs\n  --githubApi GITHUBAPI\n                        Github API to use\n```\n\n## Jira\n\nTo include Jira story information you must include a URL to your hosted JIRA instance as a CLI or `.autorc` config option.\n\n## Changelog Titles\n\nYou can customize the changelog titles and even add custom ones. To see configuration [go here](/auto-release/pages/autorc.html#changelog-titles).\n'},{id:"index.md",body:":tada: Welcome\n\n- [Introduction](/auto-release/pages/introduction.html)\n- [Getting Started](/auto-release/pages/getting-started.html)\n\n---\n\n:hammer: Tool APIs :wrench:\n\n- [Publishing](/auto-release/pages/publishing.html)\n  - [auto version](/auto-release/pages/auto-version.html)\n  - [auto changelog](/auto-release/pages/auto-changelog.html)\n  - [auto release](/auto-release/pages/auto-release.html)\n- [PR Interaction](/auto-release/pages/pr-interaction.html)\n  - [auto label](/auto-release/pages/auto-label.html)\n  - [auto pr](/auto-release/pages/auto-pr.html)\n  - [auto pr-check](/auto-release/pages/auto-pr-check.html)\n  - [auto comment](/auto-release/pages/auto-comment.html)\n\n---\n\n:gear: Configuration\n\n- [.autorc](/auto-release/pages/autorc.html)\n\n---\n\n:bathtub: Continuos Integration\n\n- [CircleCI](/auto-release/pages/circleci.html)\n"},{id:"pages/auto-label.md",body:"# `auto label`\n\nGet the labels for a pull request. Doesn't do much, but the return value lets you write you own scripts based off of the PR labels!\n\n```bash\n>  auto label -h\n\nusage: auto label [-h] --pr PR [--repo REPO] [--owner OWNER] [-v] [-vv]\n                       [--githubApi GITHUBAPI]\n\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  --pr PR               The pull request number you want the labels of\n  --repo REPO           The repo to set the status on. Defaults to looking in\n                        the package.json\n  --owner OWNER         Version number to publish as. Defaults to reading\n                        from the package.json\n  -v, --verbose         Show some more logs\n  -vv, --very-verbose   Show a lot more logs\n  --githubApi GITHUBAPI\n                        Github API to use\n```\n"},{id:"pages/auto-pr-check.md",body:"# `auto pr-check`\n\nCheck that a pull request has a SemVer label.\n\n```sh\nauto pr-check --pr 24 --url http://your-ci.com\n```\n\n## Options\n\n```bash\n>  auto pr-check -h\n\nusage: auto pr-check [-h] [--pr PR] [-d] --url URL\n                          [--owner OWNER] [--repo REPO]\n                          [--onlyPublishWithReleaseLabel] [--major MAJOR]\n                          [--minor MINOR] [--patch PATCH] [-v] [-vv]\n                          [--githubApi GITHUBAPI]\n\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  --pr PR       The PR number\n  -d, --dry-run         Dont actually commit status. Just print the request\n                        body\n  --url URL             URL to associate with this status\n  --owner OWNER         Version number to publish as. Defaults to reading\n                        from the package.json\n  --repo REPO           The repo to set the status on. Defaults to looking in\n                        the package.json\n  --onlyPublishWithReleaseLabel\n                        Only bump version if `release` label is on pull\n                        request\n  --major MAJOR         The name of the tag for a major version bump\n  --minor MINOR         The name of the tag for a minor version bump\n  --patch PATCH         The name of the tag for a patch version bump\n  -v, --verbose         Show some more logs\n  -vv, --very-verbose   Show a lot more logs\n  --githubApi GITHUBAPI\n                        Github API to use\n```\n"},{id:"pages/auto-pr.md",body:"# `auto pr`\n\nSet the status on a PR commit\n\n```sh\nauto pr\n  --pr 24 \\\n  --state success \\\n  --description 'Your thing passed' \\\n  --url http://result.com \\\n  --context 1337c0d3\n```\n\n## Options\n\n```bash\n>  auto pr -h\n\nusage: auto pr [-h] [--sha SHA] --state STATE --description DESCRIPTION\n                    --url URL --context CONTEXT --pr PR [--owner OWNER]\n                    [--repo REPO] [-v] [-vv] [--githubApi GITHUBAPI]\n\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  --sha SHA             Specify a custom git sha. Defaults to the HEAD for a\n                        git repo in the current repository\n  --state STATE         State of the PR\n  --description DESCRIPTION\n                        A description of the status\n  --url URL             URL to associate with this status\n  --context CONTEXT     A string label to differentiate this status from\n                        others\n  --pr PR               The pull request number you want the labels of\n  --owner OWNER         Version number to publish as. Defaults to reading\n                        from the package.json\n  --repo REPO           The repo to set the status on. Defaults to looking in\n                        the package.json\n  -v, --verbose         Show some more logs\n  -vv, --very-verbose   Show a lot more logs\n  --githubApi GITHUBAPI\n                        Github API to use\n```\n"},{id:"pages/autorc.md",body:'# `auto` RC File\n\nAll options for the CLI tools can also be configured via the `.autorc`.\n\nWe use [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) to find your config, so that means you can define this file a variety of ways. By default, Cosmiconfig will start at the root of your project and start to search up the directory tree for the following:\n\n- a package.json property\n- a JSON or YAML, extension-less "rc file"\n- an "rc file" with the extensions .json, .yaml, .yml, or .js.\n- a .config.js CommonJS module\n\n## Exclusive\n\nThese options can be set exclusively in the `.autorc` and do not exist as CLI flags.\n\n### Versioning Labels\n\nTo override the label text used for versioning define new labels in the `.autorc`.\n\n```json\n{\n  "labels": {\n    "major": "Version: Major",\n    "minor": "Version: Minor",\n    "patch": "Version: Patch",\n    "no-release": "NO!",\n    "release": "Autobots, rollout!",\n    "prerelease": "beta"\n  }\n}\n```\n\n### Changelog Titles\n\nTo configure the titles used in the changelog add `changelogTitles` to the `.autorc`.\n\n```json\n{\n  "changelogTitles": {\n    "major": "Breaking",\n    "minor": "Feature",\n    "patch": "Fix",\n    "internal": "Internal",\n    "documentation": "Docz"\n  }\n}\n```\n\nIf you want more sections in your changelog to further detail the change set you can use the `changelogTitles` to add more.\n\n```json\n{\n  "changelogTitles": {\n    "typescript": "Typescript Rewrite",\n    "front-end": "Front End Updates",\n    "back-end": "Back End Updates"\n  }\n}\n```\n\n### Slack URL\n\nYou can set where `auto` posts for slack messages.\n\n```json\n{\n  "slack": "https://url-to-slack.com"\n}\n```\n\n## CLI args\n\nYou can set any CLI option in the `.autorc` these options will get overridden by the CLI flags.\n\nThe following are options that might be more useful to set in the `.autorc` rather than with a flag.\n\n### Jira\n\nTo include Jira story information in your changelogs you must include a URL to your hosted JIRA instance.\n\n```json\n{\n  "jira": "https://url-to-jira.com"\n}\n```\n\n### githubApi\n\nIf you are using enterprise github `auto-release` lets you configure the github API URL that it uses.\n\n```json\n{\n  "jira": "https://url-to-jira.com"\n}\n```\n'},{id:"pages/circleci.md",body:"# CircleCI\n\nThe following config declares the `release` job and uses it in the `build_and_release` workflow. The `release` job will only run on commits to master.\n\n```yaml\nversion: 2\n\ndefaults: &defaults\n  working_directory: ~/auto-release-test\n  docker:\n    - image: circleci/node:latest-browsers\n\njobs:\n  install: # your install job\n\n  release:\n    <<: *defaults\n    steps:\n      - attach_workspace:\n          at: ~/auto-release-test\n      - run:\n          name: Release\n          command: npm run release\n\nworkflows:\n  version: 2\n  build_and_release:\n    jobs:\n      - install:\n          filters:\n            tags:\n              only: /.*/\n\n      - release:\n          requires:\n            - install\n          filters:\n            branches:\n              only:\n                - master\n```\n"},{id:"pages/getting-started.md",body:'# Getting Started\n\nBefore we do anything we must first install `auto-release-cli` as a dev dependency.\n\n```sh\nyarn add -D auto-release-cli\n```\n\n## Setup\n\nThe simplest workflow to get set up is adding the following to your `package.json`. With this setup your application will not be able to use the `no-release` flag, but everything else will work just fine\n\n```json\n{\n  "scripts": {\n    "version": "npm version `auto version` -m \'Bump version to: %s [skip ci]\'",\n    "publish": "npm publish && git push --follow-tags --set-upstream origin $branch",\n    "release": "auto changelog && npm run version && npm run publish && auto release"\n  }\n}\n```\n\n## Enabling `no-release` label\n\nTo use the `no-release` label you have to use a little more involved bash script. We could do the if checks in the `package.json` but this would get messy and hard to read. So instead in your package.json use a shell script defined in the project.\n\n```json\n{\n  "scripts": {\n    "release": "./scripts/release.sh"\n  }\n}\n```\n\nHere is an example release script for a single NPM package:\n\n```sh\nexport PATH=$(npm bin):$PATH\n\nVERSION=`auto version`\n\n## Support for label \'no-release\'\nif [ ! -z "$VERSION" ]; then\n  ## Update Changelog\n  auto changelog\n\n  ## Publish Package\n  npm version $VERSION -m "Bump version to: %s [skip ci]"\n  npm publish\n\n  ## Create GitHub Release\n  git push --follow-tags --set-upstream origin $branch\n  auto release\nfi\n```\n\nor if you are using lerna to manage a monorepo.\n\n```sh\nexport PATH=$(npm bin):$PATH\n\nVERSION=`auto version`\n\nif [ ! -z "$VERSION" ]; then\n  auto changelog\n  lerna publish --yes --force-publish=* $VERSION -m \'%v [skip ci]\'\n  auto release\nfi\n```\n\n## Enterprise\n\nIf you are using enterprise github `auto-release` lets you configure the github API URL that it uses. You can configure this by using the CLI option `--githubApi` or by setting the value in your `.autorc`.\n'},{id:"pages/introduction.md",body:"![Markdown](../images/auto.gif)/.header-image\\\n\n# :rocket: auto-release :rocket:/.has-text-centered\\\n\nCI/CD helpers for github releases. Generate releases based on semantic version labels on pull requests.\n\nRelease Features:\n\n- Release every merge to master based on a PR labels\n- Skip a release with the `no-release` label\n- Generate a changelog with fancy headers, authors, and monorepo package association\n- Generate a Github release\n\nPull Request Interaction Features:\n\n- Get the labels for a PR\n- Set the status of a PR\n- Check that a pull request has a SemVer label\n- Comment on a PR with markdown\n"},{id:"pages/pr-interaction.md",body:"# Pull Request Interaction\n\n`auto-release` also includes a variety of PR interaction tools to update PRs from the CI. You can use these tools in various ways to make your PR validation process much more customized.\n\n<br />\n\nTools:\n\n:star: [auto-label](/auto-release/pages/auto-label.html) - Get the labels for a PR\n\n:star: [auto-pr](/auto-release/pages/auto-pr.html) - Set a status on a PR\n\n:star: [auto-pr-check](/auto-release/pages/auto-pr-check.html) - Check for a semver label and set a status\n\n:star: [auto-comment](/auto-release/pages/auto-comment.html) - Comment on a PR\n"},{id:"pages/publishing.md",body:"# Publishing\n\n`auto-release`'s main use it to automate the release process for your project This can be broken down into three core steps:\n\n```text\npre: (optional) Check if new version\n\n1. Generate CHANGELOG.md\n2. Publish code\n3. Generate github release notes\n```\n\n`auto-release` makes no assumptions about your publishing process. Each tool is a function that can be run in isolation and only does one thing really well. For instance, you could just use `auto changelog` to generate the changelog and nothing else or use `auto version` to calculate just the semver bump.\n"}];n.default=o,e.exports=n.default}}]);
//# sourceMappingURL=search-files.js.map