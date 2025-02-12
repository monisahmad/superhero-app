import logo from "./hs.webp";
import "./App.css";
import SuperHeroTable from "./components/SuperHeroTable";
import CreateSuperHero from "./components/CreateSuperHero";
import useSWR from "swr";
import { Paper } from "@mui/material";

function App() {
  const fetcher = async () => {
    const data = await fetch("http://localhost:3001/superheroes");
    return await data.json();
  };

  const { data, error, isLoading, mutate } = useSWR("getSuperheroes", fetcher);
  const handleMutate = async () => {
    console.log("handleMutate");

    await mutate();
  };
  return (
    <div className="App">
      <header className="App-header">
        <Paper sx={{ padding: 4 }}>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ height: 300 }}
        />
        <CreateSuperHero mutate={handleMutate} />
        <SuperHeroTable data={data} isLoading={isLoading} error={error} />
        </Paper>
      </header>
    </div>
  );
}

export default App;
