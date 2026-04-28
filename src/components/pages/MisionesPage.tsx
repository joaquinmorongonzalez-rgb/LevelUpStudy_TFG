import { useState } from 'react';

const misions = {
  diarias: [
    { name: 'Leer 20 páginas de un libro', xp: 50, coins: 10, done: true, icon: '📖' },
    { name: 'Resolver 10 ejercicios', xp: 80, coins: 15, done: true, icon: '✏️' },
    { name: 'Ver una clase completa', xp: 60, coins: 12, done: false, icon: '🎓' },
    { name: 'Repasar apuntes del día', xp: 40, coins: 8, done: false, icon: '📝' },
    { name: 'Completar quiz rápido', xp: 70, coins: 14, done: false, icon: '⚡' },
  ],
  semanales: [
    { name: 'Completar 5 horas de estudio', xp: 300, coins: 60, done: false, icon: '⏱️', progress: 3.5, total: 5 },
    { name: 'Terminar un tema completo', xp: 250, coins: 50, done: false, icon: '🗺️', progress: 0, total: 1 },
    { name: 'Ganar 500 XP esta semana', xp: 200, coins: 40, done: false, icon: '⚡', progress: 340, total: 500 },
  ],
  especiales: [
    { name: '¡Semana perfecta! 7 días sin fallar', xp: 1000, coins: 200, done: false, icon: '🌟', desc: 'Completa todas tus misiones diarias 7 días seguidos' },
    { name: 'Maestro del quiz: 100 preguntas', xp: 500, coins: 100, done: false, icon: '🎯', desc: 'Responde correctamente 100 preguntas en total' },
  ],
};

export default function MisionesPage() {
  const [activeTab, setActiveTab] = useState<'diarias' | 'semanales' | 'especiales'>('diarias');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/40 border border-indigo-700/30 rounded-2xl p-5">
        <h2 className="text-white text-xl font-bold mb-1" style={{ fontFamily: 'Cinzel, serif' }}>📜 Misiones</h2>
        <p className="text-gray-400 text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>
          Completa misiones para ganar XP y monedas
        </p>
        <div className="flex gap-4 mt-4">
          {[
            { label: 'Completadas hoy', value: '2/5', icon: '✅' },
            { label: 'XP ganado', value: '130', icon: '⚡' },
            { label: 'Monedas', value: '+25', icon: '🪙' },
          ].map((s) => (
            <div key={s.label} className="flex-1 bg-black/30 rounded-xl p-3 text-center">
              <p className="text-lg">{s.icon}</p>
              <p className="text-white font-bold text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>{s.value}</p>
              <p className="text-gray-500 text-[10px]" style={{ fontFamily: 'Exo 2, sans-serif' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-gray-900/50 p-1 rounded-xl border border-gray-800/50">
        {(['diarias', 'semanales', 'especiales'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium capitalize transition-all ${
              activeTab === tab
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/40'
                : 'text-gray-400 hover:text-purple-300'
            }`}
            style={{ fontFamily: 'Exo 2, sans-serif' }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Daily Missions */}
      {activeTab === 'diarias' && (
        <div className="space-y-3">
          {misions.diarias.map((m, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                m.done
                  ? 'bg-purple-900/20 border-purple-500/20'
                  : 'bg-gray-900/70 border-gray-700/40 hover:border-purple-500/30'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 ${
                m.done ? 'bg-purple-900/40' : 'bg-gray-800'
              }`}>
                {m.icon}
              </div>
              <div className="flex-1">
                <p className={`text-sm font-medium ${m.done ? 'line-through text-gray-500' : 'text-gray-200'}`}
                  style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  {m.name}
                </p>
                <div className="flex gap-3 mt-1">
                  <span className="text-xs text-yellow-400" style={{ fontFamily: 'Exo 2, sans-serif' }}>⚡ +{m.xp} XP</span>
                  <span className="text-xs text-amber-300" style={{ fontFamily: 'Exo 2, sans-serif' }}>🪙 +{m.coins}</span>
                </div>
              </div>
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 ${
                m.done ? 'border-purple-400 bg-purple-500/30 text-purple-300' : 'border-gray-600'
              }`}>
                {m.done ? '✓' : ''}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Weekly Missions */}
      {activeTab === 'semanales' && (
        <div className="space-y-4">
          {misions.semanales.map((m, i) => (
            <div key={i} className="bg-gray-900/70 border border-gray-700/40 rounded-2xl p-4 hover:border-purple-500/30 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{m.icon}</span>
                <p className="text-gray-200 text-sm font-medium flex-1" style={{ fontFamily: 'Exo 2, sans-serif' }}>{m.name}</p>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400" style={{ fontFamily: 'Exo 2, sans-serif' }}>Progreso</span>
                  <span className="text-purple-300" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {m.progress} / {m.total}
                  </span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 to-indigo-400 rounded-full"
                    style={{ width: `${(Number(m.progress) / Number(m.total)) * 100}%` }}
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-xs text-yellow-400" style={{ fontFamily: 'Exo 2, sans-serif' }}>⚡ +{m.xp} XP</span>
                <span className="text-xs text-amber-300" style={{ fontFamily: 'Exo 2, sans-serif' }}>🪙 +{m.coins}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Special Missions */}
      {activeTab === 'especiales' && (
        <div className="space-y-4">
          {misions.especiales.map((m, i) => (
            <div key={i} className="bg-gradient-to-r from-yellow-900/20 to-amber-900/10 border border-yellow-700/30 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{m.icon}</span>
                <div>
                  <p className="text-white font-bold" style={{ fontFamily: 'Cinzel, serif' }}>{m.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5" style={{ fontFamily: 'Exo 2, sans-serif' }}>{m.desc}</p>
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <span className="text-sm text-yellow-400 font-bold" style={{ fontFamily: 'Exo 2, sans-serif' }}>⚡ +{m.xp} XP</span>
                <span className="text-sm text-amber-300 font-bold" style={{ fontFamily: 'Exo 2, sans-serif' }}>🪙 +{m.coins}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
