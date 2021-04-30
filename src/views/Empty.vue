<template>
<div>
 <div class="main">
  <article>
<p>まだ投稿はありません</p>
<div class="box">
<button class="button" @click="$router.push('/')">戻る</button>
</div>
 </article>
  </div>
 </div>
</template>
<script>
export default{
  props:["id"],
}
</script>
<style scoped>

article{
  margin:30px auto 30px;
  width:60%;
  background-color: #fff;
  padding:50px 50px;
  text-align: center ;
  border-radius: 10px;
}

.title{
  padding-bottom:50px;
  font-weight: bold;;
  font-size: 25px;
}
.text{
  padding-bottom:50px;
  font-size: 20px;
  line-height:1.2;
}

.author{
  padding: 20px 0;
  font-size: 15px;
}
.day{
  font-size: 16px;
  padding-bottom: 100px;
}
.point {
  padding-bottom: 20px;
  font-size: 20px;
}
.like {
  padding-bottom:5px;
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
p{
  font-size:24px;
  margin-bottom: 30px;
}
</style>
