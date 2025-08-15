# Monamour — Arte Dulce (React)

Aplicación web sencilla hecha con **React**. Muestra un catálogo de productos (cupcakes, memecakes y ponqués), un formulario de contacto con validación y una sección de **recetas** que consume una **API pública**.

## 🎯 Requisitos funcionales
- ✅ Interfaz interactiva y **responsiva**.
- ✅ **Componentes funcionales** en React.
- ✅ **React Router** para navegar entre páginas (Inicio, Contacto, Recetas).
- ✅ **Consumo de API pública** (TheMealDB) con `fetch` y buscador.
- ✅ Estilos con **CSS** (media queries, flexbox).
- ✅ **Código estructurado** por componentes y páginas.

## 🧭 Páginas y rutas
- `/` — Inicio (productos + preview de recetas + contacto)
- `/contacto` — Formulario de contacto con validación
- `/recetas` — Listado y búsqueda de recetas desde API pública

## 🔗 API usada
- Listado de postres: `https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`

## 🧱 Estructura del proyecto
src/
components/
Header.jsx
NavBar.jsx
ProductCard.jsx
ContactForm.jsx
Footer.jsx
RecetasPreview.jsx
pages/
Home.jsx
Contacto.jsx
Recetas.jsx
img/
App.js
practica.css