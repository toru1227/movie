<template>
<div>
  <HeaderAuth/>
 <div class="main">
   <p>{{id}}</p>
   <p>{{this.$store.state.user.id}}</p>
  <div v-for="(review,index) in reviews" :key="index">

   <article>
  <p>{{review.item.id}}</p>
   <p class="point">レビュー:<span :class="pointColor(review.item.point)">{{review.item.point}}点</span></p>
<p class="text">{{review.item.content}}</p>
   <p class="author">投稿者 {{review.user_data.name}}</p>
   <p class="day">投稿日: {{review.item.created_at}}</p>
   <p class="like">参考になった人数:{{review.like.length}}人</p>
   <button @click="fav(index)">参考になった</button>
   </article>
  </div>
 </div>
</div>
</template>
<script>
import axios from "axios";
import HeaderAuth from "../components/HeaderAuth";
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
"https://intense-falls-67346.herokuapp.com/api/review/show?id="+this.id)
 data.push(reviews.data.data);
 this.reviews=data[0];
//  console.log(this.reviews);
  },

fav(index){
const result = this.reviews[index].like.some((value)=>{
  return value.user_id==this.$store.state.user.id
});
if(result){
this.reviews[index].like.forEach(element => {
  if(element.user_id==this.$store.state.user.id){
    axios({
      method:"delete",
      url:"https://intense-falls-67346.herokuapp.com/api/like",
      data:{
        user_id:this.$store.state.user.id,
        review_id:this.reviews[index].item.id
      },
    }).then((response)=>{
      console.log(response);
      this.$router.go({
        path:this.$router.currentRoute.path,
        force:true,
      });
  });
  }
});
}else{
axios
.post("https://intense-falls-67346.herokuapp.com/api/like",{
  user_id:this.$store.state.user.id,
  review_id:this.reviews[index].item.id
})
.then((response)=>{
  console.log(response);
  this.$router.go({
    path:this.$router.currentRoute.path,
    force:true,
   });
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
   }
},
  components:{
    HeaderAuth
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
  font-size: 12px;
  padding-bottom: 10px;
}
.point {
  padding-bottom: 20px;
  font-size: 20px;
}
.like {
  padding-bottom:5px;
}
button {
  background-color: #fff;
  border:1px solid;
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
