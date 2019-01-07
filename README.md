This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It's a basic project setup with the following:
- Linting with a pre-commit hook
- Testing with Jest and Enzyme
- Basic folder structure for stateless, stateful (local state) and connected (Redux) components
- Server Side rendering

# Getting started
Clone this repo and `yarn install`

## Create an account on jsonbin.io
- Create a new bin and private key.
- Add the bin ID and private key to `.env`

*Please note:*
This is for demo purposes only! The key and bin id are easily viewed in dev-tools.


# Commands
- `yarn start` Starts the client in development
- `yarn build` Run production build
- `yarn serve` Serve production build with SSR
- `yarn test`
-`yarn lint`


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
    -- Views (page types / templates)
      |- Base
      |- Another view
    -- Routes
      |- Home
      |- Todos
      |- Contact
```

## State
State management for a specific functional domain.
This is roughly based on [ducks modular redux](https://github.com/erikras/ducks-modular-redux) and [re-ducs](https://github.com/alexnm/re-ducks)

## Views
A view is a collection of components composed in a layout and has a route (or entry point)


## Components
Each component file exports a named stateless (or with local state) function or class
and a default class that is memoized, connected to a state or otherwise hard to test.
```
  export MyComponent = (props) => (<SomeJSX />);
  export default memo(<SomeJSX />);
```


## Routes

```
const routerConfig = [
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
