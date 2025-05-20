# Product Feed Sync UI

This project is a full-stack application for searching product data via a React frontend and an Express backend.

## Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Express.js + Redis + PostgreSQL
- **Communication**: REST API (`/products/search?title=...`)

## Setup

### 1. Clone the repos

```bash
git clone https://github.com/your-org/Product-Feed-Sync.git
git clone https://github.com/your-org/Product-Feed-Sync-UI.git
```

### 2. Backend Setup

```bash
cd Product-Feed-Sync
npm install
```

Create a `.env` file based on `.env.example`, and configure it with the correct Redis, PostgreSQL, and server port values.

Start the backend:
```bash
npm start
```

### 3. Frontend Setup

```bash
cd Product-Feed-Sync-UI
npm install
```

Create a `.env` file based on `.env.example`, and set the backend URL
```bash
VITE_API_URL=http://localhost:<server_port>
```

Start the frontend
```bash
npm run dev
```

## Product Search Usage

- Enter a product title in the search bar.
- Click **Search** to fetch matching results.
- The frontend sends a request to:

```
GET http://<host>:<port>/products/search?title=your+query
```

- Results include product title, price, image, availability, and a link.
