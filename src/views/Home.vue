<template>
  <div>
<HeaderAuth/>
<h1>現在上映中の映画</h1>

<div class="flex">
<div class="profile">
  <div v-if="login">
  <p class="profile-text">プロフィール</p>
  <p class="reveiws" @click="$router.push
  ({
   path:'/user_review/'+ $store.state.user.id,
   params:{id:$store.state.user.id}
  })">投稿一覧を見る</p>
  </div>
    <div v-else>
     <p class="profile-signup" @click="$router.push('/signup')">新規登録</p>
     <p class="profile-login" @click="$router.push('/login')">ログイン</p>
</div>

</div>
<div>
 <ul class="home" v-for="(value,index) in shares" :key="index">
    <button @click="$router.push
      ({
        path:'/review/'+value.data.id,
        params:{id:value.data.id}
        })
        ">{{value.data.title}}のレビューを見る</button>

     <li class="point">平均点:<span :class="averageColor(value.average)">{{value.average}}</span></li>
        <button v-if="login" @click="
      $router.push({
        path:'/post/'+value.data.id,
        params:{id:value.data.id}
        })">レビューを投稿する</button>
       <li v-if="!login">
       <button class="login" @click="$router.push('/login')">ログインしてレビューを投稿する</button>
      <button class="signup" @click="$router.push('/signup')">ユーザー登録してレビューを投稿する</button>
       </li>
   </ul>
   </div>
   </div>
  </div>
</template>
<script>
import axios from 'axios';
import HeaderAuth from "../components/HeaderAuth";
export default{
  data(){
    return{
      user_id:this.$store.state.user.id,
      login:this.$store.state.auth,
      shares:[
      ]
    };
  },
  components:{
    HeaderAuth
  },
  methods:{
   averageColor(average){
    if(average<2.9){
    return "red";
    }else if(average >=3 && average<3.9){
      return "yellow";
    }else if(average>=4){
      return "blue";
    }
   },
    async getShares(){
      const sharesdata= await axios.get("https://intense-falls-67346.herokuapp.com/api"
      );
    this.shares=sharesdata.data.data;
    console.log(this.shares);
    }
  },
  created(){
    this.getShares();
  }
};
</script>
<style scoped>
span {
  padding-left:5px;
}
.point {
  font-variant-ligatures:none;
  letter-spacing:2px;
}
button {
  box-shadow:1px 1px 3px;
  font-size: 18px;
  margin-bottom:10px;
  background-color: #fff;
  border: 1px solid;
  padding:10px 10px;
  border: 1px solid rgb(182, 182, 182);
  border-radius:3px;
}
button:hover {
background-color: rgb(0, 102, 204);
 color:#f0f0f0;
}
li {
  font-size: 18px;
  padding:10px 0 20px 0;
}
.title {
  font-size:30px;
  padding-bottom: 20px;
color:#414b5b;
}
.home {
  padding:50px 30px 50px 50px;
  width:80%;
  /* margin:0 auto; */
  list-style-type: none;
  background-color: #fff;
  margin-bottom: 30px;
  border-radius: 10px;
display: inline-block;
}
.profile {
  width:30%;
   background-color: #fff;
   margin:0 20px;
   height: 100px;
   border-radius: 10px;
   font-size: 20px;
}
.profile-signup,
.profile-login{
  padding:15px 20px;
}
.profile-text{
  padding:10px 20px;
}
.reveiws {
  padding:10px 20px;
}
.post{
padding-bottom:10px;
font-size:20px;
}
h1{
  text-align: center;
  padding:50px 0;
  font-size:30px;
color:#414b5b;

}

.login {
  display: block;
    font-size: 15px;
}
.signup {
  display: block;
    font-size: 15px;
}
.red {
  color:red
}
.yellow {
  color:rgb(11, 201, 27)
}
.blue {
  color:rgb(53, 182, 196)
}
.flex{
  display: flex;
}
</style>
