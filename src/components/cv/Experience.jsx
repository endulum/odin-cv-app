import StartToEnd from './StartToEnd';

export default function Experience({ details, color }) {
  if (details.length > 0) {
    return (
      <div className="section-experience">
        <h2
          className="header-experience"
          style={{
            borderBottom: `1px solid ${color}`,
          }}
        >
          Experience

        </h2>
        <div className="body-experience">
          {details.map((role) => <Role key={role.id} details={role} color={color} />)}
        </div>
      </div>
    );
  }
}

function Role({ details, color }) {
  return (
    <div className="experience-details">
      <h3 className="experience-position">{details.position}</h3>
      <h4 className="experience-company">
        {details.company}
        {' '}
        |
        {' '}
        <span className="experience-location" style={{ fontWeight: 'normal' }}>{details.location}</span>
      </h4>
      <ul className="experience-bullets">
        {details.bullets.map((bullet) => (
          <li className="experience-bullet" key={bullet.id}>
            <div
              className="bullet-point"
              style={{
                backgroundColor: color,
              }}
            />
            {bullet.bulletText}
          </li>
        ))}
      </ul>
      <StartToEnd start={details.start} end={details.end} />
    </div>
  );
}
