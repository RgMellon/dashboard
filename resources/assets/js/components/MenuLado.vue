<template>
  <section class="menu-lateral">
    <div class="area-menu">
        <a :href="home_url">
          <div class="header flex column item-center">
            <div class="icon-hader"> <icon-awesome icon="box-open" /></div>
            <div class="title-header"> <h1> #myBox </h1> </div>
          </div>
        </a>
        <div class="content">
          <ul>
            <a :href="produtos_url">
              <item-lista nome="Produtos" icone="shopping-cart"></item-lista>
            </a>
            <item-lista nome="Lucros" icone="money-bill-alt"></item-lista>
            <item-lista nome="Users" icone="users"></item-lista>
          </ul>
        </div>
    </div>
  </section>
</template>
<script>
  export default {
    name:'MenuLateral',
    data(){
      return {
        produtos_url: route('produtos.index'),
        home_url: route('home')
      }
    },
  }
</script>
<style scoped>
.menu-lateral {
  overflow-y: auto;
  overflow-x: hidden;
  outline: none;
  position: absolute;
  top: 0;
  left: -7px;
  background: #43313f;
  bottom: 0;
  min-width: 1px;
  width: 19%;
  z-index: 4;
  border-radius: 5px;
  color:white;
}

.header{
  margin-top: 3rem;
  font-size: 1.5rem;
}

.header h1 {
  margin-top: 0.5rem;
  font-size: 1rem;
}

.content{
  margin-top: 3rem;
  margin-left: 0.5rem;
}
</style>
