import General from './components/General';

const general = {
  name: 'Jake Ryan',
  tel: '123-456-7890',
  email: 'jake@su.edu',
  linkedIn: 'linkedin.com/ln/jake',
  gitHub: 'github.com/jake',
};

export default function App() {
  return (
    <General details={general} />
  );
}
