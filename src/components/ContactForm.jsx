import { useState, useRef } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const firstInvalidRef = useRef(null);

  const validate = (f) => {
    const errs = {};
    if (!f.nombre.trim()) errs.nombre = "Ingresa tu nombre.";
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.correo);
    if (!emailOk) errs.correo = "Escribe un correo válido.";
    if (f.mensaje.trim().length < 10)
      errs.mensaje = "Mensaje muy corto (mínimo 10 caracteres).";
    return errs;
  };

  const errors = validate(form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ nombre: true, correo: true, mensaje: true });

    const errs = validate(form);
    const keys = Object.keys(errs);
    if (keys.length) {
      if (firstInvalidRef.current) firstInvalidRef.current.focus();
      return;
    }

    setSubmitted(true);
    setForm({ nombre: "", correo: "", mensaje: "" });
    setTouched({});
  };
  const setInvalidRef = (el, hasError) => {
    if (hasError && !firstInvalidRef.current) firstInvalidRef.current = el;
  };

  if (!Object.keys(errors).length && firstInvalidRef.current) {
    firstInvalidRef.current = null;
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="nombre">Nombre</label>
      <input
        id="nombre"
        name="nombre"
        type="text"
        placeholder="Tu nombre"
        value={form.nombre}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-invalid={touched.nombre && !!errors.nombre}
        aria-describedby={errors.nombre ? "nombre-error" : undefined}
        ref={(el) => setInvalidRef(el, touched.nombre && !!errors.nombre)}
        required
      />
      {touched.nombre && errors.nombre && (
        <small className="error" id="nombre-error">{errors.nombre}</small>
      )}

      <label htmlFor="correo">Correo</label>
      <input
        id="correo"
        name="correo"
        type="email"
        placeholder="tu@correo.com"
        value={form.correo}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-invalid={touched.correo && !!errors.correo}
        aria-describedby={errors.correo ? "correo-error" : undefined}
        ref={(el) => setInvalidRef(el, touched.correo && !!errors.correo)}
        required
      />
      {touched.correo && errors.correo && (
        <small className="error" id="correo-error">{errors.correo}</small>
      )}

      <label htmlFor="mensaje">Mensaje</label>
      <textarea
        id="mensaje"
        name="mensaje"
        placeholder="¿En qué podemos ayudarte?"
        value={form.mensaje}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-invalid={touched.mensaje && !!errors.mensaje}
        aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
        ref={(el) => setInvalidRef(el, touched.mensaje && !!errors.mensaje)}
        required
      />
      {touched.mensaje && errors.mensaje && (
        <small className="error" id="mensaje-error">{errors.mensaje}</small>
      )}

      <button type="submit">Enviar</button>

      {submitted && (
        <p className="success" role="status">
          ¡Gracias! Tu mensaje fue enviado. Te contactaremos pronto.
        </p>
      )}
    </form>
  );
}
