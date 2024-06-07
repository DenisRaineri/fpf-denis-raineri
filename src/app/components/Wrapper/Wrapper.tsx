'use client';
import { SideMenuContext } from '@/app/context/SideMenuContext';
import { useContext } from 'react';
import { tv } from 'tailwind-variants';

export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSideMenuOpen } = useContext(SideMenuContext);

  const wrapperVariants = tv({
    base: 'transition-all',
    variants: {
      variant: {
        open: 'sm:ml-40',
        close: 'ml-0',
      },
    },
  });

  return (
    <div
      className={wrapperVariants({
        variant: isSideMenuOpen ? 'open' : 'close',
      })}
    >
      {children}
    </div>
  );
}
