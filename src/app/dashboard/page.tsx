import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard 🔐</h1>
      <p>Bienvenido, {session.user?.email}</p>
      <p>Esta es una página protegida por Auth0 + NextAuth.</p>
    </div>
  );
}
