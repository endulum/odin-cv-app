import '@fortawesome/fontawesome-free/js/all.js';

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
        {details.tel && (
        <li className="personal-link">
          <i className="fa-solid fa-phone" />
          {details.tel}
        </li>
        )}

        {details.email && (
        <li className="personal-link">
          <i className="fa-solid fa-envelope" />
          {details.email}
        </li>
        )}

        {details.linkedIn && (
        <li className="personal-link">
          <i className="fa-brands fa-linkedin" />
          {details.linkedIn}
        </li>
        )}

        {details.gitHub && (
        <li className="personal-link">
          <i className="fa-brands fa-github" />
          {details.gitHub}
        </li>
        )}
      </ul>
    </div>
  );
}
