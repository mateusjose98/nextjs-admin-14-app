import { Button } from '@/components/ui/button';
import { PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';
export default function LandingPage() {
  return (
    <>
      <h1 className="flex gap-2 items-center">
        <PersonStandingIcon size={50} className="text-red-500" /> Chama aqui!
      </h1>
      <p>A melhor forma de gerenciar o seu negócio - la ele</p>
      <div className="flex gap-2 items-center">
        {' '}
        <Button variant={'default'} asChild>
          <Link href="/login">Entrar</Link>
        </Button>{' '}
        <small>ou</small>
        <Button asChild variant={'outline'}>
          <Link href="/cadastro">Registrar-se</Link>
        </Button>
      </div>
    </>
  );
}
