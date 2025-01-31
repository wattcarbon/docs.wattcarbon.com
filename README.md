# docs.wattcarbon.com

This is the source code for <https://docs.wattcarbon.com>.

## Local Development

Clone down [github/pages-gem](https://github.com/github/pages-gem) and run the following commands:

```bash
$ make image
$ SITE=/path/to/the/docs.wattcarbon.com/repo/on/your/machine make server
```

Then browse to <http://localhost:4000> to view the site.

Note that changes to `_config.yml` require a restart of the server.
