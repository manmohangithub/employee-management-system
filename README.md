Employee Management System

A full-stack web application to manage employee records using React.js, Spring Boot, and MySQL.

Overview

This project allows users to perform basic employee operations such as adding, viewing, updating, and deleting employee details. It follows a structured architecture with a React frontend, Spring Boot backend, and MySQL database.

Tech Stack
Frontend: React.js, HTML, CSS, JavaScript
Backend: Java, Spring Boot
Database: MySQL
Features
Add new employees
View all employees
Update employee details
Delete employees
REST API integration
Responsive user interface
Project Structure
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
Setup Instructions
Backend
cd backend
mvn spring-boot:run

Configure database in application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
Frontend
cd frontend
npm install
npm start
API Endpoints
GET /employees → Get all employees
GET /employees/{id} → Get employee by ID
POST /employees → Create employee
PUT /employees/{id} → Update employee
DELETE /employees/{id} → Delete employee
Author

Manmohan Reddy
GitHub: https://github.com/manmohangithub

LinkedIn: https://www.linkedin.com/in/manmohangithub
