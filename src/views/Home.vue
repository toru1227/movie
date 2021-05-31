<template>
  <div>
    <h1>現在上映中の映画</h1>
    <div class="main">
      <div class="main-inner">
        <ul class="home" v-for="(value, index) in shares" :key="index">
          <li>
            <button
              @click="
                $router.push({
                  path: '/review/' + value.data.id,
                  params: { id: value.data.id },
                })
              "
            >
              {{ value.data.title }}のレビューを見る
            </button>
          </li>
          <li><p class="expla">解説</p></li>
          <li>{{value.data.text}}</li>
          <li class="point">
            平均点:<span :class="averageColor(value.average)">{{
              value.average
            }}</span>
          </li>
          <li>
            <div v-if="$store.state.auth">
            <button
              @click="
                $router.push({
                  path: '/post/' + value.data.id,
                  params: { id: value.data.id },
                })
              "
            >
              レビューを投稿する
            </button>
            </div>
            <div v-else-if="!$store.state.auth">
              <button class="login" @click="$router.push('/login')">
                ログインしてレビューを投稿する
              </button>
              <!-- <button class="signup" @click="$router.push('/signup')">
                ユーザー登録してレビューを投稿する
              </button> -->
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user_id: this.$store.state.user.id,
      reviews_length: "",
      reviews_posted: "",
      posteds: [],
      user_review: [],
      shares: [],
    };
  },
  created: function() {
    this.getShares();
    this.getUserReview();
  },
  watch: {
    headerAuth: function() {
      this.getShares();
      this.getUserReview();
    },

  },
  methods: {
    averageColor(average) {
      if (average < 2.9) {
        return "red";
      } else if (average >= 3 && average < 3.9) {
        return "yellow";
      } else if (average >= 4) {
        return "blue";
      }
    },
    async posted(id) {
      let datas = [];
      const reviews = await axios.get(
        "https://intense-falls-67346.herokuapp.com/api/review/show?id=" + id
      );
      datas.push(reviews.data.data);
      let posted_user_id = [];
      for (let i = 0; i < datas[0].length; i++) {
        posted_user_id.push(datas[0][i]["item"].user_id);
      }
      if (posted_user_id.indexOf(String(this.$store.state.user.id)) >= 0) {
        console.log(posted_user_id);
        return true;
      } else if (
        posted_user_id.indexOf(String(this.$store.state.user.id)) < 0
      ) {
        console.log(posted_user_id);
        return false;
      }
    },

    async getShares() {
      const sharesdata = await axios.get(
        "https://intense-falls-67346.herokuapp.com/api"
      );
      this.shares = sharesdata.data.data;
      console.log(this.shares);
    },
    async getUserReview() {
      let data = [];
      const reviews = await axios.get(
        "https://intense-falls-67346.herokuapp.com/api/user_review?id=" +
          this.$store.state.user.id
      );
      data.push(reviews.data.data);
      this.login=this.$store.state.auth;
      this.reviews_length = data[0].length;
      this.user_review = data[0];
    },
  },
};
</script>
<style scoped>
span {
  padding-left: 5px;
}
.point {
  font-variant-ligatures: none;
  letter-spacing: 2px;
}
.main {
  width:100%;
}
.expla {
  font-size: 15px;
  padding:5px 10px;
  color:white;
  background-color: gray;
  display: inline-block;
}
button {
  box-shadow: 1px 1px 3px;
  font-size: 18px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid;
  padding: 10px 10px;
  border: 1px solid rgb(182, 182, 182);
  border-radius: 3px;
}
button:hover {
  background-color: rgb(0, 102, 204);
  color: #f0f0f0;
  cursor: pointer;
}
li {
  font-size: 18px;
  padding: 10px 0 20px 0;
}
.title {
  font-size: 30px;
  padding-bottom: 20px;
  color: #414b5b;
}
.main {
  margin: 20px auto 30px;
  width: 70%;

  padding: 30px 50px;
}
.home {
  padding: 50px 30px 50px 50px;
  width: 100%;
  list-style-type: none;
  background-color: #fff;
  margin-bottom: 30px;
  border-radius: 10px;
  display: inline-block;
}
.post {
  padding-bottom: 10px;
  font-size: 20px;
}
h1 {
  text-align: center;
  font-weight:400;
  padding: 50px 0;
  font-size: 30px;
  color: #414b5b;
font-size: 2rem;
  font-style: italic;
  letter-spacing: .1em;
}

.login {
  display: block;
  font-size: 15px;
}
.signup {
  display: block;
  font-size: 15px;
}
.red {
  color: red;
}
.yellow {
  color: rgb(11, 201, 27);
}
.blue {
  color: rgb(53, 182, 196);
}
.flex {
  display: flex;
}
.edit,
.delete {
  display: block;
}
.delete:hover {
  background-color: rgb(237, 73, 73);
  opacity: 0.6;
}
</style>
