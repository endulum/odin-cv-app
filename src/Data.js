import { v4 as uuid } from 'uuid';

export const personalJakes = {
  name: 'Jake Ryan',
  tel: '123-456-7890',
  email: 'jake@su.edu',
  linkedIn: 'linkedin.com/ln/jake',
  gitHub: 'github.com/jake',
};

export const educationJakes = [
  {
    id: uuid(),
    school: 'Southwestern University',
    degree: 'Bachelor of Arts in Computer Science, Minor in Business',
    location: 'Georgetown, TX',
    start: '2018-09',
    end: '2021-05',
  }, {
    id: uuid(),
    school: 'Blinn College',
    degree: 'Associate\'s in Liberal Arts',
    location: 'Bryan, TX',
    start: '2014-09',
    end: '2018-05',
  },
];

export const experienceJakes = [
  {
    id: uuid(),
    position: 'Undergraduate Research Assistant',
    company: 'Texas A&M University',
    location: 'College Station, TX',
    start: '2020-05',
    end: '',
    bullets: [{
      id: uuid(),
      bulletText: 'Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems',
    }, {
      id: uuid(),
      bulletText: 'Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data',
    }, {
      id: uuid(),
      bulletText: 'Explored ways to visualize GitHub collaboration in a class setting',
    }],
  }, {
    id: uuid(),
    position: 'Information Technology Support Specialist',
    company: 'Southwestern University',
    location: 'Georgetown, TX',
    start: '2018-09',
    end: '',
    bullets: [{
      id: uuid(),
      bulletText: 'Communicate with managers to set up campus computers used on campus',
    }, {
      id: uuid(),
      bulletText: 'Assess and troubleshoot computer problems brought by students, faculty, and staff',
    }, {
      id: uuid(),
      bulletText: 'Maintain upkeep of computers, classroom equipment, and 200 printers across campus',
    }],
  }, {
    id: uuid(),
    position: 'Artificial Intelligence Research Assistant',
    company: 'Southwestern University',
    location: 'Georgetown, TX',
    start: '2019-05',
    end: '2019-08',
    bullets: [{
      id: uuid(),
      bulletText: "Explored methods to generate video game dungeons based off of 'The Legend of Zelda'",
    }, {
      id: uuid(),
      bulletText: 'Developed a game in Java to test the generated dungeons',
    }, {
      id: uuid(),
      bulletText: 'Contributed 50K+ lines of code to an established codebase via Git',
    }, {
      id: uuid(),
      bulletText: 'Presented virtually to the World Conference on Computational Intelligence',
    }],
  },
];

export const projectsJakes = [
  {
    id: uuid(),
    title: 'Gitlytics',
    techStack: 'Python, Flask, React, PostgreSQL, Docker',
    start: '2020-06',
    end: '',
    bullets: [
      {
        id: uuid(),
        bulletText: 'Developed a full-stack web application using with Flask serving a REST API with React as the frontend',
      }, {
        id: uuid(),
        bulletText: 'Implemented GitHub OAuth to get data from user\'s repositories',
      }, {
        id: uuid(),
        bulletText: 'Visualized GitHub data to show collaboration',
      }, {
        id: uuid(),
        bulletText: 'Used Celery and Redis for asynchronous tasks',
      },
    ],
  }, {
    id: uuid(),
    title: 'Simple Paintball',
    techStack: 'Spigot API, Java, Maven, TravisCI, Git',
    start: '2018-05',
    end: '2020-05',
    bullets: [
      {
        id: uuid(),
        bulletText: 'Developed a Minecraft server plugin to entertain kids during free time for a previous job',
      }, {
        id: uuid(),
        bulletText: 'Published plugin to websites gaining 2K+ downloads and an average 4.5/5 star review',
      }, {
        id: uuid(),
        bulletText: 'Implemented continuous delivery using TravisCI to build the plugin upon a new release',
      }, {
        id: uuid(),
        bulletText: 'Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin',
      },
    ],
  },
];

export const skillsJakes = [
  {
    id: uuid(),
    title: 'Languages',
    skills: 'Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R',
  }, {
    id: uuid(),
    title: 'Frameworks',
    skills: 'React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI',
  }, {
    id: uuid(),
    title: 'Developer Tools',
    skills: 'Git, Docker, TravisCI, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse',
  }, {
    id: uuid(),
    title: 'Libraries',
    skills: 'pandas, NumPy, Matplotlib',
  },
];
