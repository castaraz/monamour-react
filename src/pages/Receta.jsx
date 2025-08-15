import { useEffect, useState, useMemo } from "react";
import { useParams, NavLink } from "react-router-dom";

export default function Receta() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        setMeal(data.meals?.[0] || null);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  const ingredientes = useMemo(() => {
    if (!meal) return [];
    const list = [];
    for (let i = 1; i <= 20; i++) {
      const ing = meal[`strIngredient${i}`];
      const meas = meal[`strMeasure${i}`];
      if (ing && ing.trim()) list.push(`${meas ? meas : ""} ${ing}`.trim());
    }
    return list;
  }, [meal]);

  if (loading) return <p style={{ textAlign: "center" }}>Cargando receta...</p>;
  if (!meal) return <p style={{ textAlign: "center" }}>No se encontró la receta.</p>;

  return (
    <section className="contact-form" aria-labelledby="receta-title">
      <NavLink to="/recetas" style={{ display: "inline-block", marginBottom: 12 }}>
        ← Volver a Recetas
      </NavLink>
      <h2 id="receta-title">{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "100%", borderRadius: 10, marginBottom: 12 }} />
      <h3>Ingredientes</h3>
      <ul style={{ textAlign: "left" }}>
        {ingredientes.map((it, idx) => (
          <li key={idx}>{it}</li>
        ))}
      </ul>
      <h3>Instrucciones</h3>
      <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>{meal.strInstructions}</p>
    </section>
  );
}
