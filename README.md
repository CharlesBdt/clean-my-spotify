# clean-my-spotify

## Project setup

```sh
yarn install
```

### Compiles and hot-reloads for development

```sh
yarn serve
```

### Compiles and minifies for production

```sh
yarn build
```

### Lints and fixes files

To use formatting on VS Code please install these plugins : [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).\
Follow Prettier extension's instructions to setup "format on save" for ease of use.

```sh
yarn lint
```

### Spotify Developer

Connect your basic Spotify account in the [Developer Dashboard](https://developer.spotify.com/dashboard/applications)\
Click to "Create an app"\
When done, click on the created app

Fill your .env file :

```sh
VUE_APP_CLIENT_ID
# Client ID is found on the app homepage

VUE_APP_REDIRECT_URL_AFTER_LOGIN
# Redirect URL after login can be found under "Edit Settings" > "Redirect URIs"

VUE_APP_SPOTIFY_AUTHORIZE_ENDPOINT
# Spotify Authorize Endpoint is from the doc with value "https://accounts.spotify.com/authorize"
```
