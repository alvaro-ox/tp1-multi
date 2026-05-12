<template>
  <div class="newspaper-page">
    <!-- ─── SOMBRERILLO SUPERIOR ─── -->
    <div class="header-tagline">
      ClarínX de los domingos: Edición de 132 páginas en 4 secciones, con ClarínX Económico y ClarínX Revista en multicolor
    </div>

    <!-- ─── ZONA DEL LOGO ─── -->
    <div class="newspaper-logo-area">
      <div class="logo-left-info">
        Edición para Capital y Gran Buenos Aires<br>
        $ 1,20 &nbsp; LEY 18.388 &nbsp; ★ &nbsp; MSN 120
      </div>

      <!-- LOGO CENTRAL -->
      <div style="text-align: center;">
        <div class="newspaper-logo">ClarínX</div>
      </div>

      <div class="logo-right-info">
        Domingo 25 de<br>
        Junio de 1972
      </div>
    </div>

    <div class="logo-subtitle">
      <span>Año XXVII &nbsp; Diario de la Mañana</span>
      <span>★ El mejor diario argentino ★</span>
      <span>N° 9483</span>
    </div>

    <hr class="rule rule-thick" />

    <!-- ─── TITULAR PRINCIPAL ─── -->
    <div class="main-headline-section">
      <h1 class="headline-huge">
        <router-link :to="'/articulo/' + articles[0].id">
          El Gobierno festejó el éxito del corralito: «Evitamos una catástrofe»
        </router-link>
      </h1>

      <div class="headline-deck-stars">
        Barricadas y Fogatas en las Calles ★ Destituyen al Jefe de Policía ★ Acuartelan Tropas ★ Cierran los Accesos a la Provincia ★ Hay Asueto Escolar
      </div>
      <span class="info-ref">INFORMACION EN LA PAGINA DIECIOCHO</span>
    </div>

    <hr class="rule rule-thin" />

    <!-- ═══════════════════════════════════════════════
         ZONA MEDIA (3 columnas): Logo Box | Texto | Foto
         ═══════════════════════════════════════════════ -->
    <div class="zone-top-grid">

      <!-- COL 1: Recuadro del logo del diario (como en el original) -->
      <div class="zone-col-left">
        <div class="logo-box">
          <div class="logo-box-inner newspaper-logo" style="font-size: 2.8rem; padding: 10px 0;">ClarínX</div>
          <div class="logo-box-tagline">Domingo 25 de Junio de 1972</div>
          <div class="logo-box-bottom">
            <span>Año XXVII &nbsp; Diario de la Mañana &nbsp; N° 9483</span>
          </div>
        </div>

        <!-- Texto de la nota principal bajo el logo -->
        <div class="article-block" style="padding-left: 0; padding-right: 6px;">
          <p class="article-body-text">
            <strong>BATALLA. —</strong> Por tercer día consecutivo, las calles del centro de la ciudad fueron escenario de una batalla campal entre ahorristas y fuerzas policiales. El reiterado enfrentamiento produjo en la última jornada su primera víctima fatal, y generó un clima de tensión que determinó extremas medidas de prevención.
          </p>
        </div>
      </div>

      <div class="col-sep"></div>

      <!-- COL 2–3: Foto grande de la nota principal -->
      <div class="zone-col-right">
        <router-link :to="'/articulo/' + articles[0].id" class="article-image-block" style="display:block;">
          <div class="img-placeholder img-placeholder-tall" style="height: 280px;">
            <span style="z-index: 1; padding: 10px; text-align: center;">[ Imagen principal: manifestantes en plaza ]</span>
          </div>
        </router-link>
      </div>
    </div>

    <hr class="rule rule-thin" />

    <!-- ═══════════════════════════════════════════════
         ZONA MEDIA: 3 columnas principales
         ═══════════════════════════════════════════════ -->
    <div class="zone-mid-grid">

      <!-- COL A: Foto Nixon + Boxeo + Salvamento -->
      <div class="zone-col-a">

        <!-- Foto Nixon / ahorristas -->
        <router-link :to="'/articulo/' + articles[1].id" class="article-image-block" style="display:block;">
          <div class="img-placeholder img-placeholder-medium" style="height: 200px;">
            <span style="z-index:1; padding: 10px; text-align:center;">[ Foto: Presidente observa la situación ]</span>
          </div>
        </router-link>
        <p class="img-caption">
          <strong>INSPECCIÓN. —</strong> El presidente observa los daños causados por las inundaciones en la zona de la provincia, a través de la ventanilla del helicóptero con el que realizó un vuelo de inspección por la zona afectada. (Radiofoto de AP para CLARIN)
        </p>

        <hr class="rule rule-thin" style="margin: 8px 0;" />

        <!-- Boxeo -->
        <div class="ad-box">
          <strong class="ad-box-title">BOXEO</strong>
          <div class="article-title-md" style="text-align: center; font-size: 1.15rem;">
            <router-link :to="'/articulo/' + articles[8].id">
              Peralta Logró Vencer Anoche por Decisión al Mendocino Ahumada
            </router-link>
          </div>
          <span class="info-ref" style="margin-top: 4px;">(INFORMACION EN LA PAGINA VEINTICINCO)</span>
        </div>

        <hr class="rule rule-thin" style="margin: 8px 0;" />

        <!-- Salvamento -->
        <div class="article-block" style="padding: 0;">
          <p class="article-body-text">
            <strong>SALVAMENTO. —</strong> Un helicóptero de la marina recoge a una persona que estaba aislada por las aguas en la ciudad de Pottstown, Pennsylvania, mientras otra espera en el techo de una casa.
          </p>
        </div>
      </div>

      <div class="col-sep"></div>

      <!-- COL B: Veda de carne + Artilleros -->
      <div class="zone-col-b">
        <div class="article-block" style="padding: 0 10px;">
          <div class="article-title-lg" style="font-size: 2.0rem; text-align: center; line-height: 1.1;">
            <router-link :to="'/articulo/' + articles[4].id">
              Rige el Nuevo Sistema de Veda Para la Carne
            </router-link>
          </div>
          <div class="article-subtitle" style="text-align: center; margin-top: 6px;">
            Durante 15 Días se Venderán en las Ferias y Carnicerías Cinco Cortes con Precios Máximos
          </div>
          <span class="info-ref">(INFORMACION EN LA PAGINA CATORCE)</span>

          <hr class="rule rule-thin" style="margin: 10px 0;" />

          <div class="article-title-md" style="font-style: italic; font-size: 1.3rem; text-align: center; line-height: 1.2;">
            <router-link :to="'/articulo/' + articles[5].id">
              Artilleros Israelíes Hundieron una Barca Pesquera del Líbano
            </router-link>
          </div>
          <span class="info-ref" style="margin-top: 6px;">(INFORMACION EN LA PAGINA TRES)</span>
        </div>

        <hr class="rule rule-thin" style="margin: 10px 0;" />

        <!-- Foto del partido de fútbol -->
        <router-link :to="'/articulo/' + articles[6].id" class="article-image-block" style="display:block; padding: 0 10px;">
          <div class="img-placeholder img-placeholder-medium" style="height: 190px;">
            <span style="z-index:1; padding:10px; text-align:center;">[ Foto: Partido de fútbol - segundo gol ]</span>
          </div>
        </router-link>
        <p class="img-caption" style="padding: 0 10px; margin-top: 4px;">
          <strong>SEGUNDO GOL. —</strong> Uno de los tantos goles de la defensa de Talleres. En ésta, Lestra le "roba" la pelota a Osuna y Ceruso, convirtiendo el segundo gol de Almirante Brown, cómodo puntero de 1ro. B
        </p>

        <hr class="rule rule-thin" style="margin: 8px 0;" />

        <!-- Titular deportivo grande -->
        <div class="article-block" style="padding: 0 10px;">
          <div class="article-title-lg" style="font-style: italic; font-size: 1.7rem; line-height: 1.1;">
            <router-link :to="'/articulo/' + articles[6].id">
              Jornada con dos Clásicos en el Metro: Racing — Boca y River con Independiente
            </router-link>
          </div>
          <span class="info-ref" style="margin-top: 4px;">(INFORMACION EN LAS PAGINAS VEINTITRES)</span>
        </div>
      </div>

    </div>

    <hr class="rule rule-double" style="margin: 8px 0;" />

    <!-- ═══════════════════════════════════════════════
         BANNER INFERIOR: Minicopa
         ═══════════════════════════════════════════════ -->
    <div class="banner-bottom">
      <div class="banner-box">
        <div class="article-title-lg" style="font-size: 2.6rem; text-align: center; line-height: 1.05; padding: 6px 0 2px; font-style: italic;">
          <router-link :to="'/articulo/' + articles[7].id">
            Minicopa: Argentina y Francia Juegan Hoy por la Clasificación de su Grupo
          </router-link>
        </div>
        <span class="info-ref" style="margin-bottom: 8px;">(INFORMACION EN LAS PAGINAS VEINTICUATRO Y VEINT-CINCO)</span>
      </div>
    </div>

    <hr class="rule rule-thick" />

    <!-- PIE DE PÁGINA -->
    <footer class="newspaper-footer">
      ClarínX — El Gran Diario Argentino &nbsp;·&nbsp; Todos los derechos reservados · Simulación histórica
    </footer>
  </div>
</template>

<script setup>
import { articles } from '../data/articles.js';
</script>

<style scoped>
/* ─── ZONA SUPERIOR: Logo box izquierda + Foto grande ─── */
.zone-top-grid {
  display: grid;
  grid-template-columns: 1fr 1px 2fr;
  gap: 0;
  padding: 6px 0;
}

.zone-col-left {
  padding-right: 10px;
}

.zone-col-right {
  padding-left: 10px;
}

/* Caja del logo (imita el recuadro del Clarín original) */
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
  grid-template-columns: 1fr 1px 1.4fr;
  gap: 0;
  padding: 6px 0;
}
.zone-col-a {
  padding-right: 10px;
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
  .col-sep { display: none; }
  .zone-col-left,
  .zone-col-right,
  .zone-col-a,
  .zone-col-b {
    padding: 0;
  }
}
</style>
