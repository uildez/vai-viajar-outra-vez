'use client';

import { useState, useEffect } from 'react';

export const metadata = {
  robots: 'noindex, nofollow',
};

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [instagram, setInstagram] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState({});

  useEffect(() => {
    fetch('/api/social')
      .then(r => r.json())
      .then(data => {
        setCurrent(data);
        setInstagram(data.instagram || '');
      });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/social', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, instagram }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ type: 'error', message: data.error || 'Erro ao salvar' });
      } else {
        setStatus({ type: 'success', message: 'Salvo com sucesso!' });
        setCurrent({ ...current, instagram });
      }
    } catch {
      setStatus({ type: 'error', message: 'Erro de conexão' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-blue-600 mb-1">Painel Admin</h1>
        <p className="text-sm text-gray-400 mb-8">Vai Viajar Outra Vez</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Seguidores no Instagram
            </label>
            <input
              type="text"
              value={instagram}
              onChange={e => setInstagram(e.target.value)}
              placeholder="ex: 125k"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {current.instagram && (
              <p className="text-xs text-gray-400 mt-1">
                Atual: <span className="font-semibold">{current.instagram}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Senha
            </label>
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
            <p
              className={`text-sm font-medium ${
                status.type === 'success' ? 'text-green-600' : 'text-red-500'
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-lg px-4 py-2.5 transition-colors"
          >
            {loading ? 'Salvando...' : 'Salvar'}
          </button>
        </form>
      </div>
    </div>
  );
}
