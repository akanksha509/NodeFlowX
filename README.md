# 🚀 NodeFlowX – Visual Node-Based Workflow Editor

**NodeFlowX** is a **drag-and-drop workflow editor** built using **React, FastAPI, and React Flow**. It enables users to create, connect, and manage **modular nodes** dynamically while ensuring pipeline validation through **Directed Acyclic Graph (DAG) detection**.

---

## 🌟 Features
- **Modular Node System** – Abstracted architecture for easy expansion  
- **Dynamic Text Nodes** – Auto-growing text input with real-time updates  
- **Pipeline Validation** – Ensures **DAG** (Directed Acyclic Graph) structure  
- **React Flow Integration** – Interactive drag-and-drop UI  
- **FastAPI Backend** – Handles pipeline logic & validation  
- **Deployable on Fly.io & Vercel** – Scalable, production-ready hosting  

---

## 📂 Project Structure

    NodeFlowX/
    ├── backend/               # FastAPI Backend
    │   ├── main.py            # FastAPI main file
    │   ├── helpers.py         # DAG validation logic
    │   ├── requirements.txt   # Backend dependencies
    │   ├── fly.toml           # Fly.io deployment config
    │   ├── .github/workflows/ # GitHub Actions for auto-deploy
    │   └── .venv/             # Virtual environment (excluded in .gitignore)
    ├── frontend/              # React Frontend
    │   ├── src/               # Source Code
    │   │   ├── components/    # UI Components
    │   │   ├── nodes/         # Abstracted Nodes
    │   │   ├── api/           # API Calls
    │   │   ├── store/         # State Management
    │   │   ├── styles/        # Tailwind CSS
    │   │   └── pages/         # Page Layouts
    │   ├── package.json       # Dependencies
    │   ├── .env               # Environment Variables
    │   ├── public/            # Static Files
    │   ├── vite.config.js     # Vite Config
    │   └── README.md          # Documentation
    ├── .gitignore             # Ignore unnecessary files
    └── README.md              # Main documentation

---

## 🔧 Installation & Setup

### 1️⃣ Backend (FastAPI)

1. Navigate to **backend** directory:
    
        cd backend

2. Create a virtual environment:
    
        python3 -m venv .venv

3. Activate the virtual environment:
   - **Windows**:
         
            .venv\Scripts\activate

   - **Mac/Linux**:
         
            source .venv/bin/activate

4. Install dependencies:
    
        pip install -r requirements.txt

5. Run the FastAPI backend:
    
        uvicorn main:app --reload --port 8000

---

### 2️⃣ Frontend (React)

1. Navigate to **frontend** directory:
    
        cd frontend

2. Install dependencies:
    
        npm install

3. Create a `.env` file in `frontend/` and set the backend API URL:
    
        VITE_API_URL=https://nodeflowx.fly.dev

4. Start the development server:
    
        npm run dev

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### 🎉 Enjoy building workflows with NodeFlowX! 🎉
