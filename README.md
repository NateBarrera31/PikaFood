# PikaFood

START PROJECT:
command: "npm start" or "npx start". "expo start" also works.
stop server: "ctrl + c"
reload app command: "r"
open iphone simulator in mac command: "i"
debug in physical iphone: 1- download expo app and make sure you are connected to same api address.

NOTE: download npm and/or expo if not installed. 

UPDATING MODULES:
when updating expo use this command: expo update.

When updating expo or react native this problem might come up: "Unable to find expo in this project - have you run yarn / npm install yet?"
A) - cannot find expo. Maybe it's deleted and needs to re-install
1- npm i -g expo-cli
2- npm audit fix –-force
B) - when udpating react-native or other package updated inside npm.
(it deletes packege-lock.json and module files, but when re-installing if there's conflicts it will stop installing files again.) use:
1-npm install --force // it will ignore the conflicts and install packege-lock.json and module files again

PUBLISHING APP TO APPLE DEVELOPER
helpful website: https://pagepro.co/blog/publishing-expo-react-native-app-to-ios-and-android/
building for ios use this command:
1- expo build:ios
2- select archive.
3- when asking if have access to apple account: Y
4- insert apple developer credentials: ask Will to add account if don't have one
5- after "finished: click on "Successfully built standalone app": (downloads file)
6 - open the Transporter software and add files. (will create app ready to submit to apple developer)
7 - manage submits and tester in http://applestoreconnect.apple.com
