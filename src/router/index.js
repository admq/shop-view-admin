import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import GoodsManager from '@/components/GoodsManager'
import ShopManager from '@/components/ShopManager'
import SysConfigManager from '@/components/SysConfigManager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'ShopManager',
          name: 'ShopManager',
          component: ShopManager
        }, {
          path: 'GoodsManager',
          name: 'GoodsManager',
          component: GoodsManager
        }, {
          path: 'SysConfigManager',
          name: 'SysConfigManager',
          component: SysConfigManager
        }
      ]
    }
  ]
})
