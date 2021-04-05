<template>
<div>
  <HeaderAuth/>
 <div class="main">
  <div v-for="(comment,index) in data" :key="index">
   <article>
   <p class="point">レビュー:<span class="color">{{comment.point}}点</span></p>
   <p class="text">{{comment.text}}</p>
   <p class="author">投稿者 {{  comment.name}}</p>
   <p class="day">投稿日: {{comment.created_at}}</p>
   <p class="like">参考になった :{{comment.like.length}}人</p>
   </article>
  </div>
 </div>
</div>
</template>
<script>
import HeaderAuth from "../components/HeaderAuth";
export default{
  props:["id"],
  data(){
    return{
   data:[{
  point:4,
  created_at:"2021年",
  text:"映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文",
  like:[{},{}],
  name:"名前",
},
{  point:4,
  created_at:"2021年",
  text:"映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文",
 like:[{},{}],
  name:"名前",
}
]
    }
  },
  components:{
    HeaderAuth
  }
}
</script>
<style scoped>
article{
  padding:50px 0;
  margin:20px auto 30px;
  width:60%;
  background-color: #fff;
  padding:30px 50px;

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
}
.author{
  padding: 20px 0;
  font-size: 15px;
}
.day{
  font-size: 12px;
  padding-bottom: 10px;
}
.point {
  padding-bottom: 20px;
  font-size: 20px;
}
.color {
  color:rgb(53, 182, 196);
}
</style>
