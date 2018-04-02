<template>
  <el-container class="">
    <el-header class="">
      <el-row :gutter="20" class="">
        <el-col :span="18" :offset="6">
          <div class="" style="display:inline-block;">
            <span class="">
              <h1 style="display:inline-block;" class="">AISWare Stream Processor</h1>
              <a href="" style="color:grey;margin-left:20px;">访问应用实例</a>
            </span>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
        <el-row :gutter="5">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-card class="box-card noborder mycard">

                        <div id="usefulTotalData" style="height: 70px;">
                            <div class="el-col el-col-12">
                                <div class="demo-color-box bg-numbers">
                                有效数据总数
                                    <div class="value">
                                        {{allStreamsDataItems[dataIndex].data_statistic.success}}
                                    </div>
                                </div>
                            </div>
                            <div class="el-col el-col-12">
                                <div class="demo-color-box bg-numbers">
                                无效数据总数
                                <div class="value">
                                        {{allStreamsDataItems[dataIndex].data_statistic.fail}}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </el-card>
                    <el-card class="box-card noborder mycard" id="usefulDataTrendChartParentId">
                        <div id="usefulDataTrendChart" style="height: 350px;"></div>
                    </el-card>
                    <el-card class="box-card noborder mycard">
                        <div id="uselessDataTrendChart" style="height: 250px;"></div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-card class="box-card noborder mycard">
                        <div><h3><b>作业流业务配置图</b></h3></div>
                        <div id="myChart1" style="height: 425px;">
                            <a v-on:click="goPrev()" class="el-icon-arrow-left goPrevArrow"></a>
                            <a v-on:click="goNext()" class="el-icon-arrow-right goNextArrow"></a>
                            <el-carousel :autoplay="false" trigger="click"  arrow="never" height="440px" ref="carousel">
                                <el-carousel-item v-for="item in allStreamsDataItems" :key="item.index">
                                    <img v-bind:src="item.steamflowchartpath"  alt="作业流图" style="height:100%"/>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </el-card>
                    <el-card class="box-card noborder mycard">
                        <div id="streamEventsOutputDataChart" style="height: 250px;"></div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-card class="box-card noborder mycard">
                        <div id="batchProcessTimeChart" style="height: 140px;"></div>
                    </el-card>
                    <el-card class="box-card noborder mycard">
                        <div id="memoryRateChart" style="height: 280px;"></div>
                    </el-card>
                    <el-card class="box-card noborder mycard">
                        <div id="cpuRateChart" style="height: 250px;"></div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </el-main>
  </el-container>
    
</template>
<script>
import demodata from "@/data/ocspdemodata.js";
import echarts from "echarts";

var base = +new Date(2010, 1, 1);
var oneDay = 24 * 3600 * 1000;

function createMockDataForRecord(record) {
  var usefulData_date = [];
  var uselessData_date = [];
  var usefulData_data = [Math.random() * 100];
  var uselessData_data = [Math.random() * 30];

  record.data_statistic.success = 0;
  record.data_statistic.fail = 0;

  for (var i = 1; i < 2000; i++) {
    var now = new Date((base += oneDay));
    usefulData_date.push(
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
    );
    uselessData_date.push(
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
    );
    var randomSuccessData = Math.round(
      (Math.random() - 0.5) * 50 + usefulData_data[i - 1]
    );
    usefulData_data.push(randomSuccessData > 0 ? randomSuccessData : 0);
    record.data_statistic.success += randomSuccessData;
    var randomFailedData = Math.round(
      (Math.random() - 0.5) * 10 + uselessData_data[i - 1]
    );
    uselessData_data.push(randomFailedData > 0 ? randomFailedData : 0);
    record.data_statistic.fail += randomFailedData;
  }

  record.usefulDataTrendChartDataOption.series[0].data = usefulData_data;
  record.usefulDataTrendChartDataOption.xAxis.data = usefulData_date;
  record.usefulDataTrendChartDataOption.series[0].areaStyle.normal.color = new echarts.graphic.LinearGradient(
    0,
    0,
    0,
    1,
    [
      {
        offset: 0,
        color: "rgb(255, 158, 68)"
      },
      {
        offset: 1,
        color: "rgb(255, 70, 131)"
      }
    ]
  );

  record.uselessDataTrendChartDataOption.series[0].data = uselessData_data;
  record.uselessDataTrendChartDataOption.xAxis.data = uselessData_date;
  record.uselessDataTrendChartDataOption.series[0].areaStyle.normal.color = new echarts.graphic.LinearGradient(
    0,
    0,
    0,
    1,
    [
      {
        offset: 0,
        color: "rgb(255, 158, 68)"
      },
      {
        offset: 1,
        color: "rgb(255, 70, 131)"
      }
    ]
  );

  record.batchProcessTimeChartDataOption.series[0].itemStyle.normal.color = new echarts.graphic.LinearGradient(
    0,
    0,
    1,
    0,
    [
      {offset: 0, color: '#82DB6C'},
                            {offset: 0.5, color: '#A9DC6D'},
                            {offset: 1, color: '#D1625F'}
    ]
  );
}

