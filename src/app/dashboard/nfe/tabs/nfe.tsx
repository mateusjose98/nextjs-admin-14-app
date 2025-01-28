'use client';
import { DataTable } from '@/components/ui/data-table';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { PersonStanding } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { columns, Employee } from './columns';
const formSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().min(6, { message: 'Senha com tamanho inválido' }),
});

const employees: Employee[] = [
  {
    id: 1,
    firstName: 'Colin',
    lastName: 'Murray',
    teamName: 'alpha',
    isTeamLeader: true,
    avatar: '/images/cm.jpg',
    dtEmiss: '01/01/2021',
  },
  {
    id: 2,
    firstName: 'Tom',
    lastName: 'Phillips',
    teamName: 'alpha',
    isTeamLeader: false,
    dtEmiss: '01/01/2021',
  },
  {
    id: 3,
    firstName: 'Liam',
    lastName: 'Fuentes',
    teamName: 'alpha',
    isTeamLeader: false,
    dtEmiss: '01/01/2021',
  },
  {
    id: 4,
    firstName: 'Tina',
    lastName: 'Fey',
    teamName: 'canary',
    isTeamLeader: true,
    avatar: '/images/tf.jpg',
    dtEmiss: '01/01/2021',
  },
  {
    id: 5,
    firstName: 'Katie',
    lastName: 'Johnson',
    teamName: 'canary',
    isTeamLeader: false,
    dtEmiss: '01/01/2021',
  },
  {
    id: 6,
    firstName: 'Tina',
    lastName: 'Jones',
    teamName: 'canary',
    isTeamLeader: false,
    dtEmiss: '01/01/2021',
  },
  {
    id: 7,
    firstName: 'Amy',
    lastName: 'Adams',
    teamName: 'delta',
    isTeamLeader: true,
    dtEmiss: '01/01/2021',
    avatar: '/images/aa.jpg',
  },
  {
    id: 8,
    firstName: 'Ryan',
    lastName: 'Lopez',
    teamName: 'delta',
    isTeamLeader: false,
    avatar: '/images/rl.jpg',
    dtEmiss: '01/01/2021',
  },
  {
    id: 9,
    firstName: 'Jenny',
    lastName: 'Jones',
    teamName: 'delta',
    isTeamLeader: false,
    dtEmiss: '01/01/2021',
  },
];

export default function NfeTab() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema), // liga zod ao react-hook-form
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const submit = () => {
    console.log(form.getValues());
  };
  return (
    <div>
      <Card className="mb-3">
        <CardHeader>
          <CardTitle>Consulte a NF-e</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <p>Alguns dos filtros são obrigatórios!</p>
          </CardDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(() => {})}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Chave de acesso</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>CNPJ</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="XXXXXXXXXXXXXX"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>CNPJ</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="XXXXXXXXXXXXXX"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit">Buscar</Button>
            </form>
          </Form>
          <CardFooter></CardFooter>
        </CardContent>
      </Card>
      <Card className="mb-3">
        <CardHeader>
          <CardTitle>Employees</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={employees} />
        </CardContent>
      </Card>
    </div>
  );
}
