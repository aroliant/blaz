#!/bin/sh

if ! [ $(id -u) = 0 ]; then
   echo "Must run as sudo or root"
   exit 1
fi


docker exec -it $(docker container ls --filter name=$1 | awk 'FNR == 2 {print $1}') /bash
