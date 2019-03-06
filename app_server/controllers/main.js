module.exports.index = function(req, res) {
  res.render("index", {
    title: "Santiago Varela Resume",
    resume: {
      projects: [
        {
          title: "Onilne Resume",
          description: "This is a online resume",
          link: "https://github.com/SJVarela/ResumeApp"
        }
      ],
      education: [
        {
          inst: "Universidad abierta interamericana",
          date: "2015 - 2018",
          degree: "System Engineering"
        }
      ]
    }
  });
};
