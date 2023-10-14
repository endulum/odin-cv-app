import { useState } from 'react';

export default function EditorPersonal({
  onEditPersonalInfo,
  personalInfo,
}) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="editor">
      <h2 className="editor-header">Personal</h2>

      <button
        className="hide-button"
        type="button"
        onClick={() => setHidden(!hidden)}
      >
        {hidden && ('Edit')}
        {!hidden && ('Done')}
      </button>

      {!hidden && (
      <div className="editor-section">
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
      )}

    </div>
  );
}
