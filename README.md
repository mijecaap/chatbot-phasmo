# Chatbot Phasmo

Un chatbot moderno construido con React y Vite que se conecta a un webhook y renderiza respuestas en Markdown.

## 🚀 Características

- 💬 Interfaz de chat moderna y responsive
- 📝 Renderizado de Markdown con `react-markdown`
- 🎨 UI elegante con iconos de `lucide-react`
- ⚡ Desarrollo rápido con Vite
- 🔌 Integración con webhook personalizable
- ✨ Animaciones y transiciones suaves

## 📦 Instalación

```bash
npm install
```

## ⚙️ Configuración

1. Copia el archivo `.env.example` a `.env`:
```bash
cp .env.example .env
```

2. Edita el archivo `.env` y configura tu URL del webhook:
```env
VITE_WEBHOOK_URL=https://tu-webhook-url.com/api/chat
```

## 🎯 Uso

### Modo desarrollo
```bash
npm run dev
```

### Build para producción
```bash
npm run build
```

### Preview del build
```bash
npm run preview
```

## 🔌 Formato del Webhook

El webhook debe:

**Request:**
```json
{
  "message": "mensaje del usuario"
}
```

**Response:**
```json
{
  "reply": "Respuesta en **markdown** del bot"
}
```

## 🛠️ Tecnologías

- React 19
- Vite 7
- react-markdown
- lucide-react

## 📝 Licencia

MIT

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
