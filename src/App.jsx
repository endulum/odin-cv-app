import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import DesignInput from './components/input/DesignInput';
import General from './components/cv/General';
import GeneralInput from './components/input/GeneralInput';
import Education from './components/cv/Education';
import EducationInput from './components/input/EducationInput';
import Experience from './components/cv/Experience';

import './styles/base.css';
import './styles/forms.css';
import './styles/cv.css';

const generalData = {
  name: 'Jake Ryan',
  tel: '123-456-7890',
  email: 'jake@su.edu',
  linkedIn: 'linkedin.com/ln/jake',
  gitHub: 'github.com/jake',
};

const educationData = [
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

const experience = [
  {
    position: 'Undergraduate Research Assistant',
    company: 'Texas A&M University',
    location: 'College Station, TX',
    start: '2020-05',
    end: null,
    bullets: [
      'Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems',
      'Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data',
      'Explored ways to visualize GitHub collaboration in a class setting',
    ],
  }, {
    position: 'Information Technology Support Specialist',
    company: 'Southwestern University',
    location: 'Georgetown, TX',
    start: '2018-09',
    end: null,
    bullets: [
      'Communicate with managers to set up campus computers used on campus',
      'Assess and troubleshoot computer problems brought by students, faculty, and staff',
      'Maintain upkeep of computers, classroom equipment, and 200 printers across campus',
    ],
  }, {
    position: 'Artificial Intelligence Research Assistant',
    company: 'Southwestern University',
    location: 'Georgetown, TX',
    start: '2019-05',
    end: '2019-08',
    bullets: [
      'Explored methods to generate video game dungeons based off of \'The Legend of Zelda\'',
      'Developed a game in Java to test the generated dungeons',
      'Contributed 50K+ lines of code to an established codebase via Git',
      'Conducted a human subject study to determine which video game dungeon generation technique is enjoyable',
      'Wrote an 8+ page paper and gave multiple presentations on-campus',
      'Presented virtually to the World Conference on Computational Intelligence',
    ],
  },
];

export default function App() {
  const [general, setGeneral] = useState(generalData);
  const [education, setEducation] = useState(educationData);
  const [fontType, setFontType] = useState('serif');

  function handleChangeFont(e) {
    setFontType(e.target.value);
  }

  function handleGeneralInput(property, value) {
    setGeneral({ ...general, [property]: value });
  }

  function handleEducationInput(schoolId, property, value) {
    if (!property) {
      setEducation([...education.filter((school) => (school.id !== schoolId))]);
    } else {
      setEducation([...education.map((school) => {
        if (school.id === schoolId) {
          return { ...school, [property]: value };
        } return { ...school };
      })]);
    }
  }

  function handleAddEducation() {
    setEducation([...education, {
      id: uuid(),
      school: '(school name)',
      degree: '(degree of study)',
      location: '(location of school)',
      start: '',
      end: '',
    }]);
  }

  return (
    <>
      <div className="input-forms">
        <DesignInput data={fontType} onInput={handleChangeFont} />
        <GeneralInput data={general} onInput={handleGeneralInput} />
        <EducationInput data={education} onInput={handleEducationInput} onAdd={handleAddEducation} />
      </div>

      <div className={`${fontType} cv`}>
        <General details={general} />
        <Education details={education} />
        <Experience details={experience} />
      </div>
    </>
  );
}
