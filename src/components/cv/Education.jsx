export default function Education({ details }) {
  return (
    <div className="education">
      <h2>Education</h2>
      <div className="education-list">
        {details.map((school) => <School key={school.school} details={school} />)}
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
        •
        {' '}
        <span style={{ fontWeight: 'normal' }}>{details.location}</span>
      </h3>
      <h4 className="education-school">{details.degree}</h4>
    </div>
  );
}
