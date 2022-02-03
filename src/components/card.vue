<template lang="">
  <div>
    Card
    <div v-if="loading">loading card....</div>
    <div v-else>cid: {{ cid }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cid: 0,
      loading: false
    };
  },
  watch: {
    $route: {
      handler: "fetchCard",
      immediate: true
    }
  },
  methods: {
    fetchCard() {
      this.cid = this.$route.params.cid;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }
};
</script>
<style lang=""></style>
