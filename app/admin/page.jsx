'use client';

import { useState, useEffect } from 'react';
import { FaInstagram, FaYoutube, FaFacebook, FaTiktok } from 'react-icons/fa';

const FIELDS = [
  { key: 'instagram', label: 'Instagram', icon: FaInstagram, placeholder: 'ex: 125k', color: 'text-pink-500' },
  { key: 'youtube',   label: 'YouTube',   icon: FaYoutube,   placeholder: 'ex: +4',   color: 'text-red-500' },
  { key: 'facebook',  label: 'Facebook',  icon: FaFacebook,  placeholder: 'ex: 10k',  color: 'text-blue-600' },
  { key: 'tiktok',    label: 'TikTok',    icon: FaTiktok,    placeholder: 'ex: 50k',  color: 'text-gray-800' },
];

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [values, setValues] = useState({ instagram: '', youtube: '', facebook: '', tiktok: '' });
  const [current, setCurrent] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/social')
      .then(r => r.json())
      .then(data => {
        setCurrent(data);
        setValues({
          instagram: data.instagram || '',
          youtube:   data.youtube   || '',
          facebook:  data.facebook  || '',
          tiktok:    data.tiktok    || '',
        });
      });
  }, []);

  function handleChange(key, val) {
    setValues(v => ({ ...v, [key]: val }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/social', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, ...values }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ type: 'error', message: data.error || 'Erro ao salvar' });
      } else {
        setStatus({ type: 'success', message: 'Salvo com sucesso!' });
        setCurrent({ ...current, ...values });
      }
    } catch {
      setStatus({ type: 'error', message: 'Erro de conexão' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-blue-600 mb-1">Painel Admin</h1>
        <p className="text-sm text-gray-400 mb-8">Vai Viajar Outra Vez — redes sociais</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {FIELDS.map(({ key, label, icon: Icon, placeholder, color }) => (
            <div key={key}>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-1">
                <Icon className={color} />
                {label}
              </label>
              <input
                type="text"
                value={values[key]}
                onChange={e => handleChange(key, e.target.value)}
                placeholder={placeholder}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {current[key] && (
                <p className="text-xs text-gray-400 mt-1">
                  Atual: <span className="font-semibold">{current[key]}</span>
                </p>
              )}
            </div>
          ))}

          <div className="border-t border-gray-100 pt-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Senha</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {status && (
            <p className={`text-sm font-medium ${status.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-lg px-4 py-2.5 transition-colors"
          >
            {loading ? 'Salvando...' : 'Salvar alterações'}
          </button>
        </form>
      </div>
    </div>
  );
}
