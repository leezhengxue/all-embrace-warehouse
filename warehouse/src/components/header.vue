<template>
  <header>
    <div class="header-wrapper">
      <div class="logo">
        <router-link to="/">
          <img class="logo" src="../assets/AE_logo_name_white.png"
        /></router-link>
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="/fulfillment">Fulfillment & Warehouse</router-link>
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
  margin-left: 50px;
}
.logo img {
  height: 100px;
  width: auto;
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
