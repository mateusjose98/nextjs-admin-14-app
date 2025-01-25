import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import MenuItem from './menu-item';
import MenuTitle from './menu-title';
import Link from 'next/link';

export default function MainMenu() {
  return (
    <nav className="md:bg-muted overflow-auto p-4 flex flex-col">
      <header className="hidden md:block border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </header>
      <ul className="py-4 grow">
        <MenuItem href="/dashboard">Dashboard</MenuItem>
        <MenuItem href="/consultas">Consultas</MenuItem>
        <MenuItem href="/avisos">Avisos</MenuItem>
        <MenuItem href="/conta">Conta</MenuItem>
        <MenuItem href="/configuracao">Configuração</MenuItem>
      </ul>
      <footer className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            JM
          </AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">
          Logout
        </Link>
        {/* <LightDarkToggle className="ml-auto" /> */}
      </footer>
    </nav>
  );
}
