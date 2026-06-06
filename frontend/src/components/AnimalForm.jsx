import { useState } from "react";
import { postAnimal } from "../api";
import { validateForm } from "../utils/validators";

export default function AnimalForm({ onAnimalAdded }) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm(name, species)) {
      alert("Invalid Input");
      return;
    }

    // BUG 10: Envia 'idade' como string. O backend espera um número (mas possui um bug de verificação rigorosa).
    await postAnimal({ name, species, age, price: Number(price) });

    setName("");
    setSpecies("");
    setAge("");
    setPrice("");
    onAnimalAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border mb-4">
      <h3>Add New Animal</h3>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        placeholder="Species"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Add Animal</button>
    </form>
  );
}
