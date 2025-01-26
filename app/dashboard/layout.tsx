import { ReactNode } from 'react';
import MainMenu from './components/main-menu';
import TopBar from './components/top-bar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[300px_1fr] h-100">
      <MainMenu />
      <div className="flex flex-col w-full">
        <div>
          {' '}
          <TopBar />{' '}
        </div>
        <div className="p-4 md:bg-muted">
          <h1 className="pb-4">Bem vindo, teste!</h1>
          {children}
        </div>
      </div>
    </div>
  );
}
