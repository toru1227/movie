<template>
  <div>
    <div class="form">
      <p class="error">{{this.error}}</p>
     <p >:レビュー</p>
    <textarea name="review" id="" cols="30" rows="10" v-model="content"></textarea>
    <p>:点数</p>
    <select name="point" id="" v-model="point">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    </select>
    <div>
    <button @click="send()">編集する</button>
    </div>

    </div>
  </div>
</template>
<script>
import axios from 'axios';
import router from "../router/index"
export default {
  props:["id"],
  data(){
    return {
      review:[],
      error:"",
      content:"",
      point:"",
      length:""
  }
  },
  methods:{
    async getReview(){
      let data=[];
     const review = await axios.get("https://intense-falls-67346.herokuapp.com/api/edit?id="+this.id)
     data.push(review.data.data);
     this.content=data[0].content;
     this.point=data[0].point;

    },
    send(){
      if(this.content.length<10 ||this.content==""){
      return this.error="レビューは10文字以上で入力してください";
      }
      axios
      .post("https://intense-falls-67346.herokuapp.com/api/edit",
      {
        id:this.id,
        content:this.content,
        point:this.point,
      });
      router.push('/');
   }
  },
  created(){
    this.getReview();
  },

};
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
  padding:10px;
  margin-bottom:20px;
  border-color: #00b7ff;
    font-size:18px;
}
p{
  font-size: 18px;
  padding-bottom:10px;
}
select{
  margin-bottom: 20px;
}
.error{
  color:red;
  font-size:16px;
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
cursor: pointer;
}
select{
  border:1px;
  padding:5px;
 font-size: 14px;
}
</style>
