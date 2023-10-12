import General from './components/cv/General';
import Education from './components/cv/Education';

const general = {
  name: 'Jake Ryan',
  tel: '123-456-7890',
  email: 'jake@su.edu',
  linkedIn: 'linkedin.com/ln/jake',
  gitHub: 'github.com/jake',
};

const education = [
  {
    school: 'Southwestern University',
    degree: 'Bachelor of Arts in Computer Science, Minor in Business',
    location: 'Georgetown, TX',
    start: '2018-09',
    end: '2021-05',
  }, {
    school: 'Blinn College',
    degree: 'Associate\'s in Liberal Arts',
    location: 'Bryan, TX',
    start: '2014-09',
    end: '2018-05',
  },
];

export default function App() {
  return (
    <>
      <General details={general} />
      <Education details={education} />
    </>
  );
}
