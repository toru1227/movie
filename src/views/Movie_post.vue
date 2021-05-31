<template>
  <div>
    <div class="form">
      {{this.picture}}
      <p class="error">{{ error }}</p>
      <p>:映画タイトル</p>
      <input type="text" v-model="title" />
      <p>:映画公開日</p>
      <input type="text" v-model="release_date" />
      <p>あらすじ</p>
      <textarea name="text" v-model="text"></textarea>
      <p>画像</p>
   <input type="file" name="picture" @change="selectedFile">
    <div class="send"><button @click="errorCheck()">投稿する</button></div>
      <div>
        <p class="button" @click="$router.push('/master_main')">戻る</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      release_date: "",
      text:"",
      picture:"",
      error: "",
    };
  },
  methods: {
  selectedFile: function(event) {
 let file = event.target.files[0];
this.picture = file.name;
    },
    errorCheck() {
      this.error="";
      if (this.title == "" || this.release_date == "") {
        return this.error = "タイトル、公開日を入力してください";
      }
      this.send();
    },
    send() {
           axios
           .post("https://intense-falls-67346.herokuapp.com/api/movie_post", {
          title: this.title,
          release_date: this.release_date,
          picture:this.picture,
          text:this.text
        })
       .then(()=>{

        this.$router.push('/master_main');
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
textarea{
  width:100%;
  height:100px;
  resize: none;
}
input{
  width:100%;
  margin-bottom: 20px;
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
textarea {
   font-size:20px;
  height: 300px;
  width: 100%;
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
  text-decoration-line: none;
}
.button:hover {
  cursor: pointer;
  opacity: 0.5;

}

</style>
