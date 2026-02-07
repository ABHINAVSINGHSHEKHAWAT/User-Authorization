🔐 User Authentication System

A full-stack User Authentication System built using Node.js, Express, MongoDB, JWT, and EJS.
This project demonstrates authentication, authorization, password hashing, and protected routes with a clean server-side rendered UI.

🚀 Features

User Registration

User Login

Password Hashing using bcrypt

Authentication using JWT

JWT stored securely in HTTP-only cookies

Protected routes

Logout functionality

Server-side rendering with EJS

Clean MVC-style folder structure

🛠️ Tech Stack

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT (JSON Web Tokens)

bcryptjs

Frontend

EJS (Embedded JavaScript Templates)

HTML / CSS

📁 Project Structure
user-authentication-system/
│
├── config/
│   └── db.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── authRoutes.js
│
├── views/
│   ├── login.ejs
│   └── register.ejs
│
├── .env
├── .gitignore
├── server.js
├── package.json
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/user-authentication-system.git
cd user-authentication-system

2️⃣ Install dependencies
npm install

3️⃣ Setup environment variables

Create a .env file in root:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4️⃣ Run the project
npm start


or (if using nodemon):

npm run dev

5️⃣ Open in browser
http://localhost:5000

🔐 Authentication Flow

User registers → password is hashed and stored in MongoDB

User logs in → password is verified

JWT is generated and stored in HTTP-only cookie

Protected routes verify JWT before access

Logout clears authentication cookie



🎯 Learning Outcomes

Understanding authentication & authorization

JWT implementation with cookies

Secure password storage

Express middleware usage

MongoDB schema design

Real-world backend project structure

👨‍💻 Author

Abhinav Singh Shekhawat
Final Year B.Tech (CSE) Student
Aspiring Full-Stack Developer



⭐ If you like this project

Give it a star ⭐ on GitHub — it motivates me!