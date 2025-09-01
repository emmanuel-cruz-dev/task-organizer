# Task Organizer 📋

Una aplicación fullstack moderna de gestión de tareas construida con las mejores tecnologías actuales.

## 🚀 Descripción

Task Organizer es una aplicación web para gestionar tus tareas de manera eficiente. Permite crear, organizar, editar y eliminar tareas con una interfaz moderna y intuitiva.

## 🛠️ Tecnologías

### Frontend
- **Next.js** - Framework React con SSR/SSG
- **React 18** - Biblioteca para interfaces de usuario
- **TypeScript** - JavaScript con tipado estático
- **Tailwind CSS** - Framework CSS utilitario
- **Axios** - Cliente HTTP para API calls
- **TanStack Query** - Gestión de estado del servidor y cache
- **Lucide React** - Iconos modernos

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web minimalista
- **TypeScript** - JavaScript con tipado estático
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **JWT** - Autenticación con JSON Web Tokens
- **bcryptjs** - Hash de contraseñas

## 📁 Estructura del Proyecto

```
task-organizer/
├── frontend/                 # Aplicación Next.js
│   ├── src/
│   │   ├── app/             # App Router de Next.js
│   │   ├── components/      # Componentes reutilizables
│   │   ├── hooks/           # Custom hooks
│   │   ├── lib/             # Utilidades y configuraciones
│   │   ├── types/           # Definiciones de TypeScript
│   │   └── styles/          # Estilos globales
│   ├── public/              # Archivos estáticos
│   ├── package.json
│   └── next.config.js
├── backend/                 # API Express.js
│   ├── src/
│   │   ├── controllers/     # Lógica de controladores
│   │   ├── models/          # Modelos de Mongoose
│   │   ├── routes/          # Definición de rutas
│   │   ├── middleware/      # Middlewares personalizados
│   │   ├── config/          # Configuraciones
│   │   ├── types/           # Tipos TypeScript
│   │   └── utils/           # Utilidades
│   ├── server.ts            # Punto de entrada del servidor
│   ├── package.json
│   └── tsconfig.json
├── README.md
└── .gitignore
```

## ✨ Características

- ✅ **CRUD completo de tareas** - Crear, leer, actualizar y eliminar
- 🔐 **Autenticación JWT** - Registro e inicio de sesión seguro
- 📱 **Diseño responsive** - Optimizado para móvil y escritorio
- 🎨 **UI moderna** - Interfaz limpia con Tailwind CSS
- ⚡ **Rendimiento optimizado** - Cache inteligente con TanStack Query
- 🔄 **Actualizaciones en tiempo real** - Sincronización automática
- 🌙 **Modo oscuro** - Interfaz adaptable
- 📊 **Estados de tareas** - Pendiente, en progreso, completada
- 🏷️ **Categorías y etiquetas** - Organización avanzada
- 🔍 **Búsqueda y filtros** - Encuentra tareas rápidamente

## 🚦 Prerrequisitos

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **MongoDB** >= 6.0.0

## 🔧 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/task-organizer.git
cd task-organizer
```

### 2. Configurar el Backend

```bash
cd backend
npm install
```

Crear archivo `.env`:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/task-organizer
JWT_SECRET=tu_jwt_secret_super_seguro_aqui
JWT_EXPIRES_IN=7d
```

### 3. Configurar el Frontend

```bash
cd ../frontend
npm install
```

Crear archivo `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 🚀 Uso

### Desarrollo

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### Producción

```bash
# Backend
cd backend
npm run build
npm start

# Frontend
cd frontend
npm run build
npm start
```

## 📡 API Endpoints

### Autenticación
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Inicio de sesión
- `GET /api/auth/profile` - Obtener perfil

### Tareas
- `GET /api/tasks` - Obtener todas las tareas
- `POST /api/tasks` - Crear nueva tarea
- `GET /api/tasks/:id` - Obtener tarea específica
- `PUT /api/tasks/:id` - Actualizar tarea
- `DELETE /api/tasks/:id` - Eliminar tarea

### Utilidades
- `GET /api/health` - Health check

## 🎯 Scripts Disponibles

### Backend
- `npm run dev` - Desarrollo con nodemon
- `npm run build` - Compilar TypeScript
- `npm start` - Ejecutar en producción
- `npm run clean` - Limpiar carpeta dist

### Frontend
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm start` - Servidor de producción
- `npm run lint` - Ejecutar ESLint
- `npm run type-check` - Verificar tipos TypeScript

## 🔍 Testing

```bash
# Backend
cd backend
npm run test

# Frontend
cd frontend
npm run test
```

## 📝 Variables de Entorno

### Backend (.env)
```env
NODE_ENV=development|production
PORT=5000
MONGODB_URI=mongodb://localhost:27017/task-organizer
JWT_SECRET=tu_jwt_secret
JWT_EXPIRES_IN=7d
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 🚀 Deployment

### Backend (Railway/Render/Heroku)
1. Configurar variables de entorno
2. Conectar repositorio
3. La app se desplegará automáticamente

### Frontend (Vercel/Netlify)
1. Conectar repositorio
2. Configurar `NEXT_PUBLIC_API_URL`
3. Deploy automático

<!--## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para detalles.
-->
## 👨‍💻 Autor

**Emmanuel Cruz**
- LinkedIn: [emmanuel-cruz-dev](https://www.linkedin.com/in/emmanuel-cruz-dev/)
