<template>
  <div class="newspaper-page">

    <!-- ░░ OVERLAY DE ESTÁTICA ░░ -->
    <canvas
      ref="staticCanvas"
      class="static-overlay"
      :class="{ 'static-visible': staticVisible }"
    ></canvas>

    <div class="article-detail-page">
      <router-link to="/" class="back-link">← Volver a Portada</router-link>

      <!-- Banner: contraparte activa -->
      <div v-if="esContraparte" class="contraparte-banner">
        ⚠ SEÑAL ALTERNATIVA — Esta es la contraparte de la nota original
      </div>

      <div v-if="articuloActual" :class="['article-content-wrap', { 'content-swap-in': swapIn }]">
        <hr class="rule rule-thick" />

        <p class="detail-section-tag">{{ articuloActual.seccion }}</p>
        <h1 class="detail-title">{{ articuloActual.titulo }}</h1>
        <p v-if="articuloActual.subtitulo" class="detail-subtitle">{{ articuloActual.subtitulo }}</p>

        <!-- Imagen -->
        <div v-if="articuloActual.imagenPrincipal" class="article-image-block" style="margin-bottom: 12px;">
          <img :src="getImageUrl(articuloActual.imagenPrincipal)" :alt="articuloActual.titulo" />
        </div>
        <div v-else class="article-image-block" style="margin-bottom: 12px;">
          <div class="img-placeholder img-placeholder-tall" style="height: 360px;">
            <span style="z-index:1; padding:20px; text-align:center;">[ Imagen de la nota ]</span>
          </div>
        </div>

        <div v-if="articuloActual.epigrafeImagen" class="img-caption" style="margin-bottom: 16px;">
          <strong v-if="articuloActual.epigrafeImagen.includes('—')">{{ articuloActual.epigrafeImagen.split('—')[0] }}—</strong>
          <template v-if="articuloActual.epigrafeImagen.includes('—')">{{ articuloActual.epigrafeImagen.split('—').slice(1).join('—') }}</template>
          <template v-else>{{ articuloActual.epigrafeImagen }}</template>
        </div>

        <hr class="rule rule-thin" style="margin: 12px 0;" />

        <div class="detail-body" v-html="articuloActual.cuerpo"></div>

        <div v-if="articuloActual.referenciaInfo" style="margin-top: 20px;">
          <span class="info-ref">{{ articuloActual.referenciaInfo }}</span>
        </div>
      </div>

      <div v-else style="padding: 40px 0; text-align: center;">
        <p style="font-family: 'Libre Baskerville', serif; font-size: 1.2rem;">Artículo no encontrado.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, ref, onMounted, onUnmounted } from 'vue';
import { articulos, contraparteArticulos } from '../data/articulos.js';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

// ── Estado reactivo ──────────────────────────────────────────────────────────
const articuloActual = ref(null);
const esContraparte  = ref(false);
const staticVisible  = ref(false);
const swapIn         = ref(false);

// ── Canvas y animación ───────────────────────────────────────────────────────
const staticCanvas = ref(null);
let rafId      = null;
let timeouts   = [];

const originalArticulo  = computed(() => articulos.find(a => a.id === parseInt(props.id)));
const contraparteData   = computed(() => contraparteArticulos.find(c => c.articuloId === parseInt(props.id)));

// Dibuja un frame de ruido estático en el canvas
function drawStaticFrame() {
  const canvas = staticCanvas.value;
  if (!canvas) return;
  const ctx    = canvas.getContext('2d');
  const width  = canvas.width;
  const height = canvas.height;
  const imageData = ctx.createImageData(width, height);
  const data   = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const v = Math.random() * 255 | 0;
    data[i]     = v;   // R
    data[i + 1] = v;   // G
    data[i + 2] = v;   // B
    data[i + 3] = 220; // A – ligeramente transparente para mezclar con fondo
  }
  ctx.putImageData(imageData, 0, 0);
}

// Bucle de animación del ruido
function startStaticLoop() {
  function loop() {
    drawStaticFrame();
    rafId = requestAnimationFrame(loop);
  }
  loop();
}

function stopStaticLoop() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}

// Ajusta el canvas al tamaño de la ventana
function resizeCanvas() {
  const canvas = staticCanvas.value;
  if (!canvas) return;
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Secuencia completa: espera → estática → swap → fade-out
function runStaticSequence() {
  if (!contraparteData.value) return; // Sin contraparte: no hacer nada

  // 0 ms: arrancar después de 2500 ms de haber montado
  const t1 = setTimeout(() => {
    resizeCanvas();
    staticVisible.value = true;
    startStaticLoop();

    // 800 ms de estática → swap de contenido
    const t2 = setTimeout(() => {
      stopStaticLoop();

      // Swap
      swapIn.value         = false;
      articuloActual.value = { ...contraparteData.value };
      esContraparte.value  = true;

      // Pequeño tick para que Vue actualice el DOM antes del fade-in
      const t3 = setTimeout(() => {
        swapIn.value = true;
      }, 50);

      // Fade-out del canvas (CSS transition se encarga)
      staticVisible.value = false;

      timeouts.push(t3);
    }, 800);

    timeouts.push(t2);
  }, 2500);

  timeouts.push(t1);
}

// ── Ciclo de vida ────────────────────────────────────────────────────────────
onMounted(() => {
  articuloActual.value = originalArticulo.value ?? null;
  window.addEventListener('resize', resizeCanvas);
  runStaticSequence();
});

onUnmounted(() => {
  stopStaticLoop();
  timeouts.forEach(clearTimeout);
  window.removeEventListener('resize', resizeCanvas);
});

// ── Helpers ──────────────────────────────────────────────────────────────────
const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};
</script>

<style scoped>
/* ── Canvas de estática ──────────────────────────────────────────────────── */
.static-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.15s ease-in;
}

.static-overlay.static-visible {
  opacity: 1;
  transition: opacity 0.15s ease-in, opacity 0.5s ease-out 0.05s;
}

/* ── Banner de contraparte ───────────────────────────────────────────────── */
.contraparte-banner {
  background: #1a1a1a;
  color: #e8d5a0;
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-align: center;
  padding: 6px 12px;
  margin-bottom: 16px;
  border: 1px solid #555;
  animation: bannerFlicker 0.4s steps(2, end) 3;
}

@keyframes bannerFlicker {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

/* ── Transición de contenido al hacer swap ───────────────────────────────── */
.article-content-wrap {
  opacity: 0;
  transform: translateY(6px);
  transition: none;
}

/* El artículo original aparece sin animación en el primer render */
.article-content-wrap:not(.content-swap-in) {
  opacity: 1;
  transform: none;
  transition: none;
}

.article-content-wrap.content-swap-in {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
</style>
