import React from 'react';

export type Page = 'home' | 'perfil' | 'tienda' | 'misiones' | 'jefe' | 'gremio' | 'ranking' | 'ajustes';

interface NavItem {
  id: Page;
  label: string;
  icon: React.ReactNode;
}

interface NavBarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);
const PerfilIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
  </svg>
);
const TiendaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5.83 6H19l-1.5 9H7.5L5.83 6zM4.28 3H2v2h2l3.6 7.59L6.25 15C6.09 15.32 6 15.65 6 16h14v-2H8.42l.8-1.5H18c.75 0 1.41-.41 1.75-1.03l3-5.47c.16-.28.25-.61.25-.96 0-1.1-.9-2-2-2H5.21z" />
  </svg>
);
const MisionesIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z" />
  </svg>
);
const JefeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-4h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z" />
  </svg>
);
const GremioIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);
const RankingIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z" />
  </svg>
);
const AjustesIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
  </svg>
);

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: <HomeIcon /> },
  { id: 'perfil', label: 'Perfil', icon: <PerfilIcon /> },
  { id: 'tienda', label: 'Tienda', icon: <TiendaIcon /> },
  { id: 'misiones', label: 'Misiones', icon: <MisionesIcon /> },
  { id: 'jefe', label: 'Jefe Final', icon: <JefeIcon /> },
  { id: 'gremio', label: 'Gremio', icon: <GremioIcon /> },
  { id: 'ranking', label: 'Ranking', icon: <RankingIcon /> },
  { id: 'ajustes', label: 'Ajustes', icon: <AjustesIcon /> },
];

export default function NavBar({ activePage, onNavigate }: NavBarProps) {
  return (
    <>
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex flex-col w-20 lg:w-56 min-h-screen bg-gray-950 border-r border-purple-900/40 fixed left-0 top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-purple-900/40">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-900/50 shrink-0">
            <span className="text-white font-bold text-lg" style={{ fontFamily: 'Cinzel, serif' }}>⚔</span>
          </div>
          <span className="hidden lg:block text-white font-bold text-sm leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
            LevelUp<br /><span className="text-purple-400">Study</span>
          </span>
        </div>
        {/* Nav items */}
        <nav className="flex flex-col gap-1 p-3 flex-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group w-full text-left
                ${activePage === item.id
                  ? 'bg-purple-600/30 text-purple-300 shadow-md shadow-purple-900/30 border border-purple-500/30'
                  : 'text-gray-400 hover:bg-white/5 hover:text-purple-300'
                }`}
            >
              <span className={`shrink-0 transition-transform duration-200 group-hover:scale-110 ${activePage === item.id ? 'text-purple-400' : ''}`}>
                {item.icon}
              </span>
              <span className="hidden lg:block text-sm font-medium" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                {item.label}
              </span>
              {activePage === item.id && (
                <span className="hidden lg:block ml-auto w-1.5 h-1.5 rounded-full bg-purple-400" />
              )}
            </button>
          ))}
        </nav>
        {/* Version */}
        <div className="p-4 border-t border-purple-900/40 hidden lg:block">
          <p className="text-xs text-gray-600 text-center" style={{ fontFamily: 'Exo 2, sans-serif' }}>v1.0.0 Alpha</p>
        </div>
      </aside>

      {/* Bottom bar for mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur border-t border-purple-900/40">
        <div className="flex justify-around items-center py-2 px-1 overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg transition-all duration-200 min-w-0
                ${activePage === item.id
                  ? 'text-purple-400'
                  : 'text-gray-500 hover:text-purple-400'
                }`}
            >
              <span className={`transition-transform duration-200 ${activePage === item.id ? 'scale-110' : ''}`}>
                {item.icon}
              </span>
              <span className="text-[9px] font-medium truncate max-w-[40px]" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                {item.label}
              </span>
              {activePage === item.id && (
                <span className="w-1 h-1 rounded-full bg-purple-400 mt-0.5" />
              )}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
