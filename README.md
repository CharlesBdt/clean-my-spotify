# Spotify Adventure

## Summary

- [App information](#app-information)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Install dependencies](#install-dependencies)
- [Formatting](#formatting)
  - [Git commitizen](#git-commitizen)
  - [Plugins](#plugins)
- [Spotify Developer](#spotify-developer)
- [Best practices](#best-practices)
- [Deploy](#deploy)
  - [Compiles and minifies for production](#compiles-and-minifies-for-production)
  - [Firebase](#firebase)
- [Naming convention](#naming-convention)
  - [File naming](#files-naming)
  - [Variables and classes naming](#variables-and-classes-naming)
- [Resources](#resources)

## App information

- App name : Spotify Adventure
- Description : Explore your Spotify top tracks / artists / playlists etc
- App links :
  - [Repo](https://github.com/CharlesCharly/spotify-adventure)
  - [Live](https://spotify-adventure.web.app/)

## Installation

### Prerequisites

Populate your `.env` file with secret values as below

```sh
VUE_APP_CLIENT_ID=
# Client ID is found on the app homepage

VUE_APP_REDIRECT_URL_AFTER_LOGIN=
# Redirect URL after login can be found under "Edit Settings" > "Redirect URIs"

VUE_APP_SPOTIFY_AUTHORIZE_ENDPOINT=
# Spotify Authorize Endpoint is from the doc with value "https://accounts.spotify.com/authorize"
```

Learn how to get those values from the [Spotify Developer section](#spotify-developer)

### Install dependencies

```sh
# Install dependencies
yarn install

# Run with hot-reloads for development
yarn serve
```

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## Formatting

### Git commitizen

Install [commitizen](http://commitizen.github.io/cz-cli/) globally to have consistent commits.\
How did we make our repo [commitizen friendly](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly) ?

```sh
npm install commitizen -g

# Move into your project
# Instead of git commit, type
git cz
```

Read more about `git commitizen` use, in the [Best practices section](#best-practices)

### Plugins

To use formatting on VS Code please install these plugins : [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).\
Follow Prettier extension's instructions to setup `format on save` for ease of use.

```sh
yarn lint
```

For VueJS tooling into VS Code, you can install [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur).

## Spotify Developer

Connect your Spotify account in the [Developer Dashboard](https://developer.spotify.com/dashboard/applications).\
Click to `Create an app`.\
When done, click on the created app to access the settings.

> Tip : For each new API endpoint you want to add, don't forget to add the required scopes into the `store/modules/auth.js` file.

## Best practices

For commit and repository consistency, please use :

```sh
git cz # instead of 'git commit'
```

You'll be prompted to fill in any required fields and your commit messages will be formatted according to the standards defined by project maintainers.

Respect the [git-flow process](https://danielkummer.github.io/git-flow-cheatsheet/index.fr_FR.html) as much as possible :

- Create a branch for each features - eg. `feature(user)/create-profil` or `fix(room): update room name`
- Commit with `giz cz`
- Submit PR to `develop` branch
- Ensure to PR your commits

## Deploy

### Compiles and minifies for production

Fill your `.env.development.local` file with the sames values as [here](#prerequisites), then build your app.

```sh
yarn build
```

### Firebase

When above steps are done, run these commands :

```sh
yarn global add firebase-tools
firebase login
firebase init # Skip if it has already been done
firebase deploy
```

Visit the URL displayed by Firebase to check the app is live.

## Naming convention

### Files naming

- Folders : kebab-case or spinal-case, eg : `my-components`
- Pages (used by the router) : kebab-case or spinal-case, eg : `my-components` or `my-component.vue`
- Assets (Pictures, css files, logos, ...) : kebab-case or spinal-case, eg: `my-logo.svg`
- Vue components : PascalCase or UpperCamelCase, eg : `MyComponent.vue`

### Variables and classes naming

- HTML : kebab-case or spinal-case, eg : `my-html-components`
- CSS : kebab-case or spinal-case, eg : `my-css-class`
- JS functions and variables : camelCase, eg : `myFunction` or `myVariable`
- Vue components and JS classes : PascalCase or UpperCamelCase, eg : `MyComponent` or `MyClass`

## Resources

- Main Framework : [Vue 3](https://v3.vuejs.org/)
- State management library : [Vuex](https://vuex.vuejs.org/)
- Two-way data binding : [Vuex-map-fields](https://github.com/maoberlehner/vuex-map-fields)
- Router : [Vue Router](https://router.vuejs.org/)

- Promise based HTTP client : [Axios](https://github.com/axios/axios)
- Time/Date manipulation library : [MomentJs](https://momentjs.com/)
- UI icons library : [FontAwesome](https://fontawesome.com/v5.15/icons?d=gallery&p=2)
