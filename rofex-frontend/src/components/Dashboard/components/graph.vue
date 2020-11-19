<template>
  <section class="charts">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="tableWr">
            
          <div class="formWra">
            <h1 class="text-center titletrade">
              <strong> Graficos</strong>
              <hr class="linea" />
              </h1>
              <div class="graphsChart">
              </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from 'vue';
import { createChart } from 'lightweight-charts';
export default Vue.extend({
  name:'Charts'  ,
  data(){
    return{
    }
  },
  mounted(){    

  }
})



</script>
<style >
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