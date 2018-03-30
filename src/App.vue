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
        <img style="height: 40px; width: 40px; margin-left: 20px;" src="./assets/logo1.png">
        &nbsp;&nbsp;AISWare BigData
      </el-menu-item>
      <el-menu-item index="solution">
        <div>解决方案</div>
      </el-menu-item>
      <el-menu-item index="products">
        <div>产品</div>
      </el-menu-item>
      <el-menu-item disabled index="user" class="opa1 pull-right" style="margin-right: 20px;">
        <i class="fa fa-user"></i>&nbsp;admin
      </el-menu-item>
      <el-menu-item disabled index="help" class="opa1 pull-right">
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
          <el-col :span="3" :offset="2">
            <ul class="uk-list uk-list-space">
              <li class="globalMenuHeader">最近访问</li>
              <li>客户群推送</li>
              <li>电信运营商营销服务</li>
              <li>对外营销服务</li>
            </ul>
            <ul class="uk-list uk-list-space">
              <li class="globalMenuHeader">数据加工坊</li>
              <li>研发交付平台</li>
              <li>内容分析中心</li>
              <li>标签管理中心</li>
            </ul>
          </el-col>
          <el-col :span="3">
            <ul class="uk-list uk-list-space">
              <li class="globalMenuHeader">全部</li>
              <li>营销</li>
              <li>运维</li>
              <li>位置</li>
              <li>查询分析</li>
              <li>人工智能</li>
              <li>数据开放</li>
            </ul>
            <ul class="uk-list uk-list-space">
              <li class="globalMenuHeader">基础设施</li>
              <li>大数据基础平台</li>
              <li>集群洞察 &nbsp;<div class="uk-badge uk-badge-danger">NEW</div></li>
              <li>OCSP &nbsp;<div class="uk-badge uk-badge-danger">HOT</div></li>
            </ul>
          </el-col>
          <el-col :span="3">
            <ul class="uk-list uk-list-space">
              <li class="globalMenuHeader">客户群推送</li>
              <li>电信运营商营销服务</li>
              <li>对外营销服务</li>
              <li>智能推荐</li>
              <li>（智能）自助分析</li>
              <li>大数据平台统一智能运维</li>
            </ul>
          </el-col>
          <el-col :span="3">
            <ul class="uk-list uk-list-space">
              <li class="globalMenuHeader">多租户统一智能运维</li>
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
    <el-menu style="box-sizing: border-box;float: left;"
             :style="{'min-height': documentHeight}"
             class="el-menu-vertical-demo"
             :collapse="isCollapse"
             @select="handleSelect1"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             router>
      <el-menu-item index="navigator">
        <i class="fa fa-bars"></i>
        <span slot="title">全部导航</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">运营管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">营销管理中心</el-menu-item>
          <el-menu-item index="1-2">智能推荐中心</el-menu-item>
          <el-menu-item index="1-3">标签管理中心</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">数据管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">数据治理专家</el-menu-item>
          <el-menu-item index="2-2">数据安全中心</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-picture"></i>
          <span slot="title">数据采集处理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">数据集成</el-menu-item>
          <el-menu-item index="OCSP">流处理引擎</el-menu-item>
          <el-menu-item index="3-3">网络爬虫</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span slot="title">数据分析</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">可视化数据分析</el-menu-item>
          <el-menu-item index="4-2">内容分析中心</el-menu-item>
          <el-menu-item index="4-3">复杂时间中心</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">人工智能</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">机器学习平台</el-menu-item>
          <el-menu-item index="5-2">机器学习模型库</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-news"></i>
          <span slot="title">数据开放</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">数据开放环境</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-search"></i>
          <span slot="title">数据检索</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="7-1">关联检索引擎</el-menu-item>
          <el-menu-item index="7-2">可视化数据访问</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-rank"></i>
          <span slot="title">大数据运维</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="8-1">集群洞察</el-menu-item>
          <el-menu-item index="8-2">智能运维</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span slot="title">大数据基础能力</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="9-1">大数据基础平台</el-menu-item>
          <el-menu-item index="9-2">集群管控平台</el-menu-item>
          <el-menu-item index="9-3">容器操作平台</el-menu-item>
          <el-menu-item index="9-4">研发交付云平台</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <div class="container" :style="{'min-height': documentHeight, 'margin-left': mainContainer}">
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
        mainContainer : '64px',
        documentHeight: `${document.documentElement.clientHeight - 60}px`
      };
    },
    mounted: function(){
      const self = this;
      window.onresize = () => {
        self.documentHeight = `${document.documentElement.clientHeight - 60}px`;
      }
    },
    methods: {
      handleSelect(key) {
        if(this.activeTab === key) {
          this.show = !this.show;
        }else{
          this.activeTab = key;
          this.show = false;
          const self = this;
          setTimeout(function(){
            self.show = true;
          },200);
        }
      },
      mouseOver(){
        console.log("test");
      },
      handleSelect1(key){
        if(key === "navigator"){
          this.isCollapse = !this.isCollapse;
        }
        if(this.isCollapse){
          this.mainContainer = '64px';
          this.contentShow = false;
          let self = this;
          setTimeout(function(){
            self.contentShow = true;
          },300);
        }else{
          this.mainContainer = '200px';
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
    background-color: rgb(24, 32, 40);
  }

  body .el-menu {
    border-right: 0;
  }

  h1, h2, h3{
    color: white !important;
  }

  .el-menu-item-group .el-menu-item-group__title{
    display: none;
  }

  .el-menu .el-input input{
    border-radius: 9px;
  }

  .el-menu-item-group li.el-menu-item{
    height: 44px;
    line-height: 44px;
    font-size: 12px;
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
    background-color: rgb(24, 32, 40);
    z-index: 1;
    position:absolute;
    left: 0;
    top: 60px;
    width: 100%;
    overflow: hidden;
  }

  *{
    box-sizing: border-box;
  }

  .globalMenu ul.uk-list li:hover{
    color: rgb(255, 208, 75);
    cursor: pointer;
  }

  .globalMenu ul.uk-list li{
    font-size: 12px;
  }

  .globalMenu ul.uk-list li.globalMenuHeader{
    font-size: 14px;
    color: white;
    cursor: text;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }

  .el-menu-item [class^=fa] {
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 14px;
    vertical-align: middle;
  }

  .container{
    /*background-color: rgb(24, 32, 40);*/
    padding: 20px;
  }

  /*.container *{*/
    /*color: lightgrey;*/
    /*background-color: rgb(24, 32, 40);*/
  /*}*/

  /*.container .el-button:hover{*/
    /*color: black;*/
    /*background-color: #ecf5ff;*/
  /*}*/

  /*.container .el-button:hover span{*/
    /*color: black;*/
    /*background-color: #ecf5ff;*/
  /*}*/

  .row-grid::after{
    clear: none !important;
  }

</style>
