import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import BroadcastActions from "../actions/broadcast-actions";

export default function BroadcastManageForm() {
    return (
        <main>
            <h1 className="flex justify-center text-4xl mb-8">
                Gerencie sua lista de transmissão
            </h1>
            
            <div className="flex justify-between">
                <Card className="w-[350px]">
                    <form action={BroadcastActions.addContactBroadcast}>  
                        <CardHeader>
                            <CardTitle>Adicionar contato à lista de transmissão</CardTitle>
                            <CardDescription>Indique o nome da lista de transmissão e os contatos à serem adicionados</CardDescription>
                        </CardHeader>
                        <CardContent>
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
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button type="submit">Adicionar participante(s)</Button>
                        </CardFooter>
                    </form>
                </Card>
                <div className="mx-4"></div>
                <Card className="w-[350px]">
                    <form action={BroadcastActions.removeContactBroadcast}>  
                        <CardHeader>
                            <CardTitle>Remover contato à lista de transmissão</CardTitle>
                            <CardDescription>Indique o nome da lista de transmissão e os contatos à serem removidos</CardDescription>
                        </CardHeader>
                        <CardContent>
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
                        </CardContent>
                        <CardFooter className="flex justify-center w-full">
                            <Button type="submit" variant="destructive">Remover participante(s)</Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </main>
    )
}