<template>
  <div id="sys-config-manager">
    <el-row>
      <el-col :span="10">

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>系统配置</span>
          </div>
          <el-form ref="form" :model="form" label-width="130px" size="small">
            <el-form-item label="每天游戏开始时间">
              <!--<el-input v-model="form.name"></el-input>-->
              <el-time-select
                v-model="form.name"
                :picker-options="{
                  start: '00:00',
                  step: '00:15',
                  end: '23:45'
                }"
                placeholder="选择时间">
              </el-time-select>
            </el-form-item>
            <el-form-item label="每天游戏结束时间">
              <el-time-select
                v-model="form.name"
                :picker-options="{
                  start: '00:00',
                  step: '00:15',
                  end: '23:45'
                }"
                placeholder="选择时间">
              </el-time-select>
            </el-form-item>
            <el-form-item label="开奖周期">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="半小时" value="0.5"></el-option>
                <el-option label="1小时" value="1"></el-option>
                <el-option label="2小时" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="下注时长">
              <el-input v-model="form.region">
                <template slot="append">分钟</template>
              </el-input>
            </el-form-item>
            <el-form-item label="开奖时长">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="半小时" value="0.5"></el-option>
                <el-option label="1小时" value="1"></el-option>
                <el-option label="2小时" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="开奖周期间隙时长">
              <el-input v-model="form.region">
                <template slot="append">分钟</template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="danger">重置</el-button>
              <el-button type="primary">保存</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="1">
        &nbsp;&nbsp;&nbsp;&nbsp;
      </el-col>
      <el-col :span="10">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>修改管理员密码</span>
          </div>
          <el-form ref="form" :model="form" label-width="70px" size="small">
            <el-form-item label="原密码">
              <el-input type="password" v-model="form.user"></el-input>
            </el-form-item>
            <el-form-item label="新密码">
              <el-input type="password" v-model="form.user"></el-input>
            </el-form-item>
            <el-form-item label="重复密码">
              <el-input type="password" v-model="form.user"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="success">保存</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'sys-config-manager',
  data () {
    return {
      form: {}
    }
  }
}
</script>

<style lang="scss" scoped>
#sys-config-manager {
  text-align: left;
}
</style>
