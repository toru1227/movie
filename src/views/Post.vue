<template>
  <div>
    <div class="form">
      <p>{{this.id}}</p>
     <p>:レビュー</p>
     <p class="error">{{error}}</p>
    <textarea name="review" id="" cols="30" rows="10" v-model="content"></textarea>
    <p>:点数</p>
    <select name="point" id="" v-model="point">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5" selected>5</option>
    </select>
    <div @click="errorCheck(),send()">
    <button>投稿する</button>
    </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import router from "../router/index";
export default {
  props:["id"],
  data(){
    return {
      movie_id:this.id,
      content:"",
      point:5,
      error:"",
  }
  },
  methods:{
    errorCheck(){
        if(this.content=="" || this.content.length<10){
        return this.error="レビューは10文字以上で入力してください";
        }
    },
    send(){
      axios
      .post("https://intense-falls-67346.herokuapp.com/api/review",
      {
        content:this.content,
        point:this.point,
        movie_id:this.id,
        user_id:this.$store.state.user.id
      })
      .then(function(){
        router.push('/');
      });
    },
 async posted(){
 let datas=[];
 const reviews= await
 axios.get(
  "https://intense-falls-67346.herokuapp.com/api/review/show?id="+this.id)
  datas.push(reviews.data.data);
  for(let i=0;i<datas[0].length;++i){
    if(datas[0][i].user_data.id===this.$store.state.user.id){
      router.push({
        path:'/posted/'+datas[0][i].item.id,
        params:{id:datas[0][i].item.id}
      });
    }
  }
  },
 },
  created(){
  this.posted();
  }
}
</script>
<style scoped>
.form {
  padding:50px;
  width:50%;
  margin:0 auto;
}
input {
  width:100%;
  margin-bottom:20px;
}
textarea{
  width:100%;
    margin-bottom:20px;
    padding:10px;
}
p{
  padding-bottom:10px;
}
select{
  margin-bottom: 20px;
}
.error {
  color:red;
  font-size:18px;
}
</style>
