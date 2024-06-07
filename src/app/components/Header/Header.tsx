'use client';
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import HeaderSettings from './HeaderSettings';
import { useContext } from 'react';
import { SideMenuContext } from '@/app/context/SideMenuContext';

export default function Header() {
  const { onToggle } = useContext(SideMenuContext);

  return (
    <header className="flex fixed h-28 w-full justify-between items-center transition-all gap-4 border-b bg-blue-900 px-6">
      <div className="flex flex-row gap-10 h-14 items-center">
        <Button
          onClick={onToggle}
          className="h-6 w-6 transition-all"
          size="icon"
          type="button"
          variant="link"
        >
          <MenuIcon className="h-6 w-6 hover:text-yellow-400 text-white" />
        </Button>
        <Image
          src="/fpf-logo-mobile-branco.png"
          alt="Logo FPF"
          quality={80}
          priority
          width={50}
          height={50}
        />
        <h1 className="text-white font-semibold">
          Federação Paulista de Futebol
        </h1>
      </div>
      <HeaderSettings />
    </header>
  );
}
