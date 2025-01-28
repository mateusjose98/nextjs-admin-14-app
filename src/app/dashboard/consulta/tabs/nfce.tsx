import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function NfceTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nota Fiscal de Consumidor Eletrônica</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <p>
            A Nota Fiscal de Consumidor Eletrônica (NFC-e) é um documento
            digital que tem como objetivo registrar a transferência de posse de
            uma mercadoria ou a prestação de um serviço.
          </p>
          <p>
            A NFC-e é emitida e armazenada eletronicamente, e é utilizada para
            documentar operações comerciais de venda de produtos ou serviços.
          </p>
        </CardDescription>

        <CardFooter>
          <a
            href="https://www.nfce.fazenda.gov.br/portal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Saiba mais
          </a>

          <a
            href="https://www.nfce.fazenda.gov.br/portal"
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
