## Learn React

While we explore the React library, this repository will act as a React style guide containing best practices and examples.

## Best Practices
**Utilize ES6**

...

**Opt for stateless components**

...

**Utilize class extensions**

...

**Default eslint config**

...

**Default babel config**

...

**Bind handler methods in the component's constructor**

...

**Separate basic components from routes components from container components**
- Routes (pages)
- Components (pieces of functionality)
- Containers (layout/templates)

**Fix React warnings, do not ignore them**

...

**Always declare your propTypes**

Always Document what props your component expects and what they do. This will specify a validation function for each prop it is set to receive. If validation function fails, a warning will be logged in the console.

**Render Return**

If the element will fit on one 80 character line, then inline it.

**JSX Quote Formatting**

Always use double quotes for JSX string properties. Otherwise, use single quotes.

**Prefix event handles**

Prefix all event handles with the word 'handle' and use two underscores.
```
__handleOnClick{}
```

## Primary Dependencies
```
React           # Application library
React-Router    # Create and manage routes for application
Redux           # Manage application state and data
Webpack         # asdf
```
