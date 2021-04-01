<template>
 <div class="header flex">
   <div class="left">
     <img class="logo" src="../assets/movie-logo.png" @click="$router.push('/')">
   </div>
   <div class="right">
     <p v-if="active" @click="$store.dispatch('/logout')">ログアウトする</p>
     <div  v-else>
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
    active:true,
  }
}
}
</script>

<style scoped>
.right {
 align-items: center;
}
.right p {
padding-top:30%;
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
