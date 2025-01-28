'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { ptBR } from 'date-fns/locale';
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon, PersonStanding } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { format } from 'date-fns';

const formSchema = z
  .object({
    email: z.string().email({ message: 'Email inválido' }),
    accountType: z.enum(['personal', 'company']),
    companyName: z.string().optional(),
    numberOfEmployees: z.coerce.number().optional(), // coerce pq todos os campos são strings por padrão
    dob: z.date().refine((date) => {
      // customização par um campo específico pode ser feita com refine (true - mostrar erro, false - não mostrar erro)
      return new Date().getFullYear() - date.getFullYear() >= 18;
    }, 'Você deve ter mais de 18 anos!'),
  })
  .superRefine((data, ctx) => {
    if (data.accountType === 'company' && !data.companyName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['companyName'],
        message: 'Nome da empresa é obrigatório!!',
      });
    }
    if (
      data.accountType === 'company' &&
      (!data.numberOfEmployees || data.numberOfEmployees < 1)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['numberOfEmployees'],
        message: 'Número de funcionários inválido!',
      });
    }
  });

export default function SignUpPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema), // liga zod ao react-hook-form
    defaultValues: {
      email: '',
    },
  });

  const accountType = form.watch('accountType');

  const submit = () => {
    console.log(form.getValues());
  };

  return (
    <>
      <PersonStanding size={50} className="text-primary" />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Registrar</CardTitle>
          <CardDescription>Faça o seu cadastro</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@provider.com" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="accountType"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Tipo da conta</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione"></SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="personal">Pessoal</SelectItem>
                        <SelectItem value="company">Empresa</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {accountType == 'company' && (
                <>
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel>Nome da empresa</FormLabel>
                        <FormControl>
                          <Input placeholder="Nome da empresa" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="numberOfEmployees"
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel>Quantidade de funcionários</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Número de funcionários"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col mb-4 pt-2">
                    <FormLabel>Data</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className="normal-case flex justify-between pr-1"
                          >
                            {!!field.value ? (
                              field.value.toLocaleDateString()
                            ) : (
                              <span> Quando nasceu?</span>
                            )}
                            <CalendarIcon size={20} />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent align="start" className="w-auto p-0">
                        <Calendar
                          mode="single"
                          defaultMonth={field.value}
                          selected={field.value}
                          onSelect={field.onChange}
                          fixedWeeks={true}
                          weekStartsOn={1}
                          fromYear={new Date().getFullYear() - 150}
                          toDate={new Date()}
                          locale={ptBR}
                          captionLayout="dropdown-buttons"
                          // disabled={(date) => date > new Date()} exemplo para desabilitar quaisquer datas
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Cadastrar</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <small>Já tem conta?</small>
          <Button asChild variant={'outline'} size={'sm'}>
            <Link href="/login">Logar</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
