import request from "supertest";
import app from "../src/index"; 
import prisma from "../src/models/prismaClient";

describe("Superhero API - POST /superheroes", () => {
  afterAll(async () => {
    await prisma.superhero.deleteMany();
    await prisma.$disconnect(); // Close Prisma connection
  });

  it("should create a new superhero when valid data is provided", async () => {
    const newSuperhero = {
      name: "Iron Man",
      superpower: "Genius intellect",
      humilityScore: 4,
    };

    const response = await request(app).post("/superheroes").send(newSuperhero);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe(newSuperhero.name);
    expect(response.body.superpower).toBe(newSuperhero.superpower);
    expect(response.body.humilityScore).toBe(newSuperhero.humilityScore);
  });

  it("should return 400 when required fields are missing", async () => {
    const invalidSuperhero = {
      name: "", // Invalid name
      superpower: "Flying", // Valid
      humilityScore: 200, // Out of range
    };

    const response = await request(app)
      .post("/superheroes")
      .send(invalidSuperhero);

    expect(response.status).toBe(400);
    expect(response.body.errors).toContain("Name is required.");
    expect(response.body.errors).toContain(
      "Humility score must be between 1 and 10."
    );
  });
});
