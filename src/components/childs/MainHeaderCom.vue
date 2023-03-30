<template>
  <div class="main-header">
    <div class="logo"></div>
    <h3 v-show="!manage & $route.path != '/main/room'">设备状态巡检</h3>
    <div v-show="$route.path == '/main/room'" class="title-box">
      <div :class="($route.path == '/main/backup')?'no':'yes'"><router-link to="/main/room"><span>设备控制</span></router-link></div>
      <div :class="($route.path == '/main/backup')?'yes':'no'"><router-link to="/main/backup"><span>备份查看</span></router-link></div>
    </div>
    <div class="right-box">
      <div class="home">
        <img src="@/assets/main/home.svg" alt="">
        <router-link to="/select"><span>首页</span></router-link>
      </div>
      <div class="sys-manage">
        <img src="@/assets/main/slider.svg" alt="">
        <router-link to="/main/roomsview"><span @click="switchMode()">{{manage?'房间管理':'系统管理'}}</span></router-link>
      </div>
      <div class="logout">
        <img src="@/assets/main/log_out.svg" alt="">
        <router-link to="/login"><span>登出账号</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main'
export default {
  data() {
    return {
      manage: false
    }
  },
  methods: {
    switchMode() {
      this.manage = !this.manage
      eventBus.$emit('switch')
    }
  },
  mounted() {
    console.log(this.$route.path);
  }
}
</script>

<style scoped>
  .main-header {
    z-index: 10;
    position: fixed;
    width: 100%;
    height: 70px;
    background-color: #262B37;
    text-align: center;
    color: rgb(229, 229, 229);
    font-family: 'pingfangSC';
  }

  h3 {
    position: relative;
    top: 22px;
    font-size: 22px;
    font-weight: 400;
  }

  .logo {
    position: absolute;
    top: 18px;
    left: 34px;
    width: 176px;
    height: 34px;
    background-image: url('@/assets/main/logo.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .right-box {
    position: absolute;
    right: 30px;
    top: 0;
    width: 400px;
    height: 70px;
    display: flex;
    flex-flow: nowrap row;
    align-items: center;
    justify-content: space-between;
  }

  .right-box > div {
    margin-left: 20px;
    width: 100px;
  }

  .right-box img {
    position: relative;
    top: 5px;
    right: 8px;
  }

  a {
    text-decoration: none;
    font-family: 'pingfangSC';
    color: rgb(229, 229, 229);
  }

  .right > div {
    width: 100px;
    text-align: center;
  }

  .right img {
    position: relative;
    top: 5px;
    right: 8px;
  }

  .right a {
    text-decoration: none;
    font-family: 'pingfangSC';
    color: #616161;
  }

  .title-box {
    /* width: 400px; */
    height: 70px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }

  .title-box div {
    margin: 0 30px 0 30px;
    width: 120px;
    height: 36px;
    line-height: 36px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.1s;
  }

  .yes {
    background: rgb(185, 186, 206);
    color: #000;
  }

  .no:hover {
    background: rgb(185, 186, 206);
    color: #000;
  }
</style>