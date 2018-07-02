<template>
  <div id="lottery-manager">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="开奖时间">
        <!--<el-input v-model="formInline.user" placeholder="昵称" size="mini"></el-input>-->
        <el-date-picker
          v-model="formInline.user"
          type="datetimerange"
          size="small"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          :default-time="['12:00:00']">
        </el-date-picker>
      </el-form-item>
      <!--<el-form-item label="手机号">
        <el-input v-model="formInline.tel" placeholder="手机号" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="等级">
        <el-select v-model="formInline.region" placeholder="等级" size="mini">
          <el-option label="1V" value="1"></el-option>
          <el-option label="2V" value="2"></el-option>
        </el-select>
      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" size="mini" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="tableData"
      stripe
      highlight-current-row
      size="small"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
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
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'lottery-manager',
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
  }
}
</script>

<style lang="scss" scoped>
#lottery-manager {
  text-align: left;
}
</style>
