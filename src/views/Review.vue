<template>
  <div>
    <div class="main">
      <div v-for="(review, index) in reviews" :key="index">
        <article>
          <p class="point">
            レビュー:<span :class="pointColor(review.item.point)"
              >{{ review.item.point }}点</span
            >
          </p>
          <p class="text">{{ review.item.content }}</p>
          <p class="author">投稿者 {{ review.user_data.name }}</p>
          <p class="day">投稿日: {{ review.item.created_at }}</p>
          <p class="like">参考になった人数:{{ review.like.length }}人</p>
          <button v-if="$store.state.auth" class="fav_button"
            @click="fav(index)"
            :class="{ redcolor: favColor(review.like) }"
          >参考になった </button>

        </article>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      path: true,
      reviews: [],
      like: [],
    };
  },
  watch: {
    function() {
      this.getShares();
      this.favColor();
    },
  },
  methods: {
    favColor(a) {
      let like_length = [];
      for (let i = 0; i < a.length; i++) {
        like_length.push(a[i].user_id);
      }
      console.log(like_length);
      if (like_length.indexOf(String(this.$store.state.user.id)) >= 0) {
        return true;
      } else {
        return false;
      }
    },
    async getShares() {
      let data = [];
      const reviews = await axios.get(
        "https://intense-falls-67346.herokuapp.com/api/review/show?id=" +
          this.id
      );
      data.push(reviews.data.data);
      this.reviews = data[0];
      if (this.reviews.length < 1) {
        this.$router.push("/empty");
      }
    },
    fav(index) {
      const result = this.reviews[index].like.some((value) => {
        return value.user_id == this.$store.state.user.id;
      });
      if (result) {
        this.reviews[index].like.forEach((element) => {
          if (element.user_id == this.$store.state.user.id) {
            axios({
              method: "delete",
              url: "https://intense-falls-67346.herokuapp.com/api/like",
              data: {
                user_id: this.$store.state.user.id,
                review_id: this.reviews[index].item.id,
              },
            }).then((response) => {
              console.log(response);
            this.$router.go({
                path: this.$router.currentRoute.path,
                force: true,
              });
            });
          }
        });
      } else {
        axios
          .post("https://intense-falls-67346.herokuapp.com/api/like", {
            user_id: this.$store.state.user.id,
            review_id: this.reviews[index].item.id,
          })
          .then((response) => {
            console.log(response);
            this.isRed = true;
            this.$router.go({
                path: this.$router.currentRoute.path,
                force: true,
              });
          });
      }
    },
    pointColor(point) {
      if (point < 2.9) {
        return "red";
      } else if (point >= 3 && point <= 3.9) {
        return "yellow";
      } else if (point >= 4) {
        return "blue";
      }
    },
  },
  created() {
    this.getShares();
  },
};
</script>
<style scoped>
article {
  margin: 20px auto 30px;
  width: 50%;
  background-color: #fff;
  padding: 30px 50px;
  border-radius: 10px;
}
.title {
  padding-bottom: 50px;
  font-weight: bold;
  font-size: 25px;
}
.text {
  padding-bottom: 50px;
  font-size: 20px;
  line-height: 1.2;
}
.author {
  padding: 20px 0;
  font-size: 15px;
}
.day {
  font-size: 12px;
  padding-bottom: 10px;
}
.point {
  padding-bottom: 20px;
  font-size: 20px;
}
.like {
  padding-bottom: 10px;
}
button {
  background-color: #fff;
  border: 1px solid;
  border-radius: 10px 10px;
  padding:5px;
}
button:hover {
  cursor: pointer;
  opacity:0.5;
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
.redcolor {
  background-color:#ed0d2ed6;
}
</style>
