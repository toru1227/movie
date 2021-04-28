<template>
  <div>
    <p>{{this.id}}</p>
    <div class="form">
     <p>:レビュー</p>
    <textarea name="review" id="" cols="30" rows="10" v-model="content"></textarea>
    <p>:点数</p>
    <select name="point" id="" v-model="point">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    </select>
    <button class="edit" @click="send()">編集する</button>
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
      content:"",
      point:"",
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
}
p{
  padding-bottom:10px;
}
select{
  margin-bottom: 20px;
}
</style>
