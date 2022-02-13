# Aspire Assignment

## Initial Install
Install Prerequisites:
 - [Node.js](https://nodejs.org)
 - [React Native CLI](https://www.npmjs.com/package/react-native-cli)
 - [Yarn](https://yarnpkg.com/)

## Initialize environment

Clone this repository:
```
$ git clone git@github.com:Hari311096/aspire-demo.git
$ cd aspireDemo/
```

Initialize the environment
```
$ yarn install
$ cd ios
$ pod install
$ cd ..
```

Run the application
```
For iOS: $ react-native run-ios
For Android: $ react-native run-android
$ react-native start

```


## How to clear and rerun the application

```
$ rm -rf node_modules/
$ yarn cache clean  & yarn install
$ react-native start -- --reset-cache
$ react-native run-ios
```
