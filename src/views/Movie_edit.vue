<template>
  <div>
    <div class="form">
      <p>{{text}}</p>
      <p class="error">{{ error }}</p>
      <p>:映画タイトル</p>
      <input type="text" v-model="title" />
      <p>:映画公開日</p>
      <input type="text" v-model="release_date" />
      <p>あらすじ</p>
      <textarea v-model="text" name="text"></textarea>
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
      text:"",
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
     this.text=movie.data.data.text;
    },
    send() {
      axios
        .post("https://intense-falls-67346.herokuapp.com/api/movie_edit?id="+this.id, {
          title:this.title,
          release_date:this.release_date,
          text:this.text
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
  width: 100%;
  height:300px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 20px;
  resize: none;
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
  box-shadow: 1px 1px 3px;
  font-size: 18px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid;
  padding: 5px 10px;
  border: 1px solid rgb(182, 182, 182);
  border-radius: 3px;
}
button:hover {
  background-color: rgb(0, 102, 204);
  color: #f0f0f0;
  cursor: pointer;
}
.button {
text-align: right;

}
</style>
