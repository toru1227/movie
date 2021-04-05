<template>
 <div class="header flex">
   <div class="left">
     <img class="logo" src="../assets/movie-logo.png" @click="$router.push('/')">
   </div>
   <div class="right">
     <div v-if="active">
       <p>ようこそ{{$store.state.user.name}}さん</p>
     <p @click="$store.dispatch('logout'),logout()">ログアウトする</p>
   </div>
      <div v-else>
     <p @click="$router.push('/signup')">新規登録</p>
     <p @click="$router.push('/login')">ログイン</p>
      </div>
    </div>
   </div>
</template>
<script>
export default {
data(){
  return {
    active:""
  };
 },
 methods:{
   logout(){
     this.active=false
   }
 },
 created:function(){
   this.active=this.$store.state.user
 }
}
</script>

<style scoped>
.right {
 align-items: center;
}
.right p {
padding-top:25px;
 cursor: pointer;
 font-size:20px;
}
.header {
 height:120px;
 border-bottom:10px solid;
}
.logo {
 width: 120px;
 height:120px;
 cursor: pointer;
}
.flex {
 display: flex;
 padding:0 70px;
 justify-content: space-between;
}

</style>
