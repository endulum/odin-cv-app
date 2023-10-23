import { useState } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import BulletEditor from './BulletEditor';

export default function EditorSkills({
  onEditSkillStack,
  onAddSkillStack,
  onEditSkill,
  onAddSkill,
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
            <span>Skillset Name: </span>
            <input
              type="text"
              value={skillStack.stackName}
              onChange={(e) => onEditSkillStack(skillStack.id, e.target.value)}
            />
          </label>

          <BulletEditor
            sectionId={skillStack.id}
            bulletInfo={skillStack.stack}
            onEditBullet={onEditSkill}
            onAddBullet={onAddSkill}
          />

          <button
            type="button"
            className="editor-button button-delete"
            onClick={() => onEditSkillStack(skillStack.id, null, null)}
          >
            Delete Skillset
          </button>
        </div>
      ))}

      {!hidden && (
      <button
        type="button"
        className="editor-button button-add"
        onClick={onAddSkillStack}
      >
        Add Skillset
      </button>
      )}
    </div>
  );
}
