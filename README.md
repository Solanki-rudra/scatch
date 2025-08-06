# 🥾 Shoe E‑Commerce Backend Project

This is a backend learning project where I’m building a fully functional e‑commerce API for selling shoes.  
The goal is to strengthen backend skills including routing, database integration, authentication, and RESTful API design.

🎥 **Tutorial followed**:  
[YouTube Series – Backend E-Commerce Project (Node.js + MongoDB)](https://www.youtube.com/watch?v=p0dCi5D6gDI&list=PLbtI3_MArDOkXRLxdMt1NOMtCS-84ibHH&index=23)

---

## 🚀 Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB ODM
- **JWT** – JSON Web Token for authentication
- **bcrypt** – Password hashing
- **dotenv** – Environment variable management
- **nodemon** – Auto-reloading dev server

---

## 📦 Features

- ✅ User Registration & Login with JWT
- ✅ Password encryption with bcrypt
- ✅ Shoe Product CRUD (Create, Read, Update, Delete)
- ✅ Role-based access for admin
- ✅ Shopping Cart logic
- ✅ Order creation and tracking
- ✅ MongoDB-based persistent storage

---

## 🛠️ Installation & Setup

```bash
# Clone this repository
git clone https://github.com/your-username/shoe-store-backend.git
cd shoe-store-backend

# Install dependencies
npm install

# Create a .env file and add the following variables:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Start the development server
npm run dev
