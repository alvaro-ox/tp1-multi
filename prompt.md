# **Plan de Implementación: "El Eco de los Tiempos" (Simulación de Diario Antiguo)**

## **1\. Fase de Configuración Técnica (Esencial para la Entrega Local)**

Esta fase es crucial para cumplir con el requisito de que los profesores puedan abrir el sitio sin instalar nada.

### **1.1. Configuración de Vite (vite.config.js)**

Lo primero y más importante es configurar Vite para usar rutas relativas.

JavaScript

// vite.config.js  
import { defineConfig } from 'vite'  
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/  
export default defineConfig({  
  plugins: \[vue()\],  
  base: './', // \<- Configuración crítica para carga local (file://)  
})

### **1.2. Configuración de Vue Router (src/router/index.js)**

Para que la navegación entre páginas funcione sin un servidor web, debemos usar el modo "Hash".

JavaScript

// src/router/index.js  
import { createRouter, createWebHashHistory } from 'vue-router'  
import NewspaperIndex from '../views/NewspaperIndex.vue' // Tu portada  
import ArticleDetail from '../views/ArticleDetail.vue' // Detalle de nota

const router \= createRouter({  
  // Usa WebHashHistory obligatoriamente  
  history: createWebHashHistory(),   
  routes: \[  
    {  
      path: '/',  
      name: 'home',  
      component: NewspaperIndex  
    },  
    {  
      path: '/articulo/:id',  
      name: 'article',  
      component: ArticleDetail,  
      props: true // Permite pasar el ID como prop  
    }  
  \]  
})

export default router  
export { router };

## **2\. Fase de Diseño Visual: Identidad del Diario Antiguo**

Basándonos en la imagen de referencia, definiremos la estética.

### **2.1. Paleta de Colores**

Debemos imitar la impresión en papel viejo, así que no usaremos blanco puro ni negro puro de pantalla.

* **Fondo General (Papel):** Usaremos un tono crema amarillento muy suave.  
  * Color: \#f5eed7 (o similar, simulando papel envejecido).  
  * *Opcional:* Se puede usar una imagen de textura de papel muy sutil como fondo (url('/assets/old-paper-texture.jpg')).  
* **Texto Principal (Tinta):** Usaremos un gris ceniza muy oscuro para simular la tinta seca y desgastada, no el negro perfecto.  
  * Color: \#1a1a1a (o \#0a0a0a).  
* **Acentos y Bordes:** Las líneas que separan secciones deben ser finas y de un tono ligeramente más claro que la tinta, como si la línea se hubiera desvanecido.  
  * Color: \#4d4d4d para bordes de sección (1px solid).

### **2.2. Tipografía (Fuentes)**

Es esencial usar fuentes "serif" con aspecto histórico. Usaremos Google Fonts y las descargaremos localmente (autohospedadas) para incluirlas en la carpeta assets de la entrega final.

* **Grandes Titulares (como el de "La opinión" o el titular principal):** Necesitamos una serifa antigua, gruesa e impactante.  
  * **Opción recomendada:** **'Playfair Display'** (en peso 900, "Black"). Se ve antigua pero moderna a la vez.  
  * *CSS:* font-family: 'Playfair Display', serif; font-weight: 900;  
* **Cuerpo del Texto (Subtítulos, resúmenes y artículos completos):** Una serifa legible y estándar, similar a la usada en imprenta.  
  * **Opción recomendada:** **'Lora'** o **'Libre Baskerville'**. Ambas tienen un aire antiguo muy bueno.  
  * *CSS:* font-family: 'Lora', serif; font-weight: 400;  
* **Logo y Detalles:** Podríamos usar una variante de 'Playfair Display' o incluso algo más estilizado, pero simplificaremos usando las dos anteriores.

## ---

**3\. Fase de Estructura de Datos (Mock Data)**

Como no tendremos un backend, crearemos un archivo JavaScript con todos los artículos para simular una base de datos. Esto mantendrá el proyecto ligero.

JavaScript

// src/data/articles.js  
export const articles \= \[  
  {  
    id: 1,  
    section: 'Portada',  
    title: 'El Gobierno festejó el éxito del corralito',  
    subtitle: 'De la Rúa destacó que la medida "evitó una catástrofe mayor".',  
    mainImage: 'clarin-main.png', // Imagen de referencia, la tendremos en assets  
    excerpt: 'En cadena nacional pidió a la gente que mantenga la calma y confíe en el sistema financiero.',  
    body: 'Texto completo de la nota... (aquí puedes poner el texto de la materia o un lorem ipsum).'  
  },  
  {  
    id: 2,  
    section: 'Economía',  
    title: 'Creen que los depósitos volverán en enero',  
    mainImage: null,  
    excerpt: 'En el mercado financiero aseguran que el corralito será levantado antes de lo previsto.',  
    body: 'Texto completo de la nota de economía...'  
  },  
  {  
    id: 3,  
    section: 'Sociedad',  
    title: 'Los ahorristas apoyaron la decisión oficial',  
    mainImage: null,  
    excerpt: 'Según una encuesta, el 82% de la población respalda la medida.',  
    body: 'Texto completo de la nota de sociedad...'  
  },  
  // Añadir más artículos aquí...  
\];

## **4\. Fase de Maquetación de Componentes Vue**

Crearemos componentes claros para imitar el diseño de la portada.

### **4.1. Componentes Globales**

* App.vue: Contenedor principal con el fondo de papel.

### **4.2. Componentes de la Portada (views/NewspaperIndex.vue)**

