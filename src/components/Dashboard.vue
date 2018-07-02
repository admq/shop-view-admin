<template>
  <div id="dashboard">
    <div id="header">
      <span class="title">小程序商家后台管理</span>
    </div>
    <el-row>
      <el-col :span="4">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo">
          <el-menu-item index="1" @click="jump('ShopManager')">
            <i class="el-icon-info"></i>
            <span slot="title">商家管理</span>
          </el-menu-item>
          <el-menu-item index="2" @click="jump('GoodsManager')">
            <i class="el-icon-search"></i>
            <span slot="title">商品管理</span>
          </el-menu-item>
          <el-menu-item index="4" @click="jump('SysConfigManager')">
            <i class="el-icon-setting"></i>
            <span slot="title">系统配置</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" class="content">
        <!--<el-tabs v-model="editableTabsValue" type="card" editable @edit="tabRemove" @click="tabClick">
          <el-tab-pane
            :key="item.name"
            v-for="(item) in editableTabs"
            :label="item.title"
            :name="item.name">
            {{item.content}}
          </el-tab-pane>
        </el-tabs>-->
        <!-- 主要内容区 -->
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      editableTabsValue: '1',
      editableTabs: [{
        title: '商家管理',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: '商品管理',
        name: '2',
        content: 'Tab 2 content'
      }, {
        title: '系统配置',
        name: '3',
        content: 'Tab 2 content'
      }]
    }
  },
  methods: {
    jump (name) {
      this.$router.push(name)
    },
    tabClick (a) {
      console.log(a)
    },
    tabRemove (targetName, action) {
      if (action === 'remove') {
        let tabs = this.editableTabs
        let activeName = this.editableTabsValue
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }
        this.editableTabsValue = activeName
        this.editableTabs = tabs.filter(tab => tab.name !== targetName)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#dashboard {
  height: 100vh;
  #header {
    text-align: left;
    height: 60px;
    line-height: 60px;
    padding: 0 4vw;
    background-color: #6e9767;
    .title {
      font-size: 1.5em;
      font-weight: 500;
      color: #f2f6ff;
    }
  }
  .content {
    /*overflow: hidden;*/
    padding: 15px 20px;
  }
}
</style>
