'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Plus, SquareX } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as Yup from 'yup';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const UserSchema = Yup.object().shape({
  name: Yup.string(),
  address: Yup.string(),
  email: Yup.string(),
  telphone: Yup.string(),
  birthDate: Yup.string(),
  gender: Yup.string(),
  image: Yup.mixed(),
});

export type UserType = Yup.InferType<typeof UserSchema>;

export function CreateUserModal() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [thumbnail, setThumbnail] = useState<null | File>(null);
  const preview = useMemo(
    () => (thumbnail ? URL.createObjectURL(thumbnail) : null),
    [thumbnail],
  );

  const createUserForm = useForm<UserType>({
    resolver: yupResolver(UserSchema),
  });

  const {
    handleSubmit,
    register,
    control,
    watch,
    formState: { isSubmitting },
  } = createUserForm;

  const watchImage = watch('image');

  useEffect(() => {
    if (watchImage) {
      setThumbnail(watchImage[0]);
    }
  }, [watchImage]);

  function createUser(formData: UserType) {
    toast.success('Usuário criado com sucesso!', {
      position: 'top-right',
    });
    closeModal();
  }

  function closeModal() {
    setIsOpened(false);
  }

  return (
    <AlertDialog open={isOpened}>
      <AlertDialogTrigger asChild onClick={() => setIsOpened(true)}>
        <Button className="flex h-[40px] w-[233px] items-center justify-center gap-[10px] rounded-xl bg-blue-300 font-poppins text-sm font-semibold leading-[21px] text-white-200 transition-colors hover:bg-blue-400">
          <Plus size={12} />
          Criar usuário
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="flex flex-col bg-white-100 px-[44px] bg-white">
        <div className="mb-4 flex h-5 sm:h-[48px] items-center justify-between ">
          <div className="flex items-center gap-x-[23px]">
            <p className="font-poppins text-lg sm:text-3xl font-bold text-blue-800">
              Preencha as informações
            </p>
          </div>

          <AlertDialogCancel onClick={closeModal} className="border-none p-0">
            <SquareX color="#67210f" size={30} strokeWidth={3} />
          </AlertDialogCancel>
        </div>

        <Form {...createUserForm}>
          <form
            onSubmit={handleSubmit(createUser)}
            className="flex flex-1 flex-col justify-between gap-3"
          >
            <div className="flex flex-row justify-evenly items-center">
              <div
                className="h-40 w-40 rounded-[10px] bg-[#D9D9D9]"
                style={{
                  backgroundImage: `url(${preview})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              <div className="flex flex-col items-center gap-4">
                <p className="text-sm text-gray-500 text-center">
                  Tamanho máximo: 5mb
                </p>
                <FormField
                  control={control}
                  name="image"
                  render={() => {
                    return (
                      <FormItem>
                        <FormLabel
                          htmlFor="image"
                          className="flex h-[37px] sm:w-[200px] w-[100px] cursor-pointer items-center text-center justify-center rounded-xl bg-blue-500  text-white hover:bg-blue-500"
                        >
                          Adicionar imagem
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            id="image"
                            className="hidden"
                            {...register('image')}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem className="relative flex-1">
                    <FormLabel className="absolute left-3 top-0 z-10 bg-white px-1 font-poppins text-xs font-normal leading-4 text-dark-100">
                      Nome
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Nome" type="text" {...field} />
                    </FormControl>

                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem className="relative flex-1">
                    <FormLabel className="absolute left-3 top-0 z-10 bg-white px-1 font-poppins text-xs font-normal leading-4 text-dark-100">
                      E-mail
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="E-mail" type="text" {...field} />
                    </FormControl>

                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex  flex-col sm:flex-row gap-2">
              <FormField
                control={control}
                name="address"
                render={({ field }) => (
                  <FormItem className="relative flex-1">
                    <FormLabel className="absolute left-3 top-0 z-10 bg-white px-1 font-poppins text-xs font-normal leading-4 text-dark-100">
                      Endereço
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Endereço" type="text" {...field} />
                    </FormControl>

                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="telphone"
                render={({ field }) => (
                  <FormItem className="relative flex-1">
                    <FormLabel className="absolute left-3 top-0 z-10 bg-white px-1 font-poppins text-xs font-normal leading-4 text-dark-100">
                      Telefone
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Telefone" type="text" {...field} />
                    </FormControl>

                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <FormField
                control={control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem className="relative flex-1">
                    <FormLabel className="absolute left-3 top-0 z-10 bg-white px-1 font-poppins text-xs font-normal leading-4 text-dark-100">
                      Data de nascimento
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Data de nascimento"
                        type="date"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="relative flex-1">
                    <FormLabel className="absolute left-3 top-0 z-10 bg-white px-1 font-poppins text-xs font-normal leading-4 text-dark-100">
                      Gênero
                    </FormLabel>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger>
                          <SelectValue placeholder="Gênero" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Masculino</SelectItem>
                          <SelectItem value="dark">Feminino</SelectItem>
                          <SelectItem value="system">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <AlertDialogAction
              disabled={isSubmitting}
              type="submit"
              className="mx-auto block h-[44px] w-auto sm:w-52 rounded-xl bg-blue-800 mt-4 text-md font-semibold text-white disabled:pointer-events-auto disabled:cursor-not-allowed disabled:opacity-50"
            >
              Criar usuário
            </AlertDialogAction>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
