import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  UserIcon,
  CalendarIcon,
  PhoneIcon,
  MapPinnedIcon,
  ListChecksIcon,
  CalendarClockIcon,
} from 'lucide-react';

type UserCardProps = {
  data: {
    image: string;
    avatarFallback: string;
    userName: string;
    userEmail: string;
    userCPF: string;
    userBirthDate: string;
    userAge: string;
    userTel: string;
    userAddress: string;
    userStatus: boolean;
  };
};

export default function UserCard({ data }: UserCardProps) {
  return (
    <Card className="w-full">
      <div className="flex flex-col gap-4">
        <div className="block sm:flex gap-4">
          <CardHeader className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <Avatar className="rounded-lg w-[150px] h-[150px]">
                  <AvatarImage
                    src={data.image}
                    alt="Imagem de perfil do usuário"
                  />
                  <AvatarFallback className="rounded-lg w-[150px] h-[150px]">
                    {data.avatarFallback}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-base font-medium">
                  {data.userName}
                </CardTitle>
                <CardDescription className="text-sm truncate">
                  {data.userEmail}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <Separator orientation="vertical" className="h-auto" />
          <CardContent className="flex flex-col gap-2 items-start mt-5">
            <div className="flex flex-col gap-2 truncate">
              <div className="flex flex-row items-center gap-2">
                <UserIcon className="h-4 w-4 mr-2" />
                <p className="text-sm">
                  <strong>CPF:</strong> {data.userCPF}
                </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <CalendarIcon className="h-4 w-4 mr-2" />
                <p className="text-sm">
                  <strong>Data de Nascimento:</strong> {data.userBirthDate}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 truncate">
              <div className="flex flex-row items-center gap-2">
                <CalendarClockIcon className="h-4 w-4 mr-2" />
                <p className="text-sm">
                  <strong>Idade:</strong> {data.userAge}
                </p>
              </div>

              <div className="flex flex-row items-center gap-2">
                <PhoneIcon className="h-4 w-4 mr-2" />
                <p className="text-sm">
                  <strong>Telefone:</strong> {data.userTel}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 truncate">
              <div className="flex flex-row items-center gap-2">
                <MapPinnedIcon className="h-4 w-4 mr-2" />
                <p className="text-sm">
                  <strong>Endereço:</strong> {data.userAddress}
                </p>
              </div>

              <div className="flex flex-row items-center gap-2">
                <ListChecksIcon className="h-4 w-4 mr-2" />
                <p className="text-sm">
                  <strong> Status:</strong>
                  {data.userStatus ? ' Ativo' : ' Inativo'}
                </p>
              </div>
            </div>
          </CardContent>
        </div>
        <Separator />
        <div className="ml-auto p-4">
          <Button className="bg-blue-900" size="sm">
            Editar perfil
          </Button>
        </div>
      </div>
    </Card>
  );
}
