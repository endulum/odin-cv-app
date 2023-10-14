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

export const educationEmpty = {
  id: uuid(),
  school: '(school or institution name)',
  degree: '(degree or certification of study)',
  location: '(location of school or institution)',
  start: '',
  end: '',
};

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
      bullet: 'Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems',
    }, {
      id: uuid(),
      bullet: 'Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data',
    }, {
      id: uuid(),
      bullet: 'Explored ways to visualize GitHub collaboration in a class setting',
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
      bullet: 'Communicate with managers to set up campus computers used on campus',
    }, {
      id: uuid(),
      bullet: 'Assess and troubleshoot computer problems brought by students, faculty, and staff',
    }, {
      id: uuid(),
      bullet: 'Maintain upkeep of computers, classroom equipment, and 200 printers across campus',
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
      bullet: "Explored methods to generate video game dungeons based off of 'The Legend of Zelda'",
    }, {
      id: uuid(),
      bullet: 'Developed a game in Java to test the generated dungeons',
    }, {
      id: uuid(),
      bullet: 'Contributed 50K+ lines of code to an established codebase via Git',
    }, {
      id: uuid(),
      bullet: 'Conducted a human subject study to determine which video game dungeon generation technique is enjoyable',
    }, {
      id: uuid(),
      bullet: 'Wrote an 8+ page paper and gave multiple presentations on-campus',
    }, {
      id: uuid(),
      bullet: 'Presented virtually to the World Conference on Computational Intelligence',
    }],
  },
];

export const experienceEmpty = {
  id: uuid(),
  position: 'name of work position',
  company: 'name of company',
  location: 'location of work',
  start: '',
  end: '',
  bullets: [],
};

export const bulletEmpty = {
  id: uuid(),
  bullet: '',
};
