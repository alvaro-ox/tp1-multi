<template>
  <div class="newspaper-page">
    <CabeceraDiario />

    <!-- ─── TITULAR PRINCIPAL ─── -->
    <div class="main-headline-section" v-if="noticiaPrincipal">
      <h1 class="headline-huge">
        <router-link :to="'/articulo/' + noticiaPrincipal.id">
          {{ noticiaPrincipal.titulo }}
        </router-link>
      </h1>

      <div class="headline-deck-stars">
        {{ noticiaPrincipal.bandaTitulares }}
      </div>
      <span class="info-ref">{{ noticiaPrincipal.referenciaInfo }}</span>
    </div>

    <hr class="rule rule-thin" />

    <!-- ═══════════════════════════════════════════════
         ZONA MEDIA (Logo Box | Texto | Foto)
         ═══════════════════════════════════════════════ -->
    <div class="zone-top-grid">

      <!-- COL 1: Recuadro del logo -->
      <div class="zone-col-left">
        <div class="logo-box">
          <div class="logo-box-inner newspaper-logo" style="font-size: 2.8rem; padding: 10px 0;">{{ portada.logoBox.nombre }}</div>
          <div class="logo-box-tagline">{{ portada.logoBox.fecha }}</div>
          <div class="logo-box-bottom">
            <span>{{ portada.logoBox.edicion }}</span>
          </div>
        </div>

        <div class="article-block" style="padding-left: 0; padding-right: 6px;">
          <p class="article-body-text">
            {{ portada.textoBatalla }}
          </p>
        </div>
      </div>

      <!-- COL 2: Foto grande principal -->
      <div class="zone-col-right" v-if="noticiaPrincipal">
        <router-link :to="'/articulo/' + noticiaPrincipal.id" class="article-image-block" style="display:block;">
          <template v-if="noticiaPrincipal.imagenPrincipal">
            <img :src="getImageUrl(noticiaPrincipal.imagenPrincipal)" :alt="noticiaPrincipal.titulo" />
          </template>
          <div v-else class="img-placeholder img-placeholder-tall" style="height: 280px;">
            <span style="z-index: 1; padding: 10px; text-align: center;">[ Imagen principal: manifestantes en plaza ]</span>
          </div>
        </router-link>
      </div>
    </div>

    <hr class="rule rule-thin" />

    <!-- ═══════════════════════════════════════════════
         ZONA MEDIA (3 columnas principales)
         ═══════════════════════════════════════════════ -->
    <div class="zone-mid-grid">

      <!-- COL A: Foto Nixon + Boxeo + Salvamento -->
      <div class="zone-col-a">

        <template v-if="noticiaManifestantes">
          <router-link :to="'/articulo/' + noticiaManifestantes.id" class="article-image-block" style="display:block;">
            <template v-if="noticiaManifestantes.imagenPrincipal">
              <img :src="getImageUrl(noticiaManifestantes.imagenPrincipal)" :alt="noticiaManifestantes.titulo" />
            </template>
            <div v-else class="img-placeholder img-placeholder-medium" style="height: 200px;">
              <span style="z-index:1; padding: 10px; text-align:center;">[ Foto: Presidente observa la situación ]</span>
            </div>
          </router-link>
          <p class="img-caption">
            {{ noticiaManifestantes.epigrafeImagen }}
          </p>
        </template>

        <hr class="rule rule-thin" style="margin: 8px 0;" />

        <div class="ad-box" v-if="noticiaBoxeo">
          <strong class="ad-box-title">ACTUALIDAD</strong>
          <BloqueNoticia 
            :articulo="noticiaBoxeo" 
            tamanoTitulo="md" 
            :mostrarSubtitulo="false"
            :estiloBloque="{ padding: '0' }"
            :estiloAdicionalTitulo="{ textAlign: 'center', fontSize: '1.15rem' }"
            :estiloReferencia="{ display: 'block', textAlign: 'center' }"
          />
        </div>

        <hr class="rule rule-thin" style="margin: 8px 0;" />

        <div class="article-block" style="padding: 0;" v-if="noticiaSalvamento">
          <p class="article-body-text">
            {{ noticiaSalvamento.textoBreve }}
          </p>
        </div>
      </div>

      <!-- COL B: Veda de carne + Artilleros + Futbol -->
      <div class="zone-col-b">
        
        <BloqueNoticia 
          v-if="noticiaVeda"
          :articulo="noticiaVeda" 
          tamanoTitulo="lg" 
          :estiloBloque="{ padding: '0 10px' }"
          :estiloAdicionalTitulo="{ fontSize: '2.0rem', textAlign: 'center', lineHeight: '1.1' }"
          :estiloReferencia="{ display: 'block', textAlign: 'center' }"
        />

        <hr class="rule rule-thin" style="margin: 10px 0;" />

        <BloqueNoticia 
          v-if="noticiaIsrael"
          :articulo="noticiaIsrael" 
          tamanoTitulo="md" 
          :esCursiva="true"
          :mostrarSubtitulo="false"
          :estiloBloque="{ padding: '0 10px' }"
          :estiloAdicionalTitulo="{ fontSize: '1.3rem', textAlign: 'center', lineHeight: '1.2' }"
          :estiloReferencia="{ display: 'block', textAlign: 'center' }"
        />

        <hr class="rule rule-thin" style="margin: 10px 0;" />

        <template v-if="noticiaFutbol">
          <router-link :to="'/articulo/' + noticiaFutbol.id" class="article-image-block" style="display:block; padding: 0 10px;">
            <template v-if="noticiaFutbol.imagenPrincipal">
              <img :src="getImageUrl(noticiaFutbol.imagenPrincipal)" :alt="noticiaFutbol.titulo" />
            </template>
            <div v-else class="img-placeholder img-placeholder-medium" style="height: 190px;">
              <span style="z-index:1; padding:10px; text-align:center;">[ Foto: Partido de fútbol - segundo gol ]</span>
            </div>
          </router-link>
          <p class="img-caption" style="padding: 0 10px; margin-top: 4px;">
            {{ noticiaFutbol.epigrafeImagen }}
          </p>

          <hr class="rule rule-thin" style="margin: 8px 0;" />

          <BloqueNoticia 
            :articulo="noticiaFutbol" 
            tamanoTitulo="lg" 
            :esCursiva="true"
            :mostrarSubtitulo="false"
            :estiloBloque="{ padding: '0 10px' }"
            :estiloAdicionalTitulo="{ fontSize: '1.7rem', lineHeight: '1.1' }"
            :estiloReferencia="{ display: 'block' }"
          />
        </template>
      </div>

    </div>

    <hr class="rule rule-double" style="margin: 8px 0;" />

    <!-- ═══════════════════════════════════════════════
         BANNER INFERIOR: Minicopa
         ═══════════════════════════════════════════════ -->
    <div class="banner-bottom" v-if="noticiaMinicopa">
      <div class="banner-box">
        <BloqueNoticia 
          :articulo="noticiaMinicopa" 
          tamanoTitulo="lg" 
          :esCursiva="true"
          :mostrarSubtitulo="false"
          :estiloBloque="{ padding: '0' }"
          :estiloAdicionalTitulo="{ fontSize: '2.6rem', textAlign: 'center', lineHeight: '1.05', padding: '6px 0 2px' }"
          :estiloReferencia="{ display: 'block', textAlign: 'center', marginBottom: '8px' }"
        />
      </div>
    </div>

    <hr class="rule rule-thick" />

    <PieDePagina />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { articulos, portada as portadaDatos } from '../data/articulos.js';
