<template>
  <div class="footer">
    <p class="copy">© sample. 2021.</p>
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
.footer {
  text-align: center;
  border-top: 5px solid;
  height: 50px;
}
.copy {
  padding: 30px 0;
  font-size: 20px;
}
</style>
