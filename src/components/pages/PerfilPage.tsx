export default function PerfilPage() {
  const skills = [
    { name: 'Matemáticas', level: 8, pct: 72, color: 'from-blue-500 to-cyan-400' },
    { name: 'Programación', level: 10, pct: 90, color: 'from-purple-500 to-indigo-400' },
    { name: 'Historia', level: 5, pct: 45, color: 'from-amber-500 to-yellow-400' },
    { name: 'Física', level: 6, pct: 58, color: 'from-green-500 to-emerald-400' },
    { name: 'Idiomas', level: 7, pct: 63, color: 'from-pink-500 to-rose-400' },
  ];

  const badges = [
    { icon: '🔥', name: 'Constante', desc: '7 días seguidos' },
    { icon: '⚡', name: 'Veloz', desc: '10 tareas en 1 día' },
    { icon: '🎯', name: 'Preciso', desc: '100% en examen' },
    { icon: '📚', name: 'Lector', desc: '50 libros leídos' },
    { icon: '🤝', name: 'Gremial', desc: 'Unirse a un gremio' },
    { icon: '🏆', name: 'Campeón', desc: 'Top 3 en ranking' },
  ];

  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <div
        className="rounded-2xl overflow-hidden relative"
        style={{ background: 'linear-gradient(135deg, #1e0a3c 0%, #2d1060 100%)' }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #7c3aed 0%, transparent 60%)' }} />
        <div className="relative p-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="relative">
              <img
                src="/images/avatar.png"
                alt="avatar"
                className="w-28 h-28 rounded-2xl object-contain bg-purple-900/40 border-2 border-purple-500/50 shadow-xl shadow-purple-900/50"
              />
              <span className="absolute -bottom-2 -right-2 bg-gradient-to-br from-purple-500 to-indigo-600 text-white text-xs font-bold px-2 py-0.5 rounded-full border border-purple-300/30 shadow">
                Nv.12
              </span>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-white text-2xl font-bold" style={{ fontFamily: 'Cinzel, serif' }}>Sergio el Sabio</h2>
              <p className="text-purple-300 text-sm mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>@Sergius081 · Guerrero del Conocimiento</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-3">
                <span className="bg-purple-800/50 border border-purple-600/40 text-purple-200 text-xs px-3 py-1 rounded-full">⚔️ Clase: Mago</span>
                <span className="bg-indigo-800/50 border border-indigo-600/40 text-indigo-200 text-xs px-3 py-1 rounded-full">🏰 Gremio: Pythoners</span>
                <span className="bg-yellow-800/40 border border-yellow-600/30 text-yellow-200 text-xs px-3 py-1 rounded-full">👑 Rango #8</span>
              </div>
              <div className="text-gray-400 text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                "El conocimiento es el arma más poderosa del universo ⚡"
              </div>
            </div>
          </div>

          {/* XP Progress */}
          <div className="mt-5 bg-black/30 rounded-xl p-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-purple-300 font-semibold" style={{ fontFamily: 'Exo 2, sans-serif' }}>Nivel 12</span>
              <span className="text-gray-400" style={{ fontFamily: 'Exo 2, sans-serif' }}>3,400 / 5,000 XP</span>
            </div>
            <div className="h-4 bg-black/50 rounded-full overflow-hidden border border-purple-900/50">
              <div className="h-full w-[68%] bg-gradient-to-r from-purple-600 to-indigo-400 rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-1.5" style={{ fontFamily: 'Exo 2, sans-serif' }}>1,600 XP para Nivel 13</p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            {[
              { label: 'Días activo', value: '42' },
              { label: 'Misiones', value: '138' },
              { label: 'Logros', value: '24' },
            ].map((s) => (
              <div key={s.label} className="bg-black/30 rounded-xl p-3 text-center">
                <p className="text-white text-xl font-bold" style={{ fontFamily: 'Exo 2, sans-serif' }}>{s.value}</p>
                <p className="text-gray-500 text-xs" style={{ fontFamily: 'Exo 2, sans-serif' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-gray-900/80 border border-purple-900/40 rounded-2xl p-5">
        <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'Cinzel, serif' }}>⚡ Habilidades</h3>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-300 text-sm font-medium" style={{ fontFamily: 'Exo 2, sans-serif' }}>{skill.name}</span>
                <span className="text-gray-400 text-xs" style={{ fontFamily: 'Exo 2, sans-serif' }}>Nv. {skill.level}</span>
              </div>
              <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                  style={{ width: `${skill.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div className="bg-gray-900/80 border border-purple-900/40 rounded-2xl p-5">
        <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'Cinzel, serif' }}>🏅 Insignias Obtenidas</h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {badges.map((b) => (
            <div key={b.name} className="flex flex-col items-center gap-1 bg-gray-800/50 border border-gray-700/50 rounded-xl p-3 hover:border-purple-500/40 transition-colors cursor-pointer">
              <span className="text-3xl">{b.icon}</span>
              <p className="text-white text-xs font-semibold text-center" style={{ fontFamily: 'Exo 2, sans-serif' }}>{b.name}</p>
              <p className="text-gray-500 text-[10px] text-center leading-tight" style={{ fontFamily: 'Exo 2, sans-serif' }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
