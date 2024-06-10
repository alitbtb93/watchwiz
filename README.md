# watchwiz

## File Structure

 - App: all pages are enclosed by this component, which places the AppHeader at the top of the router-view. 
 - main.ts: in this file we initialize our Vue application and attach it to our HTML file.
 - api: API call methods and all related types are in this folder.
 - assets: stylesheet files including tailwind.css and swiper.css(custom css styles for slider plugin).
 - components
	  -  app
		 Contains our reusable components besides the functionality to create logical components which are used among all the pages in our application. 
	 - 	 base
		 The basic components and icon components are in this folder (LoadingData, ImageLoader, etc.).
	 -   pages
		 Each page has a specific folder that contains our non-reusable components.
 - composable: shared logic that can be used in our components.
 - mocks: contains all mocks for unit and component tests.
 - router: contains router specification file.
 - utils: contains functionalities like axios instance and format date that do not use any vue related hooks.
 - views: contains our three main routes components.

## Node version
Node version that is used in this project is version 20 and you can simply run this command to run the required node version if you have nvm installed.

```sh
nvm use
```

## npm version
10.2.3

## Dependencies

 - axios: helps to make HTTP requests and handling responses.
 - swiper: lightweight and easy to use carousel.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
