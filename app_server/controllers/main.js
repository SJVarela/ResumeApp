module.exports.index = function (req, res) {
  res.render("index3", {
    title: "Santiago Varela Resume",
    resume: {
      name: "Santiago Varela",
      job: "Software developer",
      about: "",
      frameworks: [
        {
          name: "ASP.NET",
          imgUri: "images/asp.net-logo.png",
        },
        {
          name: ".NET Core",
          imgUri: "images/netcore-logo.png",
        },
        {
          name: "EF Core",
          imgUri: "images/efcore-logo.png",
        },
        {
          name: "NodeJs",
          imgUri: "images/node-logo.png",
        },
        {
          name: "React",
          imgUri: "images/react-logo.png",
        },
        {
          name: "Materialize",
          imgUri: "images/materializecss-logo.png",
        },
      ],
      languages: [
        {
          name: "C#",
          imgUri: "images/c-logo.png",
        },
        {
          name: "SQL",
          imgUri: "images/sql-logo.png",
        },
        {
          name: "Javascipt",
          imgUri: "images/es6-logo.png",
        },
        {
          name: "TypeScript",
          imgUri: "images/typescript-logo.png",
        },
        {
          name: "HTML5",
          imgUri: "images/html5-logo.png",
        },
        {
          name: "CSS3",
          imgUri: "images/css3-logo.png",
        },
      ],
      databases: [
        {
          name: "SQL Server",
          imgUri: "images/sqlserver-logo.png",
        },
        {
          name: "Oracle",
          imgUri: "images/oracle-logo.png",
        },
        {
          name: "MongoDB",
          imgUri: "images/mongo-logo.png",
        },
      ],
      tools: [
        {
          name: "VS Code",
          imgUri: "images/vs-code-logo.png",
        },
        {
          name: "Visual Studio",
          imgUri: "images/visual-studio-logo.png",
        },
        {
          name: "Postman",
          imgUri: "images/postman-logo.png",
        },
      ],
      projects: [
        {
          title: "Online Resume",
          description:
            "An online resumé to showcase my projects. I used Node.Js for the server and Pug as the template engine with Materialize",
          link: "https://github.com/SJVarela/ResumeApp",
        },
        {
          title: "Task manager app",
          description:
            "A React app to manage tasks. Done with stateless functional components",
          link: "https://github.com/SJVarela/TaskManager",
        },
        {
          title: "StoreApp",
          description:
            "A store application to sell some personal items. The server is made with .Net Core, using Entity Framework as the ORM and following the guidelines of clean architecture\n The client was built with Razor pages",
          link: "https://github.com/SJVarela/StoreApp",
        },
        {
          title: "Reakt",
          description:
            "A collaboration project to provide a REST API for a React SPA",
          link: "https://github.com/SJVarela/Reakt",
        },
      ],
      education: [
        {
          inst: "Universidad Abierta Interamericana",
          date: "2015 - 2018",
          degree: "System Engineering",
        },
        {
          inst: "Universidad de Buenos Aires",
          date: "2011 - 2013",
          degree: "Electronic Engineering",
        },
      ],
      experience: [
        {
          inst: "Hexacta",
          date: "2019 - present",
          role: "Developer",
          description:
            "Development from design to implementation for CreditOne Bank, using ASP.NET Framework and PL/SQL. Worked mainly in backend code and REST APIs \nAlso contributed in internal applications using ASP.NET + Angular 4",
        },
      ],
    },
  });
};
