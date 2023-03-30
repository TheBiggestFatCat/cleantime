<template>
  <div class="manage2-com">
    <div class="line1">
      <div class="input">
        <input type="text" placeholder="搜索">
        <img src="@/assets/main/search.svg" alt="">
      </div>
      <div class="btns">
        <button>取消全选</button>
        <button>删除场景</button>
        <button>添加场景</button>
      </div>
    </div>
    <div class="main">
      <div class="main-title">
        <div><input type="checkbox" name="" id=""></div>
        <div><span>用户名</span></div>
        <div><span>房间</span></div>
        <div><img src="@/assets/main/twoarrows.svg" alt=""></div>
      </div>
      <div class="main-body"></div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .manage2-com {
    position: absolute;
    left: 300px;
    top: 70px;
    width: calc(100vw - 300px);
    height: 3000px;
    font-family: 'pingfangSC';
    padding: 40px 40px 0 40px;
    background-color: #F5F5F5;
  }

  .line1 {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .input {
    position: relative;
    width: 300px;
    height: 36px;
    background-color: #fff;
    border-radius: 8px;
  }

  .input > input {
    position: relative;
    top: -2px;
    left: 20px;
    border: none;
    outline: none;
    font-size: 16px;
    width: 80%;
  }

  .input img {
    width: 26px;
    height: 26px;
    position: relative;
    top: 4px;
    left: 26px;
    cursor: pointer;
  }

  input::-webkit-input-placeholder {
    color: #b8b8b8
  }

  input::-moz-placeholder {
    color: #b8b8b8
  }

  .btns > button {
    width: 100px;
    margin-right: 10px;
    height: 34px;
    border-radius: 4px;
    transition: all 0.1s;    
  }

  .btns > button:not(:nth-of-type(3)) {
    background-color: none;
    color: rgb(20, 21, 25);
    border: 1px solid rgb(20, 21, 25);
  }

  .btns > button:nth-of-type(3) {
    background-color: #393E48;
    color: rgb(224, 223, 231);
    border: none;
  }

  .btns > button:nth-of-type(3):hover {
    background-color: rgb(20, 21, 25);
  }

  .btns > button:not(:nth-of-type(3)):hover {
    background-color: #393E48;
    color: rgb(239, 239, 239);
  }

  .main-title {
    position: relative;
    width: calc(100vw - 380px);
    margin-top: 50px;
    height: 66px;
    background-color: #fff;
    line-height: 66px;
    color: #6B6F7B;
  }

  .main-title > div {
    display: inline-block;
    text-align: center;
    /* height: 66px;
    line-height: 66px; */
  }

  .main-title > div:nth-of-type(1) {
    width: 6%;
  }

  .main-title > div:nth-of-type(2) {
    width: 14%;
  }

  .main-title > div:nth-of-type(3) {
    width: 70%;
  }

  .main-title > div:nth-of-type(4) {
    width: 10%;
  }

  .main-title > div:nth-of-type(4) img {
    position: relative;
    top: 6px;
    cursor: pointer;
  }

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
    transition: 0.1s;
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