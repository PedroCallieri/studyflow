const API_URL = "http://localhost:3000";

export const fetchAnimals = async () => {
  const response = await fetch(`${API_URL}/animals`);
  return response.json();
};

export const postAnimal = async (animal) => {
  const response = await fetch(`${API_URL}/animals`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(animal),
  });
  return response.json();
};

export const removeAnimal = async (id) => {
  await fetch(`${API_URL}/animals/${id}`, { method: "DELETE" });
};
