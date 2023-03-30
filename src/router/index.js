import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//配置路由

export default new VueRouter({
  routes: [
    {
      path: '/login',
      component: () => import ('@/components/LoginPage'),
    },
    {
      path: '/select',
      component: () => import ('@/components/SelectPage')
    },
    {
      path: '/main',
      component: () => import ('@/components/RoomManagePage'),
      children: [
        {
          // 具体设备调节
          path: 'room',
          component: () => import ('@/components/childs/ShowDeviceCom'),
        },
        {
          // 展示房间和设备概况
          path: 'roomsview',
          component: () => import ('@/components/childs/RoomsViewCom'),
        },
        {
          // 备份
          path: 'backup',
          component: () => import ('@/components/childs/BackupCom')
        },
        {
          // 管理
          path: 'manage',
          component: () => import ('@/components/childs/ManageCom')
        },
        {
          path: 'manage2',
          component: () => import ('@/components/childs/Manage2Com')
        },
        {
          path: 'manage3',
          component: () => import ('@/components/childs/Manage3Com')
        }
      ]
    },
    //重新定向
    {
      path: '*',
      redirect: '/login'
    }
  ]
});