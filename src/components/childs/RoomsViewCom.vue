<template>
  <div class="scene-com">
    <WindowCom v-show="showWindow" :manage="manage" @close="showWindow = false"></WindowCom>
    <div class="top">
      <div>
        <img src="@/assets/main/MapPinLine.svg" alt="">
        <span>房间</span>
      </div>
      <div>
        <img src="@/assets/main/Wrench.svg" alt="">
        <span>设备</span>
        <button @click="showWindow = true">添加</button>
        <button @click="showX = true">删除</button>
      </div>
    </div>
    <div class="rooms" v-for="(i, index) of roomData" :key="i.message">
      <div class="col1">
        <div @click="showDevice(index)" class="room-name">
          <span>{{i.roomName}}</span>
        </div>
      </div>
      <div class="devices">
        <div class="devices-detail" v-for="(j) of i.devices" :key='j.message'>
          <div @click="$router.push({
            path: 'room'
          })">
            <!-- <div><span>A设备</span></div> -->
            <div><span>{{j.deviceName}}</span></div>
            <div>{{j.lights}}-{{j.totalLightsNum}}</div>
            <div class="lights">
              <div class="dark-lights">
                <div class="dark-light" v-for="k of j.totalLightsNum" :key="k.message"></div>
              </div>
              <div class="light" v-for="k of j.lights" :key="k.message"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WindowCom from '@/components/childs/WindowCom.vue';
