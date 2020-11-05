<template>
  <div class="page">
    <div class="info-header">
      <span class="header-tishi">
        账号注册
      </span>
      <router-link to="/stuinfo" class="tishi-log">去登录</router-link>
    </div>
    <div class="form-wrap">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="手机号" prop="user">
          <el-input type="text" v-model="ruleForm.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >注册</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="notice">
      注意：如有任何问题请来电咨询 招生办公室电话：0371-61066082
      张老师：15803875798
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  layout: 'common',
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        user: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        user: [{ validator: validateUser, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
          // 发送注册请求
          // this.reqRegister()
           this.$router.push('/stuinfo')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    async reqRegister() {
      // 发起注册请求
      let res = await this.$axios.post('/api/web/stu/register', {
        user: this.ruleForm.user,
        pass: this.ruleForm.pass,
        checkPass:this.ruleForm.checkPass
      })


      // 验证成功
      if (res.data.status == '0000') {
        console.log('注册成功，请去登录')
        this.$router.push('/stuinfo')

      } else {
        console.log('登录失败')
      }

      // 验证失败
    }
  }
}
</script>
<style lang="less" scoped>
.page {
  //   background-color: red;
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
  //  border-right: 2px solid #999;
  padding-right: 5px;
}
.form-wrap {
  width: 300px;
  margin: 0 auto;
  //   padding: 200px;
  //   box-sizing: content-box;
}
.tishi-log {
  // margin-left: 20px;
  // display: inline-block;
  vertical-align: bottom;
  // margin-top: 20px;
  padding-left: 5px;
  border-left: 2px #aaa solid;
}
.notice {
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
  // margin: 0 auto;
  // text-align: left;
  // position: absolute;
  padding-left: 100px;
}
</style>
