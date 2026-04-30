# Quick Poll App

A real-time polling application where users can create polls, share them, vote once, and see live results instantly.

---

## Features

* Create polls with multiple options
* Share poll links with others
* One vote per user per poll
* Real-time vote updates using WebSockets
* Live result visualization with percentages
* Persistent user identity using localStorage

---

## Tech Stack

### Frontend

* HTML
* CSS
* Vanilla JavaScript

### Backend

* Node.js
* Express.js
* Socket.IO

### Database

* PostgreSQL
* Drizzle ORM

---

## Project Structure

```
quick-poll-app/
│
├── server.js
├── db.js
├── schema.js
├── routes/
│   └── poll.routes.js
│
├── public/
│   ├── index.html
│   └── poll.html
│
├── .env
├── package.json
└── README.md
```

---

## Installation

### 1. Clone the repository

```
git clone https://github.com/your-username/quick-poll-app.git
cd quick-poll-app
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Setup environment variables

Create a `.env` file in the root directory:

```
DATABASE_URL="your_postgres_connection_string"
BASE_URL="http://localhost:8080"
```

Example:

```
DATABASE_URL="postgres://user:password@host/db?sslmode=require&channel_binding=prefer"
```

---

### 4. Run database migrations

If using Drizzle:

```
npx drizzle-kit push
```

---

### 5. Start the server

```
node server.js
```

Server will run on:

```
http://localhost:8080
```

---

## Usage

### Create a Poll

* Open the home page
* Enter a question and options
* Click "Create Poll"

### Share Poll

* Copy the generated link
* Send it to others

### Vote

* Open the shared link
* Select an option
* Each user can vote only once per poll

### View Results

* Results update live across all connected users

---

## API Endpoints

### Create Poll

```
POST /api/poll
```

Request body:

```
{
  "question": "Your question",
  "options": ["Option 1", "Option 2"]
}
```

---

### Get Poll

```
GET /api/poll/:id
```

---

### Vote

```
POST /api/poll/:pollId/vote
```

Request body:

```
{
  "optionId": "option_id",
  "userId": "unique_user_id"
}
```

---

## Real-time Updates

* Socket.IO is used for real-time communication
* Users join a poll-specific room
* Votes trigger live updates to all connected clients

---

## Important Notes

* Each user is identified using `localStorage`
* Votes are restricted per user per poll
* Backend validates duplicate voting
* Frontend reflects vote status immediately

---

## Future Improvements

* Authentication system
* Poll expiration time
* Multiple-choice polls
* Better UI/UX
* Mobile responsiveness
* Deployment and scaling

---

## License

This project is open source and available under the MIT License.

---
