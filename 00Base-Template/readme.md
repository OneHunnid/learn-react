# Base Template

A React, Redux, Sass, Bootstrap and Webpack starter kit that includes deployment to Heroku.

## Getting Started

This template was created to allow developers to quickly and efficiently get started on building and deploying web application with minimum effort.

1. Clone repository
2. Run `npm install`
3. Start up the frontend server by running `npm run client:serv`
4. Start up the backend server by running `npm run serve:dev`
5. Open up localhost:3000 and your application will appear

## How to build your application
Building your application is as easy as running the script  `npm run build` in terminal. After a period of time, the script will get hung up. In terminal, you'll see a bunch of line items in yellow. When this happens, go ahead and exit it by running `control + c`. Your scripts are now build properly and the server will dump the CSS and Javascript files in a `static` folder located in `src/client`.

## How to deploy to Heroku
Sign up for Heroku and follow their steps to connect your Github Account. From there, you can connect the repo you want to deploy to Heroku and can even set up automatic deploys. Whenever Heroku sees that the master branch has been updated with changes, it will automatically deploy. Heroku will look for the Procfile, which tells it to run the `npm start` script found in package.json. This start script kicks off node, babel-core/register and the backend server. When this happens, Heroku will deploy the index.html file and static folder containing the bundle.js and bundle.css located in `src/client`.
