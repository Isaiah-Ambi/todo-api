# Todo List API

Sample solution for the [todo-list-api](https://roadmap.sh/projects/todo-list-api) challenge from [roadmap.sh](https://roadmap.sh/).

## Features

- User registration and login (JWT authentication)
- Create, read, update, and delete tasks
- Protected routes for authenticated users

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)

### Installation

```bash
git clone https://github.com/yourusername/todo-api.git
cd todo-api
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add:

```
MONGODB_URI=your_mongodb_connection_string
SECRET=your_jwt_secret
PORT=3000
```

### Running the Server

```bash
npm start
```

Server will run on `http://localhost:3000`.

## API Endpoints

### Auth

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and get JWT token
- `GET /api/auth/me` — Get current user info (protected)

### Tasks

- `GET /api/tasks` — Get all tasks (protected)
- `POST /api/tasks` — Create a new task (protected)
- `GET /api/tasks/:id` — Get a task by ID (protected)
- `PUT /api/tasks/:id` — Update a task (protected)
- `DELETE /api/tasks/:id` — Delete a task (protected)

## Example Request

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

## License

MIT

