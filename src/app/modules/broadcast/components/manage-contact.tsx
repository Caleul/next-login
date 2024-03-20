import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import BroadcastActions from "../actions/broadcast-actions";

export default function ContactManageForm() {
    return (
        <main>
            <h1 className="flex justify-center text-4xl mb-8">
                Gerencie sua lista de contatos
            </h1>
            
            <div className="flex justify-between">
                <Card className="w-[350px]">
                    <form action={BroadcastActions.saveContact}>  
                        <CardHeader>
                            <CardTitle>Adicionar contato à lista de Leads</CardTitle>
                        </CardHeader>
                        <CardContent>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Nome</Label>
                                        <Input id="name" name="name" required />
                                    </div>
                                   <div className="flex flex-col space-y-1.5">
                                       <Label htmlFor="phone">Telefone</Label>
                                       <Input id="phone" name="phone" required />
                                   </div>
                                </div>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button type="submit">Adicionar contato</Button>
                        </CardFooter>
                    </form>
                </Card>
                <div className="mx-4"></div>
                <Card className="w-[350px]">
                    <form action={BroadcastActions.removeContact}>  
                        <CardHeader>
                            <CardTitle>Remover contato à lista de transmissão</CardTitle>
                        </CardHeader>
                        <CardContent>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Nome</Label>
                                        <Input id="name" name="name" required />
                                    </div>
                                </div>
                        </CardContent>
                        <CardFooter className="flex justify-center w-full">
                            <Button type="submit" variant="destructive">Remover Lead</Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </main>
    )
}