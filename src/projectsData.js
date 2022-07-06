module.exports = {
  projects: [

    {
      title: "Timeless BackEnd and Systems Design",
      github: "https://github.com/Tweed-BGE0/ProductsAPI-Cory",
      gif: "",
      screenshot: "",
      description: "Back end API and Database for an e-commerce application. Custom ETL process into postgreSQL database loading over 52 Million records. Defined Routes and queries and maintained <10ms query response time. Containerized API with docker and spun up on AWS EC2 instance, repeated ETL process on seperate EC2 containing a clean postgres db. Added security to the databases instance to only allow communication with the containerized API. Connected front end to api and did light testing handling up to 400 RPS.",
      techStack: ["postgreSQL", "Node.js / Express", "Docker", "AWS"],
    },
    {
      title: "Hitch",
      github: "https://github.com/project-blue-ocean/hitch",
      gif: "https://user-images.githubusercontent.com/52397472/152585942-62d31d64-9924-45ec-aafb-06d2fb6b1032.gif",
      screenshot: "",
      description: "Ride share application",
      techStack: ["React with react router", "material-UI", "FireBase"],
    },

    {
      title: "Timeless FrontEnd",
      github: "https://github.com/Poseidon-rfe7/CatWalk",
      gif: "https://user-images.githubusercontent.com/89159410/153037509-f06d18e1-04db-43ef-b809-5dbe33e1e482.gif",
      screenshot: "",
      description: "Front-end portal for an e-commerce application",
      techStack: ["React", "Node.js / Express"],
    },
    {
      title: "StarWars encyclopedia",
      github: "https://github.com/CoryZauss/StarWars",
      gif: "https://user-images.githubusercontent.com/89159410/159531938-3d83a420-bdfd-47d2-a78d-621c53ceee98.gif",
      screenshot: "",
      description: "Front end React app to interface with open source star wars API, explore information about characters and relations, planets, vehicles, starships and more",
      techStack: ["React"],
    },
  ],
};
