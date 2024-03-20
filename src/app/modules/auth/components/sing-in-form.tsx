import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import AuthActions from "../actions/auth-actions";

export default function SingInForm() {
    return (        
        <Card className="w-[350px]">
            <form action={AuthActions.loginAccount}>
                <CardHeader>
                    <CardTitle>Acessar plataforma</CardTitle>
                </CardHeader>
                <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="username">Usuário</Label>
                                <Input id="username" name="username" required />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Senha</Label>
                                <Input id="password" name="password" type="password" required />
                            </div>
                        </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button type="submit">Login</Button>
                </CardFooter>
            </form>
        </Card>
    )
}