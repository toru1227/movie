<template>
  <div class="header flex">
    <div class="left">
      <img
        class="logo"
        src="../assets/movie-logo.png"
        @click="$router.push('/')"
      />
    </div>
    <div v-if="this.$store.state.auth"><h1 class="name">
      ようこそ{{$store.state.user['name']}}さん</h1></div>
    <div class="right">

      <div v-if="this.$store.state.auth">
      <div class="my_review">
       <div v-if="this.$store.state.auth">
          <p
            v-if="this.reviews_length <0"
            class="reveiws"
            @click="$router.push('/empty')"
          >
            自分の投稿一覧を見る
          </p>
          <p
            v-else
            class="reveiws"
            @click="
              $router.push({
                path: '/user_review/' + $store.state.user.id,
                params: { id: $store.state.user.id },
              })
            "
          >
            自分の投稿一覧を見る
          </p>
        </div>
    </div>
        <p class="logout" @click="logout()">ログアウトする</p>
      </div>
      <div v-else-if="!active">
        <p @click="$router.push('/signup')">新規登録</p>
        <p @click="$router.push('/login')">ログイン</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      active: "",
      reviews_length:0,
    };
 },
 methods:{
   logout(){
   this.$store.dispatch('logout');
   this.reviews_length=0;
   },
     async getUserReview() {
      let data = [];
      const reviews = await axios.get(
        "https://intense-falls-67346.herokuapp.com/api/user_review?id=" +
      this.$store.state.user.id
      );
      data.push(reviews.data.data);
      this.reviews_length = data[0].length;
      this.user_review = data[0];
    },
  },
  headerAuth: function() {
    this.getUserReview();
    },
created(){
  this.getUserReview();
}
};
</script>

<style scoped>
.name {
  padding:20% 0;
  font-size:20px;
  font-weight: 400;
}
.right {
  align-items: center;
}
.right p {
  padding-top: 25px;
  cursor: pointer;
  font-size: 18px;
}
.header {
  height: 120px;
  border-bottom: 5px solid;
}
.logo {
  width: 120px;
  height: 120px;
  cursor: pointer;
}
.flex {
  display: flex;
  padding: 0 100px;
  justify-content: space-between;
}
p:hover {
  opacity: 0.5;
  cursor: pointer;
}
.name:hover {
  opacity: 1;
  cursor: default;
}
</style>
