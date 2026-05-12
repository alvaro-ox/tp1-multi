<template>
  <div class="sidebar">
    <div v-for="article in articles" :key="article.id" class="sidebar-article border-top">
      <p class="section-tag">{{ article.section }}</p>
      <router-link :to="'/articulo/' + article.id">
        <h3 class="sidebar-title">{{ article.title }}</h3>
      </router-link>
      <p class="sidebar-excerpt">{{ article.excerpt }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  articles: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.sidebar {
  border-left: 1px solid #4d4d4d;
  padding-left: 20px;
  height: 100%;
}
.sidebar-article {
  margin-bottom: 20px;
}
.section-tag {
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 5px;
}
.sidebar-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  margin: 0 0 10px 0;
  line-height: 1.2;
}
.sidebar-excerpt {
  font-size: 0.95rem;
  line-height: 1.4;
  margin: 0;
}
@media (max-width: 768px) {
  .sidebar {
    border-left: none;
    padding-left: 0;
    border-top: 2px solid #1a1a1a;
    padding-top: 20px;
  }
}
</style>
