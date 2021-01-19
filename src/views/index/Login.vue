<template>
  <div class="form-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      label-position="left"
      label-width="0px"
      class="login-form"
    >
      <el-form-item prop="loginName">
        <el-input
          v-model="loginForm.loginName"
          type="text"
          autocomplete="off"
          placeholder="请输入注册用户名"
        >
          <template slot="prefix">
            <i class="form-icon icon-user"></i>
            <span class="title">用户名</span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password" class="password">
        <el-input
          v-model="loginForm.password"
          :type="showPassword"
          autocomplete="off"
          placeholder="请输入密码"
        >
          <template slot="prefix">
            <i class="form-icon icon-padlack"></i>
            <span class="title">用户密码</span>
          </template>
        </el-input>
        <button type="password" @click="switchVisibility" class="btn-show-password">show / hide</button>
      </el-form-item>
      <div class="text-left">
        <div class="switch">
          <input id="switch-1" type="checkbox" v-model="loginForm.rememberMe" class="switch-input" />
          <label for="switch-1" class="switch-label">Switch</label>
        </div>
        <span>记住</span>
      </div>
      <el-form-item style="width:100%;">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleLogin"
          round
        >
          <span v-if="!loading">登录</span>
          <span v-else>登录中...</span>
        </el-button>
      </el-form-item>
    </el-form>

    <el-button type="primary" @click.native.prevent="handleLogout" round>
      <span>Logout</span>
    </el-button>

    <div class="form-footer-links">
      <span>
        忘记密码？
        <a href="#">找回密码</a>
      </span>
    </div>
  </div>
</template>
<script>
import { encrypt } from "@/utils/rsaEncrypt";
import Config from "@/settings";
import Cookies from "js-cookie";
import { login, logout } from "@/api/login";
import { osName, deviceType, mobileModel } from "mobile-device-detect";
export default {
  name: "Login",
  data() {
    return {
      showPassword: "password",
      cookiePass: "",
      loginForm: {
        loginName: "",
        password: "",
        cdn: "a",
        loginUrl: "http://localhost:8081",
        activeDevice: deviceType,
        activeSystem: osName,
        activeImei: "",
        rememberMe: false
      },
      loginRules: {
        loginName: [
          { required: true, trigger: "blur", message: "用户名不能为空" }
        ],
        password: [{ required: true, trigger: "blur", message: "密码不能为空" }]
      },
      loading: false,
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
        this.$parent.entryActiveLeft = "0%";
        this.$parent.barActiveIndex = 0;
      },
      immediate: true
    }
  },
  created() {
    this.getCookie();
  },
  methods: {
    getCookie() {
      const loginName = Cookies.get("loginName");
      let password = Cookies.get("password");
      const rememberMe = Cookies.get("rememberMe");
      //Save the encrypted password in the cookie
      this.cookiePass = password === undefined ? "" : password;
      password = password === undefined ? this.loginForm.password : password;
      this.loginForm = {
        loginName:
          loginName === undefined ? this.loginForm.loginName : loginName,
        password: password,
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
      };
    },
    handleLogout() {
      Cookies.remove("password");
      Cookies.remove("rememberMe");
      let loginName = this.loginForm.loginName;
      let password = this.loginForm.password;
      logout(loginName, password).then(res => {});
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        const user = {
          loginName: this.loginForm.loginName,
          password: this.loginForm.password,
          rememberMe: this.loginForm.rememberMe
        };
        if (user.password !== this.cookiePass) {
          user.password = encrypt(user.password);
        }
        if (valid) {
          if (user.rememberMe) {
            Cookies.set("loginName", user.loginName, {
              expires: Config.passCookieExpires
            });
            Cookies.set("password", user.password, {
              expires: Config.passCookieExpires
            });
            Cookies.set("rememberMe", user.rememberMe, {
              expires: Config.passCookieExpires
            });
          } else {
            Cookies.remove("loginName");
            Cookies.remove("password");
            Cookies.remove("rememberMe");
          }
          this.loading = true;

          let loginName = this.loginForm.loginName;
          let password = this.loginForm.password;

          login(loginName, password)
            .then(res => {
              console.log(res);
              if (res.code == 0) {
                this.$notify({
                  message: `你好. ${res.data.memberName}, 享受您的游戏。`,
                  type: "success",
                  duration: 2500
                });
                setTimeout(() => {
                  this.loading = false;
                  // this.$router.push({ path: this.redirect || '/' })
                }, 1200);
              } else if (res.code == 2003) {
                this.loading = false;
                this.$notify.error({
                  message: this.$createElement(
                    "i",
                    { style: "color: #dd6161" },
                    res.message
                  ),
                  duration: 2300
                });
              }
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    switchVisibility(e) {
      e.preventDefault();
      this.showPassword =
        this.showPassword === "password" ? "text" : "password";
      e.target.classList.toggle("is-open");
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.form-container {
  width: 9.3rem;
  margin: 0 auto;

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: #174965;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .text-left {
    display: flex;
    align-items: center;
    padding-left: 0.3rem;
    span {
      font-size: 0.32rem;
      margin-left: 0.25rem;
    }
  }
}
.text-left {
  text-align: left !important;
}
.el-form-item--small.el-form-item.password {
  margin-bottom: 9px;
}
</style>
