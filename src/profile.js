// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Shubham",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "This portfolio is a showcase of my Data Science journey and how I have transformed myself. I make the best use of statistics and computer science to provide you insights that can help you make objective decisions. My goal is to make the life of people around me easier and I try to achieve that by Data analysis. I have recently graduated from The University of Sydney (December, 2021) ",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "Machine Learning",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    //svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fas fa-robot",
  },
  {
    name: "Computational Statistics",
    // svg: '',
    faClass: "fa fa-bar-chart",
  },
  {
    name: "NLP",
    // svg: '',
    faClass: "fa fa-language",
  },
  {
    name: "Deep Learning",
    // svg: '',
    faClass: "fas fa-robot",
  },
  {
    name: "Tableau",
    // svg: '',
    faClass: "	fa fa-dashboard",
  },

  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "C++",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "git",
    // svg: '',
    faClass: "fab fa-git",
  },
  {
    name: "HTML & CSS",
    // svg: '',
    faClass: "fas fa-code",
  },
  {
    name: "SQL & DBMS",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "R",
    // svg: '',
    faClass: "fab fa-r-project",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Academic Projects Experiences";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Movie Recommendation",
    Deployed: ["Heroku"],
    url: "https://github.com/shubhamsrivastava951/Movies-recommendation",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Machine Learning Classification",
    skills: ["python, ML"],
    url: "https://github.com/shubhamsrivastava951/Machine-Learning-Projects",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "NLP",
    skills: ["python, ML"],
    url: "https://github.com/shubhamsrivastava951/NLP/blob/main/Sentiment__Analysis.ipynb",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Computational Statistics",
    skills: ["R, ML"],
    url: "https://github.com/shubhamsrivastava951/Computational-Statistics-in-R-/blob/main/Bank_Marketing.Rmd",
  },

  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Research Papers",
    skills: ["Machine Learning"],
    url: "https://github.com/shubhamsrivastava951/Research_Paper",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Car Price Prediction",
    Deployed: ["Heroku"],
    url: "https://github.com/shubhamsrivastava951/Car-Price-Prediction",
  },
    
    {
    // Add image in './styles/images.css' in #project6
    id: "project7",
    name: "Australian Rain Forecast",
    Deployed: ["Heroku"],
    url: "https://github.com/shubhamsrivastava951/Rain-Prediction-Australia",
  },
  
  {
    // Add image in './styles/images.css' in #project4
    id: "project8",
    name: "Cotton Disease Prediction",
    skills: ["python, DL"],
    url: "https://github.com/shubhamsrivastava951/cotton-disease-prediction",
  },
    
    {
    // Add image in './styles/images.css' in #project4
    id: "project9",
    name: " Health Care Disease Prediction",
    skills: ["python, DL"],
    url: "https://github.com/shubhamsrivastava951/Health-Care",
  },
    {
    // Add image in './styles/images.css' in #project6
    id: "project10",
    name: "Tableau",
    //skills: ["PM, ITSM"],
    url: "https://github.com/shubhamsrivastava951/Tableau",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project11",
    name: "Management Projects in IT",
    skills: ["PM, ITSM"],
    url: "https://github.com/shubhamsrivastava951/Management-Projects-in-IT-Sectors",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "My Skills & Certifications",
    url: "https://github.com/shubhamsrivastava951/About-me/blob/main/README.md",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Education & Extra curricular Activities",
    url: "https://github.com/shubhamsrivastava951/About-me/blob/main/README.md",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Organisational Experience",
    url: "https://github.com/shubhamsrivastava951/About-me/blob/main/README.md",
  },

];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "I am based in Sydney and currently I am focused on building and enhancing my insights for Data Science Projects by exploring various data sets and by handling different types of problems.",
  copyright: "Shubham Srivastava",
  contactUrl: "https://www.linkedin.com/in/shubham-srivastava-98b42aa6/",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  linkedin: "https://www.linkedin.com/in/shubham-srivastava-98b42aa6/",

  github: "https://github.com/shubhamsrivastava951",
  resume: "https://github.com/shubhamsrivastava951/About-me/blob/main/My%20Resume%20.pdf",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
