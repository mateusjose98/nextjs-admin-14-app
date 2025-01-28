import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NfeTab from './tabs/nfe';
import NfceTab from './tabs/nfce';
import CteTab from './tabs/cte';

export default function ConsultaPage() {
  return (
    <Tabs defaultValue="employees">
      <TabsList className="mb-4">
        <TabsTrigger value="nfe">Autorização</TabsTrigger>
        <TabsTrigger value="nfce">Evento</TabsTrigger>
        <TabsTrigger value="cte">Inutilização</TabsTrigger>
        <TabsTrigger value="bpe">Outros</TabsTrigger>
      </TabsList>
      <TabsContent value="nfe">
        <NfeTab />
      </TabsContent>
      <TabsContent value="nfce">
        <NfceTab />
      </TabsContent>
      <TabsContent value="cte">
        <CteTab />
      </TabsContent>
      <TabsContent value="bpe">componente 2</TabsContent>
    </Tabs>
  );
}
