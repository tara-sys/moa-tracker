import { useState } from 'react';
import { useAuth } from '../firebase/AuthContext';

export default function LoginPage() {
  const { login, register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isRegister) {
        await register(email, password);
      } else {
        await login(email, password);
      }
    } catch (err) {
      setError(err.message.replace('Firebase: ', '').replace(/\(auth.*\)\.?/, ''));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="login-logo">
          <div className="login-leaf">🌿</div>
          <h1>Montessori of Acadiana</h1>
          <p>Kindergarten Progress Tracker</p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Teacher email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          {error && <div className="login-error">{error}</div>}
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Please wait…' : isRegister ? 'Create Account' : 'Sign In'}
          </button>
        </form>
        <button className="login-toggle" onClick={() => { setIsRegister(v => !v); setError(''); }}>
          {isRegister ? 'Already have an account? Sign in' : 'First time? Create an account'}
        </button>
      </div>
    </div>
  );
}
