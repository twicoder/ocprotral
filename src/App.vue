<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true">
      <el-menu-item disabled class="opa1" index="">
        <img style="height: 40px; width: 40px; margin-left: 20px;" src="./assets/logo.png">
        大数据智能运维平台
      </el-menu-item>
      <el-menu-item style="margin-left: 60px;" index="/">仪表盘</el-menu-item>
      <el-menu-item index="/LogSearch">集群分析</el-menu-item>
      <el-menu-item index="">租户分析</el-menu-item>
      <el-menu-item index="">日志分析</el-menu-item>
      <el-submenu index="">
        <template slot="title">智能优化</template>
        <el-menu-item index="">Yarn计算资源配置优化</el-menu-item>
        <el-menu-item index="">集群扩容推荐</el-menu-item>
        <el-menu-item index="">集群拓扑结构</el-menu-item>
      </el-submenu>
      <el-menu-item index="" class="pull-right" style="margin-right: 20px;">
        <i class="fa fa-user"></i>&nbsp;admin
      </el-menu-item>
      <el-menu-item index="" class="pull-right">
        <i class="fa fa-question-circle"></i>&nbsp;帮助
      </el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    activeIndex () {
      return this.$route.path
    }
  }
}
</script>

<style>
  html,body{
    margin: 0;
  }
  .el-menu-item.is-disabled.opa1{
    opacity: 1;
    cursor: default;
  }
  .el-menu--horizontal>.el-menu-item.pull-right{
    float: right;
  }
  ul.el-menu {
    border-bottom: none;
  }
</style>
