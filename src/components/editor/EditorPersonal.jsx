export default function EditorPersonal({
  onEditPersonalInfo,
  personalInfo,
}) {
  return (
    <div className="editor">
      <h2>Personal</h2>

      <label>
        <span>Name: </span>
        <input
          type="text"
          value={personalInfo.name}
          onChange={(e) => onEditPersonalInfo('name', e.target.value)}
        />
      </label>

      <label>
        <span>Phone: </span>
        <input
          type="tel"
          value={personalInfo.tel}
          onChange={(e) => onEditPersonalInfo('tel', e.target.value)}
        />
      </label>

      <label>
        <span>Email: </span>
        <input
          type="email"
          value={personalInfo.email}
          onChange={(e) => onEditPersonalInfo('email', e.target.value)}
        />
      </label>

      <label>
        <span>LinkedIn: </span>
        <input
          type="url"
          value={personalInfo.linkedIn}
          onChange={(e) => onEditPersonalInfo('linkedIn', e.target.value)}
        />
      </label>

      <label>
        <span>GitHub: </span>
        <input
          type="url"
          value={personalInfo.gitHub}
          onChange={(e) => onEditPersonalInfo('gitHub', e.target.value)}
        />
      </label>
    </div>
  );
}
