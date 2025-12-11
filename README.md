# livedeck-mvp

MVP de LiveDeck - Aplicación de transmisión en vivo con captura de audio y presentación en tiempo real

## Descripción

LiveDeck MVP es una aplicación web moderna construida con Next.js que permite transmitir contenido en vivo con captura de audio y presentación sincronizada de diapositivas en tiempo real. Ideal para educadores, presentadores y creadores de contenido.

## Características

- 🎙️ Captura de audio en tiempo real
- 📊 Presentación sincronizada de diapositivas
- ⚡ Interfaz moderna y responsive
- 🎨 Diseño con Tailwind CSS
- 📱 Compatible con dispositivos móviles
- 🚀 Optimizado para producción

## Stack Tecnológico

- **Framework:** Next.js 16.0.8
- **React:** 19.2.1
- **TypeScript:** 5.0.0
- **Estilos:** Tailwind CSS 3.3.6
- **PostCSS:** 8.4.31
- **Node.js:** 18+ recomendado

## Requisitos Previos

- Node.js 18.17 o superior
- npm o yarn
- Git

## Instalación Local

1. Clonar el repositorio:
```bash
git clone https://github.com/quinonesrojasai-hash/livedeck-mvp.git
cd livedeck-mvp
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

4. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## Despliegue en Vercel

Esta aplicación está optimizada para despliegue en Vercel. El proyecto incluye:

- ✅ Configuración `.vercelignore` para excluir archivos innecesarios
- ✅ `next.config.js` configurado para producción
- ✅ Variables de entorno soportadas

### Pasos para desplegar en Vercel:

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. Configura las variables de entorno si es necesario
4. Haz clic en "Deploy"

Alternativa por línea de comandos:
```bash
npm install -g vercel
vercel
```

## Estructura del Proyecto

```
livedeck-mvp/
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout raíz
│   └── page.tsx             # Página principal
├── public/                  # Archivos estáticos
├── package.json
├── tailwind.config.js       # Configuración Tailwind
├── postcss.config.js        # Configuración PostCSS
├── tsconfig.json            # Configuración TypeScript
├── next.config.js           # Configuración Next.js
└── .vercelignore            # Archivos a ignorar en Vercel
```

## Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto si necesitas variables de entorno:

```bash
# Ejemplo
NEXT_PUBLIC_API_URL=https://api.ejemplo.com
```

## Desarrollo

### Agregar Nuevas Funcionalidades

1. Crear componentes en `app/components/`
2. Actualizar estilos en `app/globals.css` o crear CSS modules
3. Usar TypeScript para type safety

### Build para Producción

```bash
npm run build
npm run start
```

## Troubleshooting

### Problema: "Module not found"
- Solución: Ejecuta `npm install` nuevamente

### Problema: Estilos Tailwind no aplicados
- Solución: Verifica que los archivos estén incluidos en `tailwind.config.js` content

### Problema: Error al hacer build en Vercel
- Solución: Revisa el archivo `.vercelignore` y los logs de Vercel

## Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para detalles.

## Contacto

Para preguntas o soporte, contacta a: quinonesrojasai@example.com

## Estado del Proyecto

✅ **Listo para producción** - Código probado y configurado para Vercel

---

**Última actualización:** Diciembre 2025
