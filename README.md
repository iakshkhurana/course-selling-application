Here’s the full README.md in Markdown format:

```markdown
# Node.js Backend Project

This project is a backend application built with Node.js, featuring user and admin authentication, MongoDB integration, and CRUD operations for managing courses.

---

## Features

### User Functionality
- Login
- Signup
- Purchase courses
- View available courses

### Admin Functionality
- Login
- Signup
- Create courses
- Delete courses
- Add course content

---

## Tech Stack

- **Node.js**: Backend runtime
- **Express**: Web framework for building APIs
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **JWT (JSON Web Token)**: Authentication
- **dotenv**: Environment variable management

---

## Project Structure

```
project/
├── index.js          # Entry point of the application
├── routes/           # Route handlers for user and admin
├── models/           # Mongoose schemas for database entities
├── middlewares/      # Middleware for authentication
├── .env              # Environment variables
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation
```

---

## Installation and Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     MONGO_URI=<your-mongodb-connection-string>
     JWT_SECRET=<your-secret-key>
     PORT=3000
     ```

4. **Start the server**
   ```bash
   node index.js
   ```

5. **Access the application**
   - The server will be running at `http://localhost:3000`.

---

## API Endpoints

### User Routes
- **POST** `/user/signup`: Register a new user.
- **POST** `/user/login`: Login as a user.
- **GET** `/user/courses`: View available courses.
- **POST** `/user/purchase/:courseId`: Purchase a course.

### Admin Routes
- **POST** `/admin/signup`: Register a new admin.
- **POST** `/admin/login`: Login as an admin.
- **POST** `/admin/courses`: Create a new course.
- **DELETE** `/admin/courses/:courseId`: Delete a course.
- **PATCH** `/admin/courses/:courseId`: Add content to a course.

---

## Mongoose Schemas

### User Schema
```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

module.exports = mongoose.model("User", userSchema);
```

### Admin Schema
```javascript
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

module.exports = mongoose.model("Admin", adminSchema);
```

### Course Schema
```javascript
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  content: String,
});

module.exports = mongoose.model("Course", courseSchema);
```

### Purchase Schema
```javascript
const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Purchase", purchaseSchema);
```

---

## Middleware

### Authentication Middleware
```javascript
const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Forbidden" });
    }
    req.user = user;
    next();
  });
}

module.exports = authenticate;
```

---

## Future Enhancements

- Add input validation with `express-validator`.
- Implement role-based access control.
- Integrate a payment gateway for course purchases.
- Build a dashboard for users and admins.
- Optimize database queries for better performance.

---

## License

This project is licensed under the MIT License.

---
```

This is the entire README.md file in Markdown format. You can copy and paste this content directly into your README.md file. Let me know if you need any modifications!