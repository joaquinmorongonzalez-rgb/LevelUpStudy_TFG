import { useState } from 'react';

const items = [
  { id: 1, name: 'Poción XP x2', desc: 'Duplica tu XP por 1 hora', price: 200, icon: '⚗️', rarity: 'común', category: 'consumibles' },
  { id: 2, name: 'Escudo Anti-Racha', desc: 'Protege tu racha 1 vez', price: 350, icon: '🛡️', rarity: 'raro', category: 'consumibles' },
  { id: 3, name: 'Pergamino Resumen IA', desc: 'Genera un resumen mágico', price: 500, icon: '📜', rarity: 'épico', category: 'consumibles' },
  { id: 4, name: 'Capa del Estudioso', desc: 'Cosmético para tu avatar', price: 800, icon: '🧙', rarity: 'épico', category: 'cosméticos' },
  { id: 5, name: 'Corona del Saber', desc: 'Muestra tu dominio', price: 1200, icon: '👑', rarity: 'legendario', category: 'cosméticos' },
  { id: 6, name: 'Mascota Búho', desc: 'Te acompaña en tu aventura', price: 1500, icon: '🦉', rarity: 'legendario', category: 'mascotas' },
  { id: 7, name: 'Turbo de Misión', desc: 'Completa misión al instante', price: 300, icon: '⚡', rarity: 'raro', category: 'consumibles' },
  { id: 8, name: 'Marco Dragón', desc: 'Marco épico para perfil', price: 950, icon: '🐉', rarity: 'épico', category: 'cosméticos' },
];

const rarityColors: Record<string, string> = {
  común: 'border-gray-500/50 text-gray-400',
  raro: 'border-blue-500/50 text-blue-400',
  épico: 'border-purple-500/50 text-purple-400',
  legendario: 'border-yellow-500/50 text-yellow-400',
};

const rarityBg: Record<string, string> = {
  común: 'from-gray-800 to-gray-900',
  raro: 'from-blue-900/40 to-gray-900',
  épico: 'from-purple-900/40 to-gray-900',
  legendario: 'from-yellow-900/30 to-gray-900',
};

export default function TiendaPage() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const categories = ['todos', 'consumibles', 'cosméticos', 'mascotas'];

  const filtered = activeCategory === 'todos' ? items : items.filter(i => i.category === activeCategory);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/40 border border-purple-700/30 rounded-2xl p-5 flex items-center justify-between">
        <div>
          <h2 className="text-white text-xl font-bold" style={{ fontFamily: 'Cinzel, serif' }}>🏪 Tienda Mágica</h2>
          <p className="text-gray-400 text-sm mt-1" style={{ fontFamily: 'Exo 2, sans-serif' }}>Gasta tus monedas sabiamente</p>
        </div>
        <div className="bg-black/40 border border-yellow-500/30 rounded-xl px-4 py-2 flex items-center gap-2">
          <span className="text-2xl">🪙</span>
          <div>
            <p className="text-yellow-300 font-bold text-lg leading-none" style={{ fontFamily: 'Exo 2, sans-serif' }}>1,250</p>
            <p className="text-gray-500 text-xs" style={{ fontFamily: 'Exo 2, sans-serif' }}>monedas</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all ${
              activeCategory === cat
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/40'
                : 'bg-gray-800/80 text-gray-400 border border-gray-700/50 hover:text-purple-300'
            }`}
            style={{ fontFamily: 'Exo 2, sans-serif' }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`bg-gradient-to-b ${rarityBg[item.rarity]} border ${rarityColors[item.rarity].split(' ')[0]} rounded-2xl p-4 flex flex-col items-center gap-2 hover:scale-[1.02] transition-transform cursor-pointer group`}
          >
            <div className="w-16 h-16 bg-black/30 rounded-xl flex items-center justify-center text-4xl mb-1 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <p className="text-white text-sm font-bold text-center leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>{item.name}</p>
            <p className="text-gray-400 text-xs text-center leading-tight" style={{ fontFamily: 'Exo 2, sans-serif' }}>{item.desc}</p>
            <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${rarityColors[item.rarity]} bg-black/20`}
              style={{ fontFamily: 'Exo 2, sans-serif' }}>
              {item.rarity}
            </span>
            <button
              className="mt-auto w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-bold py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md shadow-purple-900/30"
              style={{ fontFamily: 'Exo 2, sans-serif' }}
            >
              <span>🪙</span> {item.price}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
