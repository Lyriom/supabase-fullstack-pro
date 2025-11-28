import Link from "next/link";
import ProductTable from "@/components/ProductTable";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Lista de Productos</h1>

      {/* Botones de Login / Logout */}
      <div style={{ margin: "20px 0", display: "flex", gap: "10px" }}>
        <Link
          href="/api/auth/signin"
          style={{
            padding: "8px 16px",
            background: "#0070f3",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Login
        </Link>

        <Link
          href="/api/auth/signout"
          style={{
            padding: "8px 16px",
            background: "#e53935",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Logout
        </Link>

        <Link
          href="/dashboard"
          style={{
            padding: "8px 16px",
            background: "#444",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Ir al Dashboard
        </Link>
      </div>

      {/* Tabla de productos */}
      <ProductTable />
    </main>
  );
}
