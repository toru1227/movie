<template>
  <div>
    <HeaderAuth/>
    <div class="form">
      <p>{{this.id}}</p>
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
    <div @click="send()">
    <button>投稿する</button>
    </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import router from "../router/index";
import HeaderAuth from "../components/HeaderAuth";
export default {
  props:["id"],
  data(){
    return {
      movie_id:this.id,
      content:"",
      point:"",
  }
  },
  components:{
    HeaderAuth,
  },
  methods:{
    send(){
      axios
      .post("https://intense-falls-67346.herokuapp.com/api/review",
      {
        content:this.content,
        point:this.point,
        movie_id:this.id,
        user_id:this.$store.state.user.id
      });
      router.push('/');
    }
  }
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
    margin-bottom:20px;
}
p{
  padding-bottom:10px;
}
select{
  margin-bottom: 20px;
}
</style>
