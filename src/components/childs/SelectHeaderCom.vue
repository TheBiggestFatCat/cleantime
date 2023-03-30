<template>
  <div class="select-header-com">
    <div class="left"></div>
    <div class="right">
      <div class="room">
        <img src="@/assets/select/computer.svg" alt="">
        <router-link to="/main/roomsview"><span>房间管理</span></router-link>
      </div>
      <!-- 为什么这个会高一截呢 -->
      <div class="manage" style="position:relative;top:1px">
        <img src="@/assets/select/slider.svg" alt="">
        <router-link to="/main/manage"><span>系统管理</span></router-link>
      </div>
      <div class="logout">
        <img src="@/assets/select/log_out.svg" alt="">
        <router-link to="/login"><span>登出账号</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .select-header-com {
    position: fixed;
    width: 100%;
    padding-top: 26px;
    height: 80px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    font-family: 'pingfangSC';
    color: #616161;
    z-index: 2;
  }

  .left {
    margin-left: 34px;
    width: 175px;
    height: 34px;
    background-image: url('@/assets/select/logo4.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .right {
    width: 380px;
    height: 80px;
    margin-right: 42px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
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
</style>