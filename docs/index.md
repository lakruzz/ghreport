---
layout:            default
organization:      Praqma
repo:              ghreport
github-issues:     true
---

## How to use

The script is a perl script, but it uses only core (v5.14) modules, so it will run natively on contemporary Linus distros and Mac.

### Example

To generate a report of both public and private repos on the organization named 'Praqma', while printing the REST calls to github:

```
$ ghreport -org praqma -verbose -token 89chdaf89f186add688db69a8823dc21d9b8f6
```

The token is optional, but required if you want to report on `private`repositories.

Simply [create your own token](https://github.com/settings/tokens){: target="_blank"}

The report can also be used to report on users - use the `-user` switch:

```
$ ghreport -user lakruzz
```

## Get help

The help is comprehensive - embedded in the script as POD (Plain Old Documentation)

Simply run:

```
$ ghreport -man
```

Of if you want to see it as a html E.g. `ghreport-man.html` simply do:

```
$ pod2html ghreport > ghreport-man.html
```

See an example (not guaranteed to the be the most resent version).

* [ghreport-man.html](ghreport-man.html){: target="_blank"}

## Report (sample)

### [Praqma](ghreport-praqma.html){: target="_blank"}

__Note:__

The report is not automatically updated, so it's not a realtime report

## Feed back

...and comments is very welcome - use the issue tracking system:
