# Github Repo Searcher

![Working App](https://imgur.com/a/6oQVTef)

## Description:

Application developed in React Native using Typescript for Delivery Much's technical challenge.

**The Application aims to:**

1. List public Github repositories
2. Search public Github repositories
3. View repository list, with the informations:
   - Name of the repository
   - Name of the repository owner
4. View repository details (on click in a repository card), such as:
   - Repository owner avatar
   - Name of the repository owner
   - Name of the repository
   - Description of the repository

## Prerequisites:

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

**Cloning the repository:** 

Assuming you have your machine pre-configured to clone github repositories (if you have not configured it, visit [this documentation](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)), clone the repository using the following command in the terminal:

```
git clone git@github.com:wcamposs/github-repo-searcher.git
```

**Installation and configuration:**

Install and configure the environment to run the application, following [this tutorial](https://medium.com/@jeancabral/instalando-e-configurando-react-native-no-ubuntu-18-04-e3329ac090a0).

**Expo Installation:**

Expo is used to serve the application and run on both a physical device and an emulator. Install it using the following command on the terminal:

```
npm install expo-cli --global
```

**Yarn Installation (optional):**

Yarn is a dependency manager, it is used to install the dependencies required for the project (it has the same role as **npm**). If you want to use it (personally I prefer), install it through [this tutorial](https://classic.yarnpkg.com/en/docs/install/#debian-stable).

**Project dependencies installation:**

To install the dependency packages used in this project, follow the steps below:

After cloning the repository, access its root folder using the terminal and execute one of the commands below according to the package manager you use (npm or yarn):

1. Using Yarn:

```
yarn install
```

2. Using NPM:

```
npm install
```

After installation, the project can be considered configured and ready to run.

## Getting Started:

Assuming you are in the root directory via a terminal, run the following command to run Expo:

1. Using Yarn:

```
yarn start
```

2. Using NPM:

```
npm start
```

## Running Application:

The application can be executed in two ways:

- Using visual interface (that opens automatically after **yarn start** or **npm start**)
- Using commands via terminal (the options will be shown after execute **yarn start** or **npm start**)

### Running Application via Interface:

A new tab will be opened in the default browser with some options to run the project using Expo.

**PS:** Make sure your phone and computer are on the same WiFi!

1. If you want to run on an Android or iOS emulator, make sure that the virtual device is configured and running, then select one of the options below in the expo interface via browser:

- Run on Android device / emulator
- Run on iOS simulator

1. If you want to run through the browser, select the option:

- Run in web browser

3. If you want to run the project on a physical device (Android or iOS):

**Android:** 

- Install the Expo app on the device through the app store. After installation, run the application, select the option **scan with QRCode** and scan the QRCode that is displayed in the lower left corner on the tab that was automatically opened in the browser using the device's camera.

**iOS:**

- Copy the url shown in the browser above the QRCode.
- Open Expo App in your mobile device, and click on the second tab 'Explore' and enter the URL that starts with exp://192.168... This is a local connection to your computer. You will see your app running in a minute.

(I personally recommend that the project be executed on a mobile device, regardless of whether it is a physical device or an emulator).

### Running Application via Terminal:

Just as a new tab is executed by the browser, the same information is also displayed in the terminal, to execute it, type the command for the desired option:

1. If you want to run on an Android emulator, type on terminal:

```
a
```

2. If you want to run on an iOS emulator, type on terminal (this option will appear only if you have an iOS device configured):

```
i
```

3. If you want to run the project on a physical device (Android or iOS):

**Android:** 

- Install the Expo app on the device through the app store. After installation, run the application, select the option **scan with QRCode** and scan the QRCode displayed in the terminal using the device's camera.

## Built With:

- [React Native](https://reactnative.dev/) - The framework used
- [Expo](https://expo.io/) - Open-source platform used for build and serve the application for Android, iOS, and web.
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [Gihub REST Api v3](https://developer.github.com/v3/) - REST Api used to obtain data from public repositories and also to query public repositories.
