# Proyecto Full Stack - Sistema de Gestión de Películas y API REST

## 📋 Descripción del Proyecto

Este proyecto es una aplicación full stack que combina:

### 🎬 **Frontend Web (React + TypeScript)**
- Aplicación web desarrollada con **React 19** y **TypeScript**
- Interfaz de usuario moderna y responsiva
- Formularios interactivos para captura de datos
- Diseño limpio con CSS personalizado

### 🎭 **Aplicación Móvil de Películas (React Native)**
- Sistema completo de gestión de películas
- **Funcionalidades principales:**
  - 🏠 **Inicio**: Visualización de catálogo de películas con búsqueda
  - ➕ **Agregar**: Formulario para añadir nuevas películas
  - ✏️ **Editar**: Modificación de películas existentes
  - 🗑️ **Eliminar**: Eliminación de películas del catálogo
  - ⭐ **Favoritos**: Sistema de marcado y gestión de películas favoritas
  - 📱 **Navegación**: Menú drawer y navegación por stack
  - 🔍 **Búsqueda**: Filtrado de películas en tiempo real
  - ⭐ **Calificaciones**: Sistema de puntuación con estrellas
  - 💬 **Comentarios**: Funcionalidad para agregar reseñas

### 🚀 **Backend API REST (Node.js + TypeScript + MongoDB)**
- API RESTful desarrollada con **Express.js** y **TypeScript**
- Base de datos **MongoDB** con **Mongoose**
- **Módulos implementados:**
  - 🔐 **Autenticación**: Login con JWT y gestión de tokens
  - 👥 **Usuarios**: CRUD completo de usuarios con encriptación de contraseñas
  - 📦 **Productos**: Gestión completa de productos
  - 🛒 **Órdenes**: Sistema de pedidos con estados (pendiente, pagado, cancelado)
  - ⏰ **Cache**: Sistema de caché con TTL para tokens
  - 🔒 **Seguridad**: Encriptación de contraseñas con bcrypt

## 🛠️ Tecnologías Utilizadas

### Frontend Web
- **React 19** con **TypeScript**
- **Vite** como bundler
- **ESLint** para linting
- CSS personalizado

### Aplicación Móvil
- **React Native**
- **React Navigation** (Drawer + Stack)
- **React Native Vector Icons**
- **React Native Animatable**

### Backend
- **Node.js** con **TypeScript**
- **Express.js** como framework web
- **MongoDB** con **Mongoose** ODM
- **JWT** para autenticación
- **bcrypt** para encriptación
- **Morgan** para logging
- **Node Cache** para gestión de caché
- **Day.js** para manejo de fechas

## 📁 Estructura del Proyecto

```
proyecto/
├── frontend/appWeb_michell/          # Aplicación web React
│   ├── src/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── main.tsx
│   └── package.json
├── src/                              # Backend API
│   ├── config/
│   │   └── db.ts                     # Configuración MongoDB
│   ├── controllers/                  # Controladores de la API
│   │   ├── auth.controller.ts
│   │   ├── product.controller.ts
│   │   └── order.controller.ts
│   ├── models/                       # Modelos de MongoDB
│   │   ├── User.ts
│   │   ├── Product.ts
│   │   ├── Order.ts
│   │   └── Role.ts
│   ├── routes/                       # Rutas de la API
│   │   ├── auth.routes.ts
│   │   ├── product.routes.ts
│   │   └── order.routes.ts
│   ├── screens/                      # Pantallas React Native
│   │   ├── Home.js
│   │   ├── AddMovie.js
│   │   ├── EditMovie.js
│   │   ├── DeleteMovie.js
│   │   ├── MovieDetails.js
│   │   └── Favorites.js
│   ├── navigation/
│   │   └── AppNavigator.js           # Configuración de navegación
│   ├── utils/                        # Utilidades
│   │   ├── cache.ts
│   │   └── generateToken.ts
│   └── index.ts                      # Punto de entrada del servidor
└── package.json                     # Dependencias del backend
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- **MongoDB** (local o MongoDB Atlas)
- Para React Native: **React Native CLI**, **Android Studio** o **Xcode**

### 1. Clonar el Repositorio
```bash
git clone <url-del-repositorio>
cd proyecto
```

### 2. Configurar el Backend

#### Instalar dependencias del backend:
```bash
npm install
```

#### Configurar la base de datos:
El proyecto está configurado para conectarse a MongoDB Atlas. La cadena de conexión está en `src/config/db.ts`:
```typescript
const mongoUri = "mongodb+srv://alina:alina_07@cluster0.ymqfpgp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
```

**Nota**: Para producción, se recomienda usar variables de entorno para la cadena de conexión.

#### Ejecutar el servidor backend:
```bash
# Modo desarrollo (con recarga automática)
npm run dev

# Modo producción
npm run build
npm start
```

El servidor estará disponible en: `http://lo
