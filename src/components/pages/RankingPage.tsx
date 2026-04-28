import { useState } from 'react';

const globalRanking = [
  { name: 'DragonStudy', level: 18, xp: '42,000', guild: 'Pythoners', change: '+1', pos: 1 },
  { name: 'QuantumReader', level: 17, xp: '38,500', guild: 'MathMasters', change: '-1', pos: 2 },
  { name: 'CodeWitch', level: 16, xp: '35,200', guild: 'Coders', change: '=', pos: 3 },
  { name: 'AlgebraLord', level: 15, xp: '30,100', guild: 'MathMasters', change: '+2', pos: 4 },
  { name: 'StarStudent', level: 14, xp: '28,400', guild: 'StarStudy', change: '+3', pos: 5 },
  { name: 'MathWitch', level: 13, xp: '24,800', guild: 'Pythoners', change: '-1', pos: 6 },
  { name: 'PhysicsPro', level: 13, xp: '23,200', guild: 'ScienceLab', change: '-2', pos: 7 },
  { name: 'Sergio el Sabio', level: 12, xp: '19,400', guild: 'Pythoners', change: '+1', pos: 8, isMe: true },
  { name: 'HistoryNerd', level: 11, xp: '16,800', guild: 'Historians', change: '=', pos: 9 },
  { name: 'ChemistKing', level: 10, xp: '14,200', guild: 'ScienceLab', change: '-1', pos: 10 },
];

const posIcon = (pos: number) => {
  if (pos === 1) return '🥇';
  if (pos === 2) return '🥈';
  if (pos === 3) return '🥉';
  return `#${pos}`;
};

const changeColor = (change: string) => {
  if (change.startsWith('+')) return 'text-green-400';
  if (change.startsWith('-')) return 'text-red-400';
  return 'text-gray-500';
};

export default function RankingPage() {
  const [activeTab, setActiveTab] = useState<'global' | 'gremio' | 'amigos'>('global');

  const myRank = globalRanking.find(p => p.isMe);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-900/30 to-amber-900/20 border border-yellow-700/30 rounded-2xl p-5">
        <h2 className="text-white text-xl font-bold mb-1" style={{ fontFamily: 'Cinzel, serif' }}>🏆 Ranking de Estudiantes</h2>
        <p className="text-gray-400 text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>Se actualiza cada 24 horas</p>

        {/* My position */}
        <div className="mt-4 bg-black/30 rounded-xl p-4 flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg shrink-0">
            S
          </div>
          <div className="flex-1">
            <p className="text-white font-bold" style={{ fontFamily: 'Exo 2, sans-serif' }}>Tu posición</p>
            <p className="text-gray-400 text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>
              Gremio: {myRank?.guild} · Nivel {myRank?.level}
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-yellow-400" style={{ fontFamily: 'Cinzel, serif' }}>#{myRank?.pos}</p>
            <p className="text-green-400 text-xs" style={{ fontFamily: 'Exo 2, sans-serif' }}>{myRank?.change} esta semana</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-gray-900/50 p-1 rounded-xl border border-gray-800/50">
        {(['global', 'gremio', 'amigos'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium capitalize transition-all ${
              activeTab === tab
                ? 'bg-yellow-600/80 text-white shadow-lg shadow-yellow-900/40'
                : 'text-gray-400 hover:text-yellow-300'
            }`}
            style={{ fontFamily: 'Exo 2, sans-serif' }}
          >
            {tab === 'global' ? '🌍 Global' : tab === 'gremio' ? '🏰 Gremio' : '👥 Amigos'}
          </button>
        ))}
      </div>

      {/* Top 3 Podium */}
      <div className="flex items-end justify-center gap-3 pt-4">
        {/* 2nd */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-14 h-14 bg-gradient-to-br from-gray-400 to-gray-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-gray-300/30">
            Q
          </div>
          <p className="text-gray-300 text-xs text-center font-medium truncate w-full text-center" style={{ fontFamily: 'Exo 2, sans-serif' }}>QuantumReader</p>
          <div className="w-full h-16 bg-gradient-to-b from-gray-600 to-gray-700 rounded-t-xl flex items-center justify-center border-t-2 border-gray-400/30">
            <span className="text-2xl">🥈</span>
          </div>
        </div>
        {/* 1st */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl border-2 border-yellow-300/50">
            D
          </div>
          <p className="text-yellow-300 text-xs text-center font-bold truncate w-full text-center" style={{ fontFamily: 'Exo 2, sans-serif' }}>DragonStudy</p>
          <div className="w-full h-24 bg-gradient-to-b from-yellow-600/80 to-yellow-800/50 rounded-t-xl flex items-center justify-center border-t-2 border-yellow-400/40">
            <span className="text-3xl">🥇</span>
          </div>
        </div>
        {/* 3rd */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-amber-500/30">
            C
          </div>
          <p className="text-amber-400 text-xs text-center font-medium truncate w-full text-center" style={{ fontFamily: 'Exo 2, sans-serif' }}>CodeWitch</p>
          <div className="w-full h-10 bg-gradient-to-b from-amber-700 to-amber-800 rounded-t-xl flex items-center justify-center border-t-2 border-amber-500/30">
            <span className="text-2xl">🥉</span>
          </div>
        </div>
      </div>

      {/* Full Ranking */}
      <div className="bg-gray-900/80 border border-purple-900/40 rounded-2xl p-5">
        <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'Cinzel, serif' }}>📊 Tabla Completa</h3>
        <div className="space-y-2">
          {globalRanking.map((p) => (
            <div
              key={p.name}
              className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                p.isMe
                  ? 'bg-purple-900/25 border-purple-500/30'
                  : 'bg-gray-800/30 border-gray-700/20 hover:border-purple-500/20'
              }`}
            >
              <span className="text-base font-bold w-8 text-center shrink-0" style={{ fontFamily: 'Cinzel, serif' }}>
                {posIcon(p.pos)}
              </span>
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                {p.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${p.isMe ? 'text-purple-300' : 'text-gray-200'}`}
                  style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  {p.name} {p.isMe && '(tú)'}
                </p>
                <p className="text-gray-500 text-xs truncate" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  Nv.{p.level} · {p.guild}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-yellow-400 text-sm font-bold" style={{ fontFamily: 'Exo 2, sans-serif' }}>⚡ {p.xp}</p>
                <p className={`text-xs font-semibold ${changeColor(p.change)}`} style={{ fontFamily: 'Exo 2, sans-serif' }}>{p.change}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
