<template>
     <section class="charts">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="chart-container">
                <h3>Tablas</h3>
                  <div id="app" class="container" v-if="trades.length==0">
                    <h2>No hay Trades Cargados</h2>
                    </div>
                    <div id="app" class="container" v-if="trades.length!==0">
                    <table border="1">
                    <thead>
                      <th>Simbolo   </th>
                      <th>Cantidad    </th>
                      <th>Precio    </th>
                    </thead>
                      <tr v-for="trade in trades " v-bind:key="trade.idtrade">
                        <td>{{trade.symbol}}</td>
                        <td>{{trade.size}}</td>
                        <td>{{trade.price}}</td>
                      </tr>
                    </table>
                    </div>
              </div>
            </div>            
          </div>
        </div>
      </section>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  name:'Tables',
  data(){
    return{
      trades:[],      
      }
    
  },
  mounted(){
			console.log("Iniciando tabla");
			this.getTrades();
		},
		methods:{
			getTrades: function(){
				this.trades=this.$store.getters.getTrades
			}
		}
})
</script>