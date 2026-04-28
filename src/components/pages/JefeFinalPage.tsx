import { useState } from 'react';

export default function JefeFinalPage() {
  const [attacking, setAttacking] = useState(false);

  const handleAttack = () => {
    setAttacking(true);
    setTimeout(() => setAttacking(false), 600);
  };

  const bossHp = 3800;
  const bossMaxHp = 10000;
  const bossHpPct = (bossHp / bossMaxHp) * 100;

  return (
    <div className="space-y-6">
      {/* Boss title */}
      <div className="text-center">
        <p className="text-red-400 text-xs font-semibold tracking-widest uppercase mb-1" style={{ fontFamily: 'Exo 2, sans-serif' }}>
          ⚔️ JEFE FINAL DE LA SEMANA
        </p>
        <h2 className="text-white text-2xl font-bold" style={{ fontFamily: 'Cinzel, serif' }}>
          Cálculo III: El Devorador
        </h2>
        <p className="text-gray-400 text-sm mt-1" style={{ fontFamily: 'Exo 2, sans-serif' }}>
          Tiempo restante: <span className="text-red-400 font-bold">2d 14h 30m</span>
        </p>
      </div>

      {/* Boss Card */}
      <div
        className="relative rounded-2xl overflow-hidden min-h-[280px] flex flex-col items-center justify-center"
        style={{ background: 'linear-gradient(180deg, #0a0015 0%, #1a0030 60%, #0d001f 100%)' }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-60"
          style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(139,0,255,0.3) 0%, transparent 70%)' }} />

        {/* Boss HP */}
        <div className="absolute top-4 left-4 right-4 z-10">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-red-400 font-bold" style={{ fontFamily: 'Cinzel, serif' }}>👹 Cálculo III</span>
            <span className="text-red-300" style={{ fontFamily: 'Exo 2, sans-serif' }}>
              {bossHp.toLocaleString()} / {bossMaxHp.toLocaleString()} HP
            </span>
          </div>
          <div className="h-4 bg-black/60 rounded-full overflow-hidden border border-red-900/50">
            <div
              className="h-full rounded-full bg-gradient-to-r from-red-700 to-red-500 relative overflow-hidden transition-all duration-700"
              style={{ width: `${bossHpPct}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-300/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Boss image */}
        <div className={`relative z-10 transition-all duration-150 ${attacking ? 'scale-90 opacity-70' : 'scale-100 opacity-100'}`}>
          <img
            src="/images/boss.png"
            alt="boss"
            className="w-48 h-48 object-contain drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 0 30px rgba(180, 0, 255, 0.6))' }}
          />
        </div>

        {/* Attack button */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <button
            onClick={handleAttack}
            className="w-full py-3 bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-500 hover:to-rose-400 text-white font-bold rounded-xl shadow-lg shadow-red-900/50 transition-all active:scale-95 flex items-center justify-center gap-2"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            ⚔️ ¡ATACAR! (Completar tarea)
          </button>
        </div>
      </div>

      {/* Your damage */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Tu Daño', value: '1,240', icon: '⚔️', color: 'text-red-400' },
          { label: 'Tu Rango', value: '#3', icon: '🏆', color: 'text-yellow-400' },
          { label: 'Ataques', value: '22', icon: '💥', color: 'text-purple-400' },
        ].map((s) => (
          <div key={s.label} className="bg-gray-900/80 border border-gray-700/40 rounded-xl p-4 text-center">
            <p className="text-2xl mb-1">{s.icon}</p>
            <p className={`text-xl font-bold ${s.color}`} style={{ fontFamily: 'Exo 2, sans-serif' }}>{s.value}</p>
            <p className="text-gray-500 text-xs" style={{ fontFamily: 'Exo 2, sans-serif' }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Leaderboard of damage */}
      <div className="bg-gray-900/80 border border-purple-900/40 rounded-2xl p-5">
        <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'Cinzel, serif' }}>💥 Top Atacantes</h3>
        <div className="space-y-2">
          {[
            { name: 'DragonStudy', dmg: '4,200', rank: 1 },
            { name: 'MathWitch', dmg: '3,800', rank: 2 },
            { name: 'Sergio el Sabio', dmg: '1,240', rank: 3, isMe: true },
            { name: 'CodeWarrior', dmg: '980', rank: 4 },
            { name: 'AlgebraKing', dmg: '750', rank: 5 },
          ].map((p) => (
            <div
              key={p.name}
              className={`flex items-center gap-3 p-3 rounded-xl ${
                p.isMe ? 'bg-purple-900/30 border border-purple-500/30' : 'bg-gray-800/30 border border-gray-700/20'
              }`}
            >
              <span className={`text-lg font-bold w-7 text-center ${
                p.rank === 1 ? 'text-yellow-400' : p.rank === 2 ? 'text-gray-300' : p.rank === 3 ? 'text-amber-600' : 'text-gray-600'
              }`}>
                {p.rank === 1 ? '🥇' : p.rank === 2 ? '🥈' : p.rank === 3 ? '🥉' : `#${p.rank}`}
              </span>
              <span className={`flex-1 text-sm font-medium ${p.isMe ? 'text-purple-300' : 'text-gray-300'}`}
                style={{ fontFamily: 'Exo 2, sans-serif' }}>
                {p.name} {p.isMe && '(tú)'}
              </span>
              <span className="text-red-400 font-bold text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                ⚔️ {p.dmg}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Rewards preview */}
      <div className="bg-gradient-to-r from-yellow-900/20 to-amber-900/10 border border-yellow-700/30 rounded-2xl p-5">
        <h3 className="text-white font-bold mb-3" style={{ fontFamily: 'Cinzel, serif' }}>🎁 Recompensas al Derrotar al Jefe</h3>
        <div className="flex gap-4 flex-wrap">
          {[
            { label: '2,000 XP', icon: '⚡' },
            { label: '500 monedas', icon: '🪙' },
            { label: 'Ítem exclusivo', icon: '📦' },
            { label: 'Título: Asesino', icon: '🏷️' },
          ].map((r) => (
            <div key={r.label} className="flex items-center gap-2 bg-black/30 px-3 py-2 rounded-xl">
              <span>{r.icon}</span>
              <span className="text-gray-300 text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>{r.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
