<template>
  <div>
    <div class="form">
    <p class="error">{{error}}</p>
    <p>映画タイトル</p>
    <input type="text" v-model="title">
    <p>映画公開日</p>
    <input type="text" v-model="release_date">
    <div class="send"><button @click="send()">投稿する</button></div>
    <div><p class="button" @click="$router.push('/master_main')">戻る</p></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      title:"",
      release_date:"",
      error:""
    };
  },
  methods:{
    errorCheck(){
      if(this.title=="" || this.release_date==""){
        return this.error="タイトル、公開日を入力してください";
      }
      this.send();
    },
      send(){
      axios
      .post("https://intense-falls-67346.herokuapp.com/api/movie_post",
      {
        title:this.title,
        release_date:this.release_date
      })
      .then(()=>{
   this.$router.push('/master_main');
      })
    },
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
  width:50%;
  margin-bottom:20px;
}
button {
  font-size: 18px;
}
textarea{
  width:50%;
  margin-bottom:20px;
  padding:10px;
}
p{
  font-size:18px;
  padding-bottom:10px;
}
select{
  margin-bottom: 20px;
}
.error {
  color:red;
  font-size:18px;
}
.send {
  margin-bottom: 20px;
}
.button {
  text-align: right;
   width:50%;
}
.button:hover{
  cursor: pointer;
  opacity:0.5;
  text-decoration: underline;
}
</style>
