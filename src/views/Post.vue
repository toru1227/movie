<template>
  <div>
    <div class="form">
      <p>:レビュー</p>
      <p class="error">{{ error }}</p>
      <textarea
        name="review"
        id=""
        cols="30"
        rows="10"
        v-model="content"
      ></textarea>
      <p>:点数</p>
      <select name="point" id="" v-model="point">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5" selected>5</option>
      </select>
      <div @click="errorCheck()">
        <button>投稿する</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import router from "../router/index";
export default {
  props: ["id"],
  data() {
    return {
      movie_id: this.id,
      content: "",
      point: 5,
      error: "",
    };
  },
  methods: {
    errorCheck() {
      if (this.content == "" || this.content.length < 10) {
        return (this.error = "レビューは10文字以上で入力してください");
      }
      this.send();
    },
    send() {
      axios
        .post("https://intense-falls-67346.herokuapp.com/api/review", {
          content: this.content,
          point: this.point,
          movie_id: this.id,
          user_id: this.$store.state.user.id,
        })
        .then(function() {
          router.push("/");
        });
    },
    async posted() {
      let datas = [];
      const reviews = await axios.get(
        "https://intense-falls-67346.herokuapp.com/api/review/show?id=" +
          this.id
      );
      datas.push(reviews.data.data);
      for (let i = 0; i < datas[0].length; ++i) {
        if (datas[0][i].user_data.id === this.$store.state.user.id) {
          router.push({
            path: "/posted/" + datas[0][i].item.id,
            params: { id: datas[0][i].item.id },
          });
        }
      }
    },
  },
  created() {
    this.posted();
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
  width: 100%;
  margin-bottom: 20px;
}
textarea {
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 18px;
}
p {
  padding-bottom: 10px;
}
select {
  margin-bottom: 20px;
}
.error {
  color: red;
  font-size: 18px;
}
button {
  box-shadow: 1px 1px 3px;
  font-size: 16px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid;
  padding: 5px 10px;
  border: 1px solid rgb(182, 182, 182);
  border-radius: 3px;
}
button:hover {
  background-color: rgb(0, 102, 204);
  cursor: pointer;
  color: #f0f0f0;
}
/* button {
  border-radius: 2px;
  display: block;
  background-color: #fff;
  border: 1px solid;
  text-align: center;
  font-size: 16px;
  padding: 5px 20px;
  opacity: 0.4;
  margin-bottom: 10px;
}
button:hover {
  opacity: 1;
  cursor: pointer;
} */
select {
  border: 1px;
  padding: 5px;
  font-size: 14px;
}
</style>
