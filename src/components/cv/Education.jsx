import StartToEnd from '../tidbits/StartToEnd';

export default function Education({ details }) {
  return (
    <div className="education">
      <h2>Education</h2>
      {details.map((school) => <School key={school.id} details={school} />)}
    </div>
  );
}

function School({ details }) {
  return (
    <div className="education-details">
      <h3 className="education-school">
        {details.school}
        {' '}
        |
        {' '}
        <span className="education-location" style={{ fontWeight: 'normal' }}>{details.location}</span>
      </h3>
      <h4 className="education-degree">{details.degree}</h4>
      <StartToEnd start={details.start} end={details.end} />
    </div>
  );
}
