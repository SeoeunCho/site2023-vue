<template>
  <button class="top-btn" @click="$store.commit('scrollTop')">TOP</button>
</template>

<script>
export default {};
</script>

<style scoped>
.top-btn {
  position: fixed;
  right: 40px;
  bottom: 60px;
  width: 60px;
  height: 60px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: var(--black);
  color: var(--white);
  padding-top: 15px;
  background-image: url(../../assets/img/icon/btn_top.png);
  background-repeat: no-repeat;
  background-size: 16px auto;
  background-position: top 15px center;
  border-radius: 50%;
  border: 1px solid rgb(255 255 255 / 30%);
  font-size: 13px;
  z-index: 1000;
  cursor: pointer;
}
</style>
