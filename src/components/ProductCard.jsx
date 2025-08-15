  export default function ProductCard({ img, title, description }) {
    const scrollToContact = () => {
      const el = document.getElementById("contacto-title");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  
    return (
      <div className="container-items">
        <div className="container-img">
          <img className="img" src={img} alt={title} />
        </div>
        <div className="container-description">
          <h4>{title}</h4>
          <p>{description}</p>
          <button className="btn-interesa" onClick={scrollToContact}>
            Me interesa
          </button>
        </div>
      </div>
    );
  }
  
  