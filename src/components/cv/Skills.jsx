export default function Skills({ details, color }) {
  if (details.length > 0) {
    return (
      <div className="section-skills">
        <h2
          className="header-skills"
          style={{
            borderBottom: `1px solid ${color}`,
          }}
        >
          Technical Skills

        </h2>
        <div className="body-skills">
          {details.map((skill) => <Skill key={skill.id} details={skill} />)}
        </div>
      </div>
    );
  }
}

function Skill({ details }) {
  return (
    <p>
      <b className="skillset-title">
        {details.title}
        :
      </b>
      {' '}
      {details.skills}
    </p>
  );
}
