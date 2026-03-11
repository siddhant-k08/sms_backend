# Subscription Manager — Backend

Backend API for the Subscription Manager application.

This project provides a REST API built using **Node.js, Express, and PostgreSQL** that allows users to create, read, update, and delete subscription records.

---

# Tech Stack

* Node.js
* Express.js
* PostgreSQL
* pg (PostgreSQL client for Node)

---

# Project Structure

backend
├ controllers
│ └ subscriptionController.js
├ routes
│ └ subscriptions.js
├ db.js
├ server.js
├ schema.sql
├ package.json
└ README.md

---

# Features

* Create subscription
* View subscriptions
* Update subscription
* Delete subscription
* PostgreSQL database storage
* REST API endpoints

---

# API Endpoints

| Method | Endpoint               | Description               |
| ------ | ---------------------- | ------------------------- |
| GET    | /api/subscriptions     | Get all subscriptions     |
| GET    | /api/subscriptions/:id | Get a single subscription |
| POST   | /api/subscriptions     | Create new subscription   |
| PUT    | /api/subscriptions/:id | Update subscription       |
| DELETE | /api/subscriptions/:id | Delete subscription       |

---

# Prerequisites

Install the following software:

* Node.js
* PostgreSQL

---

# Setup Instructions

## 1. Clone Repository

git clone <backend-repo-url>
cd backend

---

## 2. Install Dependencies

npm install

---

## 3. Setup PostgreSQL Database

Create the database:

createdb subscription_db

Import the database schema:

psql subscription_db < schema.sql

This will create the required table structure.

---

## 4. Configure Database Connection

Edit `db.js` if needed:

const pool = new Pool({
user: "postgres",
host: "localhost",
database: "subscription_db",
password: "",
port: 5432,
});

---

## 5. Run the Backend Server

node server.js

Server will start on:

http://localhost:5000

---

# Example API Request

Create Subscription

POST /api/subscriptions

Example body:

{
"user_email": "[user@email.com](mailto:user@email.com)",
"plan_name": "Netflix",
"start_date": "2024-01-01",
"end_date": "2024-02-01",
"monthly_cost": 9.99,
"status": "Active"
}

---

# Testing API

You can test endpoints using:

* curl
* Postman
* frontend application

---

# Notes

* Database must be running before starting the server.
* The backend runs on port **5000** by default.

---

# License

This project is for educational purposes.
