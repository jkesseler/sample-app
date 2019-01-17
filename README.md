This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It's a basic project setup with the following:
- Linting with a pre-commit hook
- Testing with Jest and Enzyme
- Basic folder structure for stateless, stateful (local state) and connected (Redux) components
- Server Side rendering

# Getting started
## Create an account on jsonbin.io
- Create a new bin and private key.
- Add the bin ID and private key to `.env`

Clone this repo and `yarn install`
`yarn start:proxy`
`yarn start`


*Please note:*
This is for demo purposes only! The key and bin id are easily viewed in dev-tools.


# Commands
- `yarn start:proxy` Start the local API proxy
- `yarn start` Starts the client in development
- `yarn build` Run production build
- `yarn serve` Serve production build with SSR
- `yarn test`
- `yarn lint`


# Application structure
Loosely based on https://github.com/FortechRomania/react-redux-complete-example

## Folder Layout
```
-- src
  -- public
  -- server
  -- app
    -- state
      -- module-a (per feature )
        |- action types/ actions / reducers / middleware
      -- module-b
        |- action types/ actions / reducers / middleware
    -- components
      -- component-a
        |- stateless / stateful / connected
      -- component-b
      -- component-c
    -- pages (page types / templates)
      |- Base
      |- Another view
```

## State
State management for a specific functional domain.
This is roughly based on [ducks modular redux](https://github.com/erikras/ducks-modular-redux)
and [re-ducks](https://github.com/alexnm/re-ducks)

## Components, Pages and layouts
<!--
Since a 'page' is composed of components we could drop 'Pages' from the project
in favour of connected HoC's.
-->
A Page is a collection of composed Components.
A Layout is composed of one of more HoC's configured in `routes`.


## Components
Each component file exports a named stateless (or with local state) function or class
and a default class that is memoized, connected to a state or otherwise hard to test.
```
  export MyComponent = (props) => (<SomeJSX />);
  export default memo(<SomeJSX />);
```

Component styling has been avoided by using a component library.
There are many ways to style components using css modules, CSSinJS, etc.



## Routes
```
const routes = [
  {
    component: Pages.Home,
    layout: Layouts.Home,
    path: '/',
    exact: true,
  },
  {
    component: Pages.Todos,
    layout: Layouts.Default,
    path: '/todos',
    exact: true,
  },
]
```

## Fetching data
Clients don't fetch data directly from services that require secret API keys.
since that would expose the secret key in the browser. Instead there is a API
proxy that handles requests.


# Issues:
- `react-router` trows a [warning when using memoized components in render props](https://github.com/ReactTraining/react-router/issues/6471)

- Aliases have to be configured in two places. `config-overrides.js` for compiling
  and running and `.babelrc` for linting and IDE integration

- A beta version of `eslint-import-resolver-babel-module`is required
  to have linting work when `@babel/env` is used
