<template>
<div>
  <div class="main">
  <p>ログアウトしました</p>
  <button @click="$router.push('/')">戻る</button>
  </div>
</div>

</template>
<style scoped>
p{
  font-size:24px;
  margin-bottom: 30px;
}
.main{
  margin:30px auto 30px;
  width:60%;
  background-color: #fff;
  padding:50px 50px;
  text-align: center ;
  border-radius: 10px;
}
button {
  border-radius: 2px;
  display: block;
  background-color: #fff;
  border:1px solid;
  width:15%;
  text-align: center;
  font-size: 16px;
  padding:5px 0;
  opacity:0.4;
  margin: 0 0 0 auto;
}
button:hover{
opacity:10;
}
</style>
