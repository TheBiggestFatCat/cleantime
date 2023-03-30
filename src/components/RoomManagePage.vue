<template>
  <div class="room-manage">
    <!-- <WindowCom/> -->
    <MainHeaderCom/>
    <SideNaviCom/>
    <router-view>
      <!-- <SceneCom/> -->
    </router-view>
  </div>
</template>

<script>
import MainHeaderCom from "@/components/childs/MainHeaderCom.vue";
import SideNaviCom from '@/components/childs/SideNaviCom.vue';

import WindowCom from '@/components/childs/WindowCom.vue';
export default {
  data() {
    return {
      
    }
  },
  methods: {

  },
  components: {
    MainHeaderCom,
    SideNaviCom,
    WindowCom
  }
}
</script>

<style>

</style>