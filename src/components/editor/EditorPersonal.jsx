import { useState } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';

export default function EditorPersonal({
  onEditPersonalInfo,
  personalInfo,
}) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="editor">
      <h2 className="editor-header">Personal</h2>

      <button
        className={`editor-button button-neutral ${hidden ? 'editor-button-show' : 'editor-button-hide'}`}
        type="button"
        onClick={() => setHidden(!hidden)}
        title={hidden ? 'Edit Personal Details' : 'Done Editing Personal Details'}
      >
        {hidden && ('Edit')}
        {!hidden && ('Close')}
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
