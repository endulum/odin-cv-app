import StartToEnd from './StartToEnd';

export default function Education({ details }) {
  return (
    <div className="section-education">
      <h2 className="header-education">Education</h2>
      <div className="body-education">
        {details.map((school) => <School key={school.id} details={school} />)}
      </div>
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
