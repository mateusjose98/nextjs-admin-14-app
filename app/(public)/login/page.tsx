'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PersonStanding } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <>
      <PersonStanding size={50} className="text-primary" />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Entrar</CardTitle>
          <CardDescription>Faça o seu login aqui</CardDescription>
        </CardHeader>
        <CardContent>login form</CardContent>
        <CardFooter className="flex justify-between">
          <small>Não tem conta?</small>
          <Button asChild variant={'outline'} size={'sm'}>
            <Link href="/cadastro">Cadastro</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
