'use client';

import { DrawerContext } from '@/components/ui/drawer';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

type MenuItemProps = {
  children: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  submenu?: { label: string; href: string }[];
};

export default function MenuItem({
  children,
  href,
  icon,
  submenu,
}: MenuItemProps) {
  const { onClose } = useContext(DrawerContext);
  const pathname = usePathname();
  const isActive = href
    ? pathname === href
    : submenu?.some((item) => pathname.startsWith(item.href));

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log('isActive', isActive);
    console.log('pathname', pathname);
    console.log('submenu', submenu);
  }, [isActive]);

  return (
    <li className="m-1">
      {submenu ? (
        <div
          className={cn(
            'flex items-center p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground cursor-pointer',
            isActive &&
              'bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground',
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {icon && <span className="mr-2">{icon}</span>}
          {children}
          <ChevronDown
            className={cn(
              'ml-auto transition-transform',
              isOpen && 'rotate-180',
            )}
            size={15}
          />
        </div>
      ) : (
        <Link
          href={href || '#'}
          className={cn(
            'flex items-center p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground cursor-pointer',
            isActive &&
              'bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground',
          )}
          onClick={onClose}
        >
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </Link>
      )}
      {submenu && isOpen && (
        <ul className="ml-4 mt-1 border-l border-muted pl-2 space-y-1">
          {submenu.map(({ label, href }) => {
            const isSubActive = pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  className={cn(
                    'block p-2 rounded-md text-sm hover:bg-muted hover:text-foreground',
                    isSubActive && 'bg-primary text-primary-foreground',
                  )}
                  href={href}
                  onClick={onClose}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
