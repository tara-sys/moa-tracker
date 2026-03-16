import { useState } from 'react';
import { STUDENTS, SECTIONS, STATUS_OPTIONS, getAllSkills, getInitials } from '../data/curriculum';

function statusStyle(code) {
  const opt = STATUS_OPTIONS.find(o => o.code === code);
  return opt ? { background: opt.bg, color: opt.color } : { background: '#F1EFE8', color: '#5F5E5A' };
}
function statusLabel(code) {
  const opt = STATUS_OPTIONS.find(o => o.code === code);
  return opt ? opt.label : 'Not started';
}

function SectionBlock({ secName, sec, student, getStatus }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="report-section">
      <button className="report-section-header" onClick={() => setOpen(v => !v)}>
        <span>{sec.icon} {secName}</span>
        <span>{open ? '▾' : '▸'}</span>
      </button>
      {open && (
        <div className="report-section-body">
          {Object.entries(sec.groups).map(([groupName, skills]) => (
            <div key={groupName}>
              <div className="report-group-label">{groupName}</div>
              {skills.map(skill => {
                const st = getStatus(student, skill.id);
                return (
                  <div key={skill.id} className="report-skill-row">
                    <span className="report-skill-name">{skill.name}</span>
                    <span className="report-badge" style={statusStyle(st)}>{statusLabel(st)}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ReportView({ getStatus }) {
  const [activeStudent, setActiveStudent] = useState(STUDENTS[0]);
  const all = getAllSkills();
  const counts = { P: 0, Pr: 0, M: 0 };
  all.forEach(sk => {
    const s = getStatus(activeStudent, sk.id);
    if (counts[s] !== undefined) counts[s]++;
  });
  const pct = Math.round((counts.M / all.length) * 100);

  return (
    <div className="view">
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

      <div className="report-wrap">
        <div className="report-header">
          <div className="report-avatar">{getInitials(activeStudent)}</div>
          <div className="report-header-info">
            <h2>{activeStudent}</h2>
            <p>Kindergarten Progress Report · Montessori of Acadiana</p>
          </div>
        </div>

        <div className="report-stats">
          <div className="report-stat">
            <div className="stat-num" style={{ color: '#854F0B' }}>{counts.P}</div>
            <div className="stat-label">Presented</div>
          </div>
          <div className="report-stat">
            <div className="stat-num" style={{ color: '#0F6E56' }}>{counts.Pr}</div>
            <div className="stat-label">Practicing</div>
          </div>
          <div className="report-stat">
            <div className="stat-num" style={{ color: '#3B6D11' }}>{counts.M}</div>
            <div className="stat-label">Mastered</div>
          </div>
          <div className="report-stat">
            <div className="stat-num" style={{ color: '#3B6D11' }}>{pct}%</div>
            <div className="stat-label">Complete</div>
          </div>
        </div>

        <div className="progress-bar-wrap">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="progress-label">{counts.M} of {all.length} mastered</span>
        </div>

        {Object.entries(SECTIONS).map(([secName, sec]) => (
          <SectionBlock
            key={secName}
            secName={secName}
            sec={sec}
            student={activeStudent}
            getStatus={getStatus}
          />
        ))}
      </div>
    </div>
  );
}
