<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    if (document.getElementById("Loading"))
      document.getElementById("Loading").remove();
  },
  name: "App",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>
