# 🔍 Guía SEO - TECNA CORP

Esta guía explica las mejoras de SEO implementadas en el proyecto y cómo usarlas.

## 📁 Nuevos archivos creados

### 1. `public/robots.txt`
- Archivo que instruye a los buscadores cómo indexar el sitio
- Especifica directorios a ignorar
- Define crawl-delay para no sobrecargar servidores
- Bloquea bots maliciosos (AhrefsBot, SemrushBot, etc.)

### 2. `src/components/SEO/SEO.astro`
Componente reutilizable para metadatos consistentes en todas las páginas.

**Uso en páginas:**
```astro
---
import SEO from "../components/SEO/SEO.astro";
---

<SEO
  title="Página de Ejemplo"
  description="Descripción optimizada para SEO"
  image="https://www.tecna-corp.com/assets/images/custom-image.webp"
/>
```

### 3. `src/lib/seoConfig.ts`
Configuración centralizada de SEO con:
- **siteConfig**: Datos globales (URL, descripciones, redes sociales)
- **pageMetadata**: Meta tags predefinidos por página
- **organizationSchema**: Structured Data de la organización
- **createBreadcrumb()**: Función helper para breadcrumbs

## 📝 Cómo actualizar metadatos de una página

### Opción 1: Usar metadatos predefinidos (Recomendado)
```astro
---
import { pageMetadata } from "../../lib/seoConfig";
import Layout from "../../layouts/Layout.astro";

const meta = pageMetadata.servicios;
---

<Layout
  title={meta.title}
  description={meta.description}
>
  <!-- contenido -->
</Layout>
```

### Opción 2: Metadatos personalizados
```astro
---
import Layout from "../../layouts/Layout.astro";
---

<Layout
  title="Mi Página Personalizada"
  description="Descripción única para esta página"
  image="https://www.tecna-corp.com/assets/custom-image.webp"
>
  <!-- contenido -->
</Layout>
```

## ✅ Mejoras implementadas

### Metadatos básicos
- ✅ Title dinámico por página
- ✅ Meta description optimizado
- ✅ Canonical URLs automáticas
- ✅ Robots meta tags

### Open Graph & Social
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card (X/Twitter)
- ✅ LinkedIn metadata

### Structured Data
- ✅ JSON-LD Organization Schema
- ✅ ContactPoint estructurado
- ✅ Múltiples direcciones (PostalAddress)

### Técnico
- ✅ robots.txt configurado
- ✅ Sitemap auto-generado (por Astro)
- ✅ Responsive images habilitadas
- ✅ SVG support habilitado
- ✅ Preconnect/DNS-prefetch optimizado

## 🎯 SEO Checklist por página

Cuando crees una nueva página, asegúrate de:

- [ ] Tiene un `title` descriptivo (50-60 caracteres)
- [ ] Tiene una `description` única (150-160 caracteres)
- [ ] Usa heading H1 apropiado en contenido
- [ ] Las imágenes tienen atributo `alt` descriptivo
- [ ] Los links internos usan texto descriptivo
- [ ] La URL es semántica (no /page-123)
- [ ] El contenido es único y original

## 📊 Herramientas recomendadas para auditar SEO

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse (integrado en Chrome DevTools)](chrome://devtools)
- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/)

## 🔗 Keywords principales por página

Ajusta según tus necesidades:

**Home**: Ingeniería, Oil & Gas, Minería, Energía, Puesta en Marcha

**Servicios**: Planificación, Control, Operación, Mantenimiento, Automatización

**Sobre Nosotros**: Historia, Equipo, Experiencia, Latinoamérica

**Clientes**: Empresas, Confianza, Proyectos, Sectores

**Certificaciones**: ISO 9001, ISO 14001, ISO 45001, Calidad

**Contacto**: Contactar, Consulta, Ubicaciones, Disponibilidad

## 📈 Próximos pasos recomendados

1. **Agregar Breadcrumb Schema** en páginas de subnavegación
2. **Rich Snippets** para testimonios (Review schema)
3. **FAQ Schema** si tienes sección de preguntas frecuentes
4. **LocalBusiness Schema** mejorado con horarios
5. **Image optimization** - Convertir todas las imágenes a WebP
6. **Core Web Vitals** - Monitorear en Google Search Console

## 📞 Soporte

Si necesitas ayuda con SEO o tienes preguntas:
- Revisa [Astro SEO docs](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- Consulta [Schema.org](https://schema.org/) para Structured Data
