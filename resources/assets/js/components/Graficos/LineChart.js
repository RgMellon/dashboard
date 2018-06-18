import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 
                'Set', 'Out', 'Nov', 'Dez'],
      datasets: [
        {
          label: 'Grafico de vendas',
          backgroundColor: '#4d3c3c',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    })
  }
}