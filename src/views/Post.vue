<template>
  <div>
    <HeaderAuth/>
    <div class="form">
      <p>:タイトル</p>
    <input type="text" placeholder="タイトル" name="title">
     <p>:レビュー</p>
    <textarea name="review" id="" cols="30" rows="10"></textarea>
    <p>:点数</p>
    <select name="point" id="">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    </select>
    <div @click="send()">
    <button>投稿する</button>
    </div>
    </div>
  </div>
</template>
<script>
import HeaderAuth from "../components/HeaderAuth";
export default {
  data(){
    return {

    }
  },
  components:{
    HeaderAuth,
  }
}
</script>
<style scoped>
.form {
  padding:50px;
  width:50%;
  margin:0 auto;
}
input {
  width:100%;
  margin-bottom:20px;
}
textarea{
  width:100%;
    margin-bottom:20px;
}
p{
  padding-bottom:10px;
}
select{
  margin-bottom: 20px;
}
</style>
