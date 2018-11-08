
<template>
  <div class="login">
    <div class="login-container">
      <div class="head-top">注册</div>

      <div class="login-content">
        <div class="input-container">
          <input type="text" placeholder="账号" v-model="name">
        </div>

        <div class="input-container">
          <input type="password" placeholder="密码" v-model="password">
        </div>
      </div>

      <div class="login-footer">
        <button class="button is-primary" @click="signup">
          注册
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    signup() {}
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.login {
  width: 100%;
  padding: 3rem 1.5rem;
}
.login-container {
  flex: 1;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  padding: 20px;
  max-width: 400px;
}
.head-top {
  color: #363636;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.125;
  margin-bottom: 1.5rem;
}
.login-content {
  margin-bottom: 1.5rem;
  border: 1px solid #dbdbdb;
}
.login-content :not(:last-child) {
  border-bottom: 1px solid #dbdbdb;
}
.input-container {
  color: #363636;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.25em 0.75em;
}
.input-container input {
  font-size: 1rem;
  border: 0;
  outline: none;
  width: 100%;
  height: 2.25em;
}
.login-footer {
  text-align: right;
}
.login-footer :not(:last-child) {
  margin-right: 0.5rem;
}
.button {
  font-size: 1rem;
  padding: 0.375em 0.75rem;
  outline: none;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}
.is-info {
  background-color: #209cee;
  border-color: transparent;
  color: #fff;
  font-weight: bold;
}
.is-primary {
  background-color: #4cd964;
  border-color: transparent;
  color: #fff;
  font-weight: bold;
}
</style>
