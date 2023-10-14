import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import EditorPersonal from './components/editor/EditorPersonal';
import EditorEducation from './components/editor/EditorEducation';
import EditorExperience from './components/editor/EditorExperience';

import Cv from './components/cv/Cv';

import { personalJakes, educationJakes, experienceJakes } from './Data';

import './styles/base.css';
import './styles/editor.css';

export default function App() {
  const [personalInfo, setPersonalInfo] = useState(personalJakes);
  const [educationInfo, setEducationInfo] = useState(educationJakes);
  const [experienceInfo, setExperienceInfo] = useState(experienceJakes);

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

  return (
    <>
      <div className="editors">
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
      </div>

      <Cv
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
      />
    </>
  );
}
