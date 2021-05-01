<template>
  <div class="footer">
    <p class="copy">© sample. 2021.</p>
    <div v-if="$store.state.master_user">
    <p class="login" @click="$router.push('/master_main')">管理者ログイン</p>
    </div>
    <div v-else>
    <p class="login" @click="$router.push('/master_login')">管理者ログイン</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.footer {
  border-top: 5px solid;
  height: 70px;
  text-align: center;
}
.copy{
  padding:30px 0;
  font-size: 20px;
}
.login {
  padding-bottom: 10px;
  padding-right:20px;
  text-align: right;
  opacity: 1;
  cursor: pointer;
}
.login:hover {
  opacity: 0.5;
}
.name:hover {
  opacity: 1;
  cursor: default;
}
</style>
