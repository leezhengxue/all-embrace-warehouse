<template>
  <!-- <link href="http://fonts.cdnfonts.com/css/sofia-pro" rel="stylesheet" />
  <link
    href="//db.onlinewebfonts.com/c/255b4be50d9bc6456a90b84b88c6c31d?family=Niveau+Grotesk+Regular"
    rel="stylesheet"
    type="text/css"
  /> -->
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import url("http://fonts.cdnfonts.com/css/sofia-pro");
@import url("//db.onlinewebfonts.com/c/255b4be50d9bc6456a90b84b88c6c31d?family=Niveau+Grotesk+Regular");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
