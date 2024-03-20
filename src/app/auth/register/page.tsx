import Link from "next/link";
import SingUpForm from "../../modules/auth/components/sing-up-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>SendFlow - Envio de mensagens automatizadas</h1>
      <SingUpForm />
      <hr />
      <nav className="mt-6">
        <Link className="text-blue-500" href="/">Home</Link>
      </nav>
    </main>
  );
}
