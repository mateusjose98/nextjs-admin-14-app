import { Button } from '@/components/ui/button';
import { PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';
export default function LandingPage() {
  return (
    <>
      <h1 className="flex gap-2 items-center">
        <PersonStandingIcon size={50} className="text-red-500" /> Chama aqui!
      </h1>
      <p>O melhor de todos!</p>
      <div className="flex gap-2 items-center">
        {' '}
        <Button asChild>
          <Link href="/login">Entrar</Link>
        </Button>{' '}
        <small>ou</small>
        <Button variant={'outline'}>
          <Link href="/cadastro">Registrar-se</Link>
        </Button>
      </div>
    </>
  );
}
