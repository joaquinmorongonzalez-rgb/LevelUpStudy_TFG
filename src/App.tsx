import { useState } from 'react';
import NavBar, { Page } from './components/NavBar';
import HomePage from './components/pages/HomePage';
import PerfilPage from './components/pages/PerfilPage';
import TiendaPage from './components/pages/TiendaPage';
import MisionesPage from './components/pages/MisionesPage';
import JefeFinalPage from './components/pages/JefeFinalPage';
import GremioPage from './components/pages/GremioPage';
import RankingPage from './components/pages/RankingPage';
import AjustesPage from './components/pages/AjustesPage';

const pageTitles: Record<Page, string> = {
  home: '🏠 Inicio',
  perfil: '👤 Mi Perfil',
  tienda: '🏪 Tienda',
  misiones: '📜 Misiones',
  jefe: '👹 Jefe Final',
  gremio: '🏰 Gremio',
  ranking: '🏆 Ranking',
  ajustes: '⚙️ Ajustes',
};

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage />;
      case 'perfil': return <PerfilPage />;
      case 'tienda': return <TiendaPage />;
      case 'misiones': return <MisionesPage />;
      case 'jefe': return <JefeFinalPage />;
      case 'gremio': return <GremioPage />;
      case 'ranking': return <RankingPage />;
      case 'ajustes': return <AjustesPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-950 text-white"
      style={{ fontFamily: 'Exo 2, sans-serif' }}
    >
      <NavBar activePage={activePage} onNavigate={setActivePage} />

      {/* Main content */}
      <main className="md:ml-20 lg:ml-56 min-h-screen">
        {/* Top bar */}
        <div className="sticky top-0 z-40 bg-gray-950/90 backdrop-blur border-b border-purple-900/30 px-4 md:px-6 py-3 flex items-center justify-between">
          <h1 className="text-white font-bold text-lg" style={{ fontFamily: 'Cinzel, serif' }}>
            {pageTitles[activePage]}
          </h1>
          <div className="flex items-center gap-3">
            {/* Coins display */}
            <div className="flex items-center gap-1.5 bg-gray-900 border border-yellow-700/30 rounded-xl px-3 py-1.5">
              <span className="text-base">🪙</span>
              <span className="text-yellow-300 font-bold text-sm">1,250</span>
            </div>
            {/* XP display */}
            <div className="flex items-center gap-1.5 bg-gray-900 border border-purple-700/30 rounded-xl px-3 py-1.5">
              <span className="text-base">⚡</span>
              <span className="text-purple-300 font-bold text-sm">3,400</span>
            </div>
            {/* Avatar */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-white font-bold shadow-lg border border-purple-500/30 overflow-hidden cursor-pointer"
              onClick={() => setActivePage('perfil')}>
              <img src="/images/avatar.png" alt="me" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="px-4 md:px-6 py-6 pb-24 md:pb-8 max-w-4xl">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}
