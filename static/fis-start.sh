#! /bin/bash

# fis release --file ../fis/dev.js --dest local --watch

fis server start --type node --port 2018 --root ../ && fis release --file ../fis/dev.js --dest local --watch