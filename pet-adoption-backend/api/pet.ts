import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../utils/mongodb";
import Pet from "../models/pet";

const petsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, type, breed, description, ownerId } = req.body;
    const newPet = new Pet({
      name,
      type,
      breed,
      description,
      ownerId,
    });

    await newPet.save();
    return res.status(201).json(newPet);
  }

  if (req.method === "GET") {
    const client = await clientPromise;
    const db = client.db("pet-adoption-app");

    const pets = await db.collection("pets").find().toArray();
    return res.status(200).json(pets);
  }

  res.status(405).json({ message: "Method Not Allowed" });
};

export default petsHandler;
//"../../utils/mongodb";
