import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function CteTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Conhecimento de Transporte Eletrônico</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <p>
            O Conhecimento de Transporte Eletrônico (CT-e) é um documento
            digital que tem como objetivo registrar a prestação de serviços de
            transporte de cargas.
          </p>
          <p>
            O CT-e é emitido e armazenado eletronicamente, e é utilizado para
            documentar operações comerciais de transporte de mercadorias.
          </p>
        </CardDescription>

        <CardFooter>
          <a
            href="https://dfe-portal.svrs.rs.gov.br/CTE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Saiba mais
          </a>

          <a
            href="https://dfe-portal.svrs.rs.gov.br/CTE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Acessar
          </a>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
