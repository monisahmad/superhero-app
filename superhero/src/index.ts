import express from "express";
import superheroRoutes from "./routes/superheroRoutes";
import cors from "cors"; // Import CORS


const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());

app.use("/superheroes", superheroRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
export default app;