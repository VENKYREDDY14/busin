# GrowthProAI Mini Local Business Dashboard

This is a **full stack project** simulating a local business SEO and Google rating dashboard. The app allows users to input a business name and location, fetches simulated insights, and displays them in a responsive UI.

---

## Features

- Input a business name and location  
- Get simulated:
  - Google rating  
  - Number of reviews  
  - AI-generated SEO headline  
- Regenerate SEO headline with one click  
- Fully responsive UI built with **React** & **Tailwind CSS**  
- **Node.js + Express** backend with clean folder structure (routes, controllers, middleware)  
- Spinner loading animation and client-side form validation  

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, React Context API, React Loader Spinner  
- **Backend:** Node.js, Express.js  
- **Deployment (optional):** Vercel (Frontend), Render (Backend)

---

##  Project Structure

business/
├── frontend/                # React + Tailwind CSS
│   └── src/
│       ├── components/
│       │   ├── BusinessForm.js
│       │   ├── DisplayCard.js
│       │   └── Spinner.js
│       ├── context/
│       │   └── BusinessContext.js
│       └── App.js
├── backend/                 # Node.js + Express API
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   └── index.js


---

## Setup Instructions

### 🔹 Prerequisites

- Node.js & npm  
- Git

---

### 🔹 Clone the Repository

```bash
git clone https://github.com/VENKYREDDY14/business.git
cd business

Backend Setup (/backend)
cd backend
npm install
npm start
Backend runs at: http://localhost:5000

 Frontend Setup (/frontend)
 cd ../frontend
npm install

Create a .env file in /frontend:
REACT_APP_BACKEND_URL=http://localhost:5000

Run the frontend:
npm start

Frontend runs at: http://localhost:3000
Deployed Links 
Replace with your actual deployment URLs if available.

Frontend: https://your-frontend.vercel.app

Backend API: https://your-backend.onrender.com
