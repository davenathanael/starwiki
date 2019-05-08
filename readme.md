# StarWiki
A simple StarWars wiki of its characters. Powered by [SWAPI](https://swapi.co/)

## How to run locally
You need to have `yarn` or `npm` installed.
If you have on of those, clone/download this repo, move in, and proceed by doing this:
```bash
yarn install
yarn start
```
*you might want to change `yarn` to `npm` if you used `npm` instead*

The app would be served at [http://localhost:3000/](http://localhost:3000/). You need to have internet connection for the app to fetch data from SWAPI.

## Technologies used
- Create React App to scaffold this React project
- React (duh)
- styled-components for CSS-in-JS styling
- React Router for inter-page routing
- Redux for state management
- React-redux to connect React components to Redux store
- Redux-thunk to perform async actios
- Redux-logger to log changes on Redux store and dispatched actions
- axios to fetch data from SWAPI

