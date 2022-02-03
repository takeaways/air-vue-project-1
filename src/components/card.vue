<template lang="">
  <div>card {{ cid }}</div>
</template>
<script>
export default {
  data() {
    return {
      cid: 0
    };
  },
  created() {
    this.cid = this.$route.params.cid;
  },
  watch: {
    $route() {
      console.log(this.$route.params.cid);
      this.cid = this.$route.params.cid;
    }
  }
};
</script>
<style lang=""></style>
