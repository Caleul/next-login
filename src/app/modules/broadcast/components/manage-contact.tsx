import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function ContactManageForm() {
    return (        
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Gerenciar contatos</CardTitle>
                <CardDescription>Faça o gerenciamento dos contatos</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
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
                </form>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button>Adicionar contato</Button>
            </CardFooter>
            <CardFooter className="flex justify-center">
                <Button variant="destructive">Remover contato</Button>
            </CardFooter>
        </Card>
    )
}