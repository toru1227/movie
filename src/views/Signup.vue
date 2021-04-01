<template>
  <div>
    <HeaderAuth/>

    <div class="card">
       <p class="card-title">新規登録</p>
   <div class="form">
    <input type="text" placeholder="ユーザーネーム">
    <input type="text" placeholder="プロフィール">
    <input type="email" placeholder="メールアドレス">
    <input type="password" placeholder="パスワード">
    <button @click="auth">新規登録</button>
   </div>
 </div>
  </div>
</template>
<script>
import HeaderAuth from "../components/HeaderAuth"
export default{
  components:{
    HeaderAuth
  }
}
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
