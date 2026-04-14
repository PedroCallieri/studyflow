import { useEffect, useState } from "react";
import { fetchAnimals, removeAnimal } from "../api";
import { isPuppy, formatCurrency } from "../utils/validators";

export default function AnimalList({ refreshTrigger }) {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetchAnimals().then((data) => setAnimals(data));
  }, [refreshTrigger]);

  const handleDelete = async (id) => {
    await removeAnimal(id);
    // BUG 11: A atualização otimista falha se os tipos de ID não corresponderem (string vs. número)
    setAnimals(animals.filter((a) => a.id !== id));
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {animals.map((animal) => (
        <div key={animal.id} className="border p-4 rounded shadow">
          {/* BUG 12: Erro de diferenciação entre maiúsculas e minúsculas. Usando 'Name' em vez de 'name' */}
          <h3 className="font-bold text-xl">{animal.Name}</h3>

          <p>Species: {animal.species}</p>
          <p>
            Age: {animal.age} {isPuppy(animal.age) ? "(Puppy!)" : ""}
          </p>
          <p>Price: {formatCurrency(animal.price)}</p>

          <button
            onClick={() => handleDelete(animal.id)}
            className="bg-red-500 text-white px-2 py-1 mt-2 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
