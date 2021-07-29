# React-Rails Authentication Front-End

<p align="center">
    <img src="src/images/react.png" alt="Logo" width="150" height="100">
  <h3 align="center">React-Rails --> [React]</h3>

  <p align="center">
This is a React front-end assinment of Found & Seek.
  </p>
</p

## Screenshots of the app.

![image](./src/images/screen.png)

## Built With

- React

- Bootstrap

- Css

## Prerequisities

node should be installed in your machine.

## Getting Started

**To get this project set up on your local machine, follow these simple steps:**

**Step 1 React-part**<br>

- Clone the repo to your local machine.

- cd inside the project directory.

- npm install

- run npm run start

- Change axios request links to `http://localhost:3000` if your rails is in development or change it to your back-end link if your rails is in production. you can find these links in `App, Login, Logout and Signup` components.

## End points:

**http//localhost:3000/users/sign_in**

- Route ==> Sign in
- Method ==> POST
- Body ==> `{ "user": { "email": "test@example.com", "password": "12345678" } }`
- Response token ==> data.headers.authorization

**http//localhost:3000/users**

- Route ==> Sign up
- Method ==> POST
- Body ==> `{ "user": { "email": "test@example.com", "password": "12345678" } }`
- Response token ==> data.headers.authorization

**http//localhost:3000/member**

- Route ==> To know if user logged in?
- Method ==> GET
- headers ==> `token: token you saved from log in or sign up user`
- Response ==> data.data.message=> 'yeppa you did it.'

**http//localhost:3000/users/sign_out**

- Route ==> To know if user logged in?
- Method ==> DELETE
- headers ==> `token: token you saved from log in or sign up user`
- Response ==> data.data.message=> 'You are logged out.'

**http//localhost:3000/devices**

- Route ==> To create a device
- Method ==> POST
- Response ==> data.data.message=> 'Success'

**http//localhost:3000/devices/id**

- Route ==> To delete a device
- Method ==> DELETE
- Response ==> data.data.message=> 'No response'

**http//localhost:3000/devices/id**

- Route ==> To update a device
- Method ==> PUT
- Response ==> data.data.message=> 'Success'

## run tests

- npm test

## 🤝 contributing

## Author

- GitHub: [@arikarim](https://github.com/arikarim)
- LinkedIn: [AriKarim](https://www.linkedin.com/in/ari-karim-523bb81b3)

## 🙋‍♂ show your support

give a ⭐️ if you like this project!

## 📝 license

This project is [MIT](lisenced)
