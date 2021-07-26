`#redux-intro` `#assembler-school` `#master-in-software-engineering`

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Assembler School: Redux Intro Workshop <!-- omit in toc -->

In this workshop, we will learn how to use Redux along with a React App.

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
- [What is Redux?](#what-is-redux)
- [Why use Redux?](#why-use-redux)
- [Actions](#actions)
- [Reducer](#reducer)
- [State](#state)
- [Types](#types)
- [Redux boilerplate](#redux-boilerplate)
- [Dispatch an action](#dispatch-an-action)
- [Select from the state](#select-from-the-state)
- [High Order Components](#high-order-components)

---

## Getting Started

### The repository

First, you will need to clone the repo:

```bash
$ git clone https://github.com/assembler-school/redux-intro-workshop
```

### Dependencies

Before we can get started you will need to make sure that all the necessary dependencies are installed in your system.

For this workshop we are going to need:
- redux
- react-redux

### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Contents and Branches Naming Strategy

The repository is made up of several branches that include the contents of each section.

The main branch includes the base repository and the getting started guide while the following include the redux boilerplate and some use cases.

Each branch adds more content to the `README.md` file and the folder structure.

### Fetching All the Branches

In order to fetch all the remote branches in the repository, you can use the following command or by creating a fork of this current repository.

```bash
$ git fetch --all

# List both remote-tracking branches and local branches
$ git branch --all
```

Then, you can create a local branch based on a remote branch with the following command:

```bash
$ git checkout -b <new_branch_name> <remote_branch_name>
```

## What is Redux?

Redux is a predictable global state container for JavaScript apps.

It uses a very well-designed pattern that consist on dispatching actions to process the inormation through reducer functions that all together contribute to produce a new global and immutable state.

Is not build just for react, it can be used on any JavaScript app. It is also very simple but it has a large addons ecosystem.

## Why use Redux?

Redux allows us to share information easily between components without having the need to pass props between every component in between. Also, through some of its middlewares, it can execute async functions as part of its actions, so it can communicate with other external libraries and APIs.

#### ✅ Share state

Allows to share state between components and trigger renders when that state changes.

#### ✅ Simplifies complexity

Through the reducers, Redux helps to determine the new application state based on different actions that can involve different components.

Also, the management of large state objects gets simpler and we avoid to lost control of the flow of actions that triggers component updates.

#### ✅ Enhance reliability

Having to work with a set of actions and reducers, forces us as developer to structure our code in a way that is hard to lose control over what's happening.

#### ✅ Predictability and easy to debug

Providing a single source of true allows to know the current state and to know which actions would trigger which updates. Thanks to this, debug Redux flow gets very easy and straightforward.

### Folder Structure

This is a sample folder structure that organizes redux code inside a React application.

```sh
.
├─ src
├─── redux
├───── <state_section>
├──────── actions.js
├──────── reducer.js
├──────── state.js
├──────── types.js
├───── store.js
├───── reducers.js
├───── Provider.js
```

#### `<state_section>`

`<state_section>` should contain the name of the section which is going to have its own actions and reducers grouped together along with its initial state and action types

#### `actions`

`actions` is where the dispatchable actions are going to be implemented and exported to be used when needed.

#### `reducer`

`reducer` is where the section reducer is implemented. It should consider every possible action and must always return the new state.

#### `state`

`state` contains the initial state of this specific reducer.

#### `types`

`types` contains the different action names to share between actions and reducers.

#### `store`

`store` is where we create the Redux store joining the combined reducers and the middlewares (if needed).

#### `reducers`

`reducers` imports all the reducers and combines them to produce the Redux general reducer.

#### `Provider`

`Provider` exports a React component that takes the store and wraps the part of the application that we want to share state through Redux


## Actions

Actions are pure functions that, base on the general convention, should return an object with a type (name of the action) and payload, the content to update the state with.

Every time an action is dispatched, Redux will pass it to every reducer to generate the new applciation global state.

An example of an action with a type called "SET_COUNTER" and a payload 3 would be implemented as follows:

```js
export const setCounter = (value) => ({ type: 'SET_COUNTER', payload: value })

```

## Reducer

Reducers are functions that will be executed for every action dispatched. They should produce a new state based on the action type and payload or return the current statet to avoid an unwanted modification.

The reducer should consider an empty action call since Redux executes every reducer without any action to produce the initial application global state.

An example of a reducer that responds to the previous example of action would be implemented as follows: 
```js
const reducer = (state = initialState, action) => {
  if (action === SET_COUNTER) return action.payload;
  if (action === INCREASE_COUNTER) return action.payload + 1;
  if (action === DECREASE_COUNTER) return action.payload - 1;
  if (action === RESET_COUNTER) return 0;

  return state;
}

export default reducer;
```

## State

The state.js file on every state section should contain the inital state that this section should start with.

Following the same counter example, it would be implemented as follows:
```js
const initialState = 0;
export default initialState;
```

## Types

Exports all available action types. By concentrating all types on a single file, we are sure that no typo produces an unwanted behaviour by using those in actions and reducers;

Example:
```js
export const SET_COUNTER = 'SET_COUNTER'
export const INCREASE_COUNTER = 'INCREASE_COUNTER'
export const DECREASE_COUNTER = 'DECREASE_COUNTER'
export const RESET_COUNTER = 'RESET_COUNTER'
```

## Redux boilerplate

To fully integrate Redux into our React application we must initialize its structures and add the react-redux provider. We recommend adding the provider in our root component so all the application can access to the shared global state.

This components and functions represent a big part of the redux boilerplate and they are going to be the same in almost every project in which we use Redux. 

Here are the standard code needed for each one:

### reducers
Combines all the reducers from our app:

```js
import { combineReducers } from 'redux';
import <state_section_1> from './<state_section>/reducer';
import <state_section_2> from './<state_section>/reducer';
...
import <state_section_n> from './<state_section>/reducer';

const reducers = combineReducers({
  <state_section_1>,
  <state_section_2>,
  ...
  <state_section_n>
});

export default reducers;

```

### store
Combines the reducers with the middlewares (thunk, devtools, etc) and produces the global application store

```js
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import CombinedReducers from './reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const appliedMiddleware = devTools ? compose(applyMiddleware(thunk), devTools) : compose(applyMiddleware(thunk));
const store = createStore(CombinedReducers, appliedMiddleware);

export default store;

```

### provider
Wraps all our application with the store created so every component has access to the global state

```js
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import store from './store';

const Provider = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  );
};

export default Provider;
```

Then in our app root, we can use it like the following:

```jsx
// src/index.js
import React from "react";
import ReactDOM from "react-dom";

import Provider from './redux/provider';

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

## Reading from Redux
Nowdays, the best and easier way to read from Redux's state is to use it hoos `useSelector`. It allows us to pick what we need from the state and force a render of our functional component everytime the selected value changes.

Here is an example of how to use it
```js 
import { useSelector } from "react-redux";

const MyComponent = () => {
  const counter = useSelector(state => state.counter);
  ...
}
```

## Dispatching actions to Redux
As with reading from the state, dispatching actions is also easier with react-redux hooks. In this case, we are going to use the `useDispatch` hook as follows:
```js 
import { useDispatch } from "react-redux";

import { increaseCounterByOne } from './redux/counter/actions';

const MyComponent = () => {
  const dispatch = useDispatch();
  
  const handleIncreaseCounter = () => {
    dispatch(increaseCounterByOne());
  }

  ...
}
```

Remember that everytime we dispatch an action, Redux is going to send it to every reducer and will generate a new global state, forcing the render of every component that is listening with the `useSelector` hook.
## Using reac-redux connect method
After React launched the hooks in its version 16.8, developers started migrating class componets to functional componets since using hooks allows to simplify the state management. Before this, the way to read and write from/to Redux's state was using its High Order Component `connect`.

Even if this method is not used anymore, is important for you to know how to use and understand it, since you may be dealing with it in legacy code.

This method takes two functions as parameters: `mapStateToProps` and `mapDispatchToProps` (the names are pure conventions) and returns a function that takes the component that we are developing. 

The returns of both functions are injected as props in our component so be aware that a parent componet shouldn't declare a prop with the same name.

It is used as follows: 
```js
const MyComponent = ({ props }) => {
  const { counter, userEmail, setCounter } = props;
  ...
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  userEmail: state.user.email
});

const mapDispatchToProps = (dispatch) => ({
  setCounter: (value) => dispatch(setCounter(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```

Don't let yourself get too overwhelmed by the naming and syntax. It can be a lot to process, but they are just JavaScript concepts that you only need to know to read.


### mapStateToProps
Analoge to the `useSelector` hook, receives Redux's global state and returns the values that we want to inject in our component as props.

### mapDispatchToProps
Analoge to the `useDispatch` hook, returns as many functions as state modifiers we need in our component. The function can receive a value and should execute the action and pass the result to the dispatch function injected by Redux.


## Learn More About Redux <!-- omit in toc -->

You can learn more in the [Redux documentation](https://redux.js.org/introduction/getting-started).


## License <!-- omit in toc -->

[MIT](https://choosealicense.com/licenses/mit/)

## Contributors ✨ <!-- omit in toc -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.cristiamdasilva.com"><img src="https://avatars.githubusercontent.com/u/4550355?v=4" width="100px;" alt=""/><br /><sub><b>Cristiam Da Silva</b></sub></a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
{"mode":"full","isActive":false}