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
    <el-menu style="box-sizing: border-box;float: left;" class="el-menu-vertical-demo"
             :collapse="isCollapse" @select="handleSelect1" router>
      <el-menu-item index="navigator">
        <i class="el-icon-menu"></i>
        <span slot="title">导航</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">运营管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="OCSP">OCSP</el-menu-item>
          <el-menu-item index="1-1">数据集成</el-menu-item>
          <el-menu-item index="1-2">流处理引擎</el-menu-item>
          <el-menu-item index="1-3">网络爬虫</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">大数据基础能力</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">大数据运维</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">数据检索</span>
      </el-menu-item>
    </el-menu>
    <div class="container" :style="mainContainer">
      <transition name="point" enter-active-class="fadeIn">
        <router-view v-if="contentShow"/>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        show: false,
        isCollapse: true,
        contentShow: true,
        mainContainer : {
          'margin-left': '64px'
        },
        documentHeight: {
          'height': `${document.documentElement.clientHeight - 60}px`
        }
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
          },200);
        }
      },
      handleSelect1(key){
        if(key === "navigator"){
          this.isCollapse = !this.isCollapse;
        }
        if(this.isCollapse){
          this.mainContainer = {
            'margin-left': '64px'
          };
          this.contentShow = false;
          let self = this;
          setTimeout(function(){
            self.contentShow = true;
          },300);
        }else{
          this.mainContainer = {
            'margin-left': '200px'
          };
        }

      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
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

  .point-leave{
    opacity: 0;
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

  *{
    box-sizing: border-box;
  }

  .globalMenu li:hover{
    color: white;
    cursor: pointer;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }

  .container{
    padding: 20px;
  }

  .row-grid::after{
    clear: none !important;
  }

</style>
