<template>
<div>
  <div class="card">
       <p class="card-title">ログイン</p>
   <div class="form">
     <p class="error">{{error}}</p>
    <input type="email" placeholder="メールアドレス" v-model="email">
    <input type="password" placeholder="パスワード" v-model="password">
    <button @click="errorCheck()">ログイン</button>
   </div>
 </div>
</div>
</template>
<script>
export default {
  data(){
    return {
      email:"",
      password:"",
      error:""
    };
  },
  methods:{
    auth(){
      this.$store.dispatch("login",{
        email:this.email,
        password:this.password
      })
      .then(()=>{
   if(this.$store.state.auth==false){
     return this.error="メールアドレス、もしくはパスワードが間違っています"
   }
   this.$router.push('/');
      });
    },
    errorCheck(){
      this.error="";
      if(this.email=="" || this.password==""){
        return this.error="正しいメールアドレス、パスワードを入力してください"
      }else {
        this.auth()
       }
      }
  }
};
</script>

<style scoped>

button {
  width:80%;
  text-align: center;
  padding:8px 0 10px;
  background-color:#00b7ff;
  color:#f0f0f0;
  font-size: 16px;
}
.error{
  color:red;
  font-size:14px;
  padding-bottom: 4px;
}
.card {
  border:1px solid;
  border-radius: 5px;
  margin:100px auto;
  width:500px;
  background-color: #ffffff;
  padding:20px;
}
.card-title{
  font-size:24px;
    text-align: center;
  margin-bottom: 15px;
}

input{
  margin-bottom:15px;
  width:80%;
 padding:8px 0 10px;
   box-sizing: border-box;
   font-size: 16px;
}
.form {

  text-align: center;
}
</style>
