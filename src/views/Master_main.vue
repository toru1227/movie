<template>
  <div>
    <div class="main">
      <p>{{ this.$store.state.master_user }}</p>
      <button @click="$router.push('/movie_post')">映画を追加する</button>
      <button @click="logout()">ログアウトする</button>
      <table>
        <tr>
          <th>ID</th>
          <th>タイトル</th>
          <th>上映開始日</th>
          <th>編集する</th>
          <th>削除する</th>
        </tr>
        <tr v-for="(value, index) in movies" :key="index">
          <td>{{ value.data.id }}</td>
          <td>{{ value.data.title }}</td>
          <td>{{ value.data.release_date }}</td>
          <td><button>編集</button></td>
          <td><button @click="del(value.data.id)">削除</button></td>
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

  methods: {
      async getMovies() {
      const movies = await axios.get(
        "https://intense-falls-67346.herokuapp.com/api"
      );
      console.log(movies.data.data);
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
    this.getMovies()
    if (!this.$store.state.master_user == true) {
      this.$router.push("/");
    }
  },
};
</script>
<style scoped>
.main {
  padding: 100px 0;
  width: 800px;
  margin: 0 auto;
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
</style>
