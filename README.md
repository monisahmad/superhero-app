The humble Superhero app demonstrates a basic API created using ExpressJs, NODEJS and ReactJS.
Created by Monis Ahmad, you can contact me at monis.ahmad42@gmail.com

TechStack Used
- NodeJs
- ExpressJs
- Typescript
- PrismaORM
- sqlLite
- Jest
- ReactJs
- MaterialUI

  The task required to create  two endpoints 
POST /superheroes - create a superhero
  body {name: string, superPower: string, humilityScore: number (between 1 - 10)}

GET /superheroes - return list of all superheroes order in descending humilityScore

Also created 
GET /superheroes/:id - return details of a single superhero with id

## Steps to Run the application
- Clone the repo locally
- run `npm  install` it should install all the packages required by both frontend and backend. if for some reason it does not work, you can run npm install in respective folders
- run `npm run start`, it should start both frontend and backend applications concurrently, you can run individual apps from their own folders
- The database used in in-memory sqllite so some data should be available to test the application, you can create your data set by using the react form


## If I had more time 
there are always this that you can expand and improve upon in an application. If given more time I'd 
- create more endpoints like delete, update superhero
- have a logging system in place to help debug easily and catch errors
- Monitoring and alerting
- have more tests than the basic test we currently have
- use a proper database like PostgreSQL or MySQL
- have better UI/UX
- Have pages dedicated to each superhero, with the option to upload images

## Collaboration with team

We can easily collaborate with the team by pre-defining the requirements, like the endpoints, and the data we are supposed to send and receive for the endpoint.
Following the REST guidelines and standards so that the API is easy to understand and share  with everyone and it follows a set pattern and functionality
Having rituals like stand-up, sharing problems faced and the solution within the team so that we can learn from each others mistakes and problems is a good way of collaboration.
Having regular 1:1 and learning sessions within the team, and sharing knowledge in our specific areas of experience bring up the level of everyone