import CabeceraDiario from '../components/CabeceraDiario.vue';
import PieDePagina from '../components/PieDePagina.vue';
import BloqueNoticia from '../components/BloqueNoticia.vue';

// Consultas semánticas a los datos para no usar índices mágicos
const noticiaPrincipal = computed(() => articulos.find(a => a.id === 1));
const noticiaManifestantes = computed(() => articulos.find(a => a.id === 2));
const noticiaVeda = computed(() => articulos.find(a => a.id === 5));
const noticiaIsrael = computed(() => articulos.find(a => a.id === 6));
const noticiaFutbol = computed(() => articulos.find(a => a.id === 7));
const noticiaMinicopa = computed(() => articulos.find(a => a.id === 8));
const noticiaBoxeo = computed(() => articulos.find(a => a.id === 9));
const noticiaSalvamento = computed(() => articulos.find(a => a.id === 10));

// Datos estáticos de la portada (logo box, textos sin artículo propio)
const portada = portadaDatos;

const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};
</script>

<style scoped>
/* ─── ZONA SUPERIOR: Logo box izquierda + Foto grande ─── */
.zone-top-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0;
  padding: 6px 0;
}

.zone-col-left {
  padding-right: 10px;
  border-right: 1px solid var(--rule-color);
}

.zone-col-right {
  padding-left: 10px;
}

/* Caja del logo */
.logo-box {
  border: 1.5px solid var(--rule-color);
  padding: 8px 12px;
  margin-bottom: 10px;
  text-align: center;
}
.logo-box-tagline {
  font-size: 0.7rem;
  font-family: 'Libre Baskerville', serif;
  border-top: 1px solid var(--rule-color);
  padding-top: 4px;
  margin-top: 4px;
}
.logo-box-bottom {
  font-size: 0.6rem;
  font-family: 'Libre Baskerville', serif;
  font-style: italic;
  border-top: 1px solid var(--rule-color);
  padding-top: 3px;
  margin-top: 3px;
}

/* ─── ZONA MEDIA: 2 columnas ─── */
.zone-mid-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 0;
  padding: 6px 0;
}
.zone-col-a {
  padding-right: 10px;
  border-right: 1px solid var(--rule-color);
}
.zone-col-b {
  padding-left: 10px;
}

/* ─── BANNER INFERIOR ─── */
.banner-bottom {
  text-align: center;
  padding: 6px 0;
}

/* ─── RESPONSIVE ─── */
@media (max-width: 700px) {
  .zone-top-grid,
  .zone-mid-grid {
    grid-template-columns: 1fr;
  }
  .zone-col-left,
  .zone-col-a {
    border-right: none;
    padding-right: 0;
  }
  .zone-col-right,
  .zone-col-b {
    padding-left: 0;
  }
}
</style>
