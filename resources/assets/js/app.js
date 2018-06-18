require('./bootstrap');

// importando o font-awesom e icones
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import fas from '@fortawesome/fontawesome-free-solid';
import fab from '@fortawesome/fontawesome-free-brands';
fontawesome.library.add(fas, fab);

//importando grafico vue-chart


window.Vue = require('vue');
Vue.component('menu-lado', require('./components/MenuLado.vue'));
Vue.component('icon-awesome', FontAwesomeIcon);
Vue.component('item-lista', require('./components/ItemLista.vue'));
Vue.component('header-dashboard', require('./components/HeaderDashboard.vue'));
Vue.component('resumo', require('./components/Resumo.vue'));
Vue.component('card', require('./components/Card.vue'));
Vue.component('grafico', require('./components/Graficos/Grafico.vue'));
Vue.component('tabela-produtos', require('./components/TabelaProdutos'))

const app = new Vue({
    el: '#app'
});
