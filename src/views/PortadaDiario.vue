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
        Barricadas y Fogatas en las Calles ★ Destituyen al Jefe de Policía ★ Acuartelan Tropas ★ Cierran los Accesos a la Provincia ★ Hay Asueto Escolar
      </div>
      <span class="info-ref">INFORMACION EN LA PAGINA DIECIOCHO</span>
    </div>

    <hr class="rule rule-thin" />

    <!-- ═══════════════════════════════════════════════
         ZONA MEDIA (Logo Box | Texto | Foto)
         ═══════════════════════════════════════════════ -->
    <div class="zone-top-grid">

      <!-- COL 1: Recuadro del logo -->
      <div class="zone-col-left">
        <div class="logo-box">
          <div class="logo-box-inner newspaper-logo" style="font-size: 2.8rem; padding: 10px 0;">ClarínX</div>
          <div class="logo-box-tagline">Domingo 25 de Junio de 1972</div>
          <div class="logo-box-bottom">
            <span>Año XXVII &nbsp; Diario de la Mañana &nbsp; N° 9483</span>
          </div>
        </div>

        <div class="article-block" style="padding-left: 0; padding-right: 6px;">
          <p class="article-body-text">
            <strong>BATALLA. —</strong> Por tercer día consecutivo, las calles del centro de la ciudad fueron escenario de una batalla campal entre ahorristas y fuerzas policiales. El reiterado enfrentamiento produjo en la última jornada su primera víctima fatal, y generó un clima de tensión que determinó extremas medidas de prevención.
          </p>
        </div>
      </div>

      <!-- COL 2: Foto grande principal -->
      <div class="zone-col-right" v-if="noticiaPrincipal">
        <router-link :to="'/articulo/' + noticiaPrincipal.id" class="article-image-block" style="display:block;">
          <div class="img-placeholder img-placeholder-tall" style="height: 280px;">
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
            <div class="img-placeholder img-placeholder-medium" style="height: 200px;">
              <span style="z-index:1; padding: 10px; text-align:center;">[ Foto: Presidente observa la situación ]</span>
            </div>
          </router-link>
          <p class="img-caption">
            <strong>INSPECCIÓN. —</strong> El presidente observa los daños causados por las inundaciones en la zona de la provincia, a través de la ventanilla del helicóptero con el que realizó un vuelo de inspección por la zona afectada. (Radiofoto de AP para CLARIN)
          </p>
        </template>

        <hr class="rule rule-thin" style="margin: 8px 0;" />

        <div class="ad-box" v-if="noticiaBoxeo">
          <strong class="ad-box-title">BOXEO</strong>
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

        <div class="article-block" style="padding: 0;">
          <p class="article-body-text">
            <strong>SALVAMENTO. —</strong> Un helicóptero de la marina recoge a una persona que estaba aislada por las aguas en la ciudad de Pottstown, Pennsylvania, mientras otra espera en el techo de una casa.
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
            <div class="img-placeholder img-placeholder-medium" style="height: 190px;">
              <span style="z-index:1; padding:10px; text-align:center;">[ Foto: Partido de fútbol - segundo gol ]</span>
            </div>
          </router-link>
          <p class="img-caption" style="padding: 0 10px; margin-top: 4px;">
            <strong>SEGUNDO GOL. —</strong> Uno de los tantos goles de la defensa de Talleres. En ésta, Lestra le "roba" la pelota a Osuna y Ceruso, convirtiendo el segundo gol de Almirante Brown, cómodo puntero de 1ro. B
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
import { articulos } from '../data/articulos.js';
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
