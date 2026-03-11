## Database Setup

Install PostgreSQL

Create database:

```bash
createdb subscription_db
```

Import schema:

```bash
psql subscription_db < database.sql
```

Start backend:

```bash
npm install
node server.js
```