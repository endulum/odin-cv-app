import { useState } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import BulletEditor from './BulletEditor';

export default function EditorSkills({
  onEditSkillset,
  onAddSkillset,
  skillInfo,
}) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="editor">
      <h2 className="editor-header">Skills</h2>

      <button
        className={`editor-button button-neutral ${hidden ? 'editor-button-show' : 'editor-button-hide'}`}
        type="button"
        onClick={() => setHidden(!hidden)}
        title={hidden ? 'Edit Skillset Details' : 'Done Editing Skillset Details'}
      >
        {hidden && ('Edit')}
        {!hidden && ('Close')}
      </button>

      {!hidden && skillInfo.map((skillStack) => (
        <div className="editor-section" key={skillStack.id}>
          <label>
            <span>Skillset Title: </span>
            <input
              type="text"
              value={skillStack.title}
              onChange={(e) => onEditSkillset(skillStack.id, 'title', e.target.value)}
            />
          </label>

          <label>
            <span>Skills:</span>
            <textarea
              rows="3"
              value={skillStack.skills}
              onChange={(e) => onEditSkillset(skillStack.id, 'skills', e.target.value)}
            />
          </label>

          <button
            type="button"
            className="editor-button button-delete"
            onClick={() => onEditSkillset(skillStack.id, null, null)}
          >
            Delete Skillset
          </button>
        </div>
      ))}

      {!hidden && (
      <button
        type="button"
        className="editor-button button-add"
        onClick={onAddSkillset}
      >
        Add Skillset
      </button>
      )}
    </div>
  );
}
