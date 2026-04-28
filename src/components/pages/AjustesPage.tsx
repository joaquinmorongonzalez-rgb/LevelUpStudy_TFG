import { useState } from 'react';

export default function AjustesPage() {
  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [streakReminder, setStreakReminder] = useState(true);
  const [language, setLanguage] = useState('es');

  const Toggle = ({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) => (
    <button
      onClick={() => onChange(!value)}
      className={`w-12 h-6 rounded-full transition-all duration-300 relative shrink-0 ${
        value ? 'bg-purple-600' : 'bg-gray-700'
      }`}
    >
      <span
        className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-300 ${
          value ? 'left-7' : 'left-1'
        }`}
      />
    </button>
  );

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="bg-gray-900/80 border border-purple-900/40 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 border-b border-gray-800/60">
        <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: 'Exo 2, sans-serif' }}>{title}</h3>
      </div>
      <div className="divide-y divide-gray-800/40">{children}</div>
    </div>
  );

  const Row = ({ icon, label, desc, right }: { icon: string; label: string; desc?: string; right: React.ReactNode }) => (
    <div className="flex items-center gap-4 px-5 py-4">
      <span className="text-xl shrink-0">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-gray-200 text-sm font-medium" style={{ fontFamily: 'Exo 2, sans-serif' }}>{label}</p>
        {desc && <p className="text-gray-500 text-xs mt-0.5" style={{ fontFamily: 'Exo 2, sans-serif' }}>{desc}</p>}
      </div>
      {right}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-white text-xl font-bold" style={{ fontFamily: 'Cinzel, serif' }}>⚙️ Ajustes</h2>
        <p className="text-gray-400 text-sm mt-1" style={{ fontFamily: 'Exo 2, sans-serif' }}>Personaliza tu experiencia</p>
      </div>

      {/* Profile quick edit */}
      <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/30 border border-purple-700/30 rounded-2xl p-5 flex items-center gap-4">
        <img src="/images/avatar.png" alt="avatar" className="w-16 h-16 object-contain bg-purple-900/40 rounded-xl border border-purple-500/30" />
        <div className="flex-1">
          <p className="text-white font-bold" style={{ fontFamily: 'Cinzel, serif' }}>Sergio el Sabio</p>
          <p className="text-gray-400 text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>@Sergius081 · Nivel 12</p>
        </div>
        <button className="bg-purple-600/50 hover:bg-purple-600 text-purple-200 text-sm px-4 py-2 rounded-xl border border-purple-500/40 transition-colors"
          style={{ fontFamily: 'Exo 2, sans-serif' }}>
          Editar
        </button>
      </div>

      {/* Notifications */}
      <Section title="🔔 Notificaciones">
        <Row
          icon="🔔"
          label="Notificaciones push"
          desc="Recibe alertas de misiones y gremio"
          right={<Toggle value={notifications} onChange={setNotifications} />}
        />
        <Row
          icon="🔥"
          label="Recordatorio de racha"
          desc="Te avisa antes de perder tu racha"
          right={<Toggle value={streakReminder} onChange={setStreakReminder} />}
        />
        <Row
          icon="🔊"
          label="Sonidos"
          desc="Efectos de sonido al subir de nivel"
          right={<Toggle value={sound} onChange={setSound} />}
        />
      </Section>

      {/* Appearance */}
      <Section title="🎨 Apariencia">
        <Row
          icon="🌙"
          label="Modo oscuro"
          desc="Interfaz en tonos oscuros"
          right={<Toggle value={darkMode} onChange={setDarkMode} />}
        />
        <Row
          icon="🌍"
          label="Idioma"
          desc="Idioma de la aplicación"
          right={
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-purple-500"
              style={{ fontFamily: 'Exo 2, sans-serif' }}
            >
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="pt">Português</option>
            </select>
          }
        />
      </Section>

      {/* Account */}
      <Section title="👤 Cuenta">
        {[
          { icon: '🔑', label: 'Cambiar contraseña', desc: 'Última vez: hace 30 días' },
          { icon: '📧', label: 'Correo electrónico', desc: 'sergio@email.com' },
          { icon: '📱', label: 'Dispositivos vinculados', desc: '2 dispositivos' },
          { icon: '🔗', label: 'Vincular GitHub', desc: 'Conecta tu cuenta de GitHub' },
        ].map((item) => (
          <Row
            key={item.label}
            icon={item.icon}
            label={item.label}
            desc={item.desc}
            right={
              <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            }
          />
        ))}
      </Section>

      {/* Support */}
      <Section title="❓ Soporte">
        {[
          { icon: '📖', label: 'Guía de uso', desc: 'Aprende a usar LevelUp Study' },
          { icon: '🐛', label: 'Reportar un error', desc: 'Ayúdanos a mejorar la app' },
          { icon: '💬', label: 'Contáctanos', desc: 'Soporte en línea' },
          { icon: '⭐', label: 'Valorar la app', desc: 'Tu opinión nos importa' },
        ].map((item) => (
          <Row
            key={item.label}
            icon={item.icon}
            label={item.label}
            desc={item.desc}
            right={
              <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            }
          />
        ))}
      </Section>

      {/* Danger zone */}
      <div className="bg-red-950/30 border border-red-800/30 rounded-2xl p-5 space-y-3">
        <h3 className="text-red-400 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: 'Exo 2, sans-serif' }}>
          ⚠️ Zona de peligro
        </h3>
        <button className="w-full py-3 border border-red-700/40 text-red-400 hover:bg-red-900/20 rounded-xl text-sm font-medium transition-colors"
          style={{ fontFamily: 'Exo 2, sans-serif' }}>
          Cerrar sesión
        </button>
        <button className="w-full py-3 border border-red-700/40 text-red-600 hover:bg-red-900/20 rounded-xl text-sm font-medium transition-colors"
          style={{ fontFamily: 'Exo 2, sans-serif' }}>
          Eliminar cuenta
        </button>
      </div>

      {/* Version */}
      <p className="text-center text-gray-700 text-xs pb-4" style={{ fontFamily: 'Exo 2, sans-serif' }}>
        LevelUp Study v1.0.0 Alpha · Hecho con ❤️ por el equipo
      </p>
    </div>
  );
}
