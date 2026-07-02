# Car Dealership API 🚗

API REST de una concesionaria de autos construida con NestJS y TypeScript.
Proyecto enfocado en arquitectura modular, validación de datos con DTOs y Pipes,
e inyección de dependencias.

## Tecnologías

- **NestJS** + **TypeScript**
- **class-validator** + **class-transformer**
- **Pipes** (ValidationPipe, ParseIntPipe, custom pipes)
- **@nestjs/config** para variables de entorno

## Características

- CRUD completo de autos y marcas
- Validación de datos con DTOs y class-validator
- Transformación de datos con class-transformer
- Pipes de validación globales y personalizados
- Seed endpoint para poblar la base de datos
- Arquitectura modular con NestJS
- Inyección de dependencias

## Endpoints principales

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/seed` | Poblar la base de datos |
| GET | `/cars` | Listar todos los autos |
| GET | `/cars/:id` | Obtener un auto por id |
| POST | `/cars` | Crear un auto |
| PATCH | `/cars/:id` | Actualizar un auto |
| DELETE | `/cars/:id` | Eliminar un auto |
| GET | `/brands` | Listar todas las marcas |
| GET | `/brands/:id` | Obtener una marca por id |
| POST | `/brands` | Crear una marca |
| PATCH | `/brands/:id` | Actualizar una marca |
| DELETE | `/brands/:id` | Eliminar una marca |

## Instalación y uso

### Requisitos
- Node.js 18+

### Pasos

1. Clonar el repositorio
```bash
git clone https://github.com/SamiVijarra/car-dealership-api.git
cd car-dealership-api
```

2. Instalar dependencias
```bash
npm install
```

3. Iniciar en desarrollo
```bash
npm run start:dev
```

4. Poblar la base de datos
GET http://localhost:3000/seed

## Estructura del proyecto
src/
├── cars/        # Módulo de autos (controller, service, DTOs)
├── brands/      # Módulo de marcas (controller, service, DTOs)
├── seed/        # Módulo para poblar la base de datos
└── main.ts      # Punto de entrada con ValidationPipe global

## Autor

**Samanta Vijarra** — [github.com/SamiVijarra](https://github.com/SamiVijarra)
