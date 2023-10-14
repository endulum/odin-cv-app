export default function Personal({ details, color }) {
  return (
    <div
      className="section-personal"
      style={{
        backgroundColor: color,
      }}
    >
      {details.name && <h1 className="header-personal">{details.name}</h1>}
      <ul className="body-personal">
        {details.tel && <li className="personal-link">{details.tel}</li>}
        {details.email && <li className="personal-link">{details.email}</li>}
        {details.linkedIn && <li className="personal-link">{details.linkedIn}</li>}
        {details.gitHub && <li className="personal-link">{details.gitHub}</li>}
      </ul>
    </div>
  );
}
