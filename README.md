# Arcana SaaS – Frontend Web

Panel administrativo del sistema SaaS de Gestión Empresarial.

Permite:

- Autenticación de usuarios
- Gestión de clientes
- Gestión de proyectos
- Gestión de usuarios
- Visualización de métricas
- Control por roles

---

## 🧠 Arquitectura

Estructura modular basada en features.

src/
- app/ → rutas (App Router)
- components/ → componentes reutilizables
- services/ → conexión con API
- context/ → manejo de sesión
- hooks/ → lógica reutilizable
- types/ → tipado global

---

## ⚙️ Stack Tecnológico

- Next.js
- React
- TypeScript
- Tailwind CSS

---

## 🚀 Instalación

1. Clonar repositorio


git clone https://github.com/ArcanaCorp/saas-frontend.git
cd saas-frontend


2. Instalar dependencias


npm install


3. Crear archivo `.env.local`


NEXT_PUBLIC_API_URL=http://localhost:4000


4. Levantar servidor


npm run dev


Disponible en:
http://localhost:3000

---

## 🔌 Conexión con Backend

La API base se define en:


NEXT_PUBLIC_API_URL


Todos los llamados deben centralizarse en:


src/services/api.ts


---

## 🌿 Convención de Ramas

- main → estable
- develop → integración
- feature/nombre-feature
- fix/nombre-fix

No se trabaja en main directamente.

---

## 📌 Reglas del Proyecto

- No consumir API directamente desde componentes
- Usar servicios centralizados
- Manejar estados de loading y error
- Componentes reutilizables
- Tipado obligatorio

---

## 🎯 Objetivo del Proyecto

Este panel será usado para:

- Administrar empresas
- Gestionar datos internos
- Servir como demo comercial del SaaS

Debe ser profesional, limpio y escalable.