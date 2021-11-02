<template>
  <header>
    <div class="header-wrapper">
      <div class="logo">
        <router-link to="/"><a>LOGO</a></router-link>
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="/about">About Us</router-link>
          </li>
          <li>
            <router-link to="/pricing">Pricing</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact Us</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <link
    href="//db.onlinewebfonts.com/c/255b4be50d9bc6456a90b84b88c6c31d?family=Niveau+Grotesk+Regular"
    rel="stylesheet"
    type="text/css"
  />
</template>

<script>
export default {
  name: "header",
  props: {},
};
</script>

<style scoped>
.header-wrapper {
  width: 100%;
  margin: 0 auto;
}
header {
  height: 100px;
  background: #598794;
  width: 100%;
  position: fixed;
  z-index: 99;
}
.logo {
  float: left;
  line-height: 100px;
  margin-left: 50px;
}
.logo a {
  text-decoration: none;
  font-size: 30px;
  font-family: "Sofia Pro", sans-serif;
  color: #fff;
  letter-spacing: 5px;
}
nav {
  float: right;
  line-height: 100px;
}
nav ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-right: 30px;
}
nav ul li a {
  text-decoration: none;
  font-family: "Sofia Pro", sans-serif;
  font-weight: 250;
  letter-spacing: 2px;
  font-size: 20px;
  margin: 0 30px;
  color: #fff;
}
nav ul li a:hover {
  color: #ffd008;
  cursor: pointer;
}
</style>
