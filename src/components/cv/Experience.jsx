import StartToEnd from '../tidbits/StartToEnd';

export default function Experience({ details }) {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {details.map((role) => <Role key={role.position} details={role} />)}
      </div>
    </div>
  );
}

function Role({ details }) {
  return (
    <div className="experience-details">
      <h3 className="experience-position">{details.position}</h3>
      <h4 className="experience-company">
        {details.company}
        {' '}
        •
        {' '}
        <span style={{ fontWeight: 'normal' }}>{details.location}</span>
      </h4>
      <ul className="experience-info">
        {details.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
      <StartToEnd start={details.start} end={details.end} />
    </div>
  );
}
