import { Request, Response } from "express";
import {
  createSuperhero,
  getSuperheroes,
  getSuperheroesById,
} from "../services/superheroService";

export const createSuperheroController = async (
  req: Request,
  res: Response
) => {
  const { name, humilityScore, superpower } = req.body;
  try {
    const superhero = await createSuperhero(name, humilityScore, superpower);
    res.status(201).json(superhero);
  } catch (error) {
    res.status(401).json("error creating superhero");
  }
};

export const getSuperheroesController = async (req: Request, res: Response) => {
  try {
    
    const superheroes = await getSuperheroes();
    res.status(200).json(superheroes);
  } catch (error) {
    res.status(401).json("error getting superheroes");
  }
};

export const getSuperheroesByIdController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  try {
    const superhero = await getSuperheroesById(Number(id));
    if (!superhero) {
      res.status(404).json("superhero not found");
    } else {
      res.status(200).json(superhero);
    }
  } catch (error) {
    res.status(401).json("error getting superhero");
  }
};
