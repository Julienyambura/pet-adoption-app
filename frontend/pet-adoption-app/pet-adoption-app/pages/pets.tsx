import { useEffect, useState } from "react";
import axios from "axios";

const PetsPage = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get("/api/pets");
        setPets(response.data);
      } catch (err) {
        console.error("Error fetching pets:", err);
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="space-y-4">
      {pets.map((pet) => (
        <div key={pet.id} className="p-4 bg-white shadow-md rounded-md">
          <img
            src={pet.profilePic}
            alt={pet.name}
            className="w-full h-64 object-cover rounded-md"
          />
          <h3 className="text-xl font-bold mt-2">{pet.name}</h3>
          <p>{pet.breed}</p>
          <p>{pet.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PetsPage;
