'use client';
import {
  UsersIcon,
  PackageIcon,
  Trophy,
  Newspaper,
  Shield,
  PersonStanding,
  Building2,
} from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';
import { SideMenuContext } from '@/app/context/SideMenuContext';
import { tv } from 'tailwind-variants';

const SideMenuVariants = tv({
  base: 'fixed w-40 border-r h-full bg-blue-900 dark:bg-gray-800/40  top-[111px] -left-40 transition-all',
  variants: {
    variant: {
      open: 'translate-x-40',
      close: 'translate-x-0',
    },
  },
});

export default function SideMenu() {
  const { isSideMenuOpen } = useContext(SideMenuContext);

  return (
    <div
      className={SideMenuVariants({
        variant: isSideMenuOpen ? 'open' : 'close',
      })}
    >
      <div className="flex h-full max-h-screen flex-col gap-4">
        <div className="flex-1 overflow-auto py-4">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-4 px-3 py-2 text-yellow-400 "
              prefetch
              href="#"
            >
              <UsersIcon className="h-4 w-4" />
              Usuários
            </Link>
            <Link
              className="flex items-center gap-4  px-3 py-2 text-white hover:text-yellow-400 "
              prefetch
              href="#"
            >
              <Trophy className="h-4 w-4" />
              Placar
            </Link>
            <Link
              className="flex items-center gap-4  px-3 py-2 text-white hover:text-yellow-400 "
              prefetch
              href="#"
            >
              <PackageIcon className="h-4 w-4" />
              Competições
            </Link>
            <Link
              className="flex items-center gap-4  px-3 py-2 text-white hover:text-yellow-400 "
              prefetch
              href="#"
            >
              <Newspaper className="h-4 w-4" />
              Notícias
            </Link>
            <Link
              className="flex items-center gap-4  px-3 py-2 text-white hover:text-yellow-400 "
              prefetch
              href="#"
            >
              <Shield className="h-4 w-4" />
              Clubes
            </Link>
            <Link
              className="flex items-center gap-4  px-3 py-2 text-white hover:text-yellow-400 "
              prefetch
              href="#"
            >
              <PersonStanding className="h-4 w-4" />
              Atletas
            </Link>
            <Link
              className="flex items-center gap-4  px-3 py-2 text-white hover:text-yellow-400 "
              prefetch
              href="#"
            >
              <Building2 className="h-4 w-4" />
              Estádios
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
