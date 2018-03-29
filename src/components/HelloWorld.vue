<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-button>查看详细</el-button>
    <el-row class="row-grid" :gutter="30">
      <el-col :span="6" class="m20">
        <el-card class="box-card">
          <div slot="header">
            <span>CPU资源使用</span>
          </div>
          <div id="myChart" style="height: 300px;"></div>
        </el-card>
        <el-card class="box-card m20">
          <div slot="header">
            <span>CPU资源使用</span>
          </div>
          <div id="myChart3" style="height: 300px;"></div>
        </el-card>
      </el-col>
      <el-col :span="12" class="m20">
        <el-card class="box-card">
          <div slot="header">
            <span>所有组件</span>
          </div>
          <div id="myChart2" style="height: 680px;"></div>
        </el-card>
      </el-col>
      <el-col :span="6" class="m20">
        <el-card class="box-card">
          <div slot="header">
            <span>集群资源满足度</span>
          </div>
          <div id="myChart1" style="height: 300px;"></div>
        </el-card>
        <el-card class="box-card m20">
          <div slot="header">
            <span>集群提供商</span>
          </div>
          <div id="myChart4" style="height: 300px;"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import option2 from "@/data/file2.js"
  import option3 from "@/data/file1.js"
  import option4 from "@/data/file3.js"

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '大数据平台概览'
      }
    },
    mounted() {
      let myChart = this.$echarts.init(document.getElementById('myChart'),'dark');
      let myChart1 = this.$echarts.init(document.getElementById('myChart1'),'dark');
      let myChart2 = this.$echarts.init(document.getElementById('myChart2'),'dark');
      let myChart3 = this.$echarts.init(document.getElementById('myChart3'),'dark');
      let myChart4 = this.$echarts.init(document.getElementById('myChart4'),'dark');
      let option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      };
      myChart.setOption(option);
      let option1 = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
            ]
          }
        ]
      };
      myChart1.setOption(option1);
      myChart2.setOption(option2);
      myChart3.setOption(option3);
      myChart4.setOption(option4);
      setInterval(function () {
        option3.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        myChart3.setOption(option3, true);
      },2000);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 使用deep选择器可以实现对element ui component 样式的局部修改 */
  .row-grid >>> .el-card .el-card__body{
    padding: 0;
  }
  .m20{
    margin-top: 20px;
  }
</style>
