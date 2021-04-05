<template>
  <div>
    <HeaderAuth/>
    <div class="card">
       <p class="card-title">新規登録</p>
   <div class="form">
    <input type="text" placeholder="ユーザーネーム" v-model="name">
    <input type="email" placeholder="メールアドレス" v-model="email">
    <input type="password" placeholder="パスワード" v-model="password">
    <button @click="auth">新規登録</button>
   </div>
 </div>
  </div>
</template>
<script>
import axios from "axios";
import HeaderAuth from "../components/HeaderAuth"
export default{
  data(){
    return {
      name:"",
      email:"",
      password:""
    };
  },
  components:{
    HeaderAuth
  },
  methods:{
    auth(){
      axios
      .post('https://young-castle-26834.herokuapp.com/api/signup',{
        name:this.name,
        profile:this.profile,
        email:this.email,
        password:this.password
      })
      .then(response=>{
      console.log(response);
      this.$router.replace("/");
      })
      .catch(error=>{
        alert(error);
      });
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
}
.form {

  text-align: center;
}
</style>
