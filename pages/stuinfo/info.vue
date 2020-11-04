<template>
  <div class="page">
    <div class="info-header">
      <span class="header-tishi">
        报名信息
      </span>
    </div>
    <div class="form-wrap">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.sex">
            <el-radio label="男" value=1></el-radio>
            <el-radio label="女" value=2></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="考生号">
          <el-input v-model="form.ksh" placeholder="请输入考生号"></el-input>
        </el-form-item>
        <el-form-item label="报名序号">
          <el-input v-model="form.bmxh" placeholder="请输入报名序号"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="form.sfid" placeholder="请输入身份证号"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.phone" placeholder="请输入本人手机号"></el-input>
        </el-form-item>
        <el-form-item label="选择专业">
          <el-select class="elst" v-model="form.region" placeholder="请选择活动区域">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
            <el-option label="4" value="4"></el-option>
            <el-option label="5" value="5"></el-option>
          </el-select>
        </el-form-item>
       
        <el-form-item label="学习类型:">
          <el-radio-group v-model="form.xz">
            <el-radio label="弹性学制"></el-radio>
            <el-radio label="全日制"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="户籍地址">
          <el-input v-model="form.hjdz" placeholder="请输入户籍地址"></el-input>
        </el-form-item>
        <el-form-item label="邮寄地址">
          <el-input v-model="form.hjdz" placeholder="通知书邮寄地址"></el-input>
        </el-form-item>

        
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
    layout:'common',
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style lang="less" scoped>
.page {
  //   background-color: red;
}
.elst{
    width: 100%;
}
.info-header {
  margin: 20px 0;
  padding-bottom: 10px;

  border-bottom: 2px solid #ccc;

  // text-align: left;
}
.header-tishi {
  // position: relative;;
  font-size: 30px;
  // left: 50%;
  display: inline-block;
  color: #333;
  // margin-left:40%;

  padding-right: 5px;
}
.form-wrap {
  width: 350px;
  margin: 0 auto;
  //   padding: 200px;
  //   box-sizing: content-box;
}
.tishi-log {
  // margin-left: 20px;
  // display: inline-block;
  vertical-align: bottom;
  // margin-top: 20px;
  border-left: 2px solid #999;
  padding-left: 5px;
}
</style>
