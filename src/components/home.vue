<template lang="">
  <div>
    Home
    <div>
      Board List:
      <ul>
        <li><router-link to="/b/1">1</router-link></li>
        <li><router-link to="/b/2">2</router-link></li>
        <li><router-link to="/b/3">3</router-link></li>
        <li><router-link to="/b/4">4</router-link></li>
      </ul>
    </div>
    <div v-if="loading">loading data.....</div>
    <div v-else>
      <pre>{{ apiRes }}</pre>
    </div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: false,
      apiRes: "",
      error: ""
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;

      axios
        .get("http://localhost:3000/health") //
        .then(res => {
          this.apiRes = res.data;
        })
        .catch(error => {
          this.error = error.response.data;
          console.error(error);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>
<style></style>
