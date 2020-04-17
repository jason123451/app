<template>
    <div id="login">
        <div class="box">
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item  prop="username" style="color:#fff">
    <el-input  v-model="ruleForm.username" placeholder="请输入用户名" clearable></el-input>
  </el-form-item>
  <el-form-item  prop="pass">
    <el-input  v-model="ruleForm.pass" placeholder="请输入密码" show-password clearable></el-input>
  </el-form-item>
  <el-form-item id="submit-box"> 
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
        </div>

    </div>
</template>
<script>
export default {
        data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(value!=='admin'){
          
          callback(new Error('密码错误'));
        }else {
          callback();
        }
      };

        var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if(value!=='admin'){
          
          callback(new Error('用户名错误'));
        }else {
          callback();
        }
      };

      return {
        ruleForm: {
          pass: '',
          username: ''
        },
        rules: {
          pass: [
            { validator :validatePass  , trigger: 'blur' ,}
          ],
          username: [
            {  validator :validateUser, trigger: 'blur' , }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('登录成功!');
            // console.log(this.$refs[formName].validate);
            // console.log(valid)
            localStorage.setItem('username',this.ruleForm.username)
            localStorage.setItem('pass',this.ruleForm.pass)
            this.$router.push({path:'/'});
          } else {
            console.log('登录失败，请重新登录!!');
            
          return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style scoped>
    #login {
        background: url('../assets/bgc1.jpg');
        width: 100%;
        height: 100%;
    }

    .box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        /* background: #ffffff; */
    }
    .el-form {
        width: 450px;
        height: 300px;
    }

    #submit-box{
        width:450px ;
        text-align: center;
    }

     #submit-box .el-button {
         width: 166px;
     }
</style>