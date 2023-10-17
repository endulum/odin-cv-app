import { useState } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';

import BulletEditor from './BulletEditor';

export default function EditorExperience({
  onEditExperienceInfo,
  onAddExperience,
  onEditExperienceBullet,
  onAddExperienceBullet,
  experienceInfo,
}) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="editor">
      <h2 className="editor-header">Experience</h2>

      <button
        className={`editor-button button-neutral ${hidden ? 'editor-button-show' : 'editor-button-hide'}`}
        type="button"
        onClick={() => setHidden(!hidden)}
        title={hidden ? 'Edit Experience Details' : 'Done Editing Experience Details'}
      >
        {hidden && ('Edit')}
        {!hidden && ('Close')}
      </button>

      {!hidden && experienceInfo.map((job) => (
        <div className="editor-section" key={job.id}>
          <label>
            <span>Position: </span>
            <input
              type="text"
              value={job.position}
              onChange={(e) => onEditExperienceInfo(job.id, 'position', e.target.value)}
            />
          </label>

          <label>
            <span>Company: </span>
            <input
              type="text"
              value={job.company}
              onChange={(e) => onEditExperienceInfo(job.id, 'company', e.target.value)}
            />
          </label>

          <label>
            <span>Location: </span>
            <input
              type="text"
              value={job.location}
              onChange={(e) => onEditExperienceInfo(job.id, 'location', e.target.value)}
            />
          </label>

          <label className="label-half-width">
            <span>Start: </span>
            <input
              type="month"
              value={job.start}
              onChange={(e) => onEditExperienceInfo(job.id, 'start', e.target.value)}
            />
          </label>

          <label className="label-half-width">
            <span>End: </span>
            <input
              type="month"
              value={job.end}
              onChange={(e) => onEditExperienceInfo(job.id, 'end', e.target.value)}
            />
          </label>

          <BulletEditor
            sectionId={job.id}
            bulletInfo={job.bullets}
            onEditBullet={onEditExperienceBullet}
            onAddBullet={onAddExperienceBullet}
          />

          <button
            type="button"
            className="editor-button button-delete"
            onClick={() => onEditExperienceInfo(job.id, null, null)}
          >
            Delete Workplace
          </button>
        </div>
      ))}

      {!hidden && (
      <button
        type="button"
        className="editor-button button-add"
        onClick={onAddExperience}
      >
        Add Workplace
      </button>
      )}
    </div>
  );
}
