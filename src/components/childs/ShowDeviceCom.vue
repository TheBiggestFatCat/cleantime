<template>
  <div class="show-device">
    <div class="top">
      <div>
        <img :src="scenes[0].img" alt=""><span>场景一</span>
      </div>
      <div class="drop-down">
        <span>所有房间</span>
        <img @click="selecting = !selecting" src="@/assets/main/select.svg" alt="" style="position: relative; left: 6px; width: 14px; cursor: pointer">
      </div>
      <div class="hide" v-show="selecting">
        <div v-for="i in roomList" :key="i.message"><span>{{i.room}}</span></div>
      </div>
    </div>
    <div class="main" @click="selecting = false" @mouseup="upBtn">
      <div class="video-box">
        <div class="videos" v-for="i in video" :key="i.message">
          <div class="video-bar">
            <span>{{i.title?'正在播放（'+i.title+'）':'离线'}}</span>
          </div>
          <video src="@/assets/video/example.mp4" autoplay="autoplay" controls="controls" poster="@/assets/video/cant_play.svg"></video>
        </div>
      </div>
      <div class="mid-btn">
        <button :id="editMode?'btnb':'btna'" @click="edit()">{{editMode?'完成':'编辑'}}</button>
      </div>
      <div class="adjust-box">
        <div class="adjust" @mousemove="moveBtn($event, (index + 1))" v-for="(j, index) in roomList" :key="j.message">
          <div>
            <span>位置{{index + 1}}（{{j.room}}）</span>
          </div>
          <div>
            <img src="@/assets/main/lines2.svg" alt="">
            <img src="@/assets/main/line.svg" alt="">
            <img src="@/assets/main/lines1.svg" alt="">
          </div>
          <!-- 控制按钮 -->
          <div :id="'ctrlBtn' + (index + 1)" @mousedown="downBtn()" @mouseup="upBtn()">
          </div>
          <div @click="openBtn(index)" class="open-btn">
            <div :id="'openBtn' + index"></div>
            <img src="@/assets/main/list.svg" alt="" v-show="editMode">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scenes: [
        {
          img: require('@/assets/main/Coffee.svg'),
          rooms: 11
        },
        {
          img: require('@/assets/main/Airplay.svg'),
        },
        {
          img: require('@/assets/main/PresentationChart.svg'),
        },
        {
          img: require('@/assets/main/Presentation.svg'),
        },
        {
          img: require('@/assets/main/Airplay.svg'),
        },
      ],
      roomList: [
        {
          room: '房间一',
          location: 4
        },
        {
          room: '房间二',
          location: 4
        },
        {
          room: '房间三',
          location: 4
        },
        {
          room: '房间四',
          location: 4
        },
        {
          room: '房间四',
          location: 4
        },
        {
          room: '房间四',
          location: 4
        },
        {
          room: '房间四',
          location: 4
        },
        {
          room: '房间四',
          location: 4
        },
        {
          room: '房间四',
          location: 4
        },
      ],
      selecting: false,
      video: [
        {
          videoUrl: require('@/assets/video/example.mp4'),
          title: '房间一'
        },
        {
          videoUrl: require('@/assets/video/example.mp4'),
          title: '房间二'
        },
      ],
      moving: false,
      editMode: false
    }
  },
  methods: {
    downBtn() {
      this.moving = true;
    },
    moveBtn(e, index) {
      if (this.moving) {
        let btn = document.getElementById("ctrlBtn" + index)
        let box = document.getElementById("ctrlBtn" + index).offsetParent
        const top = e.clientY - box.getBoundingClientRect().top - 22
        if (top < 296 && top > 80) {
          btn.style.top = top + 'px'
        }
        // 90 306
      }
    },
    upBtn() {
      this.moving = false
    },
    openBtn(index) {
      let btn = document.getElementById("openBtn" + index)
      let bg = btn.offsetParent
      if (btn.offsetLeft == 4) {
        btn.style.left = '34px'
        bg.style.backgroundColor = 'rgb(57, 168, 79)'
      } else {
        btn.style.left = '4px'
        bg.style.backgroundColor = 'rgb(130, 130, 130)'
      }
    },
    edit() {
      this.editMode = !this.editMode
      let btnList = document.getElementsByClassName("open-btn")
      if (this.editMode) {
        for (let i of btnList) {
          i.style.bottom = '38px'
        }
      } else {
        for (let i of btnList) {
          i.style.bottom = '28px'
        }
      }
    }
  }
}
</script>

