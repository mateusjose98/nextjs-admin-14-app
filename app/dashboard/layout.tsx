import { ReactNode } from 'react';
import MainMenu from './components/main-menu';
import TopBar from './components/top-bar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[250px,1fr]">
      <div className="flex flex-col sticky h-screen top-0">
        <MainMenu />
      </div>
      <div>
        <TopBar />{' '}
        <div className="p-4 md:bg-muted">
          <h1 className="pb-4">Bem vindo, teste!</h1>
          {children}
        </div>
      </div>
    </div>
  );
}
