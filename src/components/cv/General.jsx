export default function General({ details }) {
  return (
    <div className="general">
      {details.name && <h1 className="general-name">{details.name}</h1>}
      <ul className="general-details">
        {details.tel && <li className="general-detail">{details.tel}</li>}
        {details.email && <li className="general-detail">{details.email}</li>}
        {details.linkedIn && <li className="general-detail">{details.linkedIn}</li>}
        {details.gitHub && <li className="general-detail">{details.gitHub}</li>}
      </ul>
    </div>
  );
}