function createMockDataForEvents(record) {
  var usefulData_date = [];
  var uselessData_date = [];
  var usefulData_data = [Math.random() * 100];
  var uselessData_data = [Math.random() * 30];

  record.data_statistic.success = 0;
  record.data_statistic.fail = 0;

  for (var i = 1; i < 2000; i++) {
    var now = new Date((base += oneDay));
    usefulData_date.push(
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
    );
    uselessData_date.push(
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
    );
    var randomSuccessData = Math.round(
      (Math.random() - 0.5) * 50 + usefulData_data[i - 1]
    );
    usefulData_data.push(randomSuccessData > 0 ? randomSuccessData : 0);
    record.data_statistic.success += randomSuccessData;
    var randomFailedData = Math.round(
      (Math.random() - 0.5) * 10 + uselessData_data[i - 1]
    );
    uselessData_data.push(randomFailedData > 0 ? randomFailedData : 0);
    record.data_statistic.fail += randomFailedData;
  }

  record.usefulDataTrendChartDataOption.series[0].data = usefulData_data;
  record.usefulDataTrendChartDataOption.xAxis.data = usefulData_date;
  record.usefulDataTrendChartDataOption.series[0].areaStyle.normal.color = new echarts.graphic.LinearGradient(
    0,
    0,
    0,
    1,
    [
      {
        offset: 0,
        color: "rgb(255, 158, 68)"
      },
      {
        offset: 1,
        color: "rgb(255, 70, 131)"
      }
    ]
  );

  record.uselessDataTrendChartDataOption.series[0].data = uselessData_data;
  record.uselessDataTrendChartDataOption.xAxis.data = uselessData_date;
  record.uselessDataTrendChartDataOption.series[0].areaStyle.normal.color = new echarts.graphic.LinearGradient(
    0,
    0,
    0,
    1,
    [
      {
        offset: 0,
        color: "rgb(255, 158, 68)"
      },
      {
        offset: 1,
        color: "rgb(255, 70, 131)"
      }
    ]
  );

  record.batchProcessTimeChartDataOption.series[0].itemStyle.normal.color = new echarts.graphic.LinearGradient(
    0,
    0,
    1,
    0,
    [
      {offset: 0, color: '#82DB6C'},
                            {offset: 0.5, color: '#A9DC6D'},
                            {offset: 1, color: '#D1625F'}
    ]
  );
}


createMockDataForRecord(demodata[0]);
createMockDataForRecord(demodata[1]);



