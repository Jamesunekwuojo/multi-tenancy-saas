import prisma from "../config/db.js";

const JWT_SECRET = process.env.JWT_SECRET;
import bcrypt from "bcrypt";

export const createAdmin = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    // Check if the admin already exists
    const existingAdmin = await prisma.admin.findUnique({ where: { email } });
    if (existingAdmin) {
      return res.status(400).json({ error: "Admin already exists" });
    }


    const hashedPassword = await bcrypt.hash(password, 10);



    const admin = await prisma.admin.create({
      data: { name, email, password:hashedPassword },
    });

    // Generate JWT token
    const token = jwt.sign({ adminId: admin.id },  JWT_SECRET, {
      expiresIn: "1h",
    });


    res.status(201).json({ message:"Admin registered successfully", token });
    
  } catch (err) {
    console.log(err);
    next(err);
  }
};
