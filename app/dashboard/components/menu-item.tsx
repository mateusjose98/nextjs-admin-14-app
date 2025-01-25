'use client';

import { DrawerContext } from '@/components/ui/drawer';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

type Props = {
  children: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
};

export default function MenuItem({ children, href, icon }: Props) {
  const { onClose } = useContext(DrawerContext);
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="m-1">
      <Link
        className={cn(
          'flex items-center p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground',
          isActive &&
            'bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground',
        )}
        href={href}
        onClick={onClose}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    </li>
  );
}
