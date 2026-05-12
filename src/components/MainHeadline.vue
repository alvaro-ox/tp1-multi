<template>
  <div class="main-headline">
    <router-link :to="'/articulo/' + article.id" class="headline-link">
      <h1 class="title">{{ article.title }}</h1>
    </router-link>
    <h2 class="subtitle" v-if="article.subtitle">{{ article.subtitle }}</h2>
    
    <router-link :to="'/articulo/' + article.id" class="image-link" v-if="article.mainImage">
      <!-- Placeholder div for the image to avoid broken img if it doesn't exist yet -->
      <div class="image-placeholder">
        [ IMAGEN: {{ article.mainImage }} ]
      </div>
      <!-- <img :src="'assets/' + article.mainImage" alt="Imagen principal" class="main-image" /> -->
    </router-link>
    
    <p class="excerpt">{{ article.excerpt }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.main-headline {
  text-align: center;
}
.title {
  font-size: 3.5rem;
  margin-bottom: 10px;
}
.subtitle {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
}
.image-placeholder {
  width: 100%;
  height: 300px;
  background-color: #dcd3b6;
  border: 1px solid #4d4d4d;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-family: monospace;
  color: #666;
}
.main-image {
  width: 100%;
  height: auto;
  border: 1px solid #1a1a1a;
  margin-bottom: 20px;
  filter: grayscale(100%) sepia(20%); /* Antique effect */
}
.excerpt {
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
  column-count: 2;
  column-gap: 20px;
}
@media (max-width: 768px) {
  .excerpt {
    column-count: 1;
  }
}
</style>
