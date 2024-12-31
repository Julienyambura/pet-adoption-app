import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import clientPromise from "../utils/mongodb";
import User from "../models/user";
import { sign } from "jsonwebtoken";

const authHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const client = await clientPromise;
    const db = client.db("pet-adoption-app");

    const user = await db.collection("users").findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    return res
      .status(200)
      .json({ message: "Authenticated successfully", token });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default authHandler;
//"../../utils/mongodb";
