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
`yarn start` Starts the client in development
`yarn build` Run production build
`yarn serve` Serve production build with SSR
`yarn test`
`yarn lint`



# Application structure
## Folder Layout
-- src
  -- public
  -- server
  -- app
    -- modules
      -- authentication
        |- actions / reducers / middleware
      -- todos
        |- actions / reducers / middleware
    -- components
      -- component-a
        |- stateless / stateful / connected
      -- component-b
      -- component-c

## Modules


## Components
  Each component file exports a named stateless (or with local state) function or class
  and a default connected class. This is done so components can easily be tested without
  mocking an entire state.
  ```
    export MyComponent = (props) => (<SomeJSX />);
    export default connect(mapStateToProps, mapDispatchToProps)(<SomeJSX />);
  ```
