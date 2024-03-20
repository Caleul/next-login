import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import AuthActions from "../actions/auth-actions";

export default function ForgotPasswordForm() {
    return (
        <Card className="w-[350px]">
            <form action={AuthActions.forgotPassword}>
                <CardHeader>
                    <CardTitle>Recuperesua senha</CardTitle>
                    <CardDescription>Será enviado para o e-mail cadastrado um link de recuperação</CardDescription>
                </CardHeader>
                <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" required />
                            </div>
                        </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button type="submit">Enviar link de recuperação</Button>
                </CardFooter>
            </form>
        </Card>
    )
}