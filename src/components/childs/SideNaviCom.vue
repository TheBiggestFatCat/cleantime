<template>
  <div class="side-navi">
    <div class="head-img">
      <img src="@/assets/main/UserCircle.png" alt="">
    </div>
    <h2>{{manage?'测试房间组':'场景列表'}}</h2>
    <div v-show="!manage" class="scene" v-for="(i,index) in scenes" :key="i.message" @click="changeScene(i, index)" :style="{backgroundColor: (index+1)==nowScene?'#B5BAC5':'#393E48'}">
      <img :src="(index+1)==nowScene?i.img2:i.img1" alt="">
      <span  :style="{color: (index+1)==nowScene?'#393E48':'#FFFFFF', fontWeight: (index+1)==nowScene?600:500}">{{i.text}}</span>
    </div>

    <div v-show="manage" class="scene" v-for="(i,index) in manageMode" :key="i.message" @click="changeScene(i, index)" :style="{backgroundColor: (index+1)==nowScene?'#B5BAC5':'#393E48'}">
      <img :src="(index+1)==nowScene?i.img2:i.img1" alt="">
      <span  :style="{color: (index+1)==nowScene?'#393E48':'#FFFFFF', fontWeight: (index+1)==nowScene?600:500}">{{i.text}}</span>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main'
export default {
  data() {
    return {
      scenes: [
        {
          img1: require('@/assets/main/Presentation.svg'),
          img2: require('@/assets/main/Presentation_black.svg'),
          text: '场景一',
          url: 'no'
        },
        {
          img1: require('@/assets/main/Airplay.svg'),
          img2: require('@/assets/main/Airplay_black.svg'),
          text: '场景二',
          url: 'no'
        },
        {
          img1: require('@/assets/main/PresentationChart.svg'),
          img2: require('@/assets/main/PresentationChart_black.svg'),
          text: '场景三',
          url: 'no'
        },
        {
          img1: require('@/assets/main/Presentation.svg'),
          img2: require('@/assets/main/Presentation_black.svg'),
          text: '场景四',
          url: 'no'
        },
        {
          img1: require('@/assets/main/Airplay.svg'),
          img2: require('@/assets/main/Airplay_black.svg'),
          text: '场景五',
          url: 'no'
        },
      ],
      manageMode: [
        {
          img1: require('@/assets/main/side/side1_1.svg'),
          img2: require('@/assets/main/side/side1_2.svg'),
          text: '房间管理',
          url: '/main/roomsview'
        },
        {
          img1: require('@/assets/main/side/side2_1.svg'),
          img2: require('@/assets/main/side/side2_2.svg'),
          text: '场景管理',
          url: '/main/manage'
        },
        {
          img1: require('@/assets/main/side/side3_1.svg'),
          img2: require('@/assets/main/side/side3_2.svg'),
          text: '用户管理',
          url: '/main/manage2'
        },
        {
          img1: require('@/assets/main/side/side4_1.svg'),
          img2: require('@/assets/main/side/side4_2.svg'),
          text: '日志管理',
          url: '/main/manage3'
        },
      ],
      // 目前处在场景
      nowScene: 1,
      manage: false
    }
  },
  methods: {
    changeScene(i, index) {
      let room = index + 1
      this.nowScene = room
      if (i.url != 'no') {
        this.$router.push(i.url)
      }
    }
  },
  mounted() {
    eventBus.$on('switch', () => {
      this.manage = !this.manage
    })
    if (this.$route.params.scene) {
      this.nowScene = this.$route.params.scene
    }
  }
}
</script>

<style>
  .side-navi {
    z-index: 10;
    position: fixed;
    top: 70px;
    width: 300px;
    height: calc(100vh - 70px);
    background-color: #393E48;
    font-family: 'pingfangSC';
    color: rgb(249, 249, 249);
  }

  .head-img {
    height: 220px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    position: relative;
    left: 30px;
    font-size: 14px;
    font-weight: 300;
  }

  .scene {
    position: relative;
    left: 30px;
    width: 230px;
    height: 54px;
    margin-top: 20px;
    padding: 14px 12px 14px 18px;
    background-color: rgb(199, 200, 203);
    border-radius: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .scene img {
    margin-right: 30px;
  }
</style>