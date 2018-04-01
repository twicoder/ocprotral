<template>
  <el-container>
    <el-header>
      <el-row :gutter="20" >
        <el-col :span="18" :offset="6"><div class=""> <h1 style="display:inline-block;">AISWare Stream Processor</h1><a href="" style="color:grey;margin-left:20px;">访问应用实例</a></div></el-col>
      </el-row>
    </el-header>
    <el-main>
        <el-row :gutter="5">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">

                        <div id="usefulTotalData" style="height: 70px;">
                            <div class="el-col el-col-12">
                                <div class="demo-color-box bg-success">
                                有效数据总数
                                    <div class="value">
                                        {{allStreamsDataItems[dataIndex].data_statistic.success}}
                                    </div>
                                </div>
                            </div>
                            <div class="el-col el-col-12">
                                <div class="demo-color-box bg-info">
                                无效数据总数
                                <div class="value">
                                        {{allStreamsDataItems[dataIndex].data_statistic.fail}}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </el-card>
                    <el-card class="box-card">
                        <div id="usefulDataTrendChart" style="height: 350px;"></div>
                    </el-card>
                    <el-card class="box-card">
                        <div id="uselessDataTrendChart" style="height: 250px;"></div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header">
                            <span><b style="font-size:18px;">作业流业务配置图</b></span>
                        </div>
                        <div id="myChart1" style="height: 408px;">
                            <a v-on:click="goPrev()" class="el-icon-arrow-left goPrevArrow"></a>
                            <a v-on:click="goNext()" class="el-icon-arrow-right goNextArrow"></a>
                            <el-carousel :autoplay="false"  arrow="never" height="440px" ref="carousel" indicator-position="outside">
                                <el-carousel-item v-for="item in allStreamsDataItems" :key="item.index">
                                    <img v-bind:src="item.steamflowchartpath"  alt="作业流图" style="height:100%"/>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </el-card>
                    <el-card class="box-card">
                        <div id="streamEventsOutputDataChart" style="height: 250px;"></div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div id="batchProcessTimeChart" style="height: 140px;"></div>
                    </el-card>
                    <el-card class="box-card">
                        <div id="memoryRateChart" style="height: 280px;"></div>
                    </el-card>
                    <el-card class="box-card">
                        <div id="cpuRateChart" style="height: 250px;"></div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </el-main>
  </el-container>
    
</template>
<script>
import demodata from "@/data/ocspdemodata.js"

var oneHour = 3600 * 1000;
var now = +new Date();
var value = Math.random() * 1000;

function randomData() {
  now = new Date(+now - oneHour);
  value = value + Math.random() * 21 - 10;
  return {
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') ,
      Math.round(value)
    ]
  }
}

function nextHourData(baseDate){
  var nextDate = new Date(+new Date(baseDate.value[0]) + oneHour);
  var nextValue = baseDate.value[1] + Math.random() * 21 - 10;
  return {
    name: nextDate.toString(),
    value: [
      [nextDate.getFullYear(), nextDate.getMonth() + 1, nextDate.getDate()].join('/') ,
      Math.round(nextValue)
    ]
  }
}




demodata[0].usefulDataTrendChartDataOption.series[0].data = [];
demodata[0].uselessDataTrendChartDataOption.series[0].data = [];
demodata[0].data_statistic.success = 0;
demodata[0].data_statistic.fail = 0;
for (var i = 0; i < 1000; i++) {
  var successDataRecord = randomData();
  var failDataRecord = randomData();
  demodata[0].usefulDataTrendChartDataOption.series[0].data.unshift(successDataRecord);
  demodata[0].uselessDataTrendChartDataOption.series[0].data.unshift(failDataRecord);
  demodata[0].data_statistic.success += successDataRecord.value[1];
  demodata[0].data_statistic.fail += failDataRecord.value[1];
}


