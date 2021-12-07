[![Netlify Status](https://api.netlify.com/api/v1/badges/d3ba51cd-668d-4c68-b900-b31c84e16825/deploy-status)](https://app.netlify.com/sites/oc-hrnet/deploys)

<br/>
<p align="center"><img  src="https://github.com/MelanieSarrouy/MelanieSarrouy_P14_16112021/blob/main/src/assets/logo-vert.png?raw=true" alt="HRNet logo" /></p>

[HRNet](https://oc-hrnet.netlify.app/)

# HRNET: Employee records management application
  
### P14 - OpenClassrooms
 
This application allows you to add new employees through a form and to have access to the all employees list. A table allows you to perform a search, to sort the data displayed and to choose the number of data to display per page.
  
Goals:

- Moving a jQuery library to React
- reduce the technical debt
- use a state management system
- modernise the style
- create, publish and use a React component on [npm](https://www.npmjs.com/) as a package :
 
[nmp-package](https://www.npmjs.com/package/simple-react-modal-ui)

[npm-package GitHub repository](https://github.com/MelanieSarrouy/MelanieSarrouy_P14_npm-package_simple-customisable-modal)
  
## 1. Technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
 
-  [react](https://reactjs.org/) v17.0.2
-  [react-dom](https://fr.reactjs.org/docs/react-dom.html)v17.0.2
-  [react-router-dom](https://reactrouter.com/web/guides/quick-start) v6.0.2
-  [redux](https://redux.js.org/introduction/getting-started) v4.1.2
-  [react-redux](https://react-redux.js.org/introduction/getting-started) v7.2.6
-  [redux/toolkit](https://redux-toolkit.js.org/introduction/getting-started) v1.6.2
-  [redux-thunk](https://redux.js.org/usage/writing-logic-thunks) v2.4.0
-  [firebase](https://firebase.google.com/) v9.5.0
-  [prop-types](https://www.npmjs.com/package/prop-types) v15.7.2
-  [styled-components](https://styled-components.com/) v5.3.3
-  [simple-react-modal-ui](https://www.npmjs.com/package/simple-react-modal-ui)v0.1.5
-  Recommended IDE : [Visual Studio code](https://code.visualstudio.com/)
  
## 2. Prerequisites

-  [Git](https://git-scm.com/) to clone repositories
-  [Node.js](https://nodejs.org/en/) to run `yarn` commands
-  [Yarn](https://yarnpkg.com/) to run application
 
## 3. Install and run application

  
### Install back-end

This project uses [Firebase](https://firebase.google.com/) for database management

 **1**. First you need to create a new project on **firebase** and start a new collection named ***'employees'*** (you can use collection example with the **json** file found in **'/src/datas/employees.json'**)
    
 **2**. Next, look at and copy the **firebaseConfig** constant (you can find it in your Firebase project settings)
    
 **3**. In this project you should find a **.env_sample** file with **environment variable names**, so you need to create your own **.env** file at project root with the environment variable names and your firebaseConfig values (don't forget to add **'.env'** file to **'.gitignore'**) 

### Install and launch front-end
  
- [ ] Clone repository : https://github.com/MelanieSarrouy/MelanieSarrouy_P14_16112021
- [ ] `cd MelanieSarrouy_P14_16112021`
- [ ] `yarn` to install dependencies
- [ ] `yarn start` Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
The page will reload if you make edits.\
You will also see any lint errors in the console.