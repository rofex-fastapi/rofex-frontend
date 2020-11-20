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
              <div class="grafico" >
              <div class="row mt-5" v-if="arrPositive.length > 0">
                <div class="col">
                  <h2 class="text-center ti" >Trades</h2>
                  <line-chart
                    :chartData="arrPositive"
                    :options="chartOptions"
                    :chartColors="positiveChartColors"
                    label="Precio"
                  />
                </div>
              </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LineChart from "./Vuechart";

import moment from "moment";
export default {
  components: {
    LineChart
  },
  data() {
    return {

      arrPositive: [],
      positiveChartColors: {
        borderColor: "#077187",
        pointBorderColor: "#0E1428",
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        gridLines:true
        ,scales: {
                    xAxes: [{
                            type: "time",
                            time: {
                                unit: 'day',
                                round: 'day',
                            },
                        }],
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
      }
    };
  },
  async mounted() {
    const  data  = this.getTrades();

    data.forEach(d => {
      const date = d.datetime;
      const {
        price,
      } = d;
      this.arrPositive.push({ date, total: price });
    });
  },
  methods: {
    getTrades: function() {
      return this.$store.getters.getTrades;
    },
    getTradeHistory(sym,dat){
      const da=moment(dat).format("YYYY-MMM-DD")
      this.$store.dispatch('gettradehistory',{symbol:sym,date:da} )
    }
    }
};
</script>

<style scoped>
.charts {
  height: auto;  
  min-height:895px
}
.ti{
  color: black;
}
.grafico{
  background-color: rgba(255, 255, 255, 0.747);
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