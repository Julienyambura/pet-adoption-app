import { useState } from "react";
import axios from "axios";

const PetForm = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const petData = { name, type, breed, description, profilePic };

    try {
      const response = await axios.post("/api/pets", petData);
      console.log("Pet added:", response.data);
    } catch (err) {
      console.error("Error adding pet:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">Add New Pet</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Pet Name"
          className="w-full p-2 border rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Type (e.g., Dog, Cat)"
          className="w-full p-2 border rounded-md"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Breed"
          className="w-full p-2 border rounded-md"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded-md"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Profile Picture URL"
          className="w-full p-2 border rounded-md"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md"
        >
          Add Pet
        </button>
      </form>
    </div>
  );
};

export default PetForm;
