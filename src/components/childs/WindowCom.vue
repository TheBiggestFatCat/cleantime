<template>
  <div class="window-com">
    <div class="mask"></div>
    <div class="window">
      <div class="window-header1"></div>
      <div class="window-body1">
        <div class="input-box">
          <p>添加房间</p>
          <div class="input1">
            <input placeholder="房间名称" type="text">
          </div>
          <p>添加设备</p>
          <div class="input2">
            <input placeholder="设备名称" type="text">
          </div>
        </div>
        <div class="btn-box">
          <button @click="close()">取消</button>
          <button @click="close()">添加</button>
        </div>
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
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .window-com {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 20;
    background-color: rgba(19, 19, 19, 0.289);
    font-family: 'pingfangSC';
    color: #3e4148;
  }

  .window {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    /* margin: 0 auto; */
    height: 260px;
    width: 400px;
    background-color: rgb(239, 239, 239);
  }

  .window-body1 {
    width: 80%;
    margin: 0 auto;
  }

  p {
    font-size: 14px;
    margin: 14px 0 14px 0;
  }

  .input1, .input2 {
    position: relative;
    width: 100%;
    height: 36px;
    margin: 0 auto;
    background-color: #fff;
    line-height: 36px;
    border-radius: 4px;
    text-align: center;
  }

  .input1 input, .input2 input {
    border: none;
    outline: none;
    font-size: 16px;
    width: 80%;
    text-align: center;
  }

  .input1 input:focus, .input2 input:focus {
    border: none;
    outline: none;
  }

  input::-webkit-input-placeholder {
    color: #c3c3c3
  }

  input::-moz-placeholder {
    color: #c3c3c3
  }

  .btn-box {
    margin-top: 40px;
  }

  .btn-box > button:nth-of-type(1) {
    position: absolute;
    left: 40px;
    background-color: none;
    border: 1px solid #6B6F7B;
    color: #6B6F7B;
  }

  .btn-box > button:nth-of-type(2) {
    position: absolute;
    right: 40px;
    background-color: #4b4e52;
    border: none;
    color: #fff;
  }

  .btn-box > button {
    font-family: 'pingfangSC';
    border-radius: 4px;
    width: 72px;
    height: 32px;
    transition: all 0.1s;
    cursor: pointer;
  }
</style>