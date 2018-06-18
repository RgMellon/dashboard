<template>
  <div>
    <li class="item-menu flex">
      <icon-awesome :icon="icone"/>
      <p> {{ nome }} </p>
    </li>
  </div>
</template>

<script>
  export default {
    props:['nome', 'icone'],
    name: 'listaMenu',
    data(){
      return {
        subItem: true
      }
    },
  }
</script>

<style scoped>
  .item-menu p{
    margin-left: 2rem;
    font-size: 15px;
  }
  .item-menu {
    align-items: center;
    color: #ffffffb0;
    height: 40px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    padding-left: 1rem;
  }
  .item-menu:hover{
    background: #655f6336;
    border-left:  1px solid white;
  }
</style>.