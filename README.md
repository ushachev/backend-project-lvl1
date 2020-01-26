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
$ make start game=even
```

where parameter `game` of `make start` command may be equal anything from list [ even, calc, gcd, progression, prime ]. This will launch application from source code.  
Or

```sh
$ make publish
$ sudo npm link
```

this will create a symlink to the package after that it will become possible to launch application by typing anything from list [ brain-even, brain-calc, brain-gcd, brain-progression, brain-prime ]

```sh
$ brain-even
```

like this

[![asciicast](https://asciinema.org/a/j7gQKydY4mx4hTI31JMZPIYpE.svg)](https://asciinema.org/a/j7gQKydY4mx4hTI31JMZPIYpE)
[![asciicast](https://asciinema.org/a/GygvUYsV9gmvlGjKneU5JUezS.svg)](https://asciinema.org/a/GygvUYsV9gmvlGjKneU5JUezS)
[![asciicast](https://asciinema.org/a/t7vYXibwB78rSleKT2AmrgGZV.svg)](https://asciinema.org/a/t7vYXibwB78rSleKT2AmrgGZV)
[![asciicast](https://asciinema.org/a/CGBQfXfzwqYdBMKPoKpQdhWOp.svg)](https://asciinema.org/a/CGBQfXfzwqYdBMKPoKpQdhWOp)
[![asciicast](https://asciinema.org/a/UXUlZ1qkJBQbpD8W1oCZjQGIK.svg)](https://asciinema.org/a/UXUlZ1qkJBQbpD8W1oCZjQGIK)
[![asciicast](https://asciinema.org/a/QaKFFu5cScnt20DWSHHQkBYgx.svg)](https://asciinema.org/a/QaKFFu5cScnt20DWSHHQkBYgx)


Run `sudo npm unlink` to remove symlink.
