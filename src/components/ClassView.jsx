import { useState } from 'react';
import { STUDENTS, SECTIONS, STATUS_OPTIONS } from '../data/curriculum';
import SkillModal from './SkillModal';

const DOT_COLORS = { P: '#EF9F27', Pr: '#1D9E75', M: '#639922', '': '#D3D1C7' };

export default function ClassView({ getStatus, setStatus }) {
  const [activeSection, setActiveSection] = useState(Object.keys(SECTIONS)[0]);
  const [modal, setModal] = useState(null);
  const sec = SECTIONS[activeSection];

  return (
    <div className="view">
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

      <div className="class-table-wrap">
        <table className="class-table">
          <thead>
            <tr>
              <th className="skill-col">Skill</th>
              {STUDENTS.map(s => (
                <th key={s} className="student-col">{s.split(' ')[0].slice(0, 6)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(sec.groups).map(([groupName, skills]) => (
              <>
                <tr key={groupName + '_header'}>
                  <td colSpan={STUDENTS.length + 1} className="group-row">{groupName}</td>
                </tr>
                {skills.map(skill => (
                  <tr key={skill.id} className="skill-row" onClick={() => setModal({ skill, groupName })}>
                    <td className="skill-cell">{skill.name}</td>
                    {STUDENTS.map(s => {
                      const st = getStatus(s, skill.id);
                      return (
                        <td key={s} className="dot-cell">
                          <span
                            className="dot"
                            style={{ background: DOT_COLORS[st] || DOT_COLORS[''] }}
                            title={`${s}: ${st || 'Not started'}`}
                          />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>

        <div className="table-legend">
          <span><span className="dot" style={{ background: '#EF9F27', display:'inline-block' }} /> Presented</span>
          <span><span className="dot" style={{ background: '#1D9E75', display:'inline-block' }} /> Practicing</span>
          <span><span className="dot" style={{ background: '#639922', display:'inline-block' }} /> Mastered</span>
          <span><span className="dot" style={{ background: '#D3D1C7', display:'inline-block' }} /> Not started</span>
        </div>
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
