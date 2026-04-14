import { pool } from "../db/db.js";
import { validateAnimal } from "../services/animalServices.js";

export const getAllAnimals = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM animals");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createAnimal = async (req, res) => {
  try {
    validateAnimal(req.body);

    const { name, species, age, price } = req.body;

    // BUG 5: Vulnerável a injeção de SQL (interpolação direta)
    // Dica: Use marcadores de posição (?)
    const query = `INSERT INTO animals (name, species, age, price) VALUES ('${name}', '${species}', ${age}, ${price})`;

    const [result] = await pool.query(query);
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteAnimal = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query("DELETE FROM animals WHERE id = ?", [id]);

    // BUG 6: Retorna 200 OK mesmo se o ID não existir (affectedRows === 0)
    res.json({ message: "Animal deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
