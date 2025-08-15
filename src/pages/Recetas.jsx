import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Recetas() {
  const [recetas, setRecetas] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert");
        const data = await res.json();
        setRecetas((data.meals || []).slice(0, 12));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filtered = recetas.filter(r =>
    r.strMeal.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <>
      <section className="contact-form" aria-labelledby="recetas-title">
        <h2 id="recetas-title">Recetas de postres</h2>
        <input
          type="search"
          placeholder="Buscar postre..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </section>

      {loading ? (
        <p style={{ textAlign: "center" }}>Cargando recetas...</p>
      ) : (
        <section className="container-carruosel">
          {filtered.map((r) => (
            <article
              key={r.idMeal}
              className="container-items"
              role="button"
              onClick={() => navigate(`/recetas/${r.idMeal}`)}
              title="Ver receta"
            >
              <div className="container-img">
                <img className="img" src={r.strMealThumb} alt={r.strMeal} />
              </div>
              <div className="container-description">
                <h4>{r.strMeal}</h4>
                <p>Ver receta →</p>
              </div>
            </article>
          ))}
        </section>
      )}
    </>
  );
}
