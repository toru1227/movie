<template>
  <div>
    <div class="card">

      <p class="card-title">管理者ログイン</p>
      <div class="form">
        <p class="error">{{error}}</p>
        <input type="email" placeholder="メールアドレス" v-model="email" />
        <input type="password" placeholder="パスワード" v-model="password" />
        <button @click="auth()">ログイン</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error:""
    };
  },
  methods: {
    auth() {
      this.$store.dispatch("masterLogin",{
        email:this.email,
        password:this.password
      });
          if(this.$store.state.master_user === true){
           this.$router.push('/master_main')
          }else{
           return this.error="正しいメールアドレス、パスワードを入力してください";
          }
    },
  },
};
</script>

<style scoped>
button {
  width: 80%;
  text-align: center;
  padding: 8px 0 10px;
  background-color: #00b7ff;
  color: #f0f0f0;
}
.error {
  color:red;
  font-size: 14px;
  padding-bottom: 4px;
}
.card {
  border: 1px solid;
  border-radius: 5px;
  margin: 100px auto;
  width: 500px;
  background-color: #ffffff;
  padding: 20px;
}
.card-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 15px;
}

input {
  margin-bottom: 15px;
  width: 80%;
  padding: 8px 0 10px;
  box-sizing: border-box;
}
.form {
  text-align: center;
}
</style>
