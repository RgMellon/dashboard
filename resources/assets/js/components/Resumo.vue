<template>
  <section class="resumo flex">
    <card titulo="Acessados" conteudo="90"> </card>
    <card titulo="Vendidos" conteudo="34"> </card>
    <card titulo="Estoque" conteudo="50"> </card>
    <card titulo="Acessados" conteudo="90"> </card>
  </section>
</template>

<script>
  export default {
    name: 'Resumo',
    data(){
       return {

      }
    },
  }
</script>

<style scoped>
  .resumo {
    min-height: 200px;
    width: 90%;
    margin: 2rem auto;
    border-radius: 12px;
  }
</style>