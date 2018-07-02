<template>
  <div id="user-manager">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="昵称">
        <el-input v-model="formInline.user" placeholder="昵称" size="small"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="formInline.tel" placeholder="手机号" size="small"></el-input>
      </el-form-item>
      <el-form-item label="等级">
        <el-select v-model="formInline.region" placeholder="等级" size="small">
          <el-option label="1V" value="1"></el-option>
          <el-option label="2V" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="tableData"
      stripe
      size="small"
      style="width: 100%">
      <el-table-column
        show-overflow-tooltip
        prop="id"
        label="商家ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="商家名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="province"
        label="所在省份"
        width="180">
      </el-table-column>
      <el-table-column
        prop="city"
        label="所在城市"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="180">
      </el-table-column>
      <el-table-column
        prop="registerTel"
        label="注册电话"
        width="180">
      </el-table-column>
      <!-- <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="diamon"
        label="钻石数"
        width="120">
      </el-table-column>
      <el-table-column
        prop="money"
        label="账户余额"
        width="120">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱地址"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'user-manager',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        diamon: '1000',
        money: '2342',
        email: '98237434@173.com',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        diamon: '1000',
        money: '2342',
        email: '98237434@173.com',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        diamon: '1000',
        money: '2342',
        email: '98237434@173.com',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        diamon: '1000',
        money: '2342',
        email: '98237434@173.com',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        diamon: '1000',
        money: '2342',
        email: '98237434@173.com',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        diamon: '1000',
        money: '2342',
        email: '98237434@173.com',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        diamon: '1000',
        money: '2342',
        email: '98237434@173.com',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        diamon: '1000',
        money: '2342',
        email: '98237434@173.com',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        diamon: '1000',
        money: '2342',
        email: '98237434@173.com',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        diamon: '1000',
        money: '2342',
        email: '98237434@173.com',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        diamon: '1000',
        money: '2342',
        email: '98237434@173.com',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        diamon: '1000',
        money: '2342',
        email: '98237434@173.com',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      formInline: {
        user: '',
        tel: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  },
  mounted () {
    this.axios.get('/shop/list').then(res => {
      console.log(res)
      this.tableData = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
#user-manager {
  text-align: left;
}
</style>
