<template>
  <section class="area-grafico">
      <line-chart :height="110"> </line-chart>
  </section>
</template>

<script>
  import LineChart from './LineChart';
  export default {
    name: 'Grafico',
    components: {
      'line-chart': LineChart,
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .area-grafico {
    width: 90%;
    height:  250px;
    margin: 0 auto;
    
  }
</style>