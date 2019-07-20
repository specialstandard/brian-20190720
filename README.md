# Brian Ardito - 07/20/2014

## Installation

In the project directory, you can run:

### `npm install`

Installs all the necessary dependencies

### `node server.js`

Runs the file manager server API

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Security

Some validation has been done on front end in terms of file type, size, file existance, but would be great to make it more robust.
Enabling CORS on the API server may be a security concern worth investigating in a future phase of development

## Improvements

Authentication and or encryption enhancements could be added to the API server in future development

## Libraries

Mostly vanilla React except for the following libraries used for testing, and to create the API server, respectively:

@testing-library/jest-dom: Makes testing fun
@testing-library/react: Testing library,

axios: Promise based HTTP client to send files to the API server
cors: Enables CORS on the file API server
express: Standard web framework for API
multer: NodeJs middleware for handling multipart/form-data, for uploading files

## API

Bare-bones node express server to allow uploading files from the react front-end
```
### POST /upload
Receives multipart/form-data (file) to upload
Returns 500 if server error
Returns 200 if success uploading the file
Accepts the file to upload.
```
---
## Other notes

Really fun code challenge; thank you. 🙂
