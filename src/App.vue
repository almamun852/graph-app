<template>
  <div class="card">
    <div class="card-header">
      Graph App
    </div>
    <div class="card-body">
        <div class="form-group">
          <label for="exampleFormControlInput1">Title</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Graph Title" v-model="title">
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Integers Value</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter integer number and sepate using ," v-model="integerValues"></textarea>
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Graph Type</label>
            <div class="form-radio form-radio-inline">
              <input class="form-radio-input" type="radio" id="inlineCheckbox1" value="barGraph" v-model="graphType">
              <label class="form-radio-label" for="inlineCheckbox1">Bar Graph</label>
            </div>
            <div class="form-radio form-radio-inline">
              <input class="form-radio-input" type="radio" id="inlineCheckbox2" value="lineGraph" v-model="graphType">
              <label class="form-radio-label" for="inlineCheckbox2">Line Graph</label>
            </div>
        </div>
        <br>
        <button type="submit" class="btn btn-primary mb-2" @click="generateData()">Generate Graph</button>
        <button type="submit" class=" ml-2 btn btn-primary mb-2" @click="$store.commit('storeGraphType',graphType)">Convert Graph</button>

        <div class="row">
          <div class="col-lg-6">
            
              <div class="card"  :class="(graphType=='barGraph' || !$store.state.graphType=='barGraph') ? 'd-block':'d-none'">
                <div class="card-header">{{$store.state.title+ ' Bar Graph'}}</div>
                <div class="card-body">
                    <div class="small">
                      <bar-chart :chart-data="$store.state.dataList" :height="height"></bar-chart>
                    </div>
                </div>
              </div>
            
          </div>
          <div class="col-lg-6">
            
              <div class="card" :class="(graphType=='lineGraph' || !$store.state.graphType=='lineGraph') ? 'd-block':'d-none'">
                <div class="card-header">{{$store.state.title+ ' Line Graph'}}</div>
                <div class="card-body">
                    <div class="small">
                      <line-chart :chart-data="$store.state.dataList" :height="height"></line-chart>
                    </div>
                </div>
              </div>
           
          </div>
        </div>
    </div>
</div>
</template>
<script>
  import LineChart from './LineChart.js'
  import BarChart from './BarChart.js'
  export default {
    components: {
      LineChart,
      BarChart
    },
    data () {
      return {
        datacollection: null,
        lineDataCollection:{},
        labelForLineChart:[],
        lineDatas:[],
        integerValues:[],
        title:null,
        graphType:null,
        height:200
      }
    },
    mounted () {
      
    },
    methods: {
      generateData(){
        let datas=this.integerValues.split(",");
        datas.forEach(data=>{
          this.labelForLineChart.push(Math.random().toString(36).substring(7));
          this.lineDatas.push(data);
        });

         this.lineDataCollection={
                    
              labels: this.labelForLineChart,
              
              datasets:[
                          {
                              label:this.labelForLineChart,
                              backgroundColor: 'rgba(11,112,11,0.2)',
                              borderColor: 'rgba(1,115,101,0.4)',
                              data:this.lineDatas,
                          }
                      ]
          };
          this.$store.commit('storeDatas',this.lineDataCollection);
          this.$store.commit('storeTitle',this.title);
          this.$store.commit('storeGraphType',this.graphType);
      },
     
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>