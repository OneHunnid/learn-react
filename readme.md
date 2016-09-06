# Learn React

While we explore the React library, this repository will act as a React style guide containing best practices and examples.

## Best Practices
**Utilize ES6**

When building a React application, it's recommended to use ES6. ECMAScript 2015 provides developers with many advancements such as classes, spread operator, for-of loop, arrow functions, etc.

**Component Hierarchy**

```
export default class Foo extends React.Component {
  constructor(props) {
    super(props)
    this.__myCustomMethodTwo = this.__myCustomMethodTwo.bind(this)
    this.__myCustomMethodTwo = this.__myCustomMethodTwo.bind(this)
  }
  componentWillMount() {}
  componentDidMount() {}

  componentWillReceiveProps() {}
  shouldComponentUpdate() {}
  componentWillUpdate() {}
  componentDidUpdate() {}

  componentWillUnmount() {}

  __myCustomMethodOne() {}
  __myCustomMethodTwo() {}

  render() {
    return (
      <div></div>
    )
  }
}
```

**Opt for stateless components**

...

**Utilize class extensions**

JavaScript Classes provide a much simpler and clearer syntax to create objects and deal with inheritance. React Components should be created using Classes.

**Default NPM config**

Add the following to a `.npmrc` file in your project root. This will automatically save (and remove) dependencies installed with `npm i` or `npm i -D`.

```
save=true
save-exact=true
```

**Default eslint config**

Add some basic linting to your project by including the following snippets in your `package.json` file.

> **Note:** Be sure to update the `devDependencies` section with appropriate versions.

```js
{
  "eslintConfig": {
    "env": {
      "es6": true,
      "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
      "sourceType": "module"
    },
    "rules": {
      "indent": [
        "error",
        2
      ],
      "linebreak-style": [
        "error",
        "unix"
      ],
      "quotes": [
        "error",
        "single",
        {
          "allowTemplateLiterals": true
        }
      ],
      "semi": [
        "error",
        "never"
      ]
    }
  },
  "devDependencies": {
    "eslint": "3.0.0"
  },
  "scripts": {
    "test:lint": "eslint *.js"
  }
}
```

**Default babel config**

> **Note:** Be sure to update the `devDependencies` section with appropriate versions.

```js
{
  "babel": {
    "presets": [
      "react"
    ]
  },
  "devDependencies": {
    "babel-core": "6.14.0", // or latest version
    "babel-preset-react": v6.11.1" // or latest version
  }
}
```

**Prefix event handlers**

Prefix all event handlers with two underscores followed by the word "handle".
```
__handleOnClick {}
```

**Bind handler methods in the component's constructor**

When using Classes with React Components, there's no autobinding. You should bind your event handlers in the constructor so they are only bound once for every instance.
```
constructor(props) {
  super(props)
  this.__handleOnClick = this.__handleOnClick.bind(this)
}
```

**Separate Components**
To better understand the functionality of components, it's recommended to separate basic components from routes and components from container components.
```
Routes          # Pages
Components      # Piece of Functionality
Containers      # Layout/Templates

```

**Fix React warnings, do not ignore them**

React warners should never go unnoticed. If there is an issue, fix it immediately.

**Always declare your propTypes**

Always declare what props your component expects and what they do. This will specify a validation function for each prop it's set to receive. If validation function fails, a warning will be logged in the console.
```
Foo.propTypes = {
  text:       PropTypes.string,
  completed:  Proptypes.bool
  seats:      React.PropTypes.number,
  settings:   React.PropTypes.object,
  callback:   React.PropTypes.func
```

**Render Return**

If the element will fit on one 80 character line, then inline it.
```
render() {
  return (
    <div>This element fits on one 80 character line. This can be inlined.</div>
  )
}
```

**JSX Quote Formatting**

Always use double quotes for JSX string properties. Otherwise, use single quotes.
```
render() {
  return(
      <button className="title" onClick="this.__handleOnClick">Click Me</button>
  )
}
```

## Directory Layout

To make our apps easy to understand and help keep them organized, this structure should be used:

```
├── /node_modules/                # 3rd-party libraries and utilities
├── /src/                         # The source code of the application
│   ├── /scripts/                 # Contains javascript files for app
│   │   ├── /actions/             # Payloads of data that send data to the store
│   │   ├── /assets/              # All assets files
│   │   ├── /components/          # Components meant for Pieces of Functionality
│   │   ├── /containers/          # Components meant for Layouts/Templates
│   │   ├── /reducers/            # Pure function that returns the next state based off of actions
│   │   ├── /routes/              # Components meant for Pages
│   │   ├── /store/               # Manages the application state
│   │   ├── /utilities/           # Utilities such as libraries or common tools
│   │   ├── index.js              # App entry point. Connects store to App and contains routes
│   └── /styles/                  # Contains the LESS and CSS for the app
│       ├── base.scss             # Basic styling for application
│       ├── index.scss            # Entry point for styling
│       ├── reset.css             # Standard normalize/reset stylesheet
├── index.html                    # Application's HTML Entry Point
│── package.json                  # NPM Packages
│── readme.md                     # Important Information
│── server.js                     # Development server configuration
└── webpack.config.js             # Webpack configuration
```

## Primary Dependencies
A list of dependencies we use:
```
React           # Application library
React-Router    # Create and manage routes for application
Redux           # Manage application state and data
Webpack         # A modular JavaScript bundler
```
