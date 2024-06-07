import UserCard from './components/Card/UserCard';
import { CreateUserModal } from './components/Modal/createUserModal';

const userMock = [
  {
    id: '122addssa2331',
    image: 'https://github.com/DenisRaineri.png',
    avatarFallback: 'DR',
    userName: 'Denis Raineri',
    userEmail: 'denispraineri@gmail.com',
    userCPF: '123.456.789-00',
    userBirthDate: '16/07/1993',
    userAge: '30',
    userTel: '11 91111-2222',
    userAddress: 'Rua Fulano, 23',
    userStatus: true,
  },
  {
    id: '233asdd11233',
    image: 'https://github.com/filipedeschamps.png',
    avatarFallback: 'FD',
    userName: 'Filipe Deschamps',
    userEmail: 'filipedeschamps@gmail.com',
    userCPF: '123.456.789-00',
    userBirthDate: '20/03/1990',
    userAge: '34',
    userTel: '11 91111-2222',
    userAddress: 'Rua Fulano, 25',
    userStatus: false,
  },
];

export default function Home() {
  return (
    <main className="p-4 px-2 sm:px-4">
      <div className="flex items-center justify-between mt-28">
        <h2>
          Olá, <strong>Denis Raineri!</strong>
        </h2>
        <CreateUserModal />
      </div>
      <section className="mt-4">
        <div className="bg-blue-900 text-white p-4 rounded-t-md">
          <h2>Usuários</h2>
        </div>
        <div className="bg-gray-100 p-4 grid xl:grid-cols-2 gap-4 rounded-b-md">
          {userMock.map((user) => (
            <UserCard key={user.id} data={user} />
          ))}
        </div>
      </section>
    </main>
  );
}
