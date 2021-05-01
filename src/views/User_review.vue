<template>
<div>
 <div class="main">
   <p>{{this.$store.state.user.id}}</p>
  <div v-for="(review,index) in reviews" :key="index">
  <article>
   <p class="point">レビュー:<span>{{review.point}}点</span></p>
<p class="text">{{review.content}}</p>
   <p class="day">投稿日: {{review.created_at}}</p>
   <button class="edit"
   @click="$router.push
   ({
     path:'/edit/'+review.id,
     params:{id:review.id}
   })"
   >編集する</button>
   <button class="delete" @click="del(review.id)"><span class="delete-color">削除する</span></button>
   </article>
  </div>
 </div>
</div>
</template>
<script>
import router from "../router/index";
import axios from "axios";
export default{
  props:["id"],
  data(){
  return {
   path:true,
   reviews:[]
  }
    },
methods:{
async getShares(){
let data=[];
const reviews= await axios.get(
"https://intense-falls-67346.herokuapp.com/api/user_review?id="+this.$store.state.user.id);
 data.push(reviews.data.data);
 this.reviews=data[0];
 console.log(this.reviews);
  },
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
 pointColor(point){
    if(point<2.9){
    return "red";
    }else if(point >=3 && point<=3.9){
      return "yellow";
    }else if(point>=4){
      return "blue";
    }
},
  created(){
    this.getShares();
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
  opacity:0.4
}
button:hover{
opacity:1;
}
.edit {
margin-bottom: 10px;
}
.delete-color{
  color:red;
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
</style>
