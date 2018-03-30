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
export default {
  name: "OCSP",
  data() {
    return {
      title: "OCSP",
      dataIndex: 0,
      myInterval:null,
      allStreamsDataItems: [
        {
          index: 0,
          steamflowchartpath: "../../static/pics/evt1.png",
          data_statistic: { success: 2000, fail: 100 },
          usefulDataTrendChartDataOption: {
            color: ["#640346", "#721B6A"],
            title: {
              text: "有效数据",
              textStyle: {
                color: "#EEE"
              }
            },
            textStyle: {
              fontWeight: "bolder",
              color: "#aaa"
            },
            tooltip: {
              trigger: "axis"
            },
            toolbox: {
              show: true
            },
            calculable: true,
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
              }
            ],
            yAxis: [
              {
                type: "value"
              }
            ],
            series: [
              {
                name: "有效数据",
                type: "line",
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: "default" } } },
                data: [300, 280, 290, 310, 320, 270, 230]
              }
            ]
          },
          uselessDataTrendChartDataOption: {
            color: ["#721B6A", "#67C23A"],
            title: {
              text: "无效数据",
              textStyle: {
                color: "#EEE"
              }
            },
            textStyle: {
              fontWeight: "bolder",
              color: "#aaa"
            },
            tooltip: {
              trigger: "axis"
            },
            toolbox: {
              show: true
            },
            calculable: true,
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
              }
            ],
            yAxis: [
              {
                type: "value"
              }
            ],
            series: [
              {
                name: "无效数据",
                type: "line",
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: "default" } } },
                data: [10, 13, 12, 14, 15, 16, 20]
              }
            ]
          },
          memoryRateChartDataOption: {
            tooltip: {
              formatter: "{a} <br/>{b} : {c}%"
            },
            textStyle: {
              fontWeight: "bolder",
              color: "#aaa"
            },
            series: [
              {
                name: "CPU使用率",
                type: "gauge",
                splitNumber: 10, // 分割段数，默认为5
                axisLine: {
                  // 坐标轴线
                  lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: [[0.2, "#228b22"], [0.8, "#48b"], [1, "#ff4500"]],
                    width: 8
                  }
                },
                axisTick: {
                  // 坐标轴小标记
                  splitNumber: 10, // 每份split细分多少段
                  length: 12, // 属性length控制线长
                  lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: "auto"
                  }
                },
                axisLabel: {
                  // 坐标轴文本标签，详见axis.axisLabel
                  textStyle: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: "auto"
                  }
                },
                splitLine: {
                  // 分隔线
                  show: true, // 默认显示，属性show控制显示与否
                  length: 30, // 属性length控制线长
                  lineStyle: {
                    // 属性lineStyle（详见lineStyle）控制线条样式
                    color: "auto"
                  }
                },
                pointer: {
                  width: 5
                },
                title: {
                  show: true,
                  textStyle: {
                    color: "#EEE"
                  },
                  offsetCenter: [0, "-40%"], // x, y，单位px
                  textStyle: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: "bolder",
                    color: "auto"
                  }
                },
                detail: {
                  formatter: "{value}%",
                  textStyle: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: "auto",
                    fontWeight: "bolder"
                  }
                },
                data: [{ value: 70, name: "内存比例" }]
              }
            ]
          },
          cpuRateChartDataOption: {
            color: ["#67C23A", "#E6A23C"],
            title: {
              text: "CPU核数比例",
              x: "center",
              textStyle: {
                color: "#EEE"
              }
            },
            textStyle: {
              fontWeight: "bolder",
              color: "auto"
            },
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: "vertical",
              x: "left",
              data: ["流ii", "流testspark_aa"],
              textStyle: {
                fontWeight: "bolder",
                color: "auto"
              }
            },
            calculable: true,
            series: [
              {
                name: "CPU比例信息",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  { value: 10, name: "流ii" },
                  { value: 90, name: "流testspark_aa" }
                ]
              }
            ]
          },
          batchProcessTimeChartDataOption: {
            color: ["#6BF5F5", "#67C23A"],
            textStyle: {
              fontWeight: "bolder",
              color: "#aaa"
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: {
              data: ["每批次处理时间（s）"],
              textStyle: {
                fontWeight: "bolder",
                color: "#aaa"
              }
            },
            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true
            },
            xAxis: {
              type: "value"
            },
            yAxis: {
              type: "category",
              data: ["批次1", "批次2", "批次3", "批次4", "批次5"]
            },
            series: [
              {
                name: "每批次处理时间（s）",
                type: "bar",
                stack: "总量",
                label: {
                  normal: {
                    show: true,
                    position: "insideRight"
                  }
                },
                data: [50, 45, 49, 55, 51]
              }
            ]
          },
          streamEventsOutputDataChartDataOption: {
            color: ["#983C8F", "#2F81C4"],
            title: {
              text: "作业流事件处理数据量",
              textStyle: {
                color: "#EEE"
              },
              subtext: "Demo"
            },
            textStyle: {
              color: "#AAA"
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              data: ["demo1", "event2"],
              textStyle: {
                color: "#AAA"
              }
            },
            calculable: true,
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
              }
            ],
            yAxis: {
              type: "value"
            },
            series: [
              {
                name: "demo1",
                type: "line",
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: "default" } } },
                data: [10, 12, 21, 54, 260, 830, 710]
              },
              {
                name: "event2",
                type: "line",
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: "default" } } },
                data: [30, 182, 434, 791, 390, 30, 10]
              }
            ]
          }
        },

        {
          index: 1,
          steamflowchartpath: "../../static/pics/evt2.png",
          data_statistic: { success: 3000, fail: 200 },
          usefulDataTrendChartDataOption: {
            color: ["#640346", "#67C23A"],
            title: {
              text: "有效数据",
              textStyle: {
                color: "#EEE"
              }
            },
            textStyle: {
              fontWeight: "bolder",
              color: "#aaa"
            },
            tooltip: {
              trigger: "axis"
            },
            toolbox: {
              show: true
            },
            calculable: true,
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
              }
            ],
            yAxis: [
              {
                type: "value"
              }
            ],
            series: [
              {
                name: "有效数据",
                type: "line",
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: "default" } } },
                data: [400, 380, 390, 410, 220, 370, 430]
              }
            ]
          },
          uselessDataTrendChartDataOption: {
            color: ["#721B6A", "#67C23A"],
            title: {
              text: "无效数据",
              textStyle: {
                color: "#EEE"
              }
            },
            textStyle: {
              fontWeight: "bolder",
              color: "#aaa"
            },
            tooltip: {
              trigger: "axis"
            },
            toolbox: {
              show: true
            },
            calculable: true,
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
              }
            ],
            yAxis: [
              {
                type: "value"
              }
            ],
            series: [
              {
                name: "无效数据",
                type: "line",
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: "default" } } },
                data: [20, 33, 12, 24, 25, 16, 40]
              }
            ]
          },
          memoryRateChartDataOption: {
            tooltip: {
              formatter: "{a} <br/>{b} : {c}%"
            },
            textStyle: {
              fontWeight: "bolder",
              color: "#aaa"
            },
            series: [
              {
                name: "CPU使用率",
                type: "gauge",
                splitNumber: 10, // 分割段数，默认为5
                axisLine: {
                  // 坐标轴线
                  lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: [[0.2, "#228b22"], [0.8, "#48b"], [1, "#ff4500"]],
                    width: 8
                  }
                },
                axisTick: {
                  // 坐标轴小标记
                  splitNumber: 10, // 每份split细分多少段
                  length: 12, // 属性length控制线长
                  lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: "auto"
                  }
                },
                axisLabel: {
                  // 坐标轴文本标签，详见axis.axisLabel
                  textStyle: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: "auto"
                  }
                },
                splitLine: {
                  // 分隔线
                  show: true, // 默认显示，属性show控制显示与否
                  length: 30, // 属性length控制线长
                  lineStyle: {
                    // 属性lineStyle（详见lineStyle）控制线条样式
                    color: "auto"
                  }
                },
                pointer: {
                  width: 5
                },
                title: {
                  show: true,
                  textStyle: {
                    color: "#EEE"
                  },
                  offsetCenter: [0, "-40%"], // x, y，单位px
                  textStyle: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: "bolder",
                    color: "auto"
                  }
                },
                detail: {
                  formatter: "{value}%",
                  textStyle: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: "auto",
                    fontWeight: "bolder"
                  }
                },
                data: [{ value: 30, name: "内存比例" }]
              }
            ]
          },
          cpuRateChartDataOption: {
            color: ["#67C23A", "#E6A23C"],
            title: {
              text: "CPU核数比例",
              x: "center",
              textStyle: {
                color: "#EEE"
              }
            },
            textStyle: {
              fontWeight: "bolder",
              color: "#aaa"
            },
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: "vertical",
              x: "left",
              data: ["空闲CPU", "繁忙CPU"],
              textStyle: {
                fontWeight: "bolder",
                color: "#aaa"
              }
            },
            calculable: true,
            series: [
              {
                name: "CPU比例信息",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  { value: 30, name: "空闲CPU" },
                  { value: 70, name: "繁忙CPU" }
                ]
              }
            ]
          },
          batchProcessTimeChartDataOption: {
            color: ["#6BF5F5", "#67C23A"],
            textStyle: {
              fontWeight: "bolder",
              color: "#aaa"
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: {
              data: ["每批次处理时间（s）"],
              textStyle: {
                fontWeight: "bolder",
                color: "#aaa"
              }
            },
            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true
            },
            xAxis: {
              type: "value"
            },
            yAxis: {
              type: "category",
              data: ["批次1", "批次2", "批次3", "批次4", "批次5"]
            },
            series: [
              {
                name: "每批次处理时间（s）",
                type: "bar",
                stack: "总量",
                label: {
                  normal: {
                    show: true,
                    position: "insideRight"
                  }
                },
                data: [35, 25, 45, 50, 40]
              }
            ]
          },
          streamEventsOutputDataChartDataOption: {
            color: ["#983C8F", "#2F81C4","#A3BE4C"],
            title: {
              text: "作业流事件处理数据量",
              textStyle: {
                color: "#EEE"
              },
              subtext: "Demo"
            },
            textStyle: {
              color: "#AAA"
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              data: ["evt1001", "evt1002", "测试名称2"],
              color: ["#67C23A", "#57B22A", "#47A21A"],
              textStyle: {
                color: "#AAA"
              }
            },
            calculable: true,
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
              }
            ],
            yAxis: {
              type: "value"
            },
            series: [
              {
                name: "evt1001",
                type: "line",
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: "default" } } },
                data: [30, 22, 25, 29, 160, 120, 210]
              },
              {
                name: "evt1002",
                type: "line",
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: "default" } } },
                data: [90, 120, 234, 331, 290, 40, 80]
              },
              {
                name: "测试名称2",
                type: "line",
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: "default" } } },
                data: [120, 182, 134, 291, 90, 230, 110]
              }
            ]
          }
        }
      ]
    };
  },
  destroyed(){
    if(this.myInterval){
      clearInterval(this.myInterval);
    }
  },
  mounted() {
    this.updateCharts();
    if(this.myInterval){
      clearInterval(this.myInterval);
    }
    this.myInterval = setInterval(()=>{
      // this.allStreamsDataItems[this.dataIndex].cpuRateChartDataOption.series[0].data[0].value =Math.floor((Math.random()*100));
      // this.allStreamsDataItems[this.dataIndex].cpuRateChartDataOption.series[0].data[1].value =100-this.allStreamsDataItems[this.dataIndex].cpuRateChartDataOption.series[0].data[0].value;

      // this.allStreamsDataItems[this.dataIndex].memoryRateChartDataOption.series[0].data[0].value =Math.floor((Math.random()*100));
      this.allStreamsDataItems[this.dataIndex].data_statistic.success += Math.floor((Math.random()*10));
      this.allStreamsDataItems[this.dataIndex].data_statistic.fail += Math.floor((Math.random()*2));

      this.allStreamsDataItems[this.dataIndex].usefulDataTrendChartDataOption.series[0].data.shift();
      this.allStreamsDataItems[this.dataIndex].usefulDataTrendChartDataOption.series[0].data.push(Math.floor((Math.random()*300)));
      this.allStreamsDataItems[this.dataIndex].uselessDataTrendChartDataOption.series[0].data.shift();
      this.allStreamsDataItems[this.dataIndex].uselessDataTrendChartDataOption.series[0].data.push(Math.floor((Math.random()*30)));

      for(var index in this.allStreamsDataItems[this.dataIndex].streamEventsOutputDataChartDataOption.series){
        this.allStreamsDataItems[this.dataIndex].streamEventsOutputDataChartDataOption.series[index].data.shift();
        this.allStreamsDataItems[this.dataIndex].streamEventsOutputDataChartDataOption.series[index].data.push(Math.floor((Math.random()*300*(1+index) )));
      }


      this.updateCharts();
    },1000);
  },
  methods: {
    updateCharts: function() {
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
      console.log("update dataIndex");

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
      console.log("updated index is :", this.dataIndex);
      this.updateCharts();
    },
    goPrev: function() {
      console.log("goPrev");
      this.updateDataIndex(-1);
      this.$refs.carousel.prev();
    },
    goNext: function() {
      console.log("goNext");
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