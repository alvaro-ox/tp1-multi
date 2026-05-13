<template>
  <div class="newspaper-page">
    <div class="article-detail-page">
      <router-link to="/" class="back-link">← Volver a Portada</router-link>

      <div v-if="articulo">
        <hr class="rule rule-thick" />

        <p class="detail-section-tag">{{ articulo.seccion }}</p>
        <h1 class="detail-title">{{ articulo.titulo }}</h1>
        <p v-if="articulo.subtitulo" class="detail-subtitle">{{ articulo.subtitulo }}</p>

        <!-- Imagen -->
        <div v-if="articulo.imagenPrincipal" class="article-image-block" style="margin-bottom: 12px;">
          <img :src="getImageUrl(articulo.imagenPrincipal)" :alt="articulo.titulo" />
        </div>
        <div v-else class="article-image-block" style="margin-bottom: 12px;">
          <div class="img-placeholder img-placeholder-tall" style="height: 360px;">
            <span style="z-index:1; padding:20px; text-align:center;">[ Imagen de la nota ]</span>
          </div>
        </div>
        
        <div v-if="articulo.epigrafeImagen" class="img-caption" style="margin-bottom: 16px;">
          <strong v-if="articulo.epigrafeImagen.includes('—')">{{ articulo.epigrafeImagen.split('—')[0] }}—</strong>
          <template v-if="articulo.epigrafeImagen.includes('—')">{{ articulo.epigrafeImagen.split('—').slice(1).join('—') }}</template>
          <template v-else>{{ articulo.epigrafeImagen }}</template>
        </div>

        <hr class="rule rule-thin" style="margin: 12px 0;" />

        <div class="detail-body" v-html="articulo.cuerpo"></div>

        <div v-if="articulo.referenciaInfo" style="margin-top: 20px;">
          <span class="info-ref">{{ articulo.referenciaInfo }}</span>
        </div>
      </div>

      <div v-else style="padding: 40px 0; text-align: center;">
        <p style="font-family: 'Libre Baskerville', serif; font-size: 1.2rem;">Artículo no encontrado.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { articulos } from '../data/articulos.js';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const articulo = computed(() => {
  return articulos.find(a => a.id === parseInt(props.id));
});

const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};
</script>
