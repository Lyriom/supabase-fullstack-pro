import Link from "next/link";
import ProductTable from "@/components/ProductTable";
import Image from "next/image"; 
export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Lista de Productos</h1>
           <img 
                src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3N
                jExNHE0YnUyNDF4OHdvYTYwaXh2eW9wOTBpemExZmthemk4NTh4Y
                3ljZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiIzJ
                SKB4l7xTouE8/giphy.gif" /> 
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
