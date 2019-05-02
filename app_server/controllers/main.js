module.exports.index = function(req, res) {
  res.render("index2", {
    title: "Santiago Varela Resume",
    resume: {
      name: "Santiago Varela",
      job: "Software developer",
      about: "",
      frameworks: [
        {
          name: ".NET Core",
          imgUri: "images/netcore-logo.png"
        },
        {
          name: "EF Core",
          imgUri: "images/efcore-logo.png"
        },
        {
          name: "NodeJs",
          imgUri: "images/node-logo.png"
        },
        {
          name: "React",
          imgUri: "images/react-logo.png"
        },
        {
          name: "Materialize",
          imgUri: "images/materializecss-logo.png"
        }
      ],
      languages: [
        {
          name: "C#",
          imgUri: "images/c-logo.png"
        },
        {
          name: "SQL",
          imgUri: "images/sql-logo.png"
        },
        {
          name: "Javascipt",
          imgUri: "images/es6-logo.png"
        },
        {
          name: "TypeScript",
          imgUri: "images/typescript-logo.png"
        },
        {
          name: "HTML5",
          imgUri: "images/html5-logo.png"
        },
        {
          name: "CSS3",
          imgUri: "images/css3-logo.png"
        }
      ],
      databases: [
        {
          name: "SQL Server",
          imgUri: "images/sqlserver-logo.png"
        },
        {
          name: "MongoDB",
          imgUri: "images/mongo-logo.png"
        }
      ],
      tools: [
        {
          name: "VS Code",
          imgUri: "images/vs-code-logo.png"
        },
        {
          name: "Visual Studio",
          imgUri: "images/visual-studio-logo.png"
        }
      ],
      projects: [
        {
          title: "Onilne Resume",
          description:
            "An online resumé to showcase my projects. I used Node.Js for the server and Pug as the template engine with Materialize",
          link: "https://github.com/SJVarela/ResumeApp"
        },
        {
          title: "Task manager app",
          description:
            "A React app to manage tasks. Done with stateless functional components",
          link: "https://github.com/SJVarela/TaskManager"
        },
        {
          title: "StoreApp",
          description:
            "A store application to sell some personal items. The server is made with .Net Core, using Entity Framework as the ORM and following the guidelines of clean architecture\n The client was built with Razor pages",
          link: "https://github.com/SJVarela/StoreApp"
        },
        {
          title: "BlazorApp",
          description:
            "A test application to test the new features of Razor Components (Blazor)",
          link: "https://github.com/SJVarela/BlazorTest"
        }
      ],
      education: [
        {
          inst: "Universidad Abierta Interamericana",
          date: "2015 - 2018",
          degree: "System Engineering"
        },
        {
          inst: "Universidad de Buenos Aires",
          date: "2011 - 2013",
          degree: "Electronic Engineering"
        }
      ]
    }
  });
};
