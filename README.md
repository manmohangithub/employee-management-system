🚀 Employee Management System

A full-stack web application to manage employee records efficiently using React.js, Spring Boot, and MySQL.

📌 Overview

This project allows users to perform basic employee operations such as adding, updating, deleting, and viewing employee details through a responsive interface. It follows a clean frontend–backend–database architecture using REST APIs.

🧠 Tech Stack

Frontend: React.js, HTML, CSS, JavaScript
Backend: Java, Spring Boot
Database: MySQL

✨ Features
Add new employees
View all employees
Update employee details
Delete employee records
Responsive UI
REST API integration

🏗️ Architecture
Frontend (React)
        ↓
Backend (Spring Boot REST API)
        ↓
Database (MySQL)

📂 Project Structure
employee-management-system/
│
├── backend/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── model/
│   └── application.properties
│
├── frontend/
│   ├── components/
│   ├── services/
│   └── App.js
│
└── README.md

⚙️ Setup Instructions

1️⃣ Backend
cd backend
mvn spring-boot:run

Update database configuration:

spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update

2️⃣ Frontend
cd frontend
npm install
npm start

🔌 API Endpoints
Method	Endpoint	Description
GET	/employees	Get all employees
GET	/employees/{id}	Get by ID
POST	/employees	Create employee
PUT	/employees/{id}	Update employee
DELETE	/employees/{id}	Delete employee

👨‍💻 Author

Manmohan Reddy
GitHub: https://github.com/manmohangithub

LinkedIn: https://www.linkedin.com/in/manmohanreddy1111
