export default function HomePage() {
  const dailyTasks = [
    { name: 'Leer 20 páginas', xp: 50, done: true },
    { name: 'Resolver 10 ejercicios', xp: 80, done: true },
    { name: 'Ver clase de Cálculo', xp: 60, done: false },
    { name: 'Repasar apuntes', xp: 40, done: false },
  ];

  const stats = [
    { label: 'Racha', value: '7 días', icon: '🔥', color: 'from-orange-500 to-red-500' },
    { label: 'XP Hoy', value: '+340', icon: '⚡', color: 'from-yellow-500 to-amber-400' },
    { label: 'Rango', value: 'Lvl 12', icon: '⚔️', color: 'from-purple-500 to-indigo-500' },
    { label: 'Monedas', value: '1,250', icon: '🪙', color: 'from-teal-400 to-cyan-500' },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div
        className="relative rounded-2xl overflow-hidden min-h-[200px] flex items-end"
        style={{ background: 'linear-gradient(135deg, #1e0a3c 0%, #3b0f6e 50%, #1a1a4e 100%)' }}
      >
        <img
          src="/images/hero-bg.png"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="relative z-10 p-6 w-full">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-purple-300 text-sm font-medium mb-1" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                ¡Bienvenido de vuelta!
              </p>
              <h1 className="text-white text-2xl font-bold mb-1" style={{ fontFamily: 'Cinzel, serif' }}>
                Sergio el Sabio
              </h1>
              <div className="flex items-center gap-2">
                <span className="bg-purple-500/40 border border-purple-400/40 text-purple-200 text-xs px-2 py-0.5 rounded-full">
                  ⚔️ Guerrero del Conocimiento
                </span>
              </div>
            </div>
            <img src="/images/avatar.png" alt="avatar" className="w-24 h-24 object-contain drop-shadow-2xl" />
          </div>
          {/* XP Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-xs text-purple-300 mb-1" style={{ fontFamily: 'Exo 2, sans-serif' }}>
              <span>Nivel 12 → 13</span>
              <span>3,400 / 5,000 XP</span>
            </div>
            <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden border border-purple-500/30">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-400 relative overflow-hidden"
                style={{ width: '68%' }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" style={{ animationDuration: '2s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-900/80 border border-purple-900/40 rounded-xl p-4 flex items-center gap-3 hover:border-purple-500/50 transition-colors"
          >
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-lg shrink-0 shadow-lg`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-400 text-xs" style={{ fontFamily: 'Exo 2, sans-serif' }}>{stat.label}</p>
              <p className="text-white font-bold text-base" style={{ fontFamily: 'Exo 2, sans-serif' }}>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Quests */}
        <div className="bg-gray-900/80 border border-purple-900/40 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'Cinzel, serif' }}>
              📜 Misiones del Día
            </h2>
            <span className="text-xs text-purple-400 bg-purple-900/30 px-2 py-1 rounded-full">2/4</span>
          </div>
          <div className="space-y-3">
            {dailyTasks.map((task, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                  task.done
                    ? 'bg-purple-900/20 border border-purple-500/20'
                    : 'bg-gray-800/50 border border-gray-700/50'
                }`}
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  task.done ? 'border-purple-400 bg-purple-500/30' : 'border-gray-600'
                }`}>
                  {task.done && <span className="text-purple-300 text-xs">✓</span>}
                </div>
                <span
                  className={`flex-1 text-sm ${task.done ? 'line-through text-gray-500' : 'text-gray-200'}`}
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                >
                  {task.name}
                </span>
                <span className="text-yellow-400 text-xs font-bold" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  +{task.xp} XP
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity / Upcoming */}
        <div className="bg-gray-900/80 border border-purple-900/40 rounded-2xl p-5">
          <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            🗓️ Próximos Eventos
          </h2>
          <div className="space-y-3">
            {[
              { event: 'Examen de Cálculo III', time: 'Mañana, 10:00 AM', urgent: true },
              { event: 'Entrega Proyecto Final', time: 'Vie, 23:59', urgent: true },
              { event: 'Raid Grupal del Gremio', time: 'Sáb, 4:00 PM', urgent: false },
              { event: 'Torneo de Ranking', time: 'Dom, 6:00 PM', urgent: false },
            ].map((e, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-800/50 border border-gray-700/40 rounded-xl">
                <div className={`w-2 h-10 rounded-full shrink-0 ${e.urgent ? 'bg-red-500' : 'bg-purple-500'}`} />
                <div className="flex-1">
                  <p className="text-gray-200 text-sm font-medium" style={{ fontFamily: 'Exo 2, sans-serif' }}>{e.event}</p>
                  <p className="text-gray-500 text-xs" style={{ fontFamily: 'Exo 2, sans-serif' }}>{e.time}</p>
                </div>
                {e.urgent && (
                  <span className="text-xs text-red-400 bg-red-900/30 border border-red-800/40 px-2 py-0.5 rounded-full">
                    ¡Urgente!
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievement unlocked */}
      <div className="bg-gradient-to-r from-yellow-900/30 to-amber-900/20 border border-yellow-500/30 rounded-2xl p-4 flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-2xl shadow-lg shadow-yellow-900/40 shrink-0">
          🏆
        </div>
        <div className="flex-1">
          <p className="text-yellow-300 text-xs font-semibold mb-0.5" style={{ fontFamily: 'Exo 2, sans-serif' }}>
            ¡LOGRO DESBLOQUEADO!
          </p>
          <p className="text-white font-bold" style={{ fontFamily: 'Cinzel, serif' }}>Racha de 7 Días</p>
          <p className="text-gray-400 text-xs" style={{ fontFamily: 'Exo 2, sans-serif' }}>Completaste tareas 7 días seguidos</p>
        </div>
        <span className="text-yellow-400 font-bold text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>+500 XP</span>
      </div>
    </div>
  );
}
