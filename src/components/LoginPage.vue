<template>
  <div class="login-page">
    <div class="left">
      <img src="@/assets/login/boat.png" alt="">
    </div>
    <div class="right">
      <div class="logo">
        <img class="logo1" src="@/assets/login/logo1.png" alt="">
        <img class="logo2" src="@/assets/login/logo2.png" alt="">
        <img class="logo3" src="@/assets/login/logo3.png" alt="">
      </div>
      <h3>综合运维管理平台</h3>
      <div class="input1">
        <input placeholder="用户名" type="text">
      </div>
      <div class="input2">
        <input placeholder="密码" type="password">
      </div>
      <div class="line5">
        <input type="radio">
        <span>记住密码</span>
        <a href="javascript:;">修改密码</a>
      </div>
      <div class="line6">
        <button @click="login">登录</button>
      </div>
      <div class="line7">
        <span>使用 Chrome 浏览器以快速访问</span>
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
    login() {
      this.$router.push({
        path: '/select'
      })
    }
  }
}
</script>

<style scoped>
  .login-page {
    width: 100vw;
    height: 100vh;
    background-image: url('@/assets/login/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-flow: nowrap row;
    justify-content: center;
    align-items: center;
    font-family: 'pingfangSC';
  }

  .left {
    position: relative;
    left: -5vw;
  }

  .right {
    position: relative;
    top: -40px;
    height: 580px;
    width: 450px;
    background-color: #97979745;
    text-align: center;
  }

  .right h3 {
    position: relative;
    top: 84px;
    font-weight: 500;
    font-style: normal;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.12em;
    color: #414141;
  }

  .logo {
    margin: 0 auto;
    position: relative;
    width: 210px;
    height: 42px;
    top: 62px;
  }

  .logo img {
    position: absolute;
  }

  .logo1 {
    left: 0px;
  }

  .logo2 {
    left: 38px;
  }

  .logo3 {
    left: 134px;
  }

  .input1, .input2 {
    position: relative;
    width: 330px;
    height: 50px;
    margin: 0 auto;
    background-color: #fff;
    line-height: 50px;
  }

  .input1 {
    top: 130px;
  }

  .input2 {
    top: 170px;
  }

  .input1 input, .input2 input {
    border: none;
    outline: none;
    font-size: 18px;
    width: 280px;
  }

  .input1 input:focus, .input2 input:focus {
    border: none;
    outline: none;
  }

  input::-webkit-input-placeholder {
    color: #949494
  }

  input::-moz-placeholder {
    color: #949494
  }

  .line5 {
    position: relative;
    top: 200px;
    font-size: 14px;
    color: #8e8e8e;
  }

  .line5 input[type='radio'] {
    position: relative;
    left: -90px;
    width: 16px;
    height: 16px;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    margin: 0;
    vertical-align: text-bottom;
    margin-right: 0.1rem;
  }

  .line5 input::after {
    display: block;
    content: "";
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    border: 2px solid #fff;
  }

  .line5 input:checked::after {
    width: 10px;
    height: 10px;
    background: #C41E1E;
  }

  .line5 span {
    position: relative;
    left: -90px;
    top: 1px;
  }

  .line5 a {
    position: relative;
    left: 90px;
    top: 1px;
    color: #8e8e8e;
    text-decoration: none;
  }

  .line6 {
    position: relative;
    top: 220px;
  }
  
  .line6 button {
    width: 330px;
    height: 50px;
    background-color: #C41E1E;
    border: none;
    color: #fff;
    font-size: 18px;
    letter-spacing: 0.12em;
  }

  .line7 {
    position: relative;
    top: 300px;
    color: #6A6A6A;
    font-size: 14px;
  }
</style>