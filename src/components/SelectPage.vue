<template>
  <div class="select">
    <SelectHeaderCom/>
    <div class="select-box">
      <div class="cards" v-for="(i, index) of cardsData" :key="i.message" @mouseover="enterCard(index)" @mouseout="leaveCard(index)" @click="clickCard(i.path)">
        <h3>{{i.title}}</h3>
        <h4>{{i.english}}</h4>
      </div>
    </div>
    <div class="footer">
      <span>网站备案号：20102040134</span>
    </div>
  </div>
</template>

<script>
import SelectHeaderCom from '../components/childs/SelectHeaderCom.vue';
export default {
  data() {
    return {
      cardsData: [
        {
          title: '中央会议室',
          english: 'Meeting Room',
          path: 'rooms'
        },
        {
          title: '小会议厅',
          english: 'Small Room',
          path: 'rooms'
        },
        {
          title: '咖啡厅',
          english: 'Cafe Bar',
          path: 'rooms'
        },
        {
          title: '教室',
          english: 'Classroom',
          path: 'rooms'
        },
        {
          title: '健身房',
          english: 'Gym',
          path: 'rooms'
        },
        {
          title: '中央大厅',
          english: 'Center Hall',
          path: 'rooms'
        },
      ]
    }
  },
  methods: {
    enterCard(i) {
      let card = document.getElementsByClassName('cards')[i]
      card.style.width = '350px'
      card.style.height = '350px'
      card.style.fontSize = '32px'
      card.style.color = 'rgb(35, 35, 35)'
      try {
        let brother1 = document.getElementsByClassName('cards')[i - 1]
        let brother2 = document.getElementsByClassName('cards')[i + 1]
        brother1.style.width = '244px'
        brother1.style.height = '267px'
        brother1.style.fontSize = '24px'
        brother2.style.width = '244px'
        brother2.style.height = '267px'
        brother2.style.fontSize = '24px'
      } catch {
        console.log();
      }
    },
    leaveCard(i) {
      let card = document.getElementsByClassName('cards')[i]
      card.style.width = '210px'
      card.style.height = '220px'
      card.style.fontSize = '20px'
      card.style.color = 'rgb(116, 116, 116)'
      try {
        let brother1 = document.getElementsByClassName('cards')[i - 1]
        let brother2 = document.getElementsByClassName('cards')[i + 1]
        brother1.style.width = '210px'
        brother1.style.height = '220px'
        brother1.style.fontSize = '20px'
        brother2.style.width = '210px'
        brother2.style.height = '220px'
        brother2.style.fontSize = '20px'
      } catch {
        console.log();
      }
    },
    clickCard(p) {
      this.$router.push({
        path: '/main/roomsview'
      })
    }
  },
  components: {
    SelectHeaderCom,
  }
}
</script>

<style scoped>
  .select {
    font-family: 'pingfangSC';
  }

  .select-box {
    position: relative;
    /* left: -10%; */
    position: absolute;
    margin: 0 auto;
    display: flex;
    flex-flow: nowrap row;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
    background-image: url('@/assets/select/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .select-box > div {
    width: 210px;
    height: 220px;
    background-image: url("@/assets/select/card_bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 0.3s;
  }

  .cards {
    margin: 0px 10px 0 10px;
    display:flex;
    flex-flow: nowrap column;
    align-items: center;
    justify-content: center;
    color: rgb(116, 116, 116);
    font-size: 20px;
    cursor: pointer;
  }

  .footer {
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;
  }
</style>