import { STUDENTS, STATUS_OPTIONS, getInitials } from '../data/curriculum';

export default function SkillModal({ skill, section, group, getStatus, setStatus, onClose }) {
  if (!skill) return null;

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-handle" />
        <div className="modal-top">
          <div>
            <div className="modal-breadcrumb">{section} › {group}</div>
            <h3 className="modal-title">{skill.name}</h3>
            <div className="modal-code">{skill.id}</div>
          </div>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-legend">
          {STATUS_OPTIONS.map(opt => (
            <span key={opt.code} className="legend-item" style={{ background: opt.bg, color: opt.color }}>
              {opt.label}
            </span>
          ))}
        </div>

        <div className="student-list">
          {STUDENTS.map(student => {
            const st = getStatus(student, skill.id);
            return (
              <div key={student} className="student-row">
                <div className="student-avatar">{getInitials(student)}</div>
                <div className="student-name">{student}</div>
                <div className="status-toggle">
                  {STATUS_OPTIONS.map(opt => (
                    <button
                      key={opt.code}
                      className={`status-btn ${st === opt.code ? 'status-active' : ''}`}
                      style={st === opt.code ? { background: opt.bg, color: opt.color, borderColor: opt.color } : {}}
                      onClick={() => setStatus(student, skill.id, st === opt.code ? '' : opt.code)}
                      title={opt.label}
                    >
                      {opt.code}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
