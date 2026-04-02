🚀 Employee Management System

A full-stack web application to manage employee data efficiently with modern technologies like React.js, Spring Boot, and MySQL.

📌 Project Overview

The Employee Management System is designed to simplify employee data handling with a user-friendly interface and powerful backend services. It allows organizations to manage employee records seamlessly with real-time updates and efficient database operations.

🧠 Tech Stack
🔹 Frontend
HTML
CSS
JavaScript
React.js
🔹 Backend
Java (Spring Boot)
REST APIs
🔹 Database
MySQL
✨ Features
➕ Add new employees
📋 View employee list
✏️ Update employee details
❌ Delete employees
🔍 Search employees (optional enhancement)
📄 Responsive UI with React
🔗 RESTful API integration
⚡ Fast and optimized data handling
🏗️ System Architecture
React Frontend  →  Spring Boot Backend  →  MySQL Database
📂 Project Structure
employee-management-system/
│
├── backend/ (Spring Boot)
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── model/
│   └── application.properties
│
├── frontend/ (React)
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.js
│
└── README.md
⚙️ Installation & Setup
🔹 Backend (Spring Boot)
cd backend
mvn spring-boot:run

✔️ Configure database in application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
🔹 Frontend (React)
cd frontend
npm install
npm start
🔌 API Endpoints
Method	Endpoint	Description
GET	/employees	Get all employees
GET	/employees/{id}	Get employee by ID
POST	/employees	Create new employee
PUT	/employees/{id}	Update employee
DELETE	/employees/{id}	Delete employee

🧑‍💻 Author

Manmohan Reddy

GitHub: https://github.com/manmohangithub
LinkedIn: https://www.linkedin.com/in/manmohanreddy1111
