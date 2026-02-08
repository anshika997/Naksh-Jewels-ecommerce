 Naksh Jewels E-Commerce Module

A mini e-commerce application built with React and Node.js, featuring Docker containerization.

##  Features

- Product listing with beautiful UI
- Shopping cart functionality
- Add/Remove/Update quantity
- Responsive design
- RESTful API backend
- Docker containerization

##  Tech Stack

**Frontend:**
- React 18
- React Router DOM
- Context API (State Management)
- Custom CSS

**Backend:**
- Node.js
- Express.js
- CORS
- Validation Middleware

**DevOps:**
- Docker
- Docker Compose

##  Prerequisites

- Node.js (v18 or higher)
- Docker Desktop
- Git

##  Running Locally (Without Docker)

### Backend Setup
```bash
cd backend
npm install
npm start
```

Backend will run on `http://localhost:5000`

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

Frontend will run on `http://localhost:3000`

##  Running with Docker (Recommended)

1. **Clone the repository**
```bash
git clone 
cd ecommerce-project
```

2. **Build and run containers**
```bash
docker-compose up --build
```

3. **Access the application**
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

4. **Stop containers**
```bash
docker-compose down
```

##  Project Structure
```
ecommerce-project/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── styles/
│   ├── Dockerfile
│   └── package.json
├── backend/
│   ├── routes/
│   ├── middleware/
│   ├── data/
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
```

## API Endpoints

### GET /api/products
Returns all products

**Response:**
```json
{
  "success": true,
  "count": 6,
  "data": [...]
}
```

### POST /api/cart
Submit cart data

**Request Body:**
```json
{
  "items": [
    { "id": 1, "quantity": 2 },
    { "id": 3, "quantity": 1 }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Cart submitted successfully",
  "data": {
    "items": [...],
    "totalAmount": 50000,
    "itemCount": 2
  }
}
##  Screenshots

[Add screenshots here]

##  Developer

[Your Name]


```
