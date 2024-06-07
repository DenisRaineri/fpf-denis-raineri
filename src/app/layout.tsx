import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header/Header';
import { SideMenuProvider } from './context/SideMenuContext';
import SideMenu from './components/SideMenu/SideMenu';
import { Toaster } from 'sonner';
import Wrapper from './components/Wrapper/Wrapper';

export const metadata: Metadata = {
  title: 'Federação Paulista de Futebol',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <SideMenuProvider>
          <Header />
          <SideMenu />
          <Toaster richColors />
          <Wrapper>{children}</Wrapper>
        </SideMenuProvider>
      </body>
    </html>
  );
}
