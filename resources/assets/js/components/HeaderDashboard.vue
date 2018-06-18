<template>
  <section class="header-dashboard flex space-end">
      <div class="alarme self-center">
        <icon-awesome icon="bell" />
      </div>
      <div class="avatar self-center">
        <icon-awesome icon="user-circle" />
      </div>

  </section>
</template>

<script>
  export default {
    name: 'Header-dashboard',
    data(){
      return {

      }
    },
  }
</script>

<style>
  .header-dashboard{
    width: 100%;
    height: 50px;
    background: #ffffffd6;
  }
  
  .avatar{
    padding-right: 1rem;
    font-size: 2.5rem;
    color: grey;
    cursor: pointer;
  }
  .alarme{
    padding-right: 2rem;
    color: #43313f;
    cursor: pointer;
  }
</style>