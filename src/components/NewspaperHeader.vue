<template>
  <header class="newspaper-header border-bottom">
    <div class="header-top">
      <span>Buenos Aires, Argentina</span>
      <span>Sábado 1 de Diciembre de 2001</span>
      <span>Año LVI - Edición Nº 20.000</span>
      <span>Precio: $1,20</span>
    </div>
    <div class="logo-container">
      <h1 class="logo">ClarínX</h1>
    </div>
  </header>
</template>

<style scoped>
.newspaper-header {
  text-align: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.header-top {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  text-transform: uppercase;
  border-top: 1px solid #4d4d4d;
  border-bottom: 1px solid #4d4d4d;
  padding: 5px 0;
  margin-bottom: 20px;
}
.logo {
  font-size: 5rem;
  margin: 0;
  letter-spacing: -2px;
}
@media (max-width: 768px) {
  .header-top {
    flex-direction: column;
    gap: 5px;
  }
}
</style>
