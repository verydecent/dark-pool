<!-- @format -->

# [Darkpool.app](https://darkpool.netlify.app)
DarkPool is a to-do scheduling app that allows you to track progress with time graphs.
Users can create, and organize tasks containing subtasks, and reflect on their progress based on the completion of tasks.
This is repository contains code for the client side. You can find the server repository [here](https://github.com/verydecent/dark-pool-server).

## Tech Stack

- [Reactjs](https://reactjs.org)
- [Reduxjs](https://redux.js.org)
- [Recharts](https://recharts.org)
- [Momentjs](https://momentjs.com)
- [FontAwesome](https://fontawesome.com)

- [Webpack](https://webpack.js.org)
- [Babeljs](https://babeljs.io)

- [Nodejs](https://nodejs.org)
- [Expressjs](https://expressjs.com)
- [Mongoose](https://mongoosejs.com)
- [JSONWebToken](https://jwt.io)

## Build Setup

The following will start a development server at [locahost:1024](http://127.0.0.1:1024).

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
node ./create-env.js && npm run build
```

## TODO

- Update task state on response
- Login loader
- Create API responses for login and registration
