import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function BroadcastMessageForm() {
    return (        
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Enviar mensagem aos usuários</CardTitle>
                <CardDescription>Indique o nome da lista de transmissão e a mensagem à ser enviada</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Nome da lista de transmissão</Label>
                            <Input id="name" name="name" required />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="message">Mensagem</Label>
                            <Input id="message" name="message" required />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button>Enviar mensagem</Button>
            </CardFooter>
        </Card>
    )
}