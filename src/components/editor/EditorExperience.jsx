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
        className={`icon-button hide-button ${hidden ? 'hide-button-reveal' : 'hide-button-hide'}`}
        type="button"
        onClick={() => setHidden(!hidden)}
        title={hidden ? 'Edit Education Details' : 'Done Editing Education Details'}
      >
        {hidden && (<span><i className="fa-solid fa-pen-nib" /></span>)}
        {!hidden && (<span><i className="fa-solid fa-circle-check" /></span>)}
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
            jobId={job.id}
            bulletInfo={job.bullets}
            onEditBullet={onEditExperienceBullet}
            onAddBullet={onAddExperienceBullet}
          />

          <button
            type="button"
            onClick={() => onEditExperienceInfo(job.id, null, null)}
          >
            Delete Workplace
          </button>
        </div>
      ))}

      {!hidden && (
      <button
        type="button"
        onClick={onAddExperience}
      >
        Add Workplace
      </button>
      )}
    </div>
  );
}
