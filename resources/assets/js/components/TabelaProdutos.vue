<template>
 
  <div style="overflow-x:auto;">
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Preço</th>
        <th>Quantidade</th>
        <th>Desc</th>
      </tr>
    </thead>
    <tbody>
    <tr v-for="i of 200">
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
      <td>50</td>
    </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  export default {
    name: 'tabelaProdutos',
    data(){
       return {

      }
    },
  }
</script>

<style scoped>
  
  table {
    box-shadow: 2px 2px 6px 0px rgba(141, 135, 135, 0.75);
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  th, td {
    text-align: left;
    padding: 8px;
  }

  th {
    font-weight: 200;
    background: #43313f;
    color: white;
  }

  tr{
    height: 40px;
    border-bottom: 1px solid #655f6336;;
  }

  tr:hover{
    background: #d3bdbd33;
    cursor: pointer;
  }
</style>