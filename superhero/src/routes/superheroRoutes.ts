import express from "express";
import { createSuperheroController, getSuperheroesByIdController, getSuperheroesController } from "../controllers/superheroController";
import { validateSuperhero } from "../middleware/validateSuperhero";

const router = express.Router();

router.post("/",validateSuperhero, createSuperheroController);
router.get("/", getSuperheroesController);
router.get("/:id", getSuperheroesByIdController);

export default router;