<template lang="">
  <div>
    Home
    <div>
      Board List:
      <div v-if="loading">loading data.....</div>
      <div v-else>
        <div v-for="b in boards" :key="b.id">{{ b }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: false,
      boards: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;

      axios
        .get("http://localhost:3000/boards") //
        .then(res => {
          this.boards = res.data;
        })
        .catch(() => {
          this.$router.replace("/login");
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>
<style></style>
