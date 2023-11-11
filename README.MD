
<br/>
<div align="center">
<h3 align="center"> MERN To-Do List </h3>
<p aligb="center">
  A To-Do List app implemented using MERN Stack.
</p>
<a href="https://todolist-2mdv.onrender.com"><strong>View the demo</strong></a>
</div>

<details>
<summary>Table of Content</summary>
</details>

## About The Project

<p align="center">
<img src="https://github.com/tyw05/toDoListMERN/assets/120542125/f0c13b27-c9b0-492a-8083-ba57046548b2" height="600">
</p>

<br/>
This project is a to-do list implemented with MERN stack. The users can create and login to their accounts, the username and password will be stored in the database.
The password is encryped into a passwordHash and will be secured in the database. 

![to-do-list](https://github.com/tyw05/toDoListMERN/assets/120542125/41d87f4b-d494-4c87-9952-5071eb21f589)
<br/>
After they login, a token will be generated for the valid user and they can create, edit or remove their tasks in their list.
They can mark the tasks as finished and change the displayed tasks using the filter options.
The modification to the tasks will also be retained in the database.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

Here are the technologies utilized in this project.

* [![MongoDB][MongoDB]][MongoDB-url]
* [![Express][Express.js]][Express-url]
* [![React][React.js]][React-url]
* [![Node][Node.js]][Node-url]
* [![Vite][Vite.js]][Vite-url]
* [![Tailwind][TailwindCSS]][Tailwind-url]

## Getting Started 

If you want to run this locally, follow these steps.

### FrontEnd

To test the frontend, 
* npm 
```sh
npm install npm run dev
```
Note that you should start the backend server to use the login function

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### BackEnd

Since the frontend had already been build as a static page in backend folder, you can directly run the following to observe the fullstack implementation.

*npm
```sh 
npm install npm start
```

For any modification in frontend, you can run 

*npm
```sh
npm run build:ui
```

to rebuild the project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/tyw05/toDoListMERN/tree/main
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

3.Environment variables are needed to run the backend locally. Add .env with the following,
```sh
MONGO_URI = YOUR_URI
PORT = YOUR_PORT
SECRET = SECRET
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Vite.js]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
