<template>
  <div>
    <div class="form">
      <p class="error">{{ error }}</p>
      <p>:映画タイトル</p>
      <input type="text" v-model="title" />
      <p>:映画公開日</p>
      <input type="text" v-model="release_date" />
      <div class="send"><button @click="errorCheck()">投稿する</button></div>
      <div>
        <p class="button" @click="$router.push('/master_main')">戻る</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import router from '../router';
export default {
  props:['id'],
  data() {
    return {
      title: "",
      release_date: "",
      error: "",
    };
  },
  created(){
    this.getMovie();
  },
  methods: {
    errorCheck() {
      if (this.title == "" || this.release_date == "") {
        return this.error = "タイトル、公開日を入力してください";
      }
      this.send();
    },
    async getMovie(){

    const movie =await axios.get("https://intense-falls-67346.herokuapp.com/api/movie_edit?id="+this.id);
    console.log(movie.data.data);
     this.title=movie.data.data.title;
     this.release_date=movie.data.data.release_date;
    },
    send() {
      axios
        .post("https://intense-falls-67346.herokuapp.com/api/movie_edit?id="+this.id, {
          title:this.title,
          release_date:this.release_date
        })
        .then(()=>{
      router.push('/master_main');
    });
    },
  },
};
</script>
<style scoped>
.form {
  padding: 50px;
  width: 50%;
  margin: 0 auto;
}
input {
  width: 50%;
  margin-bottom: 20px;
}
button {
  font-size: 18px;
}
textarea {
  width: 50%;
  margin-bottom: 20px;
  padding: 10px;
}
p {
  font-size: 20px;
  padding-bottom: 10px;
}
select {
  margin-bottom: 20px;
}
.error {
  color: red;
  font-size: 18px;
}
.send {
  margin-bottom: 20px;
}
.button {
  text-align: right;
  cursor: pointer;
  font-size: 16px;
}
input{
  width:100%;
  font-size:18px;
  padding:5px ;
}
button {
  cursor: pointer;
  display:inline-block;
  padding:5px;
  font-size: 16px;
  margin-right:10px;
  margin-bottom: 10px;
  border:1px solid black;
  opacity:0.5;
  cursor: pointer;
  border-radius: 2px;
  background-color: #fff;
}
button:hover {
  cursor: pointer;
  opacity: 1;
}
.button {
text-align: right;

}
</style>
