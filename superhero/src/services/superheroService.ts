import prisma from "../models/prismaClient";

export const createSuperhero = async (
  name: string,
  humilityScore: number,
  superpower: string
) => {
  return await prisma.superhero.create({
    data: {
      name,
      humilityScore,
      superpower,
    },
  });
};

export const getSuperheroes = async () => {
  return await prisma.superhero.findMany({
    orderBy: {
      humilityScore: "desc",
    }
  });
};

export const getSuperheroesById = async (id: number) => {
  return await prisma.superhero.findUnique({
    where: {
      id,
    },
  });
};
