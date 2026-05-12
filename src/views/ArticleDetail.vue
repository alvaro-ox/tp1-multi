<template>
  <div class="newspaper-page">
    <div class="article-detail-page">
      <router-link to="/" class="back-link">← Volver a Portada</router-link>

      <div v-if="article">
        <hr class="rule rule-thick" />

        <p class="detail-section-tag">{{ article.section }}</p>
        <h1 class="detail-title">{{ article.title }}</h1>
        <p v-if="article.subtitle" class="detail-subtitle">{{ article.subtitle }}</p>

        <!-- Imagen -->
        <div v-if="article.mainImage" class="article-image-block" style="margin-bottom: 12px;">
          <img :src="'./assets/' + article.mainImage" :alt="article.title" />
        </div>
        <div v-else class="article-image-block" style="margin-bottom: 12px;">
          <div class="img-placeholder img-placeholder-tall" style="height: 360px;">
            <span style="z-index:1; padding:20px; text-align:center;">[ Imagen de la nota ]</span>
          </div>
        </div>
        <p v-if="article.imageCaption" class="img-caption" style="margin-bottom: 16px;">
          <strong v-if="article.imageCaption.includes('—')">{{ article.imageCaption.split('—')[0] }}—</strong>
          <template v-if="article.imageCaption.includes('—')">{{ article.imageCaption.split('—').slice(1).join('—') }}</template>
          <template v-else>{{ article.imageCaption }}</template>
        </p>

        <hr class="rule rule-thin" style="margin: 12px 0;" />

        <div class="detail-body" v-html="article.body"></div>

        <div v-if="article.infoRef" style="margin-top: 20px;">
          <span class="info-ref">{{ article.infoRef }}</span>
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
import { articles } from '../data/articles.js';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const article = computed(() => {
  return articles.find(a => a.id === parseInt(props.id));
});
</script>
