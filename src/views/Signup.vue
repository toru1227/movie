<template>
  <div>

    <div class="card">
       <p class="card-title">新規登録</p>
   <div class="form">
     <p class="error">{{error}}
     </p>
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
export default{
  props:["id"],
  data(){
    return {
      name:"",
      email:"",
      password:"",
      error:""
    };
  },
  methods:{
    auth(){
         this.error="";
        if(this.name==""||this.email==""||this.password==""){
        return this.error="名前、メールアドレス、パスワードを入力してください"
        }
      axios
      .post('https://intense-falls-67346.herokuapp.com/api/signup',{
        name:this.name,
        email:this.email,
        password:this.password
      })
      .then(response=>{
        console.log(response.data);
      if(response.data.message=="duplicate"){
        return this.error="このメールアドレスは登録されています"
       }
      this.$router.push("/signup_completed");
      })
       .catch((error) => {
          console.log(error);
        });
    },
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
.error {
  color:red;
  font-size: 15px;
  padding-bottom: 10px;
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