export default {
  name: "OCSP",
  data() {
    return {
      title: "OCSP",
      dataIndex: 0,
      myInterval: null,
      datashow:false,
      allStreamsDataItems: demodata
    };
  },
  destroyed() {
    if (this.myInterval) {
      clearInterval(this.myInterval);
    }
  },
  created() {},
  mounted() {
    if (this.myInterval) {
      clearInterval(this.myInterval);
    }

    if(this.myTimeout){
      clearTimeout(this.myTimeout);
    }

    this.myTimeout = setTimeout(()=>{
      this.updateCharts();
    },200);
    

    this.myInterval = setInterval(()=>{
      // this.allStreamsDataItems[this.dataIndex].cpuRateChartDataOption.series[0].data[0].value =Math.floor((Math.random()*100));
      // this.allStreamsDataItems[this.dataIndex].cpuRateChartDataOption.series[0].data[1].value =100-this.allStreamsDataItems[this.dataIndex].cpuRateChartDataOption.series[0].data[0].value;

      // this.allStreamsDataItems[this.dataIndex].memoryRateChartDataOption.series[0].data[0].value =Math.floor((Math.random()*100));
      this.allStreamsDataItems[this.dataIndex].data_statistic.success += Math.floor((Math.random()*100));
      this.allStreamsDataItems[this.dataIndex].data_statistic.fail += Math.floor((Math.random()*10));

      // this.allStreamsDataItems[this.dataIndex].usefulDataTrendChartDataOption.series[0].data.shift();
      // this.allStreamsDataItems[this.dataIndex].usefulDataTrendChartDataOption.series[0].data.push(Math.floor((Math.random()*300)));
      // this.allStreamsDataItems[this.dataIndex].uselessDataTrendChartDataOption.series[0].data.shift();
      // this.allStreamsDataItems[this.dataIndex].uselessDataTrendChartDataOption.series[0].data.push(Math.floor((Math.random()*30)));

      // for(var index in this.allStreamsDataItems[this.dataIndex].streamEventsOutputDataChartDataOption.series){
      //   this.allStreamsDataItems[this.dataIndex].streamEventsOutputDataChartDataOption.series[index].data.shift();
      //   this.allStreamsDataItems[this.dataIndex].streamEventsOutputDataChartDataOption.series[index].data.push(Math.floor((Math.random()*300*(1+index) )));
      // }
      // console.log('try to update chart');
      // this.updateCharts();
    },100);

    // window.onresize();
  },
  methods: {
    updateOneTickData: function() {
      // var lastStreamUsefulDataTrend = this.allStreamsDataItems[0].usefulDataTrendChartDataOption.series[0].data[this.allStreamsDataItems[0].usefulDataTrendChartDataOption.series[0].data.length-1];
      // var lastStreamUselessDataTrend = this.allStreamsDataItems[0].uselessDataTrendChartDataOption.series[0].data[this.allStreamsDataItems[0].uselessDataTrendChartDataOption.series[0].data.length-1];
      // var successDataRecord = nextHourData(lastStreamUsefulDataTrend);
      // var failDataRecord = nextHourData(lastStreamUselessDataTrend);
      // this.allStreamsDataItems[0].data_statistic.success += successDataRecord.value[1];
      // this.allStreamsDataItems[0].data_statistic.fail += failDataRecord.value[1];
      // this.allStreamsDataItems[0].usefulDataTrendChartDataOption.series[0].data.shift();
      // this.allStreamsDataItems[0].usefulDataTrendChartDataOption.series[0].data.push(successDataRecord);
      // this.allStreamsDataItems[0].uselessDataTrendChartDataOption.series[0].data.shift();
      // this.allStreamsDataItems[0].uselessDataTrendChartDataOption.series[0].data.push(failDataRecord);
    },
    updateChartData: function() {
      for (var i = 0; i < 10; i++) {
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
  margin: 5px;
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
  opacity: 0.69;
  line-height: 40px;
  font-size: 34px;
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

.bg-numbers {
}

.goPrevArrow {
  float: left;
  margin-top: 200px;
}

.goNextArrow {
  float: right;
  margin-top: 200px;
}

.noborder {
  border: 0;
}

.mycard {
  -moz-box-shadow:3px 3px 10px #515151; 
  -webkit-box-shadow:3px 3px 10px #515151; 
  box-shadow:3px 3px 10px #515151;
  border-radius:10px;
  transition: all 0.6s;
}

.mycard:hover {
  transform: scale(1.03);
}

</style>