<template>
  <div id='text'>Home组件</div>
</template>

<script>
export default {
  created() {
    // eslint-disable-next-line
    console.log(this.$router)
  }
}
</script>

<style>
#text {
  font-size: 40px;
  font-weight: bold;
}
</style>