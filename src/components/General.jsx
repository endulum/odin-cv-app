export default function General({ details }) {
  return (
    <div className="general">
      {details.name && <h1 className="general-name">{details.name}</h1>}
      <ul className="general-details">
        {Object.keys(details)
          .splice(1, Object.keys(details).length)
          .map((detail) => {
            if (details[detail]) {
              return (
                <li className="general-detail" key={detail}>
                  {details[detail]}
                </li>
              );
            }
            return null;
          })}
      </ul>
    </div>
  );
}
