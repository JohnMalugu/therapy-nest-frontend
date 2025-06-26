# Therapy Nest Frontend

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

A modern, responsive dashboard for mental health professionals and users to track mood and journal analytics. Built with React and integrated with the [MindfulAI](https://github.com/) Spring Boot backend, this project visualizes AI-generated insights and trends from user journals.

---

## 🚀 Tech Stack

| Category            | Tech Details                                              |
|---------------------|-----------------------------------------------------------|
| **Frontend**        | React, Vite, TypeScript, TailwindCSS, Chart.js           |
| **Backend (API)**   | MindfulAI (Spring Boot), JWT Authentication, REST APIs   |
| **Routing & Tools** | React Router v6, Axios                                   |

---

## 📊 Key Features

- 📈 Interactive mood/journal trend charts using Chart.js  
- 🔐 Secure JWT authentication via the MindfulAI backend  
- 📱 Responsive design (mobile & desktop friendly)  
- 🧠 AI-powered sentiment highlights *(coming soon)*  

---

## 📁 Project Structure

| Path               | Description                                |
|--------------------|--------------------------------------------|
| `src/components/`  | Reusable UI components (e.g., MoodChart)   |
| `src/pages/`       | Main views/pages (Dashboard, Insights)     |
| `src/services/`    | API service clients (auth, journals)       |
| `src/types/`       | TypeScript interfaces and types            |
| `src/App.tsx`      | App entry and route definitions            |

---

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/therapy-nest-frontend.git
cd therapy-nest-frontend
```

### 2. Set Up Environment
Create a `.env` file in the root directory:
```
VITE_API_BASE_URL=http://localhost:8080/api
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```

App will be running at [http://localhost:5173](http://localhost:5173)

---

## 🌐 Backend API Endpoints (MindfulAI)

| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| GET    | `/journals`        | Fetch all user journal entries  |
| POST   | `/auth/login`      | Authenticate and receive token |
| POST   | `/journals`        | Submit new journal entry        |
| GET    | `/moods`           | Get mood analytics/trends       |

> 🔐 All endpoints require `Authorization: Bearer <token>`

---

## 🤝 Contributing

We welcome contributions! To get started:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to your branch (`git push origin feature-name`)
5. Open a pull request 🚀

Make sure to follow consistent code style and include relevant tests/documentation if applicable.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Built with 💙 to support mental wellness and data-driven insights.
