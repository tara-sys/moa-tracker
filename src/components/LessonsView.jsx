import { useState } from 'react';
import { STUDENTS, SECTIONS, STATUS_OPTIONS } from '../data/curriculum';
import SkillModal from './SkillModal';

function statusStyle(code) {
  const opt = STATUS_OPTIONS.find(o => o.code === code);
  return opt ? { background: opt.bg, color: opt.color } : { background: '#F1EFE8', color: '#5F5E5A' };
}

function statusLabel(code) {
  const opt = STATUS_OPTIONS.find(o => o.code === code);
  return opt ? opt.label : 'Not started';
}

export default function LessonsView({ getStatus, setStatus }) {
  const [activeSection, setActiveSection] = useState(Object.keys(SECTIONS)[0]);
  const [activeStudent, setActiveStudent] = useState(STUDENTS[0]);
  const [modal, setModal] = useState(null);

  const sec = SECTIONS[activeSection];

  return (
    <div className="view">
      {/* Student bar */}
      <div className="student-bar">
        {STUDENTS.map(s => (
          <button
            key={s}
            className={`student-chip ${activeStudent === s ? 'active' : ''}`}
            onClick={() => setActiveStudent(s)}
          >
            {s.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Section tabs */}
      <div className="section-tabs">
        {Object.entries(SECTIONS).map(([name, s]) => (
          <button
            key={name}
            className={`section-tab ${activeSection === name ? 'active' : ''}`}
            onClick={() => setActiveSection(name)}
          >
            {s.icon} {name}
          </button>
        ))}
      </div>

      {/* Skill grid */}
      <div className="lesson-grid">
        {Object.entries(sec.groups).map(([groupName, skills]) => (
          <div key={groupName} className="group-block">
            <div className="group-label">{groupName}</div>
            <div className="skill-cards">
              {skills.map(skill => {
                const st = getStatus(activeStudent, skill.id);
                return (
                  <div key={skill.id} className="skill-card" onClick={() => setModal({ skill, groupName })}>
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-footer">
                      <span className="skill-id">{skill.id}</span>
                      <span className="skill-badge" style={statusStyle(st)}>{statusLabel(st)}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <SkillModal
          skill={modal.skill}
          section={activeSection}
          group={modal.groupName}
          getStatus={getStatus}
          setStatus={setStatus}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}
