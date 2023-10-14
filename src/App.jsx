import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Editor from './components/editor/Editor';
import Cv from './components/cv/Cv';

import { personalJakes, educationJakes, experienceJakes } from './Data';

import './styles/base.css';

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
      position: 'name of work position',
      company: 'name of company',
      location: 'location of work',
      start: '',
      end: '',
      bullets: [],
    }]);
  }

  function handleEditExperienceBullet(experienceId, bulletId, text) {
    if (!text) {
      setExperienceInfo([...experienceInfo.map((info) => {
        if (info.id === experienceId) {
          info.bullets.filter((bullet) => bullet.id !== bulletId);
        } return { ...info };
      })]);
    } else {
      setExperienceInfo([...experienceInfo.map((info) => {
        if (info.id === experienceId) {
          info.bullets.map((bullet) => {
            if (bullet.id === bulletId) return { ...bullet, bulletText: text };
            return { ...bullet };
          });
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
      <Editor
        onEditPersonalInfo={handleEditPersonalInfo}
        onEditEducationInfo={handleEditEducationInfo}
        onAddEducation={handleAddEducation}
        onEditExperienceInfo={handleEditExperienceInfo}
        onAddExperience={handleAddExperience}
        onEditExperienceBullet={handleEditExperienceBullet}
        onAddExperienceBullet={handleAddExperienceBullet}
      />

      <Cv
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
      />
    </>
  );
}
