import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NfeTab from './tabs/nfe';
import NfceTab from './tabs/nfce';
import CteTab from './tabs/cte';
export default function ConsultaPage() {
  return (
    <Tabs defaultValue="employees">
      <TabsList className="mb-4">
        <TabsTrigger value="nfe">NF-e</TabsTrigger>
        <TabsTrigger value="nfce">NFC-e</TabsTrigger>
        <TabsTrigger value="cte">CT-e</TabsTrigger>
        <TabsTrigger value="bpe">BP-e</TabsTrigger>
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
