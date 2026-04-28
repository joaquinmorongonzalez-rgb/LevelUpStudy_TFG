export default function GremioPage() {
  const members = [
    { name: 'DragonStudy', level: 15, role: 'Líder', xp: '12,400', online: true },
    { name: 'MathWitch', level: 13, role: 'Oficial', xp: '9,800', online: true },
    { name: 'Sergio el Sabio', level: 12, role: 'Miembro', xp: '8,200', online: true, isMe: true },
    { name: 'CodeWarrior', level: 11, role: 'Miembro', xp: '7,100', online: false },
    { name: 'AlgebraKing', level: 10, role: 'Miembro', xp: '6,500', online: false },
    { name: 'HistoryHero', level: 9, role: 'Novato', xp: '4,200', online: false },
  ];

  const guildLog = [
    { text: 'DragonStudy derrotó al Jefe Final', time: 'hace 10 min', icon: '⚔️' },
    { text: 'MathWitch subió al Nivel 13', time: 'hace 1 hora', icon: '🆙' },
    { text: 'El gremio ganó 500 XP colectivos', time: 'hace 2 horas', icon: '✨' },
    { text: 'HistoryHero se unió al gremio', time: 'ayer', icon: '🤝' },
  ];

  return (
    <div className="space-y-6">
      {/* Guild Header */}
      <div className="relative rounded-2xl overflow-hidden">
        <img src="/images/guild-banner.png" alt="guild" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="relative bg-gradient-to-r from-indigo-950/90 to-purple-950/80 p-6 border border-indigo-700/30 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-indigo-900/50 shrink-0">
              🐍
            </div>
            <div className="flex-1">
              <h2 className="text-white text-xl font-bold" style={{ fontFamily: 'Cinzel, serif' }}>Gremio: Pythoners</h2>
              <p className="text-gray-400 text-sm mt-0.5" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                "Aprende, codifica, domina el mundo"
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs bg-indigo-800/50 border border-indigo-600/30 text-indigo-300 px-2 py-0.5 rounded-full">
                  👥 6 / 20 miembros
                </span>
                <span className="text-xs bg-purple-800/50 border border-purple-600/30 text-purple-300 px-2 py-0.5 rounded-full">
                  ⭐ Rango #4 Global
                </span>
                <span className="text-xs bg-green-800/40 border border-green-600/30 text-green-300 px-2 py-0.5 rounded-full">
                  ✅ Abierto
                </span>
              </div>
            </div>
          </div>

          {/* Guild XP */}
          <div className="mt-5 bg-black/30 rounded-xl p-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-indigo-300 font-semibold" style={{ fontFamily: 'Exo 2, sans-serif' }}>XP del Gremio · Nivel 7</span>
              <span className="text-gray-400" style={{ fontFamily: 'Exo 2, sans-serif' }}>48,000 / 75,000 XP</span>
            </div>
            <div className="h-3 bg-black/50 rounded-full overflow-hidden border border-indigo-900/50">
              <div className="h-full w-[64%] bg-gradient-to-r from-indigo-600 to-purple-400 rounded-full" />
            </div>
          </div>

          {/* Guild Stats */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            {[
              { label: 'XP Colectivo', value: '48K' },
              { label: 'Misiones', value: '342' },
              { label: 'Jefes vencidos', value: '18' },
            ].map((s) => (
              <div key={s.label} className="bg-black/30 rounded-xl p-3 text-center">
                <p className="text-white font-bold text-lg" style={{ fontFamily: 'Exo 2, sans-serif' }}>{s.value}</p>
                <p className="text-gray-500 text-xs" style={{ fontFamily: 'Exo 2, sans-serif' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Members */}
        <div className="bg-gray-900/80 border border-purple-900/40 rounded-2xl p-5">
          <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'Cinzel, serif' }}>👥 Miembros</h3>
          <div className="space-y-2">
            {members.map((m, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                  m.isMe
                    ? 'bg-purple-900/25 border-purple-500/30'
                    : 'bg-gray-800/30 border-gray-700/20 hover:border-purple-500/20'
                }`}
              >
                <div className="relative">
                  <div className="w-9 h-9 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    {m.name[0]}
                  </div>
                  <span className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border border-gray-900 ${m.online ? 'bg-green-500' : 'bg-gray-600'}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium truncate ${m.isMe ? 'text-purple-300' : 'text-gray-200'}`}
                    style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {m.name} {m.isMe && '(tú)'}
                  </p>
                  <p className="text-gray-500 text-xs" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {m.role} · Nv.{m.level}
                  </p>
                </div>
                <span className="text-yellow-400 text-xs font-bold shrink-0" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  ⚡ {m.xp}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Log */}
        <div className="bg-gray-900/80 border border-purple-900/40 rounded-2xl p-5">
          <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'Cinzel, serif' }}>📢 Actividad Reciente</h3>
          <div className="space-y-3">
            {guildLog.map((log, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-gray-800/40 border border-gray-700/30 rounded-xl">
                <span className="text-xl shrink-0 mt-0.5">{log.icon}</span>
                <div>
                  <p className="text-gray-300 text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>{log.text}</p>
                  <p className="text-gray-600 text-xs mt-0.5" style={{ fontFamily: 'Exo 2, sans-serif' }}>{log.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Guild Chat */}
          <div className="mt-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Escribe al gremio..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                style={{ fontFamily: 'Exo 2, sans-serif' }}
              />
              <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                style={{ fontFamily: 'Exo 2, sans-serif' }}>
                ➤
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
