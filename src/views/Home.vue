<template>
  <div class="home">
<HeaderAuth/>
<h1>現在上映中の映画</h1>
<p>{{this.$store.state.user.id}}</p>
 <ul v-for="(value,index) in shares" :key="index">
    <li class ="post" @click="
    $router.push({
      path:'/post/'+1,
      params:{id:1}
    })
    ">レビューを投稿する</li>
     <li class="title">{{value.title}}</li>
     <li class="point">:平均点()</li>
   </ul>
  </div>
</template>
<script>
import axios from 'axios';
import HeaderAuth from "../components/HeaderAuth";
export default{
  data(){
    return{
      shares:[
        {title:"映画のタイトル",
        point:4
        }
      ]
    };
  },
  components:{
    HeaderAuth
  },
  methods:{
    async getShares(){
      const sharesdata= await axios.get(
        "https://young-castle-26834.herokuapp.com/api/"
      );
    this.shares=sharesdata;
    console.log(sharesdata);
    }
  },
  created(){
    this.getShares();
  }
};
</script>
<style scoped>

.title {
  font-size:20px;
  padding-bottom: 20px;
color:#414b5b;
}
.home ul{
  padding:50px 30px 50px 30px;
  width:70%;
  margin:0 auto;
  list-style-type: none;
  background-color: #fff;
  margin-bottom: 30px;
  border-radius: 10px;

}
.post{
padding-bottom:10px;
font-size:20px;
}
h1{
  text-align: center;
  padding:50px 0;
  font-size:30px;
color:#414b5b;

}
</style>
