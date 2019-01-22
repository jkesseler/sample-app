# Intro


## Configuration
Configuration data that differs between deployment environments should never be
part of the codebase. In this example environment specific configuration is loaded
from environment variables. These contain API keys for instance.

Please note that variables starting with `REACT_APP_*` are automatically made
available to the client.

# Server
There is a simple API gateway (proxy) to hide sensitive data like API keys.
This also the layer to implement authentication (using tokens for instance).

# Client
The client is bootstrapped with `create-react-app`.
In order to add a custom babel setup some re-work was required. For this
`react-app-rewired` and `customize-cra` are used. The babel setup is extended
with `babel-module-resolver`. This has been done so component can eventually be
developed in isolation with out have to constantly update you own library.


## Folder structure

## Components
I've chosen not to abstract components and containers in this case.
Each component file exports a (named) stateless function and a memoized / connected
default function or class.

I've explicitly stayed away from UI customisation. There are many ways to do it
depending in the UI layer you use. Theming is a much debated subject and the best
solution still has to be fleshed out IMO.

## Please note there is no 'Containers' folder
Containers (Smart components, Higher Order Component). Are useful if you have a
a lot of stateless stateless component that are used in different contexts.
In this example most of the UI comes from a library. Creating more abstractions
only introduces extra complexity.


## Pages
Pages are just that. A page within the app. The need a layout to render in and a
route that provides access to the page.

## Layouts
The layout holds a page but also common elements such as a header, footer, navigation. etc.
By using modularised CSS each layout has it's own CSS file that does not conflict with
other layouts.

## Routing
The router contains configuration what pages are rendered with which layout and
under what route they are available.

# Data flow
## State
State is managed with `redux`. Flowing the `re-ducks` pattern.
- types
  Named constants which identify the `action` being dispatched
- actions
  A action has a type and a payload. Think of them as event handlers with data
- reducer
  The reducer handles the action being dispatched, identified by the action type
  It takes the payload and updates the state.
- optional side-effects or middleware.
  Middleware takes care of asynchronous (side-effected) actions.
  In this case remote data fetching and storing


## Remote Data
Often you need to fetch or store data on a remote API. As explained this is done
in the middleware. Most remote API's require a key and you don't want to expose
that key to the client. Therefor a API gateway is required. In this example it a
very simple expressed based proxy.

If you need authentication, you'd implement it on the API proxy. A example would be
JSON Web Tokens, Bearer authentication, oAuth, etc.


# Quality Assurance
## Code standard
Having a coding standard is important. It forces consistency, between developers
and projects. Having a consistent codebase greatly increases maintainability.
How often have you picked up an 6 month old codebase, only to find you self
pulling your hair out?

## Linting
In order to force consistency tooling is preferred in addition to reviews. Small
code styling issues, such as indenting, using uninitialised variables, etc. can
easily be removed with a good configured linter.

Furthermore I would argue code must pass the linter before it is checked in the
repo. In the event that code must be checked in that does not pass the linter
a simple CLI option van be used `--no-verify`. But this should be used sparingly.


## Testing
Testing is an important to quality assurance. This project uses unit test and
snapshot test. Code coverage. has not been configured
