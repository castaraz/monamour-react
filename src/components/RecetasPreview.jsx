import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function RecetasPreview() {
  // ✅ Estado bien declarado
  const [recetas, setRecetas] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let activo = true; // para evitar setState si el componente se desmonta
    (async () => {
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert");
        if (!res.ok) throw new Error("No se pudo cargar la API");
        const data = await res.json();
        if (activo) setRecetas(data.meals || []);
      } catch (e) {
        if (activo) setError("No se pudo cargar la API");
      } finally {
        if (activo) setLoading(false);
      }
    })();
    return () => { activo = false; };
    // ✅ Incluimos setters para que ESLint no marque warning en CI
  }, [setRecetas, setError, setLoading]);

  // ✅ Usamos 'recetas' y 'q' para que no queden variables sin uso
  const filtradas = recetas
    .filter(r => r.strMeal.toLowerCase().includes(q.toLowerCase()))
    .slice(0, 6);

  return (
    <>
      <section className="contact-form api-recetas" aria-labelledby="recetas-home-title">
        <h2 id="recetas-home-title">Recetas de postres</h2>
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
        filtradas.length > 0 ? (
          <section className="container-carruosel">
            {filtradas.map((r) => (
              <article key={r.idMeal} className="container-items" title="Ver receta">
                <div className="container-img">
                  <img className="img" src={r.strMealThumb} alt={r.strMeal} />
                </div>
                <div className="container-description">
                  <h4>{r.strMeal}</h4>
                  <p>Postre</p>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <p style={{ textAlign: "center", marginTop: 8 }}>
            No hay resultados para “{q}”.
          </p>
        )
      )}
    </>
  );
}
