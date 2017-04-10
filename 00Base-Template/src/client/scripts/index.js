import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const root = document.querySelector('.root');

// Wraps our App in AppContainer
const render = (Component) => {
  ReactDOM.render(
    <BrowserRouter>
      <AppContainer>
        <Component/>
      </AppContainer>
    </BrowserRouter>,
    root
  );
};

// Renders our application
render(App);

// Checks if there have been changes and accepts them.
// This activates HMR and refreshes modules in the browser
if (module.hot) {
  module.hot.accept();
}