export default {
  name: "OCSP1",
  data() {
    return {
      title: "OCSP1",
      dataIndex: 0,
      myInterval:null,
      allStreamsDataItems: demodata
    };
  },
  destroyed(){
    if(this.myInterval){
      clearInterval(this.myInterval);
    }
  },
  created(){
    
  },
  mounted() {
    console.log('mounted():');
    if(this.myInterval){
      clearInterval(this.myInterval);
    }

    this.myInterval = setInterval(()=>{
      // this.allStreamsDataItems[this.dataIndex].cpuRateChartDataOption.series[0].data[0].value =Math.floor((Math.random()*100));
      // this.allStreamsDataItems[this.dataIndex].cpuRateChartDataOption.series[0].data[1].value =100-this.allStreamsDataItems[this.dataIndex].cpuRateChartDataOption.series[0].data[0].value;

      // this.allStreamsDataItems[this.dataIndex].memoryRateChartDataOption.series[0].data[0].value =Math.floor((Math.random()*100));
      // this.allStreamsDataItems[this.dataIndex].data_statistic.success += Math.floor((Math.random()*10));
      // this.allStreamsDataItems[this.dataIndex].data_statistic.fail += Math.floor((Math.random()*2));

      // this.allStreamsDataItems[this.dataIndex].usefulDataTrendChartDataOption.series[0].data.shift();
      // this.allStreamsDataItems[this.dataIndex].usefulDataTrendChartDataOption.series[0].data.push(Math.floor((Math.random()*300)));
      // this.allStreamsDataItems[this.dataIndex].uselessDataTrendChartDataOption.series[0].data.shift();
      // this.allStreamsDataItems[this.dataIndex].uselessDataTrendChartDataOption.series[0].data.push(Math.floor((Math.random()*30)));

      // for(var index in this.allStreamsDataItems[this.dataIndex].streamEventsOutputDataChartDataOption.series){
      //   this.allStreamsDataItems[this.dataIndex].streamEventsOutputDataChartDataOption.series[index].data.shift();
      //   this.allStreamsDataItems[this.dataIndex].streamEventsOutputDataChartDataOption.series[index].data.push(Math.floor((Math.random()*300*(1+index) )));
      // }

      this.updateCharts();
    },1000);

    
  },
  methods: {
    updateOneTickData:function(){
      var lastStreamUsefulDataTrend = this.allStreamsDataItems[0].usefulDataTrendChartDataOption.series[0].data[this.allStreamsDataItems[0].usefulDataTrendChartDataOption.series[0].data.length-1];
      var lastStreamUselessDataTrend = this.allStreamsDataItems[0].uselessDataTrendChartDataOption.series[0].data[this.allStreamsDataItems[0].uselessDataTrendChartDataOption.series[0].data.length-1];
      var successDataRecord = nextHourData(lastStreamUsefulDataTrend);
      var failDataRecord = nextHourData(lastStreamUselessDataTrend);

      this.allStreamsDataItems[0].data_statistic.success += successDataRecord.value[1];
      this.allStreamsDataItems[0].data_statistic.fail += failDataRecord.value[1];
      this.allStreamsDataItems[0].usefulDataTrendChartDataOption.series[0].data.shift();
      this.allStreamsDataItems[0].usefulDataTrendChartDataOption.series[0].data.push(successDataRecord);
      this.allStreamsDataItems[0].uselessDataTrendChartDataOption.series[0].data.shift();
      this.allStreamsDataItems[0].uselessDataTrendChartDataOption.series[0].data.push(failDataRecord);
    },
    updateChartData:function(){
      for(var i=0;i<10;i++){
        this.updateOneTickData();
      }
    },
    updateCharts: function() {
      this.updateChartData();

      let usefulDataTrendChart = this.$echarts.init(
        document.getElementById("usefulDataTrendChart")
      );

      usefulDataTrendChart.setOption(
        this.allStreamsDataItems[this.dataIndex].usefulDataTrendChartDataOption
      );

      let uselessDataTrendChart = this.$echarts.init(
        document.getElementById("uselessDataTrendChart")
      );
      uselessDataTrendChart.setOption(
        this.allStreamsDataItems[this.dataIndex].uselessDataTrendChartDataOption
      );
      let memoryRateChart = this.$echarts.init(
        document.getElementById("memoryRateChart")
      );
      memoryRateChart.setOption(
        this.allStreamsDataItems[this.dataIndex].memoryRateChartDataOption
      );
      let cpuRateChart = this.$echarts.init(
        document.getElementById("cpuRateChart")
      );
      cpuRateChart.setOption(
        this.allStreamsDataItems[this.dataIndex].cpuRateChartDataOption
      );
      let batchProcessTimeChart = this.$echarts.init(
        document.getElementById("batchProcessTimeChart")
      );
      batchProcessTimeChart.setOption(
        this.allStreamsDataItems[this.dataIndex].batchProcessTimeChartDataOption
      );
      let streamEventsOutputDataChart = this.$echarts.init(
        document.getElementById("streamEventsOutputDataChart")
      );
      streamEventsOutputDataChart.setOption(
        this.allStreamsDataItems[this.dataIndex]
          .streamEventsOutputDataChartDataOption
      );
    },
    updateDataIndex: function(incrementStep) {

      if (this.dataIndex + incrementStep < 0) {
        this.dataIndex =
          this.dataIndex + incrementStep + this.allStreamsDataItems.length;
      } else if (
        this.dataIndex + incrementStep >=
        this.allStreamsDataItems.length
      ) {
        this.dataIndex =
          this.dataIndex + incrementStep - this.allStreamsDataItems.length;
      } else {
        this.dataIndex = this.dataIndex + incrementStep;
      }
      this.updateCharts();
    },
    goPrev: function() {
      this.updateDataIndex(-1);
      this.$refs.carousel.prev();
    },
    goNext: function() {
      this.updateDataIndex(1);
      this.$refs.carousel.next();
    }
  },
  computed: {
    background() {
      return require("../../static/pics/" + this.id + ".png");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-card {
  margin-top: 5px;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item {
  background-color: #182028;
}

.el-carousel__button {
  background: red;
}

.demo-color-box {
  border-radius: 4px;
  padding: 10px;
  margin: 5px 5px 5px 5px;
  height: 75px;
  box-sizing: border-box;
  color: #fff;
  font-size: 10px;
}

.demo-color-box .value {
  font-size: 16px;
  opacity: 0.69;
  line-height: 40px;
  font-size: 24px;
}

.bg-danger {
  background: #f56c6c;
}

.bg-success {
  background: #67c23a;
}

.bg-info {
  background: #909399;
}

.bg-blue {
  background: #409eff;
}

.goPrevArrow {
  float: left;
  margin-top: 200px;
}

.goNextArrow {
  float: right;
  margin-top: 200px;
}
</style>