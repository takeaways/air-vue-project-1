<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/navbar";

export default {
  name: "app",
  components: { Navbar },
  data() {}
};
</script>

<style></style>
