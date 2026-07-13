# 📝 Full-Stack ToDo Application

A modern Full-Stack ToDo application built with **Angular** and **ASP.NET Core Web API**. The application provides a responsive user interface, persistent data storage with SQL Server, and a RESTful API powered by Entity Framework Core.

---

## 🚀 Features

- ✅ Create, update, and delete tasks
- ✅ Mark tasks as completed or active
- ✅ Filter tasks (All, Active, Completed)
- ✅ Server-side filtering using LINQ queries
- ✅ Drag & Drop task reordering (Angular CDK)
- ✅ Dark / Light theme
- ✅ Responsive design
- ✅ SQL Server database persistence
- ✅ RESTful API architecture

---

## 🛠️ Tech Stack

### Frontend
- Angular
- TypeScript
- SCSS
- Angular CDK
- RxJS

### Backend
- ASP.NET Core Web API
- C#
- Entity Framework Core

### Database
- SQL Server

---

## 📁 Project Structure

```
TodoApp
│
├── Frontend/       # Angular application
├── Backend/        # ASP.NET Core Web API
└── README.md
```

---

# 🔧 Getting Started

## Prerequisites

Install the following before running the project:

- .NET SDK 8.0 (or your project version)
- Node.js (LTS)
- Angular CLI

```bash
npm install -g @angular/cli
```

- SQL Server or SQL Server LocalDB
- Visual Studio 2022 or VS Code

---

## 1️⃣ Clone the repository

```bash
git clone https://github.com/akaneDM/YOUR-REPOSITORY.git

cd YOUR-REPOSITORY
```

---

## 2️⃣ Backend Setup

Navigate to the backend folder.

```bash
cd Backend
```

### Configure the database

Open

```
appsettings.json
```

Update the connection string if needed.

Example:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server="serverName";Database=TodoDb;Trusted_Connection=True;TrustServerCertificate=True;"
}
```

---

### Create the database

Run:

```bash
dotnet ef database update
```

This will automatically create the database using the included Entity Framework Core migrations.

---

### Start the backend

```bash
dotnet run
```

The API will usually be available at

```
https://localhost:xxxx
```

Swagger documentation:

```
https://localhost:xxxx/swagger
```

---

## 3️⃣ Frontend Setup

Navigate to the frontend folder.

```bash
cd Frontend
```

Install dependencies.

```bash
npm install
```

Run Angular.

```bash
ng serve
```

The application will be available at

```
http://localhost:4200
```

---

## 📦 Database

The project uses **Entity Framework Core** with SQL Server.

The required migrations are already included.

Simply run:

```bash
dotnet ef database update
```

No manual SQL scripts are required.


## 📚 What I Learned

During this project I practiced:

- Building REST APIs with ASP.NET Core
- Entity Framework Core
- SQL Server
- CRUD Operations
- LINQ Queries
- Angular Services
- HTTP Client
- Component Communication
- Responsive UI Design
- Drag & Drop functionality
- Clean project structure

---

## 👨‍💻 Author

**akane**

GitHub:
https://github.com/akaneDM
