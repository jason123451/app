<template>
    <el-container>
        <el-header>
                <div class="logo" :style="{width: this.isCollapse ? '64px' : '200px'}">
                    <img src="../assets/logo.png" alt="">
                </div>
                <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1" class="fr" @click="isCollapse = !isCollapse">{{!isCollapse ? '收缩面板': '展开面板'}}</el-menu-item>
                <el-menu-item index="3" class="fr" @click="$router.push({path:'/login'})">退出登录</el-menu-item>
                </el-menu>    
        </el-header>
        <el-container>
            <el-aside :style="{width: this.isCollapse ? '64px' : '200px'}">    
           <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      :collapse="isCollapse"
      active-text-color="#ffd04b">
        <el-menu-item index="1"  @click="$router.push({path:'/businessClassify'})">
        <i class="el-icon-tickets"></i>
        <span slot="title" >商品分类</span>

        <!-- <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>商品分类</span>
        </template> -->
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">订单列表</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-s-data"></i>
        <span slot="title">数据管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-s-custom"></i>
        <span slot="title">用户中心</span>
      </el-menu-item>
      <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">设置管理</span>
      </el-menu-item>
    </el-menu>
           
                 
    </el-aside>

          <el-main>
            <el-card>
               <router-view></router-view>
            </el-card>
             
          </el-main>

        </el-container>
    </el-container>
</template>

<script>
export default {
     data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        isCollapse :true
      };
    },
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key,keyPath) {
        console.log(key, keyPath)
      }
    }
}
</script>
<style scoped>

    .el-container {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        bottom: 0;
    }
    .el-header{
        padding: 0;
        z-index: 1000;
    }

    .el-header .fr {
        float: right;
    }

    .el-header .el-menu {
        border-bottom: none;
    }

    .el-aside {
        padding-top: 60px;
    }

    .el-main {
        padding-top: 80px;
    }
    .el-aside {
        background: #545c64;
    }


    .el-aside .el-menu {
        border-right: none;
    }

    .logo {
        position: fixed;
        width: 160px;
        height: 60px;
        z-index: 10001;
        text-align: center;
    }
    .logo img {
        
        height: 60px;
    }

    

</style>