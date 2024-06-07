import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { User, Settings, LogOutIcon } from 'lucide-react';
import Link from 'next/link';

export default function HeaderSettings() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex rounded-full">
        <Avatar>
          <AvatarImage
            src="https://github.com/DenisRaineri.png"
            alt="@shadcn"
          />
          <AvatarFallback>DR</AvatarFallback>
        </Avatar>
        <span className="sr-only">Configurações do usuário</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-10 bg-blue-300">
        <DropdownMenuLabel>Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <Link prefetch href="#" className="flex flex-row">
              <User className="mr-2 h-4 w-4" />
              <span>Denis Raineri</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link prefetch href="#" className="flex flex-row">
              <Settings className="mr-2 h-4 w-4" />
              <span>Configurações</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link prefetch href="#" className="flex flex-row">
              <LogOutIcon className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
