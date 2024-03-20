import BroadcastManageForm from "@/app/modules/broadcast/components/manage-broadcast";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>SendFlow - Envio de mensagens automatizadas</h1>
      <BroadcastManageForm />
      <hr />
      <nav className="mt-6">
        <Link className="text-blue-500" href="/broadcast">Home</Link>
      </nav>
    </main>
  );
}
