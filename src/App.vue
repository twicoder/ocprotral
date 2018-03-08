<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item disabled class="opa1" index="">
        <img style="height: 40px; width: 40px; margin-left: 20px;" src="./assets/logo.png">
        AISWare BigData
      </el-menu-item>
      <el-menu-item index="solution">
        解决方案
      </el-menu-item>
      <el-menu-item index="products">
        产品
      </el-menu-item>
      <el-menu-item index="user" class="pull-right" style="margin-right: 20px;">
        <i class="fa fa-user"></i>&nbsp;admin
      </el-menu-item>
      <el-menu-item index="help" class="pull-right">
        <i class="fa fa-question-circle"></i>&nbsp;帮助
      </el-menu-item>
      <el-menu-item disabled class="opa1 pull-right" index="" style="margin-top: -1px;">
        <el-input
          size="small"
          placeholder="搜索"
          suffix-icon="el-icon-search">
        </el-input>
      </el-menu-item>
    </el-menu>
    <transition name="slide" enter-active-class="slideInDown" leave-active-class="slideOutUp">
      <div v-show="show" class="modalContainer">
        <el-row :gutter="20" class="globalMenu">
          <el-col :span="3" style="padding-top: 8px;">
            <ul class="uk-list uk-list-bullet">
              <li><h4 style="color: white">最近访问</h4></li>
              <li>客户群推送</li>
              <li>电信运营商营销服务</li>
              <li>对外营销服务</li>
            </ul>
          </el-col>
          <el-col :span="2" style="background-color: rgb(97,98,100);padding-top: 10px;padding-bottom: 50px;">
            <ul class="uk-list">
              <li>全部</li>
              <li>营销</li>
              <li>运维</li>
              <li>位置</li>
              <li>查询分析</li>
              <li>人工智能</li>
              <li>数据开放</li>
            </ul>
          </el-col>
          <el-col :span="4" style="padding-top: 10px;font-size: 14px;">
            <ul class="uk-list">
              <li>客户群推送</li>
              <li>电信运营商营销服务</li>
              <li>对外营销服务</li>
              <li>智能推荐</li>
              <li>（智能）自助分析</li>
              <li>大数据平台统一智能运维</li>
            </ul>
          </el-col>
          <el-col :span="4" style="padding-top: 10px;font-size: 14px;">
            <ul class="uk-list">
              <li>多租户统一智能运维</li>
              <li>人工智能模型开发与数据挖掘</li>
              <li>BDPASS</li>
              <li>数据治理</li>
              <li>公安系统高危人群轨迹跟踪</li>
              <li>位置运营</li>
              <li>上网流量查询</li>
              <li>大数据平台用户操作</li>
              <li>大数据PaaS管控平台</li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </transition>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        show: false
      };
    },
    methods: {
      handleSelect(key) {
        if(this.activeTab === key) {
          this.show = !this.show;
        }else{
          this.activeTab = key;
          this.show = false;
          let self = this;
          setTimeout(function(){
            self.show = true;
          },100);
        }
      }
    },
    computed: {
      activeIndex() {
        return this.$route.path
      }
    }
  }
</script>

<style>
  html, body {
    margin: 0;
  }

  .el-menu-demo{
    z-index: 10;
  }

  .el-menu-item.is-disabled.opa1 {
    opacity: 1;
    cursor: default;
  }

  .el-menu--horizontal > .el-menu-item.pull-right {
    float: right;
  }

  ul.el-menu {
    border-bottom: none;
  }

  ul.el-menu input {
    background: 0 0;
    color: white;
  }

  ul.el-menu .el-input.is-active .el-input__inner, .el-input__inner:focus {
    border-color: white;
    outline: 0;
  }

  .modalContainer{
    color: lightgrey;
    background-color: rgb(84, 92, 100);
    z-index: 1;
    position:absolute;
    left: 0;
    top: 60px;
    width: 100%;
    border-top: 1px solid;
  }

  .globalMenu li:hover{
    color: white;
    cursor: pointer;
  }
</style>
