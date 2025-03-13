import prisma from "../config/db.js";

const JWT_SECRET = process.env.JWT_SECRET;
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

export const createAdmin = async (req, res, next) => {
  const { name, email, password } = req.body;

  console.log("Name, email", req.body);

  console.log("DATABASE_URL:", process.env.DATABASE_URL);


  try {
    // Check if the admin already exists
    const existingAdmin = await prisma.admin.findUnique({ where: { email } });
    if (existingAdmin) {
      return res.status(400).json({ error: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await prisma.admin.create({
      data: { name, email, password: hashedPassword },
    });

    // Generate JWT token
    const token = jwt.sign({ adminId: admin.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("Admin registered succesfully")

    res.status(201).json({ message: "Admin registered successfully", token, admin });

  } catch (error) {
   
    console.log(error.message)
    // next(err);
  }
};

export const loginAdmin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const admin = await prisma.admin.findUnique({ where: { email } });
    if (!admin) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ adminId: admin.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Admin logged in successfully", token });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
