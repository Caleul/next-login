import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import BroadcastActions from "../actions/broadcast-actions";


export default function BroadcastMessageForm() {
    return (        
        <Card className="w-[350px]">
            <form action={BroadcastActions.broadcastMessage}>
                <CardHeader>
                    <CardTitle>Enviar mensagem aos usuários</CardTitle>
                    <CardDescription>Indique o nome da lista de transmissão e a mensagem à ser enviada</CardDescription>
                </CardHeader>
                <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Nome da lista de transmissão</Label>
                                <Input id="name" name="name" required />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="message">Mensagem</Label>
                                <textarea 
                                    className="border-solid border border-gray-300 rounded-md p-2"
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required 
                                />
                            </div>
                        </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button type="submit">Enviar mensagem</Button>
                </CardFooter>
            </form>
        </Card>
    )
}