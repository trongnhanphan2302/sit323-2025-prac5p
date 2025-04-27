# SIT323 - 5.1P - Containerisation of a simple web application using Docker

### Project Overview
This project is a simple calculator microservice built using Node.js and Express.  
It offers four REST API endpoints for fundamental arithmetic operations: addition, subtraction, multiplication, and division.

---
### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
### 1. Clone the Repository

```bash
git clone https://github.com/username/sit323-2025-prac5p.git
cd sit323-2025-prac5p
```

### 2. Build and Run the Application

```bash
docker-compose up --build
```

### 3. Access the API
``` bash
add:  http://localhost:3000/add?num1=<number>&num2=<number>
Subtraction:  http://localhost:3000/subtract?num1=<number>&num2=<number>
multiplication:  http://localhost:3000/multiply?num1=<number>&num2=<number>
Division:  http://localhost:3000/divide?num1=<number>&num2=<number>
``` 

### 4. Stop the Application
```bash
docker-compose down
```