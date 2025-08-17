import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function RecetasPreview() {
  const [ setRecetas] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar la API");
        return res.json();
      })
      .then((data) => setRecetas(data.meals || []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);


return (
    <>
      <section className="contact-form api-recetas" aria-labelledby="recetas-home-title">
        <h2 id="recetas-home-title">Recetas de postres </h2>
  
        <input
          type="search"
          placeholder="Buscar postre..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />

        <NavLink to="/recetas" className="btn-recetas">
          Ver todas las recetas →
        </NavLink>
      </section>
  
      {loading && <p style={{ textAlign: "center" }}>Cargando recetas…</p>}
      {error && <p style={{ textAlign: "center" }}>Error: {error}</p>}
  
      {!loading && !error && (
        <section className="container-carruosel">
        </section>
      )}
    </>
  );
}
  