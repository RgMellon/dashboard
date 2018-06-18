<template>
  <section class="card self-center flex column space-around">
      <div class="titulo self-center">
        {{ titulo }}
      </div>
      <div class="conteudo self-center">
         {{ conteudo }}
      </div>
  </section>
</template>

<script>
  export default {
    props:['titulo', 'conteudo', 'cor'],
    name: 'Card',
    data(){
      return {

      }
    },
  }
</script>

<style scoped>
  .card {
    color: #4d3c3c;
    margin: 1rem;
    padding: 1rem;
    height: 100px;
    background: #ffffff57;
    width: 200px;
    border-radius: 10px;
    box-shadow: 2px 2px 6px 0px rgba(141, 135, 135, 0.75);
    cursor:pointer;
  }
  .conteudo{
    font-size: 2.5rem;
  }
  .card:hover{
    border-bottom: 5px solid #4d3c3c;
  }
</style>