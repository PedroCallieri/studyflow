import { useState } from "react";
import AnimalList from "./components/AnimalList";
import AnimalForm from "./components/AnimalForm";

function App() {
  const [refresh, setRefresh] = useState(0);

  const handleRefresh = () => {
    setRefresh((prev) => prev + 1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Kennel Shop Inventory</h1>
      <AnimalForm onAnimalAdded={handleRefresh} />
      <AnimalList refreshTrigger={refresh} />
    </div>
  );
}

export default App;
