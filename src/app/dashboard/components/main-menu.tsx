import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import MenuItem from './menu-item';
import MenuTitle from './menu-title';
import Link from 'next/link';
import {
  Bolt,
  House,
  PersonStanding,
  Search,
  ShieldAlert,
  UserRound,
} from 'lucide-react';
export default function MainMenu({ className }: { className?: string }) {
  return (
    <>
      {' '}
      <nav className={className}>
        <header className="hidden md:block border-b dark:border-b-black border-b-zinc-300 p-4">
          <MenuTitle />
        </header>
        <div className="flex flex-col flex-wrap justify-between h-full ">
          <div>
            <ul className="py-4 grow">
              <MenuItem href="/dashboard" icon={<House size={15} />}>
                Dashboard
              </MenuItem>
              <MenuItem
                submenu={[
                  { label: 'Nf-e', href: '/dashboard/nfe' },
                  { label: 'Ct-e', href: '/dashboard/cte' },
                ]}
                href="/dashboard/consulta"
                icon={<Search size={15} />}
              >
                Documento Fiscal
              </MenuItem>
              <MenuItem
                icon={<ShieldAlert size={15} />}
                submenu={[
                  { label: 'Pendentes', href: '/dashboard/avisos/pendentes' },
                  { label: 'Arquivados', href: '/dashboard/avisos/arquivados' },
                ]}
              >
                Avisos
              </MenuItem>
              <MenuItem href="/dashboard/conta" icon={<UserRound size={15} />}>
                Conta
              </MenuItem>
              <MenuItem
                href="/dashboard/configuracao"
                icon={<Bolt size={15} />}
              >
                Configuração
              </MenuItem>
            </ul>
          </div>
          <div className="mt-auto flex justify-center p-4 bg-slate-300">
            <small>
              <i>Empresa/Estado/Endereço</i>
            </small>
          </div>
        </div>
      </nav>
    </>
  );
}
