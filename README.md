App de prueba con Sentry, React y Vite

Este proyecto es una app de prueba mínima creada con React + Vite, integrada con Sentry para monitoreo de errores. Incluye configuración básica de ESLint y soporte para Hot Module Replacement (HMR).

🔮 Tecnologías usadas

Vite

React

Sentry

ESLint

SWC o Babel (según configuración de plugin)

🚀 Instalación

npm install

🤠 Scripts disponibles

npm run dev       # Levanta el servidor de desarrollo con Vite
npm run build     # Genera la versión de producción
npm run lint      # Ejecuta ESLint

⚙️ Integración con Sentry

La app tiene Sentry configurado para capturar errores en producción.Asegúrate de tener un archivo .env con tu DSN de Sentry:

VITE_SENTRY_DSN=https://tu-dsn@sentry.io/proyecto

⚠️ Este archivo .env está incluido en el .gitignore para proteger datos sensibles.

🛆 Instalación de Sentry

npm install @sentry/react @sentry/tracing

🧹 Configuración en el código

En tu main.jsx o main.tsx, incluye:

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0,
});

🔧 ESLint

Ya incluye reglas básicas para React.Si deseas agregar soporte para TypeScript, se recomienda integrar typescript-eslint para un chequeo de tipos más estricto.

📁 Estructura recomendada

src/
├─ components/
├─ pages/
├─ App.jsx
├─ main.jsx
.env             ← No se sube al repo

🛡️ Seguridad

No subas archivos sensibles como .env.El archivo .gitignore ya tiene las reglas para evitar subirlos:

.env
.env.local
.env.*.local

🔒 Consideraciones adicionales

El tracesSampleRate de Sentry está seteado al 100% (1.0) solo para pruebas. En producción se recomienda bajarlo.

Puedes probar los reportes de errores forzando un throw new Error("Prueba Sentry") en cualquier componente.

Revisa la documentación oficial de Sentry para integraciones más avanzadas: https://docs.sentry.io/platforms/javascript/guides/react/
