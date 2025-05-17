# Multi-Database Node.js Application

This is a Node.js application that connects to two different PostgreSQL databases using Prisma ORM and exposes the data through RESTful APIs.

## Databases

- employees_db: Stores employee information
- products_db: Stores product information

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Setup

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create two PostgreSQL databases:

   - employees_db
   - products_db

4. Create a `.env` file in the root directory with the following content:

   ```
   EMPLOYEES_DATABASE_URL="postgresql://username:password@localhost:5432/employees_db"
   PRODUCTS_DATABASE_URL="postgresql://username:password@localhost:5432/products_db"
   ```

   Replace username and password with your PostgreSQL credentials.

5. Generate Prisma client:

   ```bash
   npm run prisma:generate
   ```

6. Run database migrations:
   ```bash
   npm run prisma:migrate
   ```

## Running the Application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

The server will start on port 3000 by default.

## API Endpoints

### Employees API

- GET /api/employees - Get all employees
- POST /api/employees - Create a new employee
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "position": "Developer",
    "salary": 50000
  }
  ```

### Products API

- GET /api/products - Get all products
- POST /api/products - Create a new product
  ```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "price": 99.99,
    "stock": 100
  }
  ```
