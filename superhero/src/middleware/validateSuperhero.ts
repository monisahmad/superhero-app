import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
const superheroSchema = yup.object().shape({
  name: yup.string().required("Name is required."),
  superpower: yup.string().required("Superpower is required."),
  humilityScore: yup
    .number()
    .integer("Humility score must be an integer")
    .min(1, "Humility score must be between 1 and 10.")
    .max(10, "Humility score must be between 1 and 10.")
    .required("Humility score is required."),
});

export const validateSuperhero = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    req.body = await superheroSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    next();
  } catch (error: any) {
    if (error instanceof yup.ValidationError) {
      res.status(400).json({ errors: error.errors });
    } else {
      res.status(500).json("error validating superhero");
    }
  }
};
