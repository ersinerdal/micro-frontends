#!/usr/bin/env bash

usage() {
  echo "Usage:"
  echo -n "$0 "
  set | grep -e "^task_" | sed "s/^task_\(.*\)().*/\1/" | xargs | sed "s/ / | /g"
  exit 1
}


task_deps() {
    cd "angular"
    npm install
    cd ..
    cd "angularjs"
    npm install
    cd ..
    cd "main"
    npm install
    cd ..
    cd "react"
    npm install
    cd ..
    cd "vue"
    npm install
    cd ..
    cd "angularjs"
    bower install
}


main() {
  CMD=${1:-}
  shift || true
  if type "task_${CMD}" &> /dev/null; then
    "task_${CMD}" "$@"
  else
    usage
  fi
}

main "$@"
