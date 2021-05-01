<template>
<div>
  <article>
 <div class="main">
   <p>{{this.review_id}}</p>
<p>この映画のレビューは投稿済みです</p>
<button @click="$router.push
   ({
     path:'/edit/'+id,
     params:{id:id}
   })">編集する</button>
<button class="delete" @click="del(id)">削除する</button>
  </div>
  </article>
 </div>
</template>
<script>
import router from "../router/index";
import axios from "axios";
export default{
  props:["id"],
  data(){
    return{
      review_id:this.id
    }
  },
  methods:{
    del(index){
    axios({
      method:"delete",
      url:"https://intense-falls-67346.herokuapp.com/api/review/delete",
      data:{
        id:index
      },
    }).then(()=>{
      router.push('/');
    });
  }
},
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
  text-align: center;
  font-size: 16px;
  padding:5px 20px;
  opacity:0.4;
  margin-bottom:10px;
}
button:hover{
opacity:1;
}
p{
  font-size:24px;
  margin-bottom: 30px;
}
.delete{
  color:red
}
</style>