export default {
  data() {
    return {
      showWindow: false,
      manage: false,
      showX: false,
      roomData: [
        {
          roomName: '房间一',
          devices: [
            {
              deviceName: 'A设备',
              totalLightsNum: 8,
              lights: 7
            },
            {
              deviceName: 'B设备',
              totalLightsNum: 3,
              lights: 3
            },
            {
              deviceName: 'C设备',
              totalLightsNum: 5,
              lights: 5
            },
            {
              deviceName: 'E设备',
              totalLightsNum: 6,
              lights: 5
            },
            {
              deviceName: 'F设备',
              totalLightsNum: 8,
              lights: 8
            },
            {
              deviceName: 'G设备',
              totalLightsNum: 7,
              lights: 7
            },
            {
              deviceName: 'H设备',
              totalLightsNum: 8,
              lights: 8
            },
            {
              deviceName: 'I设备',
              totalLightsNum: 8,
              lights: 8
            },
          ]
        },
        {
          roomName: '房间二',
          devices: [
            {
              deviceName: 'A设备',
              totalLightsNum: 8,
              lights: 7
            },
            {
              deviceName: 'B设备',
              totalLightsNum: 3,
              lights: 3
            },
            {
              deviceName: 'C设备',
              totalLightsNum: 5,
              lights: 5
            },
            {
              deviceName: 'E设备',
              totalLightsNum: 6,
              lights: 5
            },
            {
              deviceName: 'F设备',
              totalLightsNum: 8,
              lights: 8
            },
            {
              deviceName: 'G设备',
              totalLightsNum: 7,
              lights: 7
            },
            {
              deviceName: 'H设备',
              totalLightsNum: 8,
              lights: 8
            },
            {
              deviceName: 'I设备',
              totalLightsNum: 8,
              lights: 8
            },
          ]
        },
        {
          roomName: '房间三',
          devices: [
            {
              deviceName: 'A设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'B设备',
              totalLightsNum: 3,
              lights: 3
            },
            {
              deviceName: 'C设备',
              totalLightsNum: 5,
              lights: 3
            },
            {
              deviceName: 'E设备',
              totalLightsNum: 6,
              lights: 3
            },
                        {
              deviceName: 'F设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'G设备',
              totalLightsNum: 7,
              lights: 3
            },
            {
              deviceName: 'H设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'I设备',
              totalLightsNum: 8,
              lights: 3
            },
          ]
        },
        {
          roomName: '房间四',
          devices: [
            {
              deviceName: 'A设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'B设备',
              totalLightsNum: 3,
              lights: 3
            },
            {
              deviceName: 'C设备',
              totalLightsNum: 5,
              lights: 3
            },
            {
              deviceName: 'E设备',
              totalLightsNum: 6,
              lights: 3
            },
                        {
              deviceName: 'F设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'G设备',
              totalLightsNum: 7,
              lights: 3
            },
            {
              deviceName: 'H设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'I设备',
              totalLightsNum: 8,
              lights: 3
            },
          ]
        },
        {
          roomName: '房间五',
          devices: [
            {
              deviceName: 'A设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'B设备',
              totalLightsNum: 3,
              lights: 3
            },
            {
              deviceName: 'C设备',
              totalLightsNum: 5,
              lights: 3
            },
            {
              deviceName: 'E设备',
              totalLightsNum: 6,
              lights: 3
            },
                        {
              deviceName: 'F设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'G设备',
              totalLightsNum: 7,
              lights: 3
            },
            {
              deviceName: 'H设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'I设备',
              totalLightsNum: 8,
              lights: 3
            },
          ]
        },
        {
          roomName: '房间六',
          devices: [
            {
              deviceName: 'A设备',
              totalLightsNum: 8,
              lights: 8
            },
            {
              deviceName: 'B设备',
              totalLightsNum: 3,
              lights: 3
            },
            {
              deviceName: 'C设备',
              totalLightsNum: 5,
              lights: 3
            },
            {
              deviceName: 'E设备',
              totalLightsNum: 6,
              lights: 6
            },
                        {
              deviceName: 'F设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'G设备',
              totalLightsNum: 7,
              lights: 3
            },
            {
              deviceName: 'H设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'I设备',
              totalLightsNum: 8,
              lights: 3
            },
          ]
        },
        {
          roomName: '房间七',
          devices: [
            {
              deviceName: 'A设备',
              totalLightsNum: 8,
              lights: 4
            },
            {
              deviceName: 'B设备',
              totalLightsNum: 3,
              lights: 3
            },
            {
              deviceName: 'C设备',
              totalLightsNum: 5,
              lights: 3
            },
            {
              deviceName: 'E设备',
              totalLightsNum: 6,
              lights: 3
            },
                        {
              deviceName: 'F设备',
              totalLightsNum: 8,
              lights: 7
            },
            {
              deviceName: 'G设备',
              totalLightsNum: 7,
              lights: 7
            },
            {
              deviceName: 'H设备',
              totalLightsNum: 8,
              lights: 7
            },
            {
              deviceName: 'I设备',
              totalLightsNum: 8,
              lights: 3
            },
          ]
        },
        {
          roomName: '房间八',
          devices: [
            {
              deviceName: 'A设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'B设备',
              totalLightsNum: 3,
              lights: 3
            },
            {
              deviceName: 'C设备',
              totalLightsNum: 5,
              lights: 5
            },
            {
              deviceName: 'E设备',
              totalLightsNum: 6,
              lights: 6
            },
                        {
              deviceName: 'F设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'G设备',
              totalLightsNum: 7,
              lights: 3
            },
            {
              deviceName: 'H设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'I设备',
              totalLightsNum: 8,
              lights: 3
            },
          ]
        },
        {
          roomName: '房间九',
          devices: [
            {
              deviceName: 'A设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'B设备',
              totalLightsNum: 3,
              lights: 3
            },
            {
              deviceName: 'C设备',
              totalLightsNum: 5,
              lights: 3
            },
            {
              deviceName: 'E设备',
              totalLightsNum: 6,
              lights: 3
            },
                        {
              deviceName: 'F设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'G设备',
              totalLightsNum: 7,
              lights: 3
            },
            {
              deviceName: 'H设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'I设备',
              totalLightsNum: 8,
              lights: 3
            },
          ]
        },
        {
          roomName: '房间十',
          devices: [
            {
              deviceName: 'A设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'B设备',
              totalLightsNum: 3,
              lights: 3
            },
            {
              deviceName: 'C设备',
              totalLightsNum: 5,
              lights: 3
            },
            {
              deviceName: 'E设备',
              totalLightsNum: 6,
              lights: 3
            },
                        {
              deviceName: 'F设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'G设备',
              totalLightsNum: 7,
              lights: 3
            },
            {
              deviceName: 'H设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'I设备',
              totalLightsNum: 8,
              lights: 3
            },
          ]
        },
        {
          roomName: '房间十一',
          devices: [
            {
              deviceName: 'A设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'B设备',
              totalLightsNum: 3,
              lights: 3
            },
            {
              deviceName: 'C设备',
              totalLightsNum: 5,
              lights: 3
            },
            {
              deviceName: 'E设备',
              totalLightsNum: 6,
              lights: 3
            },
                        {
              deviceName: 'F设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'G设备',
              totalLightsNum: 7,
              lights: 3
            },
            {
              deviceName: 'H设备',
              totalLightsNum: 8,
              lights: 3
            },
            {
              deviceName: 'I设备',
              totalLightsNum: 8,
              lights: 3
            },
          ]
        },
      ]
    }
  },
  mounted() {
  },
  methods: {
    showDevice(index) {
      this.$router.push({
        path: 'room',
        // query: {
        //   room: index + 1
        // }
      })
    }
  },
  components: {
    WindowCom
  }
}
</script>

