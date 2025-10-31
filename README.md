# 🏠 Real Estate Front

Aplicación web moderna para gestión de propiedades inmobiliarias construida con React, TypeScript y Vite.

## 📋 Tabla de Contenidos

- [Requisitos](#-requisitos)
- [Instalación](#-instalación)
- [Desarrollo](#-desarrollo)
- [Testing](#-testing)
- [Arquitectura](#️-arquitectura)
- [Tecnologías](#️-tecnologías)
- [Scripts Disponibles](#-scripts-disponibles)

---

## 🔧 Requisitos

- **Node.js** >= 18.x
- **npm** >= 8.x

---

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd real-estate-front
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno** (opcional)
   
   Si necesitas una URL diferente para el backend, crea un archivo `.env`:
   ```env
   VITE_API_URL=/api
   ```

---

## 🚀 Desarrollo

### Iniciar servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: **http://localhost:5173**

### Backend

El proyecto está configurado con un proxy a `http://localhost:5056/api`. Asegúrate de que tu backend esté corriendo en ese puerto.

---

## 🧪 Testing

### Instalar dependencias de testing

```bash
npm install -D msw@latest
```

### Ejecutar tests

```bash
# Modo watch (recomendado para desarrollo)
npm test

# Ejecutar una vez
npm run test:run

# Con interfaz visual
npm run test:ui
```

### Tests implementados

- ✅ **Servicios API** (7 tests)
  - PropertyService con todos los filtros
  - Manejo de errores

- ✅ **Total:** 7 tests

### Ver detalles

Para más información sobre testing, consulta [TESTING.md](./TESTING.md)

---

## 🏗️ Arquitectura

El proyecto utiliza una **Arquitectura en Capas (N-Tier Architecture)** con separación clara de responsabilidades:

```
src/
├── pages/              # 📄 Capa de Presentación
│   ├── home/          # Página principal con listado
│   └── propertyDetail/ # Página de detalle
├── components/         # 🎨 Componentes UI Reutilizables
│   └── ui/            # Table, Filters, Loader
├── hooks/             # 🪝 Capa de Lógica de Negocio
│   ├── useProperties.ts
│   └── usePropertyDetail.ts
├── api/               # 🌐 Capa de Acceso a Datos
│   ├── service/       # Servicios (PropertyService)
│   └── config/        # Configuración HTTP (Axios)
└── types/             # 📝 Modelos de Datos (TypeScript)
```

### Patrones de Diseño

- ✅ **Service Layer Pattern** - Servicios encapsulados
- ✅ **Custom Hooks Pattern** - Lógica reutilizable
- ✅ **Repository Pattern** - Abstracción de datos
- ✅ **Separation of Concerns** - Capas independientes

---

## 🛠️ Tecnologías

### Core
- **React 19** - Librería UI
- **TypeScript 5.9** - Tipado estático
- **Vite 7** - Build tool

### Estilos
- **Tailwind CSS 4** - Utility-first CSS
- **CSS Custom Properties** - Variables y temas

### Networking
- **Axios 1.13** - Cliente HTTP
- **React Router Dom 7** - Enrutamiento

### Testing
- **Vitest 4** - Framework de testing
- **MSW** - Mock Service Worker

### Desarrollo
- **ESLint** - Linter
- **TypeScript ESLint** - Reglas TypeScript
- **SWC** - Compilador rápido

---

## 📜 Scripts Disponibles

### Desarrollo
```bash
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye para producción
npm run preview      # Preview de build de producción
```

### Calidad de Código
```bash
npm test            # Ejecuta tests en modo watch
npm run test:run    # Ejecuta tests una vez
```

---

## 📱 Funcionalidades

### ✨ Implementadas

- ✅ Listado de propiedades con tabla responsive
- ✅ Filtros de búsqueda (nombre, dirección, rango de precios)
- ✅ Paginación (10 elementos por página)
- ✅ Vista de detalle de propiedad
- ✅ Navegación con React Router
- ✅ Scrollbar personalizado
- ✅ Columna sticky en tabla
- ✅ Estados de loading y error
- ✅ Diseño responsive (mobile-first)
- ✅ Tema oscuro con gradientes cyan-azul

---

## 🎨 Características de UI/UX

- **Paleta de colores moderna** - Gradientes cyan-azul sobre fondo oscuro
- **Animaciones suaves** - Transiciones y hover effects
- **Scrollbar personalizado** - Diseño coherente con la aplicación
- **Tabla interactiva** - Hover states y columna fija
- **Responsive design** - Adaptado a móviles, tablets y desktop
- **Loading states** - Feedback visual durante peticiones

---

## 📂 Estructura de Proyecto

```
real-estate-front/
├── public/            # Archivos estáticos
├── src/
│   ├── api/          # Servicios y configuración HTTP
│   ├── components/   # Componentes reutilizables
│   ├── hooks/        # Custom hooks
│   ├── pages/        # Páginas/vistas
│   ├── types/        # Tipos TypeScript
│   ├── test/         # Configuración de tests
│   ├── App.tsx       # Componente raíz
│   ├── main.tsx      # Entry point
│   └── index.css     # Estilos globales
├── vitest.config.ts  # Configuración de Vitest
├── vite.config.ts    # Configuración de Vite
├── tsconfig.json     # Configuración TypeScript
└── package.json      # Dependencias y scripts
```

---

## 🔐 Variables de Entorno

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `VITE_API_URL` | URL base del API | `/api` |

---

## 🐛 Troubleshooting

### Error de CORS

Si experimentas errores de CORS, verifica que el backend esté corriendo en `http://localhost:5056`. El proxy en Vite está configurado automáticamente.

### Tests no corren

Asegúrate de instalar las dependencias de testing:
```bash
npm install -D msw@latest
```

---

## 👥 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

## 📞 Contacto

Para más información o soporte, contacta al equipo de desarrollo.

---
