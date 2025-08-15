import ProductCard from "../components/ProductCard";
import ContactForm from "../components/ContactForm";
import RecetasPreview from "../components/RecetasPreview"; 

import cupcakes from "../img/cupcakes.jpg";
import memecakes from "../img/memecakes.jpg";
import ponque from "../img/ponque.JPG";

export default function Home() {
  return (
    <>
      <section className="container-carruosel">
        <ProductCard
          img={cupcakes}
          title="CUPCAKES PERSONALIZADOS"
          description="Realizamos cupcakes con las temáticas de tu preferencia en los sabores que más te gusten o en su sabor tradicional."
        />
        <ProductCard
          img={memecakes}
          title="MEMECAKES"
          description="Endulza y divierte tus momentos con un memecakes de vainilla, red velvet o chocolate con el diseño que prefieras."
        />
        <ProductCard
          img={ponque}
          title="PONQUÉS"
          description="Disfruta una deliciosa pasta de ponqué en vainilla, red velvet o chocolate, con rellenos de frutos rojos, arequipe, chocolate, maracuyá y más."
        />
      </section>
      <RecetasPreview />

      <section className="contact-form" aria-labelledby="contacto-title">
        <h2 id="contacto-title">Contáctanos</h2>
        <ContactForm />
      </section>
    </>
  );
}
