import StartToEnd from './StartToEnd';

export default function Projects({ details, color }) {
  if (details.length > 0) {
    return (
      <div className="section-projects">
        <h2 className="header-projects" style={{ borderBottom: `1px solid ${color}` }}>Projects</h2>

        <div className="body-projects">
          {details.map((project) => <Project key={project.id} details={project} color={color} />)}
        </div>
      </div>
    );
  }
}

function Project({ details, color }) {
  return (
    <div className="project-details">
      <h3 className="project-title">
        {details.title}
        {' '}
        |
        {' '}
        <span className="project-techstack">{details.techStack}</span>
      </h3>
      <ul className="project-bullets">
        {details.bullets.map((bullet) => (
          <li className="project-bullet" key={bullet.id}>
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
