import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import DesignEditor from './components/editor/DesignEditor';
import EditorPersonal from './components/editor/EditorPersonal';
import EditorEducation from './components/editor/EditorEducation';
import EditorExperience from './components/editor/EditorExperience';
import EditorProjects from './components/editor/EditorProjects';
import Personal from './components/cv/Personal';
import Education from './components/cv/Education';
import Experience from './components/cv/Experience';
import Projects from './components/cv/Projects';

import {
  personalJakes, educationJakes, experienceJakes, projectsJakes,
} from './Data';

import './styles/base.css';
import './styles/editor.css';
import './styles/cv.css';

export default function App() {
  const [personalInfo, setPersonalInfo] = useState(personalJakes);
  const [educationInfo, setEducationInfo] = useState(educationJakes);
  const [experienceInfo, setExperienceInfo] = useState(experienceJakes);
  const [projectInfo, setProjectInfo] = useState(projectsJakes);

  function handleEditPersonalInfo(property, value) {
    setPersonalInfo({ ...personalInfo, [property]: value });
  }

  function handleEditEducationInfo(id, property, value) {
    if (!property && !value) {
      setEducationInfo([...educationInfo].filter((info) => info.id !== id));
    } else {
      setEducationInfo([...educationInfo].map((info) => {
        if (info.id === id) return { ...info, [property]: value };
        return { ...info };
      }));
    }
  }

  function handleAddEducation() {
    setEducationInfo([...educationInfo, {
      id: uuid(),
      school: '(school or institution name)',
      degree: '(degree or certification of study)',
      location: '(location of school or institution)',
      start: '',
      end: '',
    }]);
  }

  function handleEditExperienceInfo(id, property, value) {
    if (!property && !value) {
      setExperienceInfo([...experienceInfo].filter((info) => info.id !== id));
    } else {
      setExperienceInfo([...experienceInfo].map((info) => {
        if (info.id === id) return { ...info, [property]: value };
        return { ...info };
      }));
    }
  }

  function handleAddExperience() {
    setExperienceInfo([...experienceInfo, {
      id: uuid(),
      position: '(name of work position)',
      company: '(name of company)',
      location: '(location of work)',
      start: '',
      end: '',
      bullets: [
        {
          id: uuid(),
          bulletText: '(skill highlight during work experience)',
        },
      ],
    }]);
  }

  function handleEditExperienceBullet(experienceId, bulletId, newText) {
    if (newText === undefined) {
      setExperienceInfo([...experienceInfo.map((info) => {
        if (info.id === experienceId) {
          return { ...info, bullets: info.bullets.filter((bullet) => bullet.id !== bulletId) };
        } return { ...info };
      })]);
    } else {
      setExperienceInfo([...experienceInfo.map((info) => {
        if (info.id === experienceId) {
          return {
            ...info,
            bullets: info.bullets.map((bullet) => {
              if (bullet.id === bulletId) return { ...bullet, bulletText: newText };
              return { ...bullet };
            }),
          };
        } return { ...info };
      })]);
    }
  }

  function handleAddExperienceBullet(experienceId) {
    setExperienceInfo([...experienceInfo.map((info) => {
      if (info.id === experienceId) {
        return {
          ...info,
          bullets: [...info.bullets, {
            id: uuid(),
            bulletText: '',
          }],
        };
      } return { ...info };
    })]);
  }

  function handleEditProjectInfo(id, property, value) {
    if (!property && !value) {
      setProjectInfo([...projectInfo].filter((info) => info.id !== id));
    } else {
      setProjectInfo([...projectInfo].map((info) => {
        if (info.id === id) return { ...info, [property]: value };
        return { ...info };
      }));
    }
  }

  function handleAddProject() {
    setProjectInfo([...projectInfo, {
      id: uuid(),
      title: '(title of project)',
      techStack: '(list of technologies used)',
      start: '',
      end: '',
      bullets: [
        {
          id: uuid(),
          bulletText: '(skill highlight of project)',
        },
      ],
    }]);
  }

  function handleEditProjectBullet(projectId, bulletId, newText) {
    if (newText === undefined) {
      setProjectInfo([...projectInfo.map((info) => {
        if (info.id === projectId) {
          return { ...info, bullets: info.bullets.filter((bullet) => bullet.id !== bulletId) };
        } return { ...info };
      })]);
    } else {
      setProjectInfo([...projectInfo.map((info) => {
        if (info.id === projectId) {
          return {
            ...info,
            bullets: info.bullets.map((bullet) => {
              if (bullet.id === bulletId) return { ...bullet, bulletText: newText };
              return { ...bullet };
            }),
          };
        } return { ...info };
      })]);
    }
  }

  function handleAddProjectBullet(projectId) {
    setProjectInfo([...projectInfo.map((info) => {
      if (info.id === projectId) {
        return {
          ...info,
          bullets: [...info.bullets, {
            id: uuid(),
            bulletText: '',
          }],
        };
      } return { ...info };
    })]);
  }

  const [color, setColor] = useState('#5F9EA0');
  const [font, setFont] = useState('serif');

  function handleEditColor(e) { setColor(e.target.value); }
  function handleEditFont(e) { setFont(e.target.value); }

  return (
    <>
      <div className="editors">
        <DesignEditor
          onEditColor={handleEditColor}
          onEditFont={handleEditFont}
          color={color}
          font={font}
        />

        <EditorPersonal
          onEditPersonalInfo={handleEditPersonalInfo}
          personalInfo={personalInfo}
        />

        <EditorEducation
          onEditEducationInfo={handleEditEducationInfo}
          onAddEducation={handleAddEducation}
          educationInfo={educationInfo}
        />

        <EditorExperience
          onEditExperienceInfo={handleEditExperienceInfo}
          onAddExperience={handleAddExperience}
          onEditExperienceBullet={handleEditExperienceBullet}
          onAddExperienceBullet={handleAddExperienceBullet}
          experienceInfo={experienceInfo}
        />

        <EditorProjects
          onEditProjectInfo={handleEditProjectInfo}
          onAddProject={handleAddProject}
          onEditProjectBullet={handleEditProjectBullet}
          onAddProjectBullet={handleAddProjectBullet}
          ProjectInfo={projectInfo}
        />
      </div>

      <div className={`${font} cv`}>
        <Personal details={personalInfo} color={color} />
        <Education details={educationInfo} color={color} />
        <Experience details={experienceInfo} color={color} />
        <Projects details={projectInfo} color={color} />
      </div>
    </>
  );
}
