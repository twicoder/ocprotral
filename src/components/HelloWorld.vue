<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <el-row :gutter="30">
      <el-col :span="6">
        <el-card class="box-card">
          <span class="fa-stack fa-4x pull-left card">
              <i class="fa fa-circle fa-stack-2x" style="color: lightblue"></i>
              <i class="fa fa-database fa-stack-1x fa-inverse"></i>
            </span>
          HDFS存储空间 (PB)
          <h2>10/15</h2>
          <span style="color: red; font-size: 8px;">40%使用率</span>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <span class="fa-stack fa-4x pull-left card">
              <i class="fa fa-circle fa-stack-2x" style="color: lightgreen"></i>
              <i class="fa fa-thumbs-o-up fa-stack-1x fa-inverse"></i>
            </span>
          MapReduce作业日吞吐量<br/>
          <span>(jobs)</span>
          <h2>8337</h2>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <span class="fa-stack fa-4x pull-left card">
              <i class="fa fa-circle fa-stack-2x" style="color: darkkhaki"></i>
              <i class="fa fa-quora fa-stack-1x fa-inverse"></i>
            </span>
          Spark作业日吞吐量<br/>
          <span>(jobs)</span>
          <h2>834</h2>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <span class="fa-stack fa-4x pull-left card">
              <i class="fa fa-circle fa-stack-2x" style="color: lightcoral"></i>
              <i class="fa fa-map-o fa-stack-1x fa-inverse"></i>
            </span>
          HDFS存储空间 (PB)
          <h2>10/15</h2>
          <span style="color: green; font-size: 8px;">40%使用率</span>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="margin-top: 10px;" :gutter="30">
      <el-col :span="18">
        <el-card class="box-card">
          <div slot="header">
            <span>CPU资源使用</span>
          </div>
          <div id="myChart" style="height: 300px;"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">
            <span>集群资源满足度</span>
          </div>
          <div id="myChart1" style="height: 300px;"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '大数据平台概览'
      }
    },
    mounted() {
      let myChart = this.$echarts.init(document.getElementById('myChart'));
      let myChart1 = this.$echarts.init(document.getElementById('myChart1'));
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
          data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series: [
          {
            name:'访问来源',
            type:'pie',
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
            data:[
              {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:234, name:'联盟广告'},
              {value:135, name:'视频广告'},
              {value:1548, name:'搜索引擎'}
            ]
          }
        ]
      };
      myChart1.setOption(option1);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    margin-left: 20px;
    margin-right: 20px;
  }

  .box-card .card {
    margin-left: -10px;
    margin-bottom: -10px;
    padding-right: 20px;
  }
</style>
