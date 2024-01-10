#! /bin/bash

rsync -av --exclude={'/node_modules/','/.git/','package-lock.json','/docs/.vuepress/.*','/docs/.vuepress/dist/','/rsync.sh'} --delete ./ sio2@47.92.88.62:/home/sio2/Repos/blog/
ssh sio2@47.92.88.62 "cd /home/sio2/Repos/blog/;npm run docs:build;"