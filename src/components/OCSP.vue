<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header">
                            <span>Driver内存比例</span>
                        </div>
                        <div id="myChart1" style="height: 160px;"></div>
                    </el-card>
                    <el-card class="box-card">
                        <div slot="header">
                            <span>Executor内存比例</span>
                        </div>
                        <div id="myChart2" style="height: 160px;"></div>
                    </el-card>
                    <el-card class="box-card">
                        <div slot="header">
                            <span>Executor核心数比例</span>
                        </div>
                        <div id="myChart2" style="height: 160px;"></div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header">
                            <span>作业流业务配置图</span>
                        </div>
                        <div id="myChart1" style="height: 443px;"></div>
                    </el-card>
                    <el-card class="box-card">
                        <div slot="header">
                            <span>作业流事件输出数据量</span>
                        </div>
                        <div id="myChart2" style="height: 160px;"></div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header">
                            <span>接收、总数、丢弃</span>
                        </div>
                        <div id="myChart1" style="height: 80px;"></div>
                    </el-card>
                    <el-card class="box-card">
                        <div slot="header">
                            <span>每个批次接收数据变化</span>
                        </div>
                        <div id="myChart2" style="height: 200px;"></div>
                    </el-card>
                    <el-card class="box-card">
                        <div slot="header">
                            <span>每个批次丢弃的数据变化</span>
                        </div>
                        <div id="myChart1" style="height: 200px;"></div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  name: "OCSP",
  data() {
    return {
      title: "OCSP"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box-card {
      margin-top:20px;
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
</style>