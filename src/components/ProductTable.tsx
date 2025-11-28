"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";

export default function ProductTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");

  async function loadProducts() {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function createProduct() {
    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({ name }),
    });

    setName("");
    loadProducts();
  }

  return (
    <div>
      <h2>Crear producto</h2>

      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Nombre del producto"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: 6, marginRight: 10 }}
        />
        <button
          onClick={createProduct}
          style={{
            padding: "6px 12px",
            background: "#0070f3",
            color: "white",
            borderRadius: 6,
          }}
        >
          Crear
        </button>
      </div>

      <h2>Listado de productos</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
