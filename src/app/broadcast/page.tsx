import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">      
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Gerencie suas listas de transmissão</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Link className="text-blue-500" href="/broadcast/manage-broadcast">Gerencia suas listas</Link>
            </div>
            <div className="flex flex-col space-y-1.5">
                <Link className="text-blue-500" href="/broadcast/broadcast-message">Envie mensagem para suas listas</Link>
            </div>
            <div className="flex flex-col space-y-1.5">
                <Link className="text-blue-500" href="/broadcast/manage-contact">Gerencie seus Leads</Link>
            </div>
          </div>
        </CardContent>
      </Card>
      <footer>
        <h1>SendFlow - Envio de mensagens automatizadas</h1>
      </footer>
    </main>
  );
}
