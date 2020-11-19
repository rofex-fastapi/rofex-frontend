<template>
  <section class="charts">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="tableWr">
            
          <div class="formWra">
            <h1 class="text-center titletrade">
              <strong> Sus Trades</strong>
              <hr class="linea" />
              </h1>
            <div id="app" class="container" v-if="trades.length == 0">
              <h2>No hay Trades Cargados</h2>
            </div>
            <div id="app" class="container" v-if="trades.length !== 0">
              <table border="1" class="text-center">
                <thead>
                  <th>Simbolo</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                </thead>
                <tr v-for="trade in trades" v-bind:key="trade.idtrade">
                  <td>{{ trade.symbol }}</td>
                  <td>{{ trade.size }}</td>
                  <td>{{ trade.price }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  name: "Tables",
  data() {
    return {
      trades: [],
    };
  },
  mounted() {
    console.log("Iniciando tabla");
    this.getTrades();
  },
  methods: {
    getTrades: function() {
      this.trades = this.$store.getters.getTrades;
    },
  },
});
</script>
<style scoped>
.charts {
  height: auto;  
  min-height:895px
}
table{
   position:relative;
   margin:auto;
   width:100%;
   /*left:-15%*/;
}
.titletrade {
  position: relative;
  text-align: center;
  border: 10px;
}
.tableWr {
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 10%;
}
.formWra {
  margin-top: -130px;
  background: #313348;
  box-shadow: rgba(0, 0, 0, 0.47) 0px 5px 14px;
  padding: 6rem 1rem;
  width: 100%;
  color: #bbb;
  font-size: 23px;
  display: block;
}
</style>
