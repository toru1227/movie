<template>
  <div class="header flex">
    <div class="left">
      <img
        class="logo"
        src="../assets/movie-logo.png"
        @click="$router.push('/')"
      />
    </div>
    <p>{{this.$store.state.auth}}</p>
    <div class="right">
      <div v-if="this.$store.state.auth">
        <p class="name">ようこそ{{ $store.state.user.name }}さん</p>
        <p class="logout" @click="$store.dispatch('logout')">ログアウトする</p>
      </div>
      <div v-else-if="!active">
        <p @click="$router.push('/signup')">新規登録</p>
        <p @click="$router.push('/login')">ログイン</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "",
    };
 },
};
</script>

<style scoped>
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
  padding: 0 70px;
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
