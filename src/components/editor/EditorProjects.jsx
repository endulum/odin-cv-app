import { useState } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';

import BulletEditor from './BulletEditor';

export default function EdtiroProjects({
  onEditProjectInfo,
  onAddProject,
  onEditProjectBullet,
  onAddProjectBullet,
  ProjectInfo,
}) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="editor">
      <h2 className="editor-header">Projects</h2>

      <button
        className={`editor-button button-neutral ${hidden ? 'editor-button-show' : 'editor-button-hide'}`}
        type="button"
        onClick={() => setHidden(!hidden)}
        title={hidden ? 'Edit Project Details' : 'Done Editing Project Details'}
      >
        {hidden && ('Edit')}
        {!hidden && ('Close')}
      </button>

      {!hidden && ProjectInfo.map((project) => (
        <div className="editor-section" key={project.id}>
          <label>
            <span>Title: </span>
            <input
              type="text"
              value={project.title}
              onChange={(e) => onEditProjectInfo(project.id, 'title', e.target.value)}
            />
          </label>

          <label>
            <span>Technologies Used: </span>
            <input
              type="text"
              value={project.techStack}
              onChange={(e) => onEditProjectInfo(project.id, 'techStack', e.target.value)}
            />
          </label>

          <label className="label-half-width">
            <span>Start: </span>
            <input
              type="month"
              value={project.start}
              onChange={(e) => onEditProjectInfo(project.id, 'start', e.target.value)}
            />
          </label>

          <label className="label-half-width">
            <span>End: </span>
            <input
              type="month"
              value={project.end}
              onChange={(e) => onEditProjectInfo(project.id, 'end', e.target.value)}
            />
          </label>

          <BulletEditor
            sectionId={project.id}
            bulletInfo={project.bullets}
            onEditBullet={onEditProjectBullet}
            onAddBullet={onAddProjectBullet}
          />

          <button
            type="button"
            className="editor-button button-delete"
            onClick={() => onEditProjectInfo(project.id, null, null)}
          >
            Delete Project
          </button>
        </div>
      ))}

      {!hidden && (
      <button
        type="button"
        className="editor-button button-add"
        onClick={onAddProject}
      >
        Add Project
      </button>
      )}
    </div>
  );
}
