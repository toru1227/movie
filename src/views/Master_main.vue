<template>
  <div>
    <div class="main">
     <div class="button-flex">
      <button class="button button-flex-1" @click="$router.push('/movie_post')">映画を追加する</button>
      <button class="button button-flex-2" @click="logout()">ログアウトする</button>
      </div>
      <table>
        <tr>
          <th>ID</th>
          <th>タイトル</th>
          <th>上映開始日</th>
          <th>編集</th>
          <th>削除</th>
        </tr>
        <tr v-for="(value, index) in movies" :key="index">
          <td>{{value.data.picture}}</td>
          <td>{{ value.data.id }}</td>
          <td>{{ value.data.title }}</td>
          <td>{{ value.data.release_date }}</td>
          <td><button class="button1" @click="$router.push
          ({
            path:'/movie_edit/'+value.data.id,
            params:{id:value.data.id}
          })">編集する</button></td>
          <td><button class="button2" @click="del(value.data.id)">削除する</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import router from "../router/index";
export default {
  data() {
    return {
      movies: [],
    };
  },
  watch: {
      function() {
      this.getMovies();
    },
  },
  methods: {
    async getMovies() {
      const movies = await axios.get(
        "https://intense-falls-67346.herokuapp.com/api"
      );
      this.movies = movies.data.data;
    },
    logout() {
      this.$store.dispatch("masterLogout");
      this.$router.push("/");
    },
    del(index) {
      axios({
        method: "delete",
        url: "https://intense-falls-67346.herokuapp.com/api/movie_edit",
        data: {
          id: index,
        },
      }).then(() => {
        router.go({ path: this.$router.currentRoute.path, force: true });
      });
    },
  },
  created() {
    this.getMovies();
    if (!this.$store.state.master_user) {
      this.$router.push("/");
  }
  },

};
</script>
<style scoped>
.main {
  padding: 100px 0px;
  width:100%;
}
table{
  margin:0 auto;
  width:1000px;
}
.button-flex {
width:1000px;
margin:0 auto;
display: flex;
justify-content:space-between;
}

li {
  list-style: none;
}
.flex {
  display: flex;
  padding-bottom: 10px;
}
.flex li {
  height: 40px;
  line-height: 40px;
  padding: 0 10px 10px 0;
  border: 1px solid black;
}
table,
td,
th {
  border: 1px solid #000;
  border-collapse: collapse;
  text-align: center;
}
td,
th {
  padding: 10px 30px 10px 30px;
}
th {
  background: #f0e6cc;
}
.button {
  cursor: pointer;
  display:inline-block;
  padding:10px;
  font-size: 14px;
  margin-right:10px;
  margin-bottom: 10px;
  background-color: #fff;
  border:1px solid black;
  opacity:0.5;
  cursor: pointer;
  border-radius: 2px;
}
.button:hover {
  opacity:1;
}
 .button1,
 .button2{
  cursor: pointer;
  border-radius: 2px;
  padding:5px 10px;
  background-color: #fff;
  border:1px solid;
  opacity:0.5;
}
.button1:hover,
.button2:hover {
  opacity: 1;
}
.button2 {
  color:red;
}
</style>
