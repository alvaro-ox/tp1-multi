<template>
  <div class="article-block" :style="estiloBloque">
    <!-- Título Principal -->
    <div :class="[claseTitulo, { 'italic-title': esCursiva }]" :style="estiloAdicionalTitulo">
      <router-link :to="'/articulo/' + articulo.id">
        {{ articulo.titulo }}
      </router-link>
    </div>
    
    <!-- Subtítulo Opcional -->
    <div v-if="articulo.subtitulo && mostrarSubtitulo" class="article-subtitle" :style="estiloSubtitulo">
      {{ articulo.subtitulo }}
    </div>
    
    <!-- Referencia (Información en página X) -->
    <span v-if="articulo.referenciaInfo" class="info-ref" :style="estiloReferencia">
      ({{ articulo.referenciaInfo }})
    </span>
    
    <!-- Cuerpo o Resumen Opcional (Si queremos mostrar parte del texto) -->
    <p v-if="mostrarResumen && articulo.resumen" class="article-body-text" style="margin-top: 8px;">
      {{ articulo.resumen }}
    </p>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  articulo: {
    type: Object,
    required: true
  },
  tamanoTitulo: {
    type: String,
    default: 'md' // 'lg', 'md', 'sm'
  },
  esCursiva: {
    type: Boolean,
    default: false
  },
  mostrarSubtitulo: {
    type: Boolean,
    default: true
  },
  mostrarResumen: {
    type: Boolean,
    default: false
  },
  // Permite sobreescribir estilos por prop si es estrictamente necesario
  estiloBloque: { type: Object, default: () => ({ padding: '0 10px' }) },
  estiloAdicionalTitulo: { type: Object, default: () => ({}) },
  estiloSubtitulo: { type: Object, default: () => ({ textAlign: 'center', marginTop: '6px' }) },
  estiloReferencia: { type: Object, default: () => ({ marginTop: '4px' }) }
});

const claseTitulo = computed(() => {
  return `article-title-${props.tamanoTitulo}`;
});
</script>

<style scoped>
.italic-title {
  font-style: italic;
}
</style>
