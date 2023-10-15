import { useState } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';

export default function EditorEducation({
  onEditEducationInfo,
  onAddEducation,
  educationInfo,
}) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="editor">
      <h2 className="editor-header">Education</h2>

      <button
        className={`icon-button hide-button ${hidden ? 'hide-button-reveal' : 'hide-button-hide'}`}
        type="button"
        onClick={() => setHidden(!hidden)}
        title={hidden ? 'Edit Education Details' : 'Done Editing Education Details'}
      >
        {hidden && (<span><i className="fa-solid fa-pen-nib" /></span>)}
        {!hidden && (<span><i className="fa-solid fa-circle-check" /></span>)}
      </button>

      {!hidden && educationInfo.map((school) => (
        <div className="editor-section" key={school.id}>
          <label>
            <span>School: </span>
            <input
              type="text"
              value={school.school}
              onChange={(e) => onEditEducationInfo(school.id, 'school', e.target.value)}
            />
          </label>

          <label>
            <span>Degree: </span>
            <input
              type="text"
              value={school.degree}
              onChange={(e) => onEditEducationInfo(school.id, 'degree', e.target.value)}
            />
          </label>

          <label>
            <span>Location: </span>
            <input
              type="text"
              value={school.location}
              onChange={(e) => onEditEducationInfo(school.id, 'location', e.target.value)}
            />
          </label>

          <label className="label-half-width">
            <span>Start: </span>
            <input
              type="month"
              value={school.start}
              onChange={(e) => onEditEducationInfo(school.id, 'start', e.target.value)}
            />
          </label>

          <label className="label-half-width">
            <span>End: </span>
            <input
              type="month"
              value={school.end}
              onChange={(e) => onEditEducationInfo(school.id, 'end', e.target.value)}
            />
          </label>
          {/* todo: keep it dry? */}

          <button
            type="button"
            onClick={() => onEditEducationInfo(school.id)}
          >
            Delete School
          </button>
        </div>
      ))}

      {!hidden && (
      <button
        type="button"
        onClick={onAddEducation}
      >
        Add School
      </button>
      )}
    </div>
  );
}
