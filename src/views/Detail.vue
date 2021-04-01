<template>
<div>
  <HeaderAuth/>
 <div class="main">
  <div v-for="(comment,index) in data" :key="index">
   <article>
   <p class="title">{{comment.title}}</p>
   <p class="text">{{comment.text}}</p>
   <p class="author">投稿者 {{  comment.name}}</p>
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
  title:"映画のタイトル",
  text:"映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文映画本文",
  like:[{},{}],
  name:"名前",
},
{
  title:"タイトル",
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
  margin:0 auto;
  width:60%;
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
  padding-bottom: 25px;
  font-size: 20px;
}
</style>
