# docs.wattcarbon.com

This is the source code for <https://docs.wattcarbon.com>.

## Metadata

Pages are written in [Kramdown Markdown](https://kramdown.gettalong.org/quickref.html) and must have [Front Matter](https://jekyllrb.com/docs/front-matter/) to be registered by the build process. The latest tag is only used for M&V methodologies. For example:

```markdown
---
title: My Page Title -- This can be quite long! It shows up in the tab of your browser and in the top of the page
nav: Short name for nav bar
last_modified: 2025-01-01
latest: True
---

## Your markdown content goes here

Use level-2 headings (`##`) at highest as level 1 is already used by the title.

```

`nav` and `last_modified` are optional.

## Local Development

Clone down [github/pages-gem](https://github.com/github/pages-gem) and run the following commands:

```bash
$ make image
$ SITE=/path/to/the/docs.wattcarbon.com/repo/on/your/machine make server
```

Then browse to <http://localhost:4000> to view the site.

Note that changes to `_config.yml` require a restart of the server.