Este archivo orquestará la maquetación.

Fragmento de código

\<template\>  
  \<div class="newspaper-page"\>  
    \<NewspaperHeader /\>  
      
    \<div class="main-content grid"\>  
      \<div class="main-headline-container"\>  
        \<MainHeadline :article="articles\[0\]" /\>  
      \</div\>  
      \<aside class="sidebar-container"\>  
        \<SidebarArticles :articles="articles.slice(1, 4)" /\>  
      \</aside\>  
    \</div\>  
      
    \<NewspaperFooter /\>  
  \</div\>  
\</template\>

\<script setup\>  
import { articles } from '../data/articles.js';  
import NewspaperHeader from '../components/NewspaperHeader.vue';  
import MainHeadline from '../components/MainHeadline.vue';  
import SidebarArticles from '../components/SidebarArticles.vue';  
import NewspaperFooter from '../components/NewspaperFooter.vue';  
\</script\>

\<style scoped\>  
/\* Grid CSS para imitar la maquetación de la imagen \*/  
.newspaper-page {  
  /\* Fondo y color de tinta aplicados aquí \*/  
}  
.main-content {  
  display: grid;  
  grid-template-columns: 3fr 1fr; /\* Columna principal y barra lateral \*/  
  gap: 20px;  
  padding: 20px;  
}  
\</style\>

### **4.3. Detalle de Componentes**

* **NewspaperHeader.vue**: Logo ("La opinión"), fecha, edición, precio. Debe usar la fuente gruesa para el logo.  
* **MainHeadline.vue**: El gran titular principal. Usará articles\[0\]. El titular debe ser un \<router-link :to="'/articulo/' \+ article.id"\> que envuelva el texto. También debe incluir la imagen y el subtítulo. **La imagen debe ser un \<router-link\> también.**  
* **SidebarArticles.vue**: Un bucle v-for que itera sobre los otros artículos. Cada uno será una sección pequeña con su propio titular como \<router-link\>.

## **5\. Fase de Implementación del Detalle del Artículo (views/ArticleDetail.vue)**

Esta página mostrará el texto completo de una nota clicleada.

Fragmento de código

\<template\>  
  \<div class="article-detail-page"\>  
    \<router-link to="/" class="back-link"\>← Volver a Portada\</router-link\>  
    \<div v-if="article" class="article-content"\>  
      \<p class="section-tag"\>{{ article.section }}\</p\>  
      \<h1 class="main-title"\>{{ article.title }}\</h1\>  
      \<h2 v-if="article.subtitle" class="sub-title"\>{{ article.subtitle }}\</h2\>  
      \<img v-if="article.mainImage" :src="'assets/' \+ article.mainImage" alt="Nota imagen" /\>  
      \<div class="article-body" v-html="article.body"\>\</div\>  
    \</div\>  
    \<div v-else\>  
      \<p\>Artículo no encontrado.\</p\>  
    \</div\>  
  \</div\>  
\</template\>

\<script setup\>  
import { defineProps, computed } from 'vue';  
import { articles } from '../data/articles.js';

const props \= defineProps({  
  id: String // El ID se pasa desde la URL hash  
});

const article \= computed(() \=\> {  
  return articles.find(a \=\> a.id \=== parseInt(props.id));  
});  
\</script\>

\<style scoped\>  
/\* Aplicar el mismo estilo de diario a los textos grandes \*/  
\</style\>

## **6\. Fase de Estilado CSS (Detalles visuales)**

Aquí es donde daremos el "look final".

CSS

/\* src/style.css (Estilos globales) \*/  
body {  
  background-color: \#f5eed7; /\* Fondo de papel \*/  
  color: \#1a1a1a; /\* Tinta \*/  
  font-family: 'Lora', serif; /\* Fuente cuerpo \*/  
  margin: 0;  
  padding: 20px;  
}

/\* Tipografía de diario antiguo \*/  
h1, h2, .logo {  
  font-family: 'Playfair Display', serif;  
  font-weight: 900;  
  line-height: 1.1;  
  text-transform: uppercase; /\* Opcional, para el logo y secciones \*/  
}

/\* Márgenes exagerados para imitar la imprenta \*/  
h1 { font-size: 3rem; text-align: center; margin-bottom: 5px; }  
h2 { font-size: 1.2rem; text-align: center; font-weight: 400; font-family: 'Lora', serif; }

/\* Bordes finos de sección \*/  
.border-top { border-top: 1px solid \#4d4d4d; padding-top: 10px; }  
.border-bottom { border-bottom: 1px solid \#4d4d4d; padding-bottom: 10px; }

/\* Enlaces (titulares clicleables) \*/  
a {  
  color: inherit; /\* Mismo color de la tinta \*/  
  text-decoration: none;  
}  
a:hover {  
  text-decoration: underline; /\* Único indicador de enlace \*/  
}

## **7\. Fase de Compilación y Entrega Final**

1. **Ejecutar Build:** npm run build  
2. **Verificar la carpeta dist:**  
   * Debe contener index.html, una carpeta assets (con tu JS, CSS compilado y las imágenes).  
3. **Prueba de Fuego:** Ve a la carpeta dist en tu explorador de archivos. Haz doble clic en index.html. El sitio debe cargarse perfectamente, con el fondo crema, las fuentes correctas y al cliquear titulares e imágenes, debe navegar usando la URL hash (ej: /\#/articulo/1).  
4. **Comprimir:** Comprime la carpeta dist (puedes renombrarla a Sitio\_Web\_Diario\_NombreCompleto) y envíala.