<style scoped>
  .scene-com {
    position: absolute;
    left: 300px;
    top: 70px;
    width: calc(100vw - 300px);
    /* height: 3000px; */
    font-family: 'pingfangSC';
    color: #6B6F7B;
  }

  .top {
    position: fixed;
    z-index: 3;
    width: 100%;
    height: 60px;
    background-color: #F5F5F5;
  }

  .top > div {
    display: inline-block;
    height: 60px;
    line-height: 60px;
  }

  .top > div:nth-of-type(1) {
    width: 180px;
    text-align: center;
  }

  .top > div:nth-of-type(2) {
    position: relative;
    width: calc(100vw - 420px);
    text-align: center;
  }

  .top button {
    background-color: none;
    border: 1px solid #6B6F7B;
    font-family: 'pingfangSC';
    color: #6B6F7B;
    border-radius: 4px;
    width: 52px;
    height: 32px;
    transition: all 0.1s;
    cursor: pointer;
  }

  .top button:hover {
    background-color: #6B6F7B;
    color: #fff;
  }

  .top button:nth-of-type(1) {
    position: absolute;
    right: 220px;
    bottom: 14px;
  }

  .top button:nth-of-type(2) {
    position: absolute;
    right: 130px;
    bottom: 14px; 
  }

  .top img {
    position: relative;
    top: 4px;
    left: -8px;
  }

  .top + div {
    margin-top: 60px;
  }

  .rooms {
    display: flex;
    flex-flow: nowrap row;
    justify-content: left;
    z-index: -1;
    width: calc(100vw - 320px);
    height: 90px;
    border-bottom: 1px solid #ccc;
  }

  .rooms > div {
    flex-shrink: 0
  }

  .col1 {
    width: 180px;
    height: 100%;
  }

  .col1 > div {
    position: relative;
    top: 22px;
    margin: 0 auto;
    height: 46px;
    width: 90px;
    background-color: #EEEEEE;
    border-radius: 4px;
    line-height: 46px;
    color: rgb(40, 40, 40);
    text-align: center;
  }

  .room-name {
    transition: all 0.1s;
    cursor: pointer;
  }

  .room-name:hover {
    background-color: #ccc;
  }

  .devices {
    display: flex;
    flex-flow: nowrap row;
    justify-content: left;
    align-items: center;
  }

  .devices-detail {
    position: relative;
    display: flex;
    flex-flow: nowrap row;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 160px;
    border-left: 1px solid #ccc;
  }

  .devices-detail > div:hover {
    cursor: pointer;
  }

  .devices-detail > div:nth-of-type(1) {
    position: relative;
    width: 110px;
    height: 64px;
    border-radius: 4px;
    overflow: hidden;
    background-color: rgb(235, 235, 235);
  }

  .devices-detail > div:nth-of-type(1) > div:nth-of-type(1) {
    width: 70px;
    height: 26px;
    color: #fff;
    background-color: rgb(185, 185, 185);
    font-size: 12px;
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .devices-detail > div:nth-of-type(1) > div:nth-of-type(2) {
    position: absolute;
    width: 30px;
    height: 26px;
    font-size: 12px;
    right: 6px;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

 .lights {
    position: relative;
    margin: 0 auto;
    padding-top: 6px ;
    width: 90%;
    height: 40px;
    bottom: 0;
    left: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
  }

  .dark-lights {
    position: absolute;
    padding-top: 6px ;
    width: 100%;
    height: 40px;
    bottom: 0;
    left: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
  }

  .dark-light {
    z-index: 1;
    height: 10px;
    width: 10px;
    margin: 0 calc(12.5% - 5px) 0 calc(12.5% - 5px);
    background-color: #ccc;
    border-radius: 50%;
  } 

  .light {
    z-index: 2;
    height: 10px;
    width: 10px;
    margin: 0 calc(12.5% - 5px) 0 calc(12.5% - 5px);
    background-image: radial-gradient(rgb(248, 95, 95), rgb(239, 146, 146));
    border-radius: 50%;
  } 

</style>