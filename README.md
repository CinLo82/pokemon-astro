
```markdown
# Proyecto Pokémon Astro

Este es un proyecto de ejemplo utilizando Astro para crear una aplicación de listado de Pokémon. Puedes ver el proyecto en vivo en el siguiente enlace:

[https://cinlo-pokemon-astro.netlify.app/](https://cinlo-pokemon-astro.netlify.app/)

## 🚀 Estructura del Proyecto

Dentro de tu proyecto Astro, verás las siguientes carpetas y archivos:

```text
/
├── public/
├── src/
│   ├── components/
│   │   └── pokemons/
│   │       └── PokemonCard.astro
│   ├── interfaces/
│   │   └── favorite-pokemon.ts
│   ├── layout/
│   │   └── MainLayout.astro
│   └── pages/
│       └── pokemons/
│           └── [name].astro
└── file:///d%3A/Programacion/pokemon-astro/package.json
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta basada en su nombre de archivo.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio de producción en `./dist/`    |
| `npm run preview`         | Previsualiza tu construcción localmente, antes de desplegar |
| `npm run astro ...`       | Ejecuta comandos de CLI como `astro add`, `astro check` |

## 📁 Estructura de Carpetas

- **public/**: Archivos estáticos como imágenes.
- **src/**: Código fuente del proyecto.
  - **components/**: Componentes de Astro/React/Vue/Svelte/Preact.
  - **interfaces/**: Definiciones de tipos TypeScript.
  - **layout/**: Componentes de diseño.
  - **pages/**: Páginas del sitio.

## 🌟 Características

- Listado de Pokémon con imágenes y detalles.
- Navegación entre diferentes páginas de Pokémon.
- Funcionalidad para marcar Pokémon como favoritos.

## 📦 Instalación

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```sh
   git clone git@github.com:CinLo82/pokemon-astro.git
   ```
2. Navega al directorio del proyecto:
   ```sh
   cd tu-repositorio
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```

## 🚀 Despliegue

El proyecto está desplegado en Netlify. Puedes ver el sitio en vivo en el siguiente enlace:

[https://cinlo-pokemon-astro.netlify.app/](https://cinlo-pokemon-astro.netlify.app/)

## 🛠️ Tecnologías Utilizadas

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Solid.js](https://solidjs.com/)
- [Netlify](https://www.netlify.com/)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.
```


