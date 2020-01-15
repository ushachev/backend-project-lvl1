##
[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/hexletguides.github.io/master/images/hexlet_logo128.png)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=nodejs-package)

Educational "Project #1" is being developed as part of "Backend Javascript (node.js)" profession studying on Hexlet.  
[Read more about Hexlet (in Russian)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=nodejs-package).
##

# Brain Games

[![Maintainability](https://api.codeclimate.com/v1/badges/6b44d0aebfee4dd31b03/maintainability)](https://codeclimate.com/github/ushachev/backend-project-lvl1/maintainability)
[![Build Status](https://travis-ci.org/ushachev/backend-project-lvl1.svg?branch=master)](https://travis-ci.org/ushachev/backend-project-lvl1)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Setup

```sh
$ make install
```

## Application launch

```sh
$ make start
```

this will launch application from source code.  
Or

```sh
$ make publish
$ sudo npm link
```

this will create a symlink to the package after that it will become possible to launch application by

```sh
$ brain-even
```

like this

[![asciicast](https://asciinema.org/a/eYdSmG7Nwue8FtSo0kxnk3M0m.svg)](https://asciinema.org/a/eYdSmG7Nwue8FtSo0kxnk3M0m)


Run `sudo npm unlink` to remove symlink.