<style scoped>
  .show-device {
    position: relative;
    top: 70px;
    left: 300px;
    width: calc(100% - 300px);
    height: 1500px;
    background-color: #ccc;
    font-family: 'pingfangSC';
  }

  .top {
    position: fixed;
    display: flex;
    flex-flow: row nowrap;
    justify-content: left;
    top: 70px;
    left: 300px;
    width: calc(100% - 300px);
    height: 64px;
    background-color: #fff;
    z-index: 2;
  }

  .top > div:nth-of-type(1) {
    margin-top: 8px;
    margin-left: 50px;
    height: 48px;
    width: 110px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(239, 239, 239);
  }

  .top > div:nth-of-type(2) {
    margin-top: 8px;
    height: 48px;
    width: 110px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    background-color: rgb(239, 239, 239);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hide {
    position: relative;
    top: 56px;
    right: 110px;
    width: 110px;
    text-align: center;
  }

  .hide > div {
    line-height: 48px;
    height: 48px;
    transition: background-color 0.2s;
    background-color: rgb(239, 239, 239);
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }

  .hide > div:hover{
    background-color: rgb(221, 221, 221);
  }

  .main {
    position: relative;
    padding: 20px 60px 0 60px;
    width: 100%;
    height: 1500px;
    background-color: rgb(245, 245, 245);
    font-family: 'pingfangSC';
    user-select: none;
  }

  .video-box {
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
    position: relative;
    width: 100%;
    top: 20px;
  }

  .videos {
    margin: 50px 80px 50px 0;
    width: 400px;
  }

  .video-bar {
    width: 400px;
    height: 50px;
    background-color: #393E48;
    color: #fff;
    font-weight: 200;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
  }

  video {
    width: 400px;
    height: 220px;
    object-fit: fill;
    background-color: #000;
  }

  .mid-btn {
    position: relative;
    width: 100%;
    height: 60px;
  }

  .mid-btn > button {
    width: 100px;
    height: 34px;
    position: absolute;
    right: 100px;
    bottom: 54px;
    border-radius: 4px;
    transition: all 0.2s;
  }

  #btna {
    background-color: #393E48;
    color: rgb(239, 239, 239);
    border: none;
  }

  #btnb {
    background-color: none;
    color: rgb(20, 21, 25);
    border: 1px solid rgb(20, 21, 25);
  }

  #btna:hover {
    background-color: rgb(20, 21, 25);
  }

  #btnb:hover {
    background-color: #393E48;
    color: rgb(239, 239, 239);
  }

  .adjust-box {
    height: 1000px;
    width: calc(100vw - 420px);
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
  }

  .adjust {
    position: relative;
    width: 180px;
    height: 400px;
    background-color: #fff;
    border: 1px solid #ccc;
  }

  .adjust > div:nth-of-type(1) {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    text-align: center;
    line-height: 60px;
  }

  .adjust > div:nth-of-type(1) span {
    padding: 4px;
  }

  .adjust > div:nth-of-type(2) {
    width: 100%;
    height: 340px;
    position: relative;
    text-align: center;
  }

  .adjust > div:nth-of-type(2) > img:nth-of-type(2n-1) {
    position: relative;
    top: 28px;
  }

  .adjust > div:nth-of-type(2) > img:nth-of-type(2) {
    position: relative;
    top: 32px;
    margin: 0 2px;
  }

  .adjust > div:nth-of-type(3) {
    position: absolute;
    width: 35px; 
    height: 34px;
    left: 71px;
    top: 100px;
    background-color: #393E48;
    border-radius: 10px;
  }

  .adjust > div:nth-of-type(3):hover {
    background-color: #202228;
  }

  .open-btn {
    position: absolute;
    bottom: 28px;
    left: 56px;
    width: 64px;
    height: 32px;
    background-color: rgb(130, 130, 130);
    border-radius: 8px;
    transition: all 0.2s;
  }

  .open-btn > div {
    position: absolute;
    bottom: 3px;
    left: 4px;
    width: 26px;
    height: 26px;
    background-color: rgb(255, 255, 255);
    border-radius: 6px;
    transition: all 0.2s;
  }

  .open-btn > img {
    position: absolute;
    bottom: -32px;
    left: 4px;
  }
</style>