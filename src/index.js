const express = require("express");
const {
  PrismaClient: EmployeesPrismaClient,
} = require("@prisma-employees/client");
const {
  PrismaClient: ProductsPrismaClient,
} = require("@prisma-products/client");
require("dotenv").config();

const app = express();
app.use(express.json());

// Initialize Prisma clients for both databases
const employeesPrisma = new EmployeesPrismaClient();

const productsPrisma = new ProductsPrismaClient();

// Employees API Routes
app.get("/api/employees", async (req, res) => {
  try {
    const employees = await employeesPrisma.employee.findMany({
      select: {
        name: true,
        email: true,
        position: true,
        salry: true,
      },
    });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: "Error fetching employees" });
  }
});

app.post("/api/employees", async (req, res) => {
  try {
    const { name, email, position, salary } = req.body;
    const employee = await employeesPrisma.employee.create({
      data: {
        name,
        email,
        position,
        salary: parseFloat(salary),
      },
    });
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: "Error creating employee" });
  }
});

// Products API Routes
app.get("/api/products", async (req, res) => {
  try {
    const products = await productsPrisma.product.findMany({
      select: {
        name: true,
        description: true,
        price: true,
        stock: true,
      },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const product = await productsPrisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        stock: parseInt(stock),
      },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error creating product" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
