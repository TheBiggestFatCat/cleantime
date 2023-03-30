<template>
  <div class="backup-com">
    <div class="video-look">
      <div class="videos" v-for="i in video" :key="i.message">
        <div class="video-bar">
          <span>选择备份</span>
        </div>
        <video src="@/assets/video/example.mp4" autoplay="autoplay" controls="controls" poster="@/assets/video/cant_play.svg"></video>
      </div>
    </div>
    <div class="btn">
      <button :class="selecting?'download2':'download1'">下载备份</button>
    </div>
    <div class="backup-main">
      <div class="backup-title">
        <input type="checkbox" name="" id="" :checked="allChecked" @click="allCheck();select()">
        <span>备份文件</span>
        <span>备份日期</span>
      </div>
      <div class="backup-detail" v-for="(i, index) of backupData" :key="i.message">
        <input type="checkbox" name="" id="" :checked="i.checked?'checked':''" @click="checked(index);select()">
        <span>{{i.name}}</span>
        <span>{{i.date}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: [
        {
          videoUrl: require('@/assets/video/example.mp4'),
          title: '房间一'
        },
      ],
      backupData: [
        {
          name: '备份名称1',
          date: '2022 - 06 - 21',
          checked: false
        },
        {
          name: '备份名称2',
          date: '2022 - 06 - 22',
          checked: false
        },
        {
          name: '备份名称3',
          date: '2022 - 06 - 23',
          checked: false
        },
      ],
      selecting: false,
      allChecked: false
    }
  },
  methods: {
    checked(index) {
      this.backupData[index].checked = !this.backupData[index].checked
      for (let i of this.backupData) {
        if (!i.checked) {
          this.allChecked = false
          return
        }
      }
      this.allChecked = true
    },
    allCheck() {
      for (let i of this.backupData) {
        if (!i.checked) {
          this.allChecked = true
          break
        }
        this.allChecked  = false
      }
      if (!this.allChecked) {
        for (let i of this.backupData) {
          i.checked = ''
        }
      } else {
        for (let i of this.backupData) {
          i.checked = 'checked'
        }        
      }
    },
    select() {
      for (let i of this.backupData) {
        if (i.checked) {
          this.selecting = true
          return
        }
      }
      this.selecting = false
    }
  }
}
</script>

<style scoped>
  .backup-com {
    position: absolute;
    left: 300px;
    top: 70px;
    width: calc(100vw - 300px);
    height: 3000px;
    font-family: 'pingfangSC';
    padding: 20px 40px 0 40px;
    background-color: #F5F5F5;
  }

  .video-look {
    width: 100%;
  }

  .videos {
    margin: 0px 80px 50px 0;
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

  .btn {
    width: 100%;
  }

  .btn > button {
    width: 100px;
    height: 34px;
    float: right;
    position: relative;
    top: -40px;
    right: 40px;
    /* position: absolute; */
    /* right: 100px;
    bottom: 54px; */
    border-radius: 4px;
    transition: all 0.2s;
  }

  .download1 {
    background-color: none;
    color: #393E48;
    border: 1px solid #393E48;
  }

  .download2 {
    background-color: #393E48;
    color: rgb(239, 239, 239);
    border: none;
  }

  .download2:hover {
    background-color: rgb(20, 21, 25);
    cursor: pointer;
  }

  .backup-title {
    position: relative;
    margin-top: 80px;
    margin-bottom: 20px;
    width: calc(100vw - 380px);
    height: 66px;
    background-color: #fff;
    line-height: 66px;
    color: #6B6F7B;
  }

  .backup-title > input {
    margin-left: 30px;
  }

  .backup-title > span:nth-of-type(1) {
    margin-left: 60px;
  }

  .backup-title > span:nth-of-type(2) {
    position: absolute;
    right: 100px;
  }

  .backup-detail {
    position: relative;
    width: calc(100vw - 380px);
    height: 66px;
    background-color: #fff;
    line-height: 66px;
  }

  .backup-detail > input {
    margin-left: 30px;
  }

  .backup-detail > span:nth-of-type(1) {
    margin-left: 60px;
  }

  .backup-detail > span:nth-of-type(2) {
    position: absolute;
    right: 100px;
  }

  /* input[type='checkbox'] {
    border: 1px solid #ccc;
  } */
    input[type="checkbox"] {
      width: 16px;
      height: 16px;
      display: inline-block;
      text-align: center;
      line-height: 18px;
      position: relative;
      appearance: none;
    }

    input[type="checkbox"]::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background: #fff;
      width: 100%;
      height: 100%;
      border: 2px solid #d9d9d9;
      border-radius: 4px;
    }

    input[type="checkbox"]:checked::before {
      content: "\2713";
      background-color: rgb(50, 50, 50);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      border: 2px solid rgb(50, 50, 50);
      border-radius:4px;
      color: rgb(255, 255, 255);
      font-size: 20px;
      font-weight: bold;
    }
</style>