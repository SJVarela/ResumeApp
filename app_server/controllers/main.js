module.exports.index = function(req, res) {
  res.render("index", {
    title: "Santiago Varela Resume",
    resume: {
      name: "Santiago Varela",
      job: "Web developer",
      platforms: [".NET", "Node.js"],
      languages: ["C#", "JavaScript"],
      projects: [
        {
          title: "Onilne Resume",
          description:
            "The current resumé, done with Node.js and Pug as the template engine",
          link: "https://github.com/SJVarela/ResumeApp"
        }
      ],
      education: [
        {
          inst: "Universidad abierta interamericana",
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
