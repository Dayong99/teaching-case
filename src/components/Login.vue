<template>
  <div class="login_container">
    <div class="login_box">
      <!--        登陆表单区域-->
      <div class="system-title">案例教学系统</div>
      <el-form ref="loginFormRef"
               :model="loginForm"
               :rules="loginFromRules"
               label-width="0px"
               class="login_form">
        <!--          用户名-->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username"
                    class="myClass">
            <template slot="prepend">
              <img src="../assets/iconfont/用户 (1).png">
            </template>
          </el-input>
        </el-form-item>
        <!--          密码-->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password"
                    prefix-icon="icon iconfont icon-weibiaoti--"
                    type="password">
          </el-input>
          <!--            按钮区域-->
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      // 这是登陆表单的数据绑定对象
      loginForm: {
        username: '请输入用户名',
        password: '请输入密码'
      },
      // 这是表单的验证规则对象
      loginFromRules: {
        // 验证用户名是否合法
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
        ],
        // 验证密码是否合法
        password: [
          {required: true, message: '请输入用户登录密码', trigger: 'blur'},
          {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    // // 点击重置按钮，重置登陆表单
    resetLoginForm() {
    //   this.$refs.loginFormRef.resetFields()
    },
    login() {
    //   // this.$refs.loginFormRef.validate(async valid => {
    //   //   if (!valid) return
    //   // const { data: res } = await this.axios.post('login', this.loginForm)
    //   // 如果res.meta.status !== 200，禁止往下执行，并提示登陆失败
    //   // if (res.meta.status !== 200) return this.$message.error('登陆失败')
    //   this.$message.success('登陆成功')
    //   // console.log(res)
    //   // window.sessionStorage.setItem('token', res.data.token)
    //   this.$router.push('/home')
    //   // })
    }
  }
}
</script>
<style>
.el-input-group__prepend {
  background-color:transparent!important;
  top:8px!important;
  right: 23px!important;
  border-radius:0!important;
  border-top-width: 0px!important;
  border-left-width: 0px!important;
  border-right-width: 0px!important;
  border-bottom-width: 0px!important;
}
.el-input__inner{
  background-color:transparent!important;
  padding-top:22px!important;
  padding-bottom:22px!important;
  border-radius:0!important;
  border-top-width: 0px!important;
  border-left-width: 0px!important;
  border-right-width: 0px!important;
  border-bottom-width: 1px!important;
  border-bottom-color: white!important;
}

</style>
<style lang="less" scoped>
.system-title {
  position: absolute;
  font-size: 30px;
  font-weight: 500;
  color: white;
  letter-spacing: 12px;
  left: 20px;
}
/*// 阿里字体图标设置*/
.icon, .iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.login_container {
  background-color: #103156;
  height: 100%;
}

.login_box {
  width: 280px;
  height: 300px;
  border-radius: 3px;
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translate(-120%, -50%);

  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;

  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }


}

</style>
