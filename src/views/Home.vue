<template>
  <div class="home">
<HeaderAuth/>
<button class="post" @click="$router.push('/post')">レビューを投稿する</button>
 <ul v-for="(value,index) in shares" :key="index">
     <li class="title">{{value.title}}</li>
     <li>:平均点()</li>
   </ul>
  </div>
</template>
<script>
import HeaderAuth from "../components/HeaderAuth";
export default{
  data(){
    return{
      shares:[{
        title:"映画のタイトル"
      },
      {
        title:"映画のタイトル",
      },
      {
        title:"映画のタイトル",
      }
      ]
    };
  },
  components:{
    HeaderAuth
  }
};
</script>
<style scoped>
.title {
  font-size:20px;
  padding-bottom: 10px;
}
.home ul{
  padding:50px 30px 50px 30px;
  width:70%;
  margin:0 auto;
  list-style-type: none;
}
.post{
margin:20px;
padding:10px;
font-size:20px;

}
</style>
