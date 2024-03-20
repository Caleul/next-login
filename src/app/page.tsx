import Link from "next/link";
import SingInForm from "./modules/auth/components/sing-in-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>SendFlow - Envio de mensagens automatizadas</h1>
      <SingInForm />
      <hr />
      <nav className="mt-6">
        <Link className="text-blue-500" href="/register">Registre-se</Link> | <Link className="text-blue-500" href="/forgot-password">Esqueceu a senha</Link>
      </nav>
    </main>
  );
}
