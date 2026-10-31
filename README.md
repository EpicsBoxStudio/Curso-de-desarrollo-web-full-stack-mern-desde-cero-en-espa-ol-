
# 🚀 Curso de Programación Web — De Cero a Fullstack

Un curso completo de desarrollo web estructurado como un **roadmap de 180 días**, que va desde los fundamentos de HTML hasta el despliegue de aplicaciones MERN en producción.

![Estado](https://img.shields.io/badge/estado-en%20desarrollo-yellow)
![Días](https://img.shields.io/badge/duraci%C3%B3n-180%20d%C3%ADas-blue)
![Stack](https://img.shields.io/badge/stack-MERN-green)

---

## 📖 Descripción

Este proyecto es un **curso autodidacta de programación web** que cubre el camino completo de un desarrollador full stack:

- **Frontend**: HTML, CSS, JavaScript y React.
- **Backend**: Node.js, Express y APIs REST.
- **Base de datos**: MongoDB con Mongoose.
- **Herramientas**: Git, GitHub, NPM, VS Code, Postman.
- **Despliegue**: Vercel (frontend) y Render (backend).
- **Extras**: Glosario de términos técnicos y roadmap interactivo con seguimiento de progreso.

El curso está pensado para aprenderse **día a día**, con teoría, ejemplos prácticos, ejercicios y proyectos al final de cada módulo.

---

## 🎯 Características principales

- ✅ **Roadmap interactivo de 180 días** con barra de progreso y persistencia en `localStorage`.
- 🌓 **Modo claro/oscuro** compartido entre todas las páginas (recuerda la preferencia del usuario).
- 📚 **Glosario de términos técnicos** con búsqueda en vivo y filtros por categoría.
- 🔗 **Enlaces contextuales** desde las lecciones al glosario (ej. `DNS`, `HTTP`, `DOM`).
- 📌 **Progreso sincronizado**: al completar una lección se marca automáticamente en el roadmap.
- 📱 **Diseño responsive** adaptado a móvil, tablet y escritorio.
- 🧩 **Contenido modular**: cada día es una lección independiente y fácil de mantener.

---

## 🗂️ Estructura del proyecto

```
curso-fullstack/
│
├── index.html                  # Página principal (intro + temas)
├── roadmap.html                # Roadmap interactivo de 180 días
├──glosario/
|  └── glosario.html            # Glosario de términos técnicos
├── README.md                   # Este archivo
│
├── scripts/
│   └── theme.js                 # Script de tema claro/oscuro compartido
|   └── progress-btn.js          # Boton de completado del progreso        
│
├── styles/
│   ├── layout.css               # Estilos globales (index, roadmap, temas)
│   └── lesson.css               # Estilos específicos de lecciones
|   └── roadmap.css              # Estilos especificos del roadmap       
│
├── temas/                      # Páginas de cada módulo del curso
│   ├── html.html
│   ├── css.html
│   ├── js-basico.html
│   ├── js-avanzado.html
│   ├── react.html
│   ├── node-express.html
│   ├── mongodb.html
│   ├── fullstack-integracion.html
│   ├── despliegue.html
│   └── ...
│
├── lecciones/                  # Lecciones individuales (un archivo por día)
│   ├── html/
│   │   ├── dia-01-intro-web.html
│   │   ├── dia-02-etiquetas.html
│   │   ├── dia-03-listas-tablas.html
│   │   └── ...
│   ├── css/
│   ├── js/
│   ├── react/
│   ├── node/
│   ├── mongodb/
│   └── ...
│
├── assets/
│   ├── img/                    # Imágenes e ilustraciones
│   └── icons/                  # Iconos personalizados
│
└── docs/
    ├── glosario-ids.md         # Tabla de IDs de términos del glosario
    └── plantilla-leccion.md    # Plantilla para nuevas lecciones
```

---

## ⚙ Roadmap del curso

El curso está dividido en **16 módulos** que suman 180 días:

| Módulo | Días | Contenido principal |
|---|---|---|
| 📅 **HTML** | 1-10 | Estructura, etiquetas, formularios, semántica, SEO, accesibilidad |
| 🎨 **CSS** | 11-25 | Selectores, box model, Flexbox, Grid, responsive, animaciones |
| ⚡ **JavaScript Básico** | 26-37 | Variables, funciones, arrays, objetos, DOM, eventos |
| 📌 **Práctica JS** | 38-45 | Problemas de lógica + To-Do App |
| 🔥 **JavaScript Avanzado** | 46-55 | ES6+, promesas, async/await, fetch, closures |
| 📌 **Mini Apps JS** | 56-65 | Contador, calculadora, quiz, Weather App |
| 🛠️ **Git + Herramientas** | 66-70 | Git, GitHub, VS Code, NPM |
| ⚛️ **React JS** | 71-83 | JSX, componentes, props, state, hooks, Router |
| 📌 **Práctica React** | 84-100 | Componentes reutilizables + Blog/Dashboard |
| 🛠️ **Backend (Node + Express)** | 101-110 | Node.js, routing, middleware, JWT |
| 📌 **Práctica APIs** | 111-130 | CRUD, autenticación, APIs REST |
| 🗄️ **MongoDB** | 131-136 | CRUD, colecciones, Mongoose, schemas |
| 📌 **Integración DB** | 137-150 | Consultas avanzadas + CRUD App |
| 🌐 **Integración Full Stack** | 151-155 | Frontend + backend, auth, rutas protegidas |
| 📌 **App Full Stack** | 156-170 | App MERN completa con dashboard |
| 🚀 **Despliegue + Final** | 171-180 | Vercel, Render, variables de entorno, proyecto final |

> 📌 El roadmap completo e interactivo está disponible en [`roadmap.html`](roadmap.html).

---

## 🚀 Cómo usar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/EpicsBoxStudio/Curso-de-desarrollo-web-full-stack-mern-desde-cero-en-espa-ol.git
cd Curso-de-desarrollo-web-full-stack-mern-desde-cero-en-espa-ol
```

### 2. Abrir en el navegador

No necesitas instalar nada para ver el curso. Solo abre `index.html` en tu navegador:

```bash
# En Linux / macOS
open index.html

# En Windows
start index.html
```

O usa la extensión **Live Server** de VS Code para recarga automática.

### 3. Navegar por el curso

- **`index.html`** → Introducción y lista de temas.
- **`roadmap.html`** → Roadmap interactivo con progreso.
- **`temas/*.html`** → Cada módulo con sus lecciones.
- **`lecciones/**/*.html`** → Lecciones individuales.
- **`glosario.html`** → Glosario de términos técnicos.

### 4. Marcar tu progreso

- Al final de cada lección, pulsa **"✅ Marcar este día como completado"**.
- El roadmap se actualizará automáticamente la próxima vez que lo visites.
- Tu progreso y tu tema preferido se guardan en `localStorage`.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura del curso y las lecciones |
| **CSS3** | Estilos, variables CSS, grid, flexbox, responsive |
| **JavaScript (ES6+)** | Interactividad, tema claro/oscuro, progreso, búsqueda |
| **localStorage** | Persistencia del tema y del progreso |
| **Git** | Control de versiones del proyecto |

> El curso **no requiere backend ni instalación de dependencias**: todo funciona en el navegador.

---

## 🎨 Sistema de temas (claro/oscuro)

Todas las páginas comparten el mismo sistema de tema mediante `js/theme.js`:

- Detecta la preferencia del sistema operativo al entrar por primera vez.
- Guarda la elección del usuario en `localStorage` (clave: `theme`).
- Aplica el tema mediante el atributo `data-theme` en `<html>`.
- El botón 🌙 / ☀️ está disponible en todas las páginas.

Para añadir el tema a una nueva página:

```html
<link rel="stylesheet" href="styles/style.css">
<script src="js/theme.js" defer></script>
```

Y en el header:

```html
<button class="theme-toggle" id="themeToggle" aria-label="Cambiar tema">🌙</button>
```

---

## 📌 Sistema de progreso

Cada tarea del roadmap tiene un **ID único** con el formato `task-{módulo}-{tarea}`:

| Día | Módulo | Tarea | ID |
|---|---|---|---|
| Día 1 | 0 (HTML) | 0 | `task-0-0` |
| Día 2 | 0 (HTML) | 1 | `task-0-1` |
| Día 11 | 1 (CSS) | 0 | `task-1-0` |
| Día 26 | 2 (JS) | 0 | `task-2-0` |

Al final de cada lección, el botón de progreso guarda ese ID en `localStorage`. El roadmap lee esos IDs al cargar y marca las casillas correspondientes.

---

## 📚 Glosario de términos

El archivo `glosario.html` incluye **~75 términos técnicos** organizados por categorías:

- 🌐 Redes
- 🎨 Frontend
- 🛠️ Backend
- 🗄️ Bases de datos
- 🛠️ Herramientas
- 💡 Conceptos generales

Cada término tiene un **ID único** (ej. `#dns`, `#http`) que permite enlazarlo desde cualquier lección:

```html
<a href="../../glosario.html#dns">DNS</a>
```

Al hacer clic, el glosario hace scroll al término y lo resalta brevemente.

---

## 🗂 Cómo añadir una nueva lección

1. Copia `docs/plantilla-leccion.md` o una lección existente.
2. Renómbrala con el formato `dia-XX-nombre.html`.
3. Colócala en la carpeta del módulo correspondiente (`lecciones/html/`, `lecciones/css/`, etc.).
4. Actualiza el `data-task-id` del botón de progreso.
5. Añade el enlace desde `temas/<módulo>.html`.
6. Enlaza los términos técnicos al glosario cuando aparezcan.

---

## 🎯 Objetivos del proyecto

- [x] Página principal con introducción y temas.
- [x] Roadmap interactivo con progreso.
- [x] Sistema de tema claro/oscuro compartido.
- [x] Glosario de términos técnicos.
- [ ] Módulo HTML completo (10 lecciones).
- [ ] Módulo CSS completo (15 lecciones).
- [ ] Módulo JavaScript completo (12 lecciones).
- [ ] Módulo React completo (13 lecciones).
- [ ] Módulo Backend completo (10 lecciones).
- [ ] Módulo MongoDB completo (6 lecciones).
- [ ] Módulo Full Stack completo (30 lecciones).
- [ ] Módulo Despliegue completo (10 lecciones).

---

## 🤝 Contribuciones

Este es un proyecto personal de aprendizaje, pero si encuentras errores, tienes sugerencias o quieres aportar contenido, puedes:

1. Abrir un **issue** describiendo el problema o la propuesta.
2. Hacer un **fork** del proyecto.
3. Crear una **rama** con tu mejora (`git checkout -b feature/mi-mejora`).
4. Enviar un **pull request**.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Puedes usarlo, modificarlo y compartirlo libremente, siempre que mantengas la atribución.

---

## 👤 Autor

**Julio A. Pineda**
- GitHub: [@EpicsBoxStudio](https://github.com/EpicsBoxStudio)

---

## ⭐ Agradecimientos

- A la comunidad de **freeCodeCamp**, **MDN Web Docs** y **Roadmap.sh** por sus recursos abiertos.
- A todos los que comparten conocimiento libremente en Internet. 💛

---

> **"El mejor momento para empezar fue ayer. El segundo mejor momento es ahora."**
> — Proverbio chino

---

<div align="center">
  Hecho con 💛 para aprender desarrollo web desde cero.
</div>

