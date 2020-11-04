<template>
  <div class="page">
    <div class="info-header">
        <span class="header-tishi">
            账号登录
        </span>
        <router-link to="/stuinfo/reg" class="tishi-log">去注册</router-link>
        
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
       <el-form-item label="手机号" prop="age">
          <el-input type="text"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        
       
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
           <el-button @click="resetForm('ruleForm')">重置</el-button>
          
        </el-form-item>
      </el-form>
    </div>

    <div class="notice">
        注意：如有任何问题请来电咨询 
        招生办公室电话：0000-000000 
        张老师：12345678901 
    </div>
    
  </div>
</template>
<script>
export default {
  layout: 'common',
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
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
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        age: [{ validator: checkAge, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="less" scoped>
.page {
  //   background-color: red;
}
.notice{
    margin-top:20px;
    text-align: center;
    margin: 0 auto;
    // text-align: left;
    // position: absolute;
}
.info-header{
    margin: 20px 0;
    padding-bottom: 10px;;
    
    border-bottom: 2px solid #ccc;

    // text-align: left;
}
.header-tishi{
    // position: relative;;
    font-size: 30px;
    // left: 50%;
    display: inline-block;
    color: #333;
    // margin-left:40%;
    
    padding-right: 5px;

    
}
.form-wrap {
  width: 300px;
  margin: 0 auto;
//   padding: 200px;
//   box-sizing: content-box;
}
.tishi-log{
    // margin-left: 20px;
    // display: inline-block;
    vertical-align: bottom;
    // margin-top: 20px;
    border-left: 2px solid #999;
    padding-left: 5px;
}
</style>
