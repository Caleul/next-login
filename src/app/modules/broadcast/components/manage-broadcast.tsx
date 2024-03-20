import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function BroadcastManageForm() {
    return (        
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Gerenciar lista de transmissão</CardTitle>
                <CardDescription>Indique o nome da lista de transmissão e os contatos à serem adicionados ou removidos</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Nome da lista de transmissão</Label>
                            <Input id="name" name="name" required />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="contact">Contato</Label>
                            <Input id="contact" name="contact" required />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button>Adicionar participante(s)</Button>
            </CardFooter>
            <CardFooter className="flex justify-center w-full">
                <Button variant="destructive">Remover participante(s)</Button>
            </CardFooter>
        </Card>
    )
}