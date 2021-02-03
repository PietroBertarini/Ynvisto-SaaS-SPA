## Table of Contents

- [Available Scripts](#available-scripts)
  - [react-scripts start](#run-local)
  - [react-scripts test](#local-test)
  - [react-scripts build](#build-production)
  - [env-cmd -f .env.staging react-scripts build](#build-staging)
  - [start-storybook -p 6006 -s public](#run-local-storybook)
  - [build-storybook -s public](#build-storybook)
- [Advanced Configuration](docs/AdvancedConfig)
- [Troubleshooting](docs/troubleshooting)
- [Something Missing?](#something-missing)


## Available Scripts

In the project directory, you can run:

### Run local

`react-scripts start`
Runs the app in the development mode.<br>
Open [http://localhost:5001](http://localhost:5001) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Local test

`react-scripts test`
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### Build production

`react-scripts build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### Build staging

`env-cmd -f .env.staging react-scripts build`
Builds the app for staging to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### Run local storybook

`start-storybook -p 6006 -s public`
Runs the storybook in the development mode

### Build storybook

`#build-storybook -s public`
Builds the storybook for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your storybook is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Something Missing?

If you have ideas for more “How To” recipes that should be on this page, [let us know](https://github.com/facebookincubator/create-react-app/issues) or [contribute some!](https://github.com/facebookincubator/create-react-app/edit/master/packages/react-scripts/template/README.md)
