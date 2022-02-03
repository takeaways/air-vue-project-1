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
import { board } from "../lib/api";

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

      board
        .getAll()
        .then(res => {
          this.boards = res;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>
<style></style>